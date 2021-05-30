import './Main.sass';
import MainPageCard from '../../components/mainPageCard/MainPageCard';


const Main = () => {
    return (
        <>
            <MainPageCard image='inventory-card.webp' title='Inventory'
                description='Fill your inventory and find recipes with what you have'
                buttonName='Add Items' />
        </>
    );
}

export default Main