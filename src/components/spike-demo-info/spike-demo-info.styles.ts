import styled from 'styled-components'




export const SpikeDemoInfoWrapper = styled.div`
        z-index: 10;
        position: fixed;
        left: 0;
        bottom: 5%;
        background-color: rgb(22, 22, 22);
        padding: 10px;
        padding-right: 40px;
        display: flex;
        align-items: center;
        font-weight: bold;
        color: whitesmoke;
        border-radius: 0 50px 50px 0;
        box-shadow: 3px 3px 15px #0f0f0fab;
        transform: scale(0.8);
        transform-origin: left;

        @media only screen and (max-width: 500px) {

            transform: scale(0.6);
            transform-origin: left;
            bottom: 0;

        }


        h4 {
            font-size: 1.2rem;
            margin: 0;
            letter-spacing: 2px;
        }

        a {
            text-decoration: none;
            color: rgb(105, 105, 105);
            font-weight: bold;
            text-transform: uppercase;
            font-size: 0.8rem;
            margin-right: 10px;

            &:hover {
                color: whitesmoke;
                transition: all 0.3s ease-out;
            }

        }

        img {
            width: 70px;
            transform: scale(1);
            margin-right: 20px;

            &:hover {
                transform: scale(1.1);
                transition: all 0.2s ease-in;
            }

        }



`