import { useEffect, useRef, useState } from 'react';
import reactDom from 'react-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as Close } from '../../icons/times-solid.svg';
import { fetchUpdateUserCalories } from '../../services/fetchUser';
import './SetCaloriesModal.sass';

const SetCaloriesModal = (props) => {
    const calories = useRef();
    const [closeModal, setCloseModal] = useState(null);
    const token = useSelector(state => state.loginState.token);

    useEffect(() => {
        if (!props.open) return null;
        calories.current.focus();
    }, [props.open]);

    const setCalories = async (event) => {
        setCloseModal(props.onClose);
        try {
            const calories = event.target[0].value;
            await fetchUpdateUserCalories(token, calories);
            return closeModal;
        } catch (e) {
            console.log(e);
        }
    }

    return reactDom.createPortal(
        <>
            <div className='modal-overlay'></div>
            <div className='set-calories-container'>
                <div className='icon-button close-icon' onClick={props.onClose}><Close /></div>

                <form
                    className='set-calories-form'
                    onSubmit={(event) => setCalories(event)}>

                    <div className='calories-input'>
                        <input className='input-text' type='number' name='calories' id='set-calories' ref={calories}></input>
                    </div>
                    <button className='set-calories-btn' type='submit'>Set your daily goal (Kcal)</button>
                </form>


            </div>
        </>,
        document.getElementById('calories-portal')
    )
}

export default SetCaloriesModal;
