import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    /* max-width:; */
    outline: 0;
    box-sizing: border-box;
}
#root {
    margin: 0 auto;
}
`;

export const Container = styled.div`
  background-color: #0a0707;
  color: #ff4c6a;
  min-width: 450px;
  min-height: 650px;
  padding: 50px 30px;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
