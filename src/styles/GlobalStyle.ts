import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* Google fonts imports */

// Noto Serif
@import url('https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap');

// Manrope
@import url('https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Manrope:wght@200..800&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap');

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
