import { useEffect, useState } from 'react';
import ErrorMsg from '../errorMsg/ErrorMsg';
import IngredientsAccordion from '../ingredientsAccordion/IngredientsAccordion';
import OwnedIngredients from '../ownedIngredients/OwnedIngredients';
import { fetchUserInventory } from '../../services/fetchInventory';
import { useSelector } from 'react-redux';
import './Inventory.sass';

const Inventory = () => {
    const token = useSelector(state => state.loginState.token);
    const [error, setError] = useState(`You don't have any ingredients`);
    const [accordion, setAccordion] = useState(false);
    const [inventory, setInventory] = useState(null);

    useEffect(() => {
        getInventory();
    }, []);

    const getInventory = async () => {
        try {
            let res = await fetchUserInventory(token);
            setInventory(res);
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }


    return (
        <>
            <div className='search-view-container'>
                {error && <ErrorMsg>{error}</ErrorMsg>}
                <div className='inventory-instructions'>
                    Select ingredients from the dropdown list or use the input bar to add ingredients individually
                </div>
                <form className='search-form inventory-search' /*onSubmit={(event) => search(event)}*/>
                    <div className='search-bar'>
                        <input className='input-text search-input' type='search' name='search' placeholder='Add your ingredients'></input>
                        <button className='login-btn search-btn' name='submit' type='submit'>Add</button>
                    </div>
                </form>
                {!accordion && inventory.map(ingredient => <OwnedIngredients title={ingredient}/>)}
                {accordion && <IngredientsAccordion />}
                <div className='empty-inventory'>
                    <button className='login-btn search-btn empty-btn' name='submit' type='submit'>Empty inventory</button>
                </div>
            </div>
        </>
    );
}

export default Inventory;