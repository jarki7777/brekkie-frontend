import './Main.sass';
import MainPageCard from '../../components/mainPageCard/MainPageCard';


const Main = () => {
    return (
        <>
            <div className='main-container'>
                <MainPageCard image='inventory-card.webp' title='Inventory'
                    description='Fill your inventory and find recipes with what you have'
                    buttonName='Add Items' link='/' />
                <MainPageCard image='find-recipes-card.jpg' title='Discover'
                    description='Search recipes and add the ingredients to your shopping list'
                    buttonName='Find recipes' link='/' />
                <MainPageCard image='food-log-card.jpg' title='Meals tracking'
                    description='Follow the track of your daily meals, calories and macros'
                    buttonName='Find recipes' link='/' />
            </div>
        </>
    );
}

export default Main