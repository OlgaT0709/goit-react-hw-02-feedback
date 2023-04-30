import PropTypes from 'prop-types';
import {FeedbackOptionsBtn } from './FeedbackOptions.styled';

// 3) Винеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>.

export const FeedbackOptions = ({options, onClickFeedback }) => {
    return ( 
        <>
            { options.map(option => (
                <FeedbackOptionsBtn 
                        key={option}
                        type="button"
                        name={option}                    
                        onClick={() => onClickFeedback(option)}>
                {option}
                </FeedbackOptionsBtn>
            ))
            }
        </>
        );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onClickFeedback: PropTypes.func,
};