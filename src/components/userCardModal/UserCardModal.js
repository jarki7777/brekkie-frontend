import { useEffect } from "react";
import { ReactComponent as Close } from '../../icons/times-solid.svg';
import reactDom from "react-dom";
import './UserCardModal.sass';

const UserCardModal = (props) => {

    useEffect(() => {
        if (!props.open) return null;
    }, [props.open]);


    return reactDom.createPortal(
        <>
            <div className='modal-overlay'></div>
            <div className='admin-modal-container'>
                <div className='icon-button close-icon' onClick={props.onClose}><Close /></div>
                <input type='text' value={props.user.email}></input>


            </div>
        </>,
        document.getElementById('user-portal')
    )
}

export default UserCardModal;
