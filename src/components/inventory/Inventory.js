import { useState } from 'react';
import ErrorMsg from '../errorMsg/ErrorMsg';
import IngredientsAccordion from '../ingredientsAccordion/IngredientsAccordion';
import './Inventory.sass';

const Inventory = () => {
    const [error, setError] = useState(`You don't have any ingredients`);

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
                <IngredientsAccordion />
                <div className='empty-inventory'>
                    <button className='login-btn search-btn empty-btn' name='submit' type='submit'>Empty inventory</button>
                </div>
            </div>
        </>
    );
}

export default Inventory;