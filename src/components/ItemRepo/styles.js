import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    max-width: 600px;
    margin-top: 10px;

    h3 {
        font-size: 26px;
        color: #FAFAFA;
        word-break: break-word;
    }

    p {
        font-size: 14px;
        color: #FAFAFA80;
        margin-top: 4px;
        margin-bottom: 8px;
    }

    .description {
        display: block;
        font-size: 14px;
        color: #c9d1d9;
        margin-bottom: 12px;
        line-height: 1.4;
    }

    .actions {
        display: flex;
        gap: 16px;
        align-items: center;
        margin-top: 10px;
    }

    a.ver {
        color: #58a6ff;
        text-decoration: none;
        font-weight: 500;

        &:hover {
            text-decoration: underline;
        }
    }

    a.remover {
        color: #f85149;
        text-decoration: none;
        font-weight: 500;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    hr {
        border: 0;
        border-top: 1px solid #30363d;
        margin: 20px 0;
    }
`;
