import { BaseRange, NodeEntry, Text } from 'slate';

const $_self = self;
$_self.onmessage = function (evt: MessageEvent<string>): void {
  console.log(evt);
  $_self.postMessage('pong');
};
$_self.onerror = function (...args) {
  console.error('worker出错:', { ...args });
};
// function matchRanges(entry: NodeEntry, keyword: string): BaseRange[] {
//   const search = keyword;
//   const [node, path] = entry;
//   const ranges: Array<BaseRange & { highlight: boolean }> = [];
//   if (search && Text.isText(node)) {
//     console.time('[关键字查询]');
//     const { text } = node;
//     const parts = text.split(search);
//     let offset = 0;
//     parts.forEach((part, i) => {
//       if (i !== 0) {
//         ranges.push({
//           anchor: { path, offset: offset - search.length },
//           focus: {
//             path,
//             offset,
//           },
//           highlight: true,
//         });
//       }
//       offset = offset + part.length + search.length;
//     });
//     console.timeEnd('[关键字查询]');
//   }
//   return ranges;
// }
