import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --primary: #33CC95;
        --primary-dark: #17543e;
        --primary-clean: #49f2b5;
        --red: #E52e54;
        --blue: #5429CC;
        --error: #FF8A00;
        --black: #000000;

        --dark-grey: #333333;


        --font-first: Helvetica, Arial, sans-serif;
        --font-second: 'Spectral', Georgia;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93,75%;
        }

        @media (max-width: 720px){
            font-size: 87,5%;
        }
    }

    body {
        font-family: var(--font-first);
        -webkit-font-smooth: antialiased;
    }

    h1, h2, h3, h4, p {
        margin: 0;
    }
    
    ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    img {
        display: block;
        max-width: 100%;
    }

    button, input {
        display: block;
        font-size: 1rem;
    }

    button {
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: currentColor;
    }

    .container {
        max-width: 50rem;
        padding: 0 1rem;
        margin: 0 auto;
    }
`;