import { useCallback } from 'react';
import { BaseRange, NodeEntry, Text } from 'slate';
import useEditorStore from '@/stores/useEditorStore';
import { useShallow } from 'zustand/react/shallow';

const useDecorate = () => {
  const keywords = useEditorStore(useShallow((state) => state.keywords));
  const decorate = useCallback(
    (entry: NodeEntry): BaseRange[] => {
      const search = keywords?.[0] || '';
      const [node, path] = entry;
      const ranges: Array<BaseRange & { highlight: boolean }> = [];
      if (search && Text.isText(node)) {
        const { text } = node;
        const parts = text.split(search);
        console.log('parts:', parts);
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
        console.log(111, ranges);
        return ranges;
      }
      return [];
    },
    [keywords]
  );
  return {
    decorate,
  };
};
export default useDecorate;
