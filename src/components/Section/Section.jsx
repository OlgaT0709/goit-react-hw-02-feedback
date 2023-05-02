import PropTypes from 'prop-types';
import getRandomHexColor from '../../utils/getrandomhexcolor'
import { FeedbackSection, Title } from './Section.styled';

// 4) Створи компонент < Section title = "" >, який рендерить секцію із заголовком і дітей(children). 
// Обгорни кожен із < Statistics > і < FeedbackOptions > у створений компонент секції.

export const Section = ({ title, children }) => {
    return ( 
        <>
            <Title> {title}</Title>
            <FeedbackSection style={{backgroundColor: getRandomHexColor() }}>
                {children}
            </FeedbackSection>
        </>
        );
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};