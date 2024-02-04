export default async function clipboard(text: string) {
  //考虑复制的兼容性，如果支持则用clipboard
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      // 仅在执行成功时返回
      return;
    } catch (err) {
      console.error(err ?? new DOMException('The request is not allowed', 'NotAllowedError'));
    }
  }
  //不支持则先创建span,然后复制span的内容，再删除
  const span = document.createElement('span');
  span.textContent = text;
  span.style.whiteSpace = 'pre';
  document.appendChild(span);
  const selection = window.getSelection();
  const range = window.document.createRange();
  if (selection) {
    selection.removeAllRanges();
    range.selectNode(span);
    selection.addRange(range);
    let success = false;
    try {
      success = window.document.execCommand('copy');
    } catch (err) {
      console.error('[execCommand:err]', err);
    }
    selection.removeAllRanges();
    window.document.body.removeChild(span);
    return success
      ? Promise.resolve()
      : Promise.reject(new DOMException('The request is not allowed', 'NotAllowedError'));
  } else {
    return Promise.reject(new DOMException('The request is not allowed', 'NotAllowedError'));
  }
}
