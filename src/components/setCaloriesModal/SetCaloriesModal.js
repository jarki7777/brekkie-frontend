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

                <form className='set-calories-form'>
                    <div className='calories-input'>
                        <input className='input-text' type='number' name='calories' id='set-calories'></input>
                    </div>
                    <button className='set-calories-btn' type='submit'>Set your daily goal (Kcal)</button>
                </form>


            </div>
        </>,
        document.getElementById('calories-portal')
    )
}

export default SetCaloriesModal;
