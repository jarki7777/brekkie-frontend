import './MainPageCard.sass'

const MainPageCard = (props) => {

    return (
        <div className='main-page-card'>
            <img className='card-image' src={process.env.PUBLIC_URL + "/img/" + props.image} alt='card'></img>
            <div className='card-opaque'>
                <div className='card-text'>
                    <span className='main-card-title'>{props.title}</span>
                    <span className='main-card-description'>{props.description}</span>
                    <button className='main-card-button'>{props.buttonName}</button>
                </div>
            </div>
        </div>
    );
}

export default MainPageCard;