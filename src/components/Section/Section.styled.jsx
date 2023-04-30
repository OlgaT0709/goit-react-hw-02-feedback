import styled from '@emotion/styled';

export const FeedbackSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${props => props.theme.spacing(2)};   

    width: 280px;
    border: ${props => `1px solid ${props.theme.colors.black}`};
    padding: ${props => props.theme.spacing(1)};
    border-radius: 4px;
  
`;

export const Title = styled.h2`
    margin-top: ${props => props.theme.spacing(2)};
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${props => props.theme.colors.primaryText};
    
    
  
`;