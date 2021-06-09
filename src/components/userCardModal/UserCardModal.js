import { useEffect } from "react";
import { ReactComponent as Close } from '../../icons/times-solid.svg';
import reactDom from "react-dom";
import './UserCardModal.sass';
import { fetchUpdateUserCalories } from "../../services/fetchUser";

const UserCardModal = (props) => {

    useEffect(() => {
        if (!props.open) return null;
    }, [props.open]);

    const fetchUpdateUserCalories = (event) => {

    }

    return reactDom.createPortal(
        <>
            <div className='modal-overlay'></div>
            <div className='admin-modal-container'>
                <div className='icon-button close-icon' onClick={props.onClose}><Close /></div>
                <form className='update-user-form' onSubmit={(event) => fetchUpdateUserCalories(event)}>

                    <input className='input-text update-input' type='text' defaultValue={props.user.email}></input>
                    <input className='input-text update-input' type='text' defaultValue={props.user.username}></input>
                    <input className='input-text update-input' type='text' defaultValue={props.user.role}></input>
                    <div className='admin-modal-btn'>
                        <button className='admin-btn users-btn' name='send' type='submit'>update</button>
                        <button className='admin-btn users-btn' name='send' type='submit'>delete</button>
                    </div>
                </form>


            </div>
        </>,
        document.getElementById('user-portal')
    )
}

export default UserCardModal;
