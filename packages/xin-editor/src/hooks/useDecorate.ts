import { useCallback } from 'react';
import { BaseRange, NodeEntry, Text } from 'slate';
import useEditorStore from '@/stores/useEditorStore';
import { useShallow } from 'zustand/react/shallow';
const useDecorate = () => {
  const keyword = useEditorStore(useShallow((state) => state.keyword));
  const decorate = useCallback(
    (entry: NodeEntry): BaseRange[] => {
      const search = keyword;
      const [node, path] = entry;
      const ranges: Array<BaseRange & { highlight: boolean }> = [];
      if (search && Text.isText(node)) {
        console.time('[关键字查询]');
        const { text } = node;
        const parts = text.split(search);
        let offset = 0;
        parts.forEach((part, i) => {
          if (i !== 0) {
            ranges.push({
              anchor: { path, offset: offset - search.length },
              focus: {
                path,
                offset,
              },
              highlight: true,
            });
          }
          offset = offset + part.length + search.length;
        });
        console.timeEnd('[关键字查询]');
      }
      return ranges;
    },
    [keyword]
  );
  return {
    decorate,
  };
};
export default useDecorate;
