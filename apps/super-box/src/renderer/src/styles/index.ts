import styled, { css } from 'styled-components'

export const Box = styled.div<{
  $flex?: boolean
  $isFull?: boolean
  $flexDirection?: 'column' | 'row'
}>`
  box-sizing: border-box;
  display: ${(props) => (props.$flex ? 'flex' : 'block')};
  ${(props) => {
    if (props.$isFull) {
      return css`
        width: 100%;
        height: 100%;
      `
    }
    return
  }}
  ${(props) => {
    if (props.$flexDirection) {
      return css`
        flex-direction: ${props.$flexDirection};
      `
    }
    return
  }}
`
