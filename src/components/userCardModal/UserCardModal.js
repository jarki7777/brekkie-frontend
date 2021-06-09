import { useEffect } from "react";
import { ReactComponent as Close } from '../../icons/times-solid.svg';
import reactDom from "react-dom";
import './UserCardModal.sass';
import { fetchDeleteUser, fetchUpdateUser } from "../../services/fetchUser";
import { useSelector } from "react-redux";

const UserCardModal = (props) => {
    const token = useSelector(state => state.loginState.token);

    useEffect(() => {
        if (!props.open) return null;
    }, [props.open]);

    const updateUser = async (event) => {
        const body = { 
            email: event.target[0].value, 
            username: event.target[1].value, 
            role: event.target[2].value, 
        }
        try {
            await fetchUpdateUser(token, body);
        } catch (e) {
            console.log(e);
        }
    }

    const deleteUser = async () => {
        try {
            await fetchDeleteUser(token, props.user._id);
        } catch (e) {
            console.log(e);
        }

    }

    return reactDom.createPortal(
        <>
            <div className='modal-overlay'></div>
            <div className='admin-modal-container'>
                <div className='icon-button close-icon' onClick={props.onClose}><Close /></div>
                <form className='update-user-form' onSubmit={(event) => updateUser(event)}>

                    <input className='input-text update-input' type='text' defaultValue={props.user.email} required></input>
                    <input className='input-text update-input' type='text' defaultValue={props.user.username} required></input>
                    <input className='input-text update-input' type='text' defaultValue={props.user.role} required></input>
                    <div className='admin-modal-btn'>
                        <button className='admin-btn users-btn' name='send' type='submit'>update</button>
                        <button 
                        className='admin-btn users-btn' 
                        name='send' 
                        type='button'
                        onClick={() => deleteUser()}
                        >delete</button>
                    </div>
                </form>


            </div>
        </>,
        document.getElementById('user-portal')
    )
}

export default UserCardModal;
