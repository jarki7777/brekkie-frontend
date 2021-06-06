import { useEffect } from 'react';
import reactDom from 'react-dom';
import { ReactComponent as Close } from '../../icons/times-solid.svg';
import './SetCaloriesModal.sass';

const SetCaloriesModal = (props) => {

    useEffect(() => {
        if (!props.open) return null;
    }, [props.open]);

    return reactDom.createPortal(
        <>
            <div className='modal-overlay'></div>
            <div className='set-calories-container'>
                <div className='icon-button close-icon' onClick={props.onClose}><Close /></div>




            </div>
        </>,
        document.getElementById('calories-portal')
    )
}

export default SetCaloriesModal;
