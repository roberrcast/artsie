import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
box-sizing: border-box;
margin: 0;
padding: 0;
 }

html, body {
overflox-x: hidden;
height: 100%;
width: 100%;
}

html {
scrollbar-gutter: stable;
}

body {
font-family: ${(props) => props.theme.fonts.body};
background-color: ${(props) => props.theme.colors.background};
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;

}

h1, h2, h3, h4, h5, h6 {
font-family: ${(props) => props.theme.fonts.display};
color: ${(props) => props.theme.colors.primary};
font-weight: 400;
}

img {
max-width: 100%;
display: block;
}

a {
text-decoration: none;
color: ${(props) => props.theme.colors.primary};
}

button {
background: transparent;
border: none;
}

ul {
list-style: none;
}

::-webkit-scrollbar {
width: 6px;
}

::-webkit-scrollbar-track {
background: transparent;
}

::-webkit-scrollbar-thumb {
background: ${(props) => props.theme.colors.textMuted};
border-radius: 10px;
}
`;
