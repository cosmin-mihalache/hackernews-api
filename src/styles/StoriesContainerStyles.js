import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
}
*, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
}

body {
    margin: 0;
    padding: 0;
    line-height: 1;
    color: #202020;
    background-color: #fafafe;
    font-family Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
}

h1 {
    font-size: 2.2rem;
}

ul {
    margin: 0;
    padding: 0;
}
`;

export const StoriesContainerWrapper = styled.main`
  max-width: 1140px;
  padding: 20px 15px;
  margin: auto;
`;
