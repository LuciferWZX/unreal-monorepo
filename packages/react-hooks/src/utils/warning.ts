export default function warning(condition: boolean, message: string) {
  if (process.env.NODE_ENV !== 'production' && console) {
    if (typeof console !== 'undefined') {
      console.error(`[@space/utils]: ${message}`);
    }
  }
}
