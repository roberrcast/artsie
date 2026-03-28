import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
box-sizing: border-box;
margin: 0;
padding: 0;
 }

html, body {
height: 100%;
width: 100%;
}

body {
font-family: ${(props) => props.theme.fonts.body};
}
`;
