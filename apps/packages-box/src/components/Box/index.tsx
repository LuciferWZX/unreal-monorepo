import styled, { css } from 'styled-components';

export const Box = styled.div<{$full?:boolean,$fill?:boolean}>`
  box-sizing: border-box;
  overflow: auto;
  ${({$full,$fill})=>{
    if ($full){
      return css`
        width: 100vw;
        height: 100vh;
        
      `;
    }
    if ($fill){
      return css`
        width: 100%;
        height: 100%;
      `;
    }
  }};
`