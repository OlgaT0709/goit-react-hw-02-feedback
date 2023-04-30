import PropTypes from 'prop-types';
import { NotificationMessage } from './Notification.styled';

// 5) Повідомлення про відсутність статистики винеси в компонент <Notification message="There is no feedback">.

export const Notification = ({ message }) => {
    return ( 
        <NotificationMessage>{message }</NotificationMessage>
        );
};

Notification.propTypes = {
    message: PropTypes.string,
};