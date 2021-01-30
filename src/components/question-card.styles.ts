import styled from 'styled-components'


export const QuestionWrapper = styled.div`

    width: 80%;
    max-width: 90%;
    background: #ebfeff;
    border-radius: 10px;
    border: 2px solid #0085a3;
    padding: 20px;
    box-shadow: 0px 5px 10px rgb(0 0 0 / 25%);
    text-align: center;

    p {
        font-size: 1rem;
    }

`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}


export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.9rem;
        letter-spacing: 2px;
        width:100%;
        min-height: 60px;
        margin: 5px 0;
        background: ${ ({ correct, userClicked }) =>
            correct
                ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
                : !correct && userClicked
                ? 'linear-gradient(90deg, #ff5656, #c16868)'
                : 'linear-gradient(90deg, #56ccff, #6eafb4)' };
        border: 3px solid white;
        box-shadow: 1px 2px 0px rgb(0 0 0 / 10%);
        border-radius: 10px;
        color: white;
        text-shadow: 0px 1px 0px rgb(0 0 0 / 25%);
    }

`