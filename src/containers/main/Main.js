import './Main.sass';
import MainPageCard from '../../components/mainPageCard/MainPageCard';

const Main = () => {
    return (
        <>
            <div className='main-container'>
                <MainPageCard image='inventory-card.webp' title='Inventory'
                    description='Fill your inventory and find recipes with what you have'
                    buttonName='Add Items' link='/inventory' />
                <MainPageCard image='find-recipes-card.jpg' title='Discover'
                    description='Search recipes and add the ingredients to your shopping list'
                    buttonName='Find recipes' link='/search' />
                <MainPageCard image='food-log-card.jpg' title='Meals tracking'
                    description='Follow the track of your daily meals, calories and macros'
                    buttonName='Tracking' link='/tracker' />
            </div>
        </>
    );
}

export default Main