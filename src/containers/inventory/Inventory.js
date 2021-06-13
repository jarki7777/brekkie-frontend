import { useEffect, useState } from 'react';
import ErrorMsg from '../../components/errorMsg/ErrorMsg';
import InventoryIngredients from '../../components/inventoryIngredients/InventoryIngredients';
import MyIngredients from '../../components/myIngredients/MyIngredients';
import { fetchEmptyInventory, fetchUserInventory, fetchAddToInventory } from '../../services/fetchInventory';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './Inventory.sass';

const Inventory = () => {
    const token = useSelector(state => state.loginState.token);
    const history = useHistory();
    const [error, setError] = useState(null);
    const [accordion, setAccordion] = useState(false);
    const [inventory, setInventory] = useState(null);
    const [myInventory, setMyInventory] = useState('active-inventory');
    const [addFromList, setAddFromList] = useState('inactive-inventory');

    useEffect(() => {
        if (!token) history.push('/');
        getInventory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inventory]);

    const getInventory = async () => {
        try {
            let res = await fetchUserInventory(token);
            setInventory(res);
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const switchInventory = (myList, addlist) => {
        if (addlist && !accordion) {
            setMyInventory('inactive-inventory');
            setAddFromList('active-inventory');
            setAccordion(true);
        }
        if (myList && accordion) {
            setMyInventory('active-inventory');
            setAddFromList('inactive-inventory');
            setAccordion(false);
        }
    }

    const emptyInventory = async () => {
        try {
            await fetchEmptyInventory(token);
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const addFromInput = async (event) => {
        event.preventDefault();
        try {
            const ingredient = event.target[0].value;
            if (ingredient !== '') await fetchAddToInventory(token, ingredient);
            getInventory();
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    return (
        <>
            <div className='search-view-container'>
                {error && <ErrorMsg>{error}</ErrorMsg>}
                <div className='inventory-instructions'>
                    Here you can add ingredients to your inventory to make custom searches. Use the search input
                    to add your own ingredients or select the default ingredients from the "Add from list" tab.
                </div>
                <form className='search-form inventory-search' onSubmit={(event) => addFromInput(event)}>
                    <div className='search-bar'>
                        <input className='input-text search-input' type='search' name='search' placeholder='Add your ingredients'></input>
                        <button className='login-btn search-btn' name='submit' type='submit'>Add</button>
                    </div>
                </form>
                <div className='toggle-inventory'>
                    <div className={myInventory} onClick={() => switchInventory(true, false)}>My Inventory</div>
                    <div className={addFromList} onClick={() => switchInventory(false, true)}>Add from list</div>
                    <div className='inactive-inventory-border'></div>
                </div>
                {!accordion && inventory && inventory.map(ingredient => <MyIngredients title={ingredient} key={inventory.indexOf(ingredient)} />)}
                {!accordion && inventory && inventory.length === 0 && <ErrorMsg>You inventory is empty</ErrorMsg>}
                {accordion && <InventoryIngredients />}
                <div className='empty-inventory'>
                    <button
                        className='login-btn empty-btn'
                        name='empty'
                        type='button'
                        onClick={() => emptyInventory()}
                    >Empty inventory</button>
                </div>
            </div>
        </>
    );
}

export default Inventory;