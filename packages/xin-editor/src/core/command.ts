import { Editor, Transforms, Node, Element as SlateElement, NodeEntry } from 'slate';
import { match as tsMatch, P } from 'ts-pattern';
import { CustomElementType, TextAlign, TextHeading } from '@/types';
import {
  CheckListElement,
  CustomElement,
  OrderedListElement,
  ParagraphElement,
} from '../../custom-slate';
import { getDefaultContent, isCollapsed, updateNextOrderedIndex, wrapLink } from '@/core/helper';
import { getSelectedNodesByType } from '@/core/node-helper';

const EditorCommand = {
  selectAllInModule(editor: Editor) {
    const { selection } = editor;
    if (!selection) {
      throw Error('selection is undefined');
    }
    const [startPoint, endPoint] = Editor.edges(editor, selection);
    if (startPoint.path[0] === endPoint.path[0]) {
      const [match] = Editor.nodes(editor, {
        match: (n) => SlateElement.isElement(n),
      });
      Transforms.select(editor, {
        anchor: Editor.start(editor, match[1]),
        focus: Editor.end(editor, match[1]),
      });
      return true;
    }
  },
  isLinkMarkActive(editor: Editor) {
    const [link] = Editor.nodes(editor, {
      match: (n) => SlateElement.isElement(n) && n.type === CustomElementType.Link,
    });
    return !!link;
  },
  //加粗
  isBoldMarkActive(editor: Editor) {
    const marks = Editor.marks(editor);
    return tsMatch(marks)
      .with({ bold: true }, () => {
        return true;
      })
      .otherwise(() => {
        return false;
      });
  },
  toggleBoldMark(editor: Editor) {
    const isActive = EditorCommand.isBoldMarkActive(editor);
    tsMatch(isActive)
      .with(true, () => {
        Editor.removeMark(editor, 'bold');
      })
      .otherwise(() => {
        Editor.addMark(editor, 'bold', true);
      });
  },
  //斜体
  isItalicMarkActive(editor: Editor) {
    const marks = Editor.marks(editor);
    return tsMatch(marks)
      .with({ italic: true }, () => {
        return true;
      })
      .otherwise(() => {
        return false;
      });
  },
  toggleItalicMark(editor: Editor) {
    const isActive = EditorCommand.isItalicMarkActive(editor);
    tsMatch(isActive)
      .with(true, () => {
        Editor.removeMark(editor, 'italic');
      })
      .otherwise(() => {
        Editor.addMark(editor, 'italic', true);
      });
  },
  //下划线
  isUnderlineMarkActive(editor: Editor) {
    const marks = Editor.marks(editor);
    return tsMatch(marks)
      .with({ underline: true }, () => {
        return true;
      })
      .otherwise(() => {
        return false;
      });
  },
  toggleUnderlineMark(editor: Editor) {
    const isActive = EditorCommand.isUnderlineMarkActive(editor);
    tsMatch(isActive)
      .with(true, () => {
        Editor.removeMark(editor, 'underline');
      })
      .otherwise(() => {
        Editor.addMark(editor, 'underline', true);
      });
  },
  //文本位置
  isTextAlignMarkActive(editor: Editor) {
    const { selection } = editor;
    if (!selection) {
      return false;
    }
    const [nodeEntry] = Editor.nodes<CustomElement>(editor, {
      at: selection,
      match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n as CustomElement),
    });

    return tsMatch(nodeEntry[0])
      .with({ textAlign: P.not(undefined) }, (node) => {
        return node.textAlign;
      })
      .otherwise(() => {
        return false;
      });
  },
  toggleTextAlignMark(editor: Editor, align?: TextAlign) {
    tsMatch(align)
      .with(undefined, () => {
        const isActive = EditorCommand.isTextAlignMarkActive(editor);
        if (isActive) {
          Transforms.setNodes(
            editor,
            { textAlign: undefined },
            {
              match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n as CustomElement),
            }
          );
        }
      })
      .otherwise((_align) => {
        Transforms.setNodes(
          editor,
          { textAlign: _align },
          { match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n as CustomElement) }
        );
      });
  },
  //文本的heading
  isTextHeadingMarkActive(editor: Editor) {
    const { selection } = editor;
    if (!selection) {
      return false;
    }
    const [nodeEntry] = Editor.nodes<CustomElement>(editor, {
      at: selection,
      match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n as ParagraphElement),
    });
    return tsMatch(nodeEntry[0])
      .with({ heading: P.not(undefined) }, (node) => {
        return node.heading;
      })
      .otherwise(() => {
        return false;
      });
  },
  toggleTextHeadingMark(editor: Editor, heading?: TextHeading) {
    tsMatch(heading)
      .with(undefined, () => {
        const isActive = EditorCommand.isTextHeadingMarkActive(editor);
        if (isActive) {
          Transforms.setNodes(
            editor,
            { heading: undefined },
            {
              match: (n) =>
                SlateElement.isElement(n) && Editor.isBlock(editor, n as ParagraphElement),
            }
          );
        }
      })
      .otherwise((_align) => {
        Transforms.setNodes(
          editor,
          { heading: heading },
          {
            match: (n) =>
              SlateElement.isElement(n) && Editor.isBlock(editor, n as ParagraphElement),
          }
        );
      });
  },
  //任务
  isCheckListNode(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => (n as CheckListElement).type === CustomElementType.CheckList,
    });
    return !!match;
  },
  toggleCheckListNode(editor: Editor) {
    const isCheckList = EditorCommand.isCheckListNode(editor);
    let insertBefore = false;
    let insertAfter = false;

    tsMatch(isCheckList)
      .with(true, () => {
        Transforms.setNodes(
          editor,
          { type: CustomElementType.Paragraph },
          { match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n as CustomElement) }
        );
      })
      .with(false, () => {
        const { selection } = editor;
        if (!selection) {
          throw Error('selection is undefined');
        }
        //获取位置的起点
        const beforePoint = Editor.start(editor, selection);
        //当前光标所在节点
        const [, startPath] = Editor.node(editor, beforePoint);
        //位置的终点
        const endPoint = Editor.end(editor, selection);
        //当前光标所在节点
        const [, endPath] = Editor.node(editor, endPoint);
        //@todo 检查上层是否存在其他行，不存在就加个Paragraph节点
        const previousNode = Editor.previous(editor, {
          at: startPath,
          match: (n) => SlateElement.isElement(n),
        });
        if (!previousNode || (previousNode && previousNode[1][0] === 0)) {
          if (startPath[0] === 0) {
            insertBefore = true;
          }
        }
        //@todo 检查下层是否存在其他行，不存在就加个Paragraph节点
        const nextNode = Editor.next(editor, {
          at: endPath,
          match: (n) => SlateElement.isElement(n),
        });
        if (!nextNode) {
          insertAfter = true;
        }
        // const [match] = Editor.nodes(editor, {
        //   match: (n) => (n as ParagraphElement).type === CustomElementType.Paragraph,
        // });
        // if (match){
        //   const path = match[1]
        //   const currentIndex = path[0]
        //   //如果是 [0]代表前面肯定没有节点如果是[>=1]的话说明前面有节点的
        //   if (currentIndex === 0){
        //     insertBefore = true
        //   }
        //   //查看下一个位置
        //   // const nextPath = [currentIndex+1]
        //
        //
        //   console.log(111,dd);
        // }

        if (!insertAfter && !insertBefore) {
          Transforms.setNodes(
            editor,
            { type: CustomElementType.CheckList },
            {
              match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n as CustomElement),
            }
          );
        } else {
          Transforms.setNodes(
            editor,
            { type: CustomElementType.CheckList },
            {
              match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n as CustomElement),
            }
          );
          if (insertBefore) {
            Transforms.insertNodes(editor, getDefaultContent(), {
              at: [startPath[0]],
            });
          }
          if (insertAfter) {
            let offset = 1;
            if (insertBefore) {
              offset = 2;
            }
            Transforms.insertNodes(editor, getDefaultContent(), {
              at: [endPath[0] + offset],
            });
          }
        }
      });
  },
  //有序列表
  isOrderedListNode(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => (n as OrderedListElement).type === CustomElementType.OrderedList,
    });
    return !!match;
  },
  toggleOrderedListNode(editor: Editor) {
    const isOrderListNode = EditorCommand.isOrderedListNode(editor);
    tsMatch(isOrderListNode)
      .with(true, () => {
        Transforms.setNodes(
          editor,
          { type: CustomElementType.Paragraph },
          { match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n as CustomElement) }
        );
      })
      .with(false, () => {
        const { selection } = editor;
        if (!selection) {
          throw Error('selection is undefined');
        }
        let needInsertBefore = false;
        let needInsertAfter = false;
        //当前节点
        const nodeEntries = Editor.nodes(editor, {
          at: selection,
          match: (n) => SlateElement.isElement(n),
        });
        const selectedNodes: Array<NodeEntry<Node>> = [];
        for (const nodeEntry of nodeEntries) {
          // 在这里处理每个节点
          selectedNodes.push(nodeEntry);
        }
        const firstNodeEntry = selectedNodes[0];
        const lastNodeEntry = selectedNodes[selectedNodes.length - 1];
        //上个节点
        const preNodeEntry = Editor.previous<CustomElement>(editor, {
          at: firstNodeEntry[1],
          match: (n) => SlateElement.isElement(n),
        });
        //下个节点
        const nextNodeEntry = Editor.next<CustomElement>(editor, {
          at: lastNodeEntry[1],
          match: (n) => SlateElement.isElement(n),
        });
        let defaultIndex = 1;
        if (!preNodeEntry) {
          needInsertBefore = true;
        } else {
          if (preNodeEntry[0].type === CustomElementType.OrderedList) {
            defaultIndex = preNodeEntry[0].index + 1;
          }
        }
        if (!nextNodeEntry) {
          needInsertAfter = true;
        }
        for (let i = 0; i < selectedNodes.length; i++) {
          const node = selectedNodes[i];
          Transforms.setNodes(
            editor,
            { type: CustomElementType.OrderedList, index: defaultIndex + i },
            {
              at: node[1],
              match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n as CustomElement),
            }
          );
        }
        defaultIndex = defaultIndex + selectedNodes.length - 1;
        if (needInsertBefore) {
          Transforms.insertNodes(editor, getDefaultContent(), {
            at: firstNodeEntry[1],
          });
        }
        if (needInsertAfter) {
          Transforms.insertNodes(editor, getDefaultContent(), {
            at: [lastNodeEntry[1][0] + (needInsertBefore ? 2 : 1)],
          });
        } else {
          updateNextOrderedIndex(editor, defaultIndex, lastNodeEntry[1]);
        }
      });
  },

  //缩进
  indent(editor: Editor) {
    Transforms.insertText(editor, ' '.repeat(8));
  },

  restoreNormal(editor: Editor) {
    const marks = ['bold', 'italic', 'underline'];
    for (let i = 0; i < marks.length; i++) {
      Editor.removeMark(editor, marks[i]);
    }
  },

  isParagraphNode(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => (n as ParagraphElement).type === CustomElementType.Paragraph,
    });
    return !!match;
  },
  isOrderedNode(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => (n as OrderedListElement).type === CustomElementType.OrderedList,
    });
    return !!match;
  },
  toggleOrderedNode(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => (n as OrderedListElement).type === CustomElementType.OrderedList,
    });
    return !!match;
  },
  toggleLinkNode(editor: Editor, linkProps?: { link: string; title?: string }) {
    const { selection } = editor;
    if (!selection) {
      throw Error('selection is undefined');
    }
    if (!linkProps) {
      //如果没有的话就是取消选中
      Transforms.unwrapNodes(editor, {
        at: selection,
        match: (n) => SlateElement.isElement(n) && n.type === CustomElementType.Link,
      });
      return;
    }
    wrapLink(editor, linkProps.link, linkProps.title, selection);
    // if (isCollapsed(editor)) {
    //   //当前是一个点直接插入
    //   Transforms.insertNodes(editor, {
    //     type: CustomElementType.Link,
    //     href: 'xxxx',
    //     children: [{ text: 'aaa' }],
    //   });
    // }
  },
};

export default EditorCommand;
