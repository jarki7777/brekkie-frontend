import { ReactComponent as Error } from '../../icons/exclamation-circle-solid.svg';
import './ErrorMsg.sass'

const ErrorMsg = (props) => {
    return (
        <div className='error-container'>
            <div className='icon-button error-icon'><Error /></div>
            <div className='error-text'>{props.children}</div>
        </div>
    );
}

export default ErrorMsg;