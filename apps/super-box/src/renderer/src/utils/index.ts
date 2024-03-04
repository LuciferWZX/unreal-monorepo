import { isFunction } from '@wzx-unreal/react-hooks'

export const Utils = {
  formatText: (
    text: string,
    symbol: string,
    replaced: string | ((idx: number, value: string) => void)
  ) => {
    return text
      .split(symbol)
      .map((value, index) => {
        if (index === 0) {
          return value
        } else {
          if (isFunction(replaced)) {
            return replaced(index, value)
          }
          return `${replaced}${value}`
        }
      })
      .join('')
  },
  getFileExtension: (fileName: string) => {
    return fileName.split('.').pop()
  }
}
