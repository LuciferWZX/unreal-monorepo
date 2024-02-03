import styled, { css } from 'styled-components'

export const Box = styled.div<{ $flex?: boolean; $isFull?: boolean }>`
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
`
