import { useEffect, useState } from 'react';
import ErrorMsg from '../../components/errorMsg/ErrorMsg';
import { ReactComponent as Square } from '../../icons/square-regular.svg';
import { ReactComponent as SquareCheck } from '../../icons/check-square-regular.svg';
import { useSelector } from 'react-redux';
import { fetchAddToShoppingList, fetchRemoveFromShoppingList, fetchShoppingList } from '../../services/fetchShoppingList';
import { useHistory } from 'react-router';
import './ShoppingList.sass';

const ShoppingList = () => {
    const token = useSelector(state => state.loginState.token);
    const history = useHistory();
    const [error, setError] = useState(null);
    const [check, setCheck] = useState();
    const [ingredients, setIngredients] = useState(null);
    const [checkList, setCheckList] = useState([]);

    useEffect(() => {
        if (!token) history.push('/');
        getShoppingList();
    }, []);

    const getShoppingList = async () => {
        try {
            const res = await fetchShoppingList(token);
            setIngredients(res);
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const switchCheck = (ingredient) => {
        if (checkList.includes(ingredient)) {
            let newList = [...checkList];
            newList.splice(checkList.indexOf(ingredient), 1);
            setCheckList(newList);
        }
        if (!checkList.includes(ingredient)) {
            setCheckList([...checkList, ingredient]);
        }
    }

    const switchAll = () => {
        if (!check) {
            setCheck(true);
            setCheckList([...ingredients]);
        }
        if (check) {
            setCheck(false);
            setCheckList([]);
        }
    }

    const addFromInput = async (event) => {
        event.preventDefault();
        try {
            const input = event.target[0].value;
            if (input !== '') await fetchAddToShoppingList(token, input);
            getShoppingList();
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const removeItems = async () => {
        try {
            await fetchRemoveFromShoppingList(token, checkList);
            getShoppingList();
            setCheck(false);
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }


    return (
        <div className='search-view-container'>
            {error && <ErrorMsg>{error}</ErrorMsg>}
            <div className='shopping-list-title'>Manage your Shopping List</div>

            <form className='search-form inventory-search' onSubmit={(event) => addFromInput(event)}>
                <div className='search-bar'>
                    <input className='input-text search-input' type='search' name='search' placeholder='Add to shopping list'></input>
                    <button className='login-btn search-btn' name='submit' type='submit'>Add</button>
                </div>
            </form>

            <div className='shopping-list'>
                <div className='shopping-list-row'>
                    <div className='select-all-row'>Select All</div>
                    {check ? <SquareCheck className='check-box'
                        onClick={() => switchAll()}
                    /> :
                        <Square className='check-box'
                            onClick={() => switchAll()}
                        />}
                </div>

                {ingredients && ingredients.map(ingredient =>
                    <div className='shopping-list-row' key={ingredients.indexOf(ingredient)}>
                        <div>{ingredient}</div>
                        {checkList && checkList.includes(ingredient) && <SquareCheck className='check-box'
                            onClick={() => switchCheck(ingredient)}>
                        </SquareCheck>}
                        {checkList && !checkList.includes(ingredient) && <Square className='check-box'
                            onClick={() => switchCheck(ingredient)}>
                        </Square>}
                    </div>
                )}

                {!ingredients && <ErrorMsg>{`You have no items in your list`}</ErrorMsg>}
                {ingredients && ingredients.length === 0 && <ErrorMsg>{`You have no items in your list`}</ErrorMsg>}

                <div className='empty-inventory'>
                    <button
                        className='login-btn empty-btn'
                        name='empty'
                        type='button'
                        onClick={() => removeItems()}
                    >Empty selected items</button>
                </div>

            </div>
        </div>
    );
}

export default ShoppingList;