import { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import { ReactComponent as Close } from '../../icons/times-solid.svg';
import './VoteModal.sass';

const VoteModal = (props) => {
    const [FillOneStar, setFillOneStar] = useState('far fa-star star-vote');
    const [FillTwoStar, setFillTwoStar] = useState('far fa-star star-vote');
    const [FillThreeStar, setFillThreeStar] = useState('far fa-star star-vote');
    const [FillFourStar, setFillFourStar] = useState('far fa-star star-vote');
    const [FillFiveStar, setFillFiveStar] = useState('far fa-star star-vote');

    useEffect(() => {
        if (!props.open) return null;
    }, [props.open]);

    const resetFill = () => {
        setFillOneStar('far fa-star star-vote');
        setFillTwoStar('far fa-star star-vote');
        setFillThreeStar('far fa-star star-vote');
        setFillFourStar('far fa-star star-vote');
        setFillFiveStar('far fa-star star-vote');
    }

    const hoverOneStar = () => {
        resetFill();
        setFillOneStar('fas fa-star star-vote');
    }

    const hoverTwoStar = () => {
        resetFill();
        hoverOneStar()
        setFillTwoStar('fas fa-star star-vote');
    }

    const hoverThreeStar = () => {
        resetFill();
        hoverTwoStar();
        setFillThreeStar('fas fa-star star-vote');
    }

    const hoverFourStar = () => {
        resetFill();
        hoverThreeStar();
        setFillFourStar('fas fa-star star-vote');
    }

    const hoverFiveStar = () => {
        resetFill();
        hoverFourStar();
        setFillFiveStar('fas fa-star star-vote');
    }



    return reactDom.createPortal(
        <>
            <div className='modal-overlay'></div>
            <div className='vote-modal-container'>
                <div className='icon-button close-icon' onClick={props.onClose}><Close /></div>
                <span>Rate this recipe</span>
                <div className='stars-bar' onMouseLeave={() => resetFill()}>
                    <i className={FillOneStar}
                        onMouseOver={() => hoverOneStar()}
                        >                            
                        </i>
                    <i className={FillTwoStar}
                        onMouseOver={() => hoverTwoStar()}></i>
                    <i className={FillThreeStar}
                        onMouseOver={() => hoverThreeStar()}></i>
                    <i className={FillFourStar}
                        onMouseOver={() => hoverFourStar()}></i>
                    <i className={FillFiveStar}
                        onMouseOver={() => hoverFiveStar()}></i>
                </div>
            </div>
        </>,
        document.getElementById('vote-portal')
    );
}

export default VoteModal;