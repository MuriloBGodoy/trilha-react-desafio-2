import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: #FAFAFA;
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    height: 62px;
    width: 80%;
    max-width: 600px;
    margin: 10px 0 20px 0;
    font-size: 18px;
    font-weight: 600;
    color: #22272e;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover:not(:disabled) {
        background-color: #FAFAFA90;
        transform: translateY(-1px);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
