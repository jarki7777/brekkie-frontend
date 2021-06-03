import { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as Close } from '../../icons/times-solid.svg';
import { fetchVotes } from '../../services/fetchVotes';
import ErrorMsg from '../errorMsg/ErrorMsg';
import './VoteModal.sass';

const VoteModal = (props) => {
    const token = useSelector(state => state.loginState.token);
    const [error, setError] = useState(null);
    const [FillOneStar, setFillOneStar] = useState('far fa-star star-vote');
    const [FillTwoStar, setFillTwoStar] = useState('far fa-star star-vote');
    const [FillThreeStar, setFillThreeStar] = useState('far fa-star star-vote');
    const [FillFourStar, setFillFourStar] = useState('far fa-star star-vote');
    const [FillFiveStar, setFillFiveStar] = useState('far fa-star star-vote');
    const [closeModal, setCloseModal] = useState(null);

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

    const voteOneStar = async () => {
        setCloseModal(props.onClose);
        try {
            await fetchVotes(token, props.id, 1);
            return closeModal;
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const voteTwoStar = async () => {
        setCloseModal(props.onClose);
        try {
            await fetchVotes(token, props.id, 2);
            return closeModal;
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const voteThreeStar = async () => {
        setCloseModal(props.onClose);
        try {
            await fetchVotes(token, props.id, 3);
            return closeModal;
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const voteFourStar = async () => {
        setCloseModal(props.onClose);
        try {
            await fetchVotes(token, props.id, 4);
            return closeModal;
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const voteFiveStar = async () => {
        setCloseModal(props.onClose);
        try {
            await fetchVotes(token, props.id, 5);
            return closeModal;
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    return reactDom.createPortal(
        <>
            <div className='modal-overlay'></div>
            <div className='vote-modal-container'>

                {error && <ErrorMsg>{error}</ErrorMsg>}

                <div className='icon-button close-icon' onClick={props.onClose}><Close /></div>
                <span>Rate this recipe</span>
                <div className='stars-bar' onMouseLeave={() => resetFill()}>
                    <i className={FillOneStar}
                        onMouseOver={() => hoverOneStar()}
                        onClick={() => voteOneStar()}
                    ></i>
                    <i className={FillTwoStar}
                        onMouseOver={() => hoverTwoStar()}
                        onClick={() => voteTwoStar()}
                    ></i>
                    <i className={FillThreeStar}
                        onMouseOver={() => hoverThreeStar()}
                        onClick={() => voteThreeStar()}
                    ></i>
                    <i className={FillFourStar}
                        onMouseOver={() => hoverFourStar()}
                        onClick={() => voteFourStar()}
                    ></i>
                    <i className={FillFiveStar}
                        onMouseOver={() => hoverFiveStar()}
                        onClick={() => { voteFiveStar() }}
                    ></i>
                </div>
            </div>
        </>,
        document.getElementById('vote-portal')
    );
}

export default VoteModal;