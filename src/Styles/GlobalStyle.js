import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-color: transparent transparent !important;
        scrollbar-width: none;
        transition: scrollbar-color .3s;
        transition: all 0.3s;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }

    *:not(:hover) {
        scrollbar-color: transparent transparent !important;
    }

    body {
        font-family: 'Lato', sans-serif;
        margin: 0;
        height: 100vh;
        background-color:#fafaf8;
    }

    h1, h2, h3 {
        font-family: 'Montserrat', sans-serif;
    }
    a {
        text-decoration: none
    }
`;
