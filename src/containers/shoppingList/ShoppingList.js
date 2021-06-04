import { useEffect, useState } from 'react';
import ErrorMsg from '../../components/errorMsg/ErrorMsg';
import { ReactComponent as Square } from '../../icons/square-regular.svg';
import { ReactComponent as SquareCheck } from '../../icons/check-square-regular.svg';
import { useSelector } from 'react-redux';
import { fetchShoppingList } from '../../services/fecthShoppingList';
import './ShoppingList.sass';

const ShoppingList = () => {
    const token = useSelector(state => state.loginState.token);
    const [error, setError] = useState(null);
    const [check, setCheck] = useState(false);
    const [ingredients, setIngredients] = useState(null);

    useEffect(() => {
        getShoppingLits();
    }, []);

    const getShoppingLits = async () => {
        try {
            const res = await fetchShoppingList(token);
            setIngredients(res);
            console.log(res);
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    return (
        <div className='search-view-container'>
            {error && <ErrorMsg>{error}</ErrorMsg>}
            <div className='shopping-list-title'>Manage your Shopping List</div>

            <form className='search-form inventory-search' /*onSubmit={(event) => addFromInput(event)}*/>
                <div className='search-bar'>
                    <input className='input-text search-input' type='search' name='search' placeholder='Add to shopping list'></input>
                    <button className='login-btn search-btn' name='submit' type='submit'>Add</button>
                </div>
            </form>

            <div className='shopping-list'>
                <div className='shopping-list-row'>
                    <div className='select-all-row'>Select All</div>
                    {check ? <SquareCheck className='check-box'></SquareCheck> :
                        <Square className='check-box'></Square>}
                </div>

                <div className='shopping-list-row'>
                    <div>Ingredient</div>
                    {check ? <SquareCheck className='check-box'></SquareCheck> :
                        <Square className='check-box'></Square>}
                </div>

                <div className='empty-inventory'>
                    <button
                        className='login-btn empty-btn'
                        name='empty'
                        type='button'
                    // onClick={() => emptyList()}
                    >Empty selected items</button>
                </div>

            </div>
        </div>
    );
}

export default ShoppingList;