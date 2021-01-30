import styled, { createGlobalStyle } from 'styled-components'
import BgImage from './assets/react-quiz-bg.jpg'


export const GlobalStyles = createGlobalStyle`
    html {
        width: 100vw;
        height: 100%;
        padding: 0;
    }

    body {
        width: 100%;
        min-height: 100vh;
        background-size: cover;
        margin: 0;
        padding: 0;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        background: rgb(45, 36, 63);
    }

    * {
        box-sizing: border-box;
        font-family: Catamaran, sans-serif;
    }


    .copyrights {
        color: grey;
        font-size: 0.8rem;
         a {
             text-decoration: none;
             color: grey;

             &:hover {
                 color: whitesmoke;
             }
         }
    }

`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 60vw;
    border-radius: 20px;
    max-width: 80vw;
    padding: 30px;
    background-color: red;
    background-image: url(${BgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.75);

    @media screen and (max-width: 680px) {
        max-width: 100vw;
        padding: 10px;
    }

    > p {
        color: whitesmoke;
    }

    .score {
        color: white;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: 'Luckiest Guy', sans-serif;
        background: linear-gradient(180deg, whitesmoke, #87f1ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        font-weight: 400;
        text-align: center;
        margin: 20px;

        @media screen and (max-width: 680px) {
            font-size: 50px;
        }
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, rgb(253 104 113), rgb(247 27 202));
        border: 2px solid rgb(247 27 202);
        color: white;
        text-transform: uppercase;
        border-radius: 20px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        outline: none;

        &:hover, &:disabled {
            filter: brightness(80%);
        }
    }

    .start {
        max-width: 200px;
    }

`