import styled from '@emotion/styled';

export const FeedbackOptionsBtn = styled.button`
    padding: ${props => props.theme.spacing(1)};  
    min-width: 80px;
    font-family: inherit;
    font-weight: 700;
    font-size: 16px;
    line-height: calc(30/16);
    letter-spacing: 0.06em;

    border-radius: 4px;
    border: none;
    outline: none;

    cursor: pointer;

    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.lightGrey};
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: ${props => props.theme.colors.secondaryText};

    }
 
`;