export const fetchShoppingList = async (token) => {
    try {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_SHOPPING_LIST}`,
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` }
            });
        res = await res.json();
        return res.ingredients;
    } catch (e) {
        console.log(e);
    }
}

export const fetchAddToShoppingList = async (token, ingredient) => {
    try {
        const body = {
            ingredients: [ingredient]
        }
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_SHOPPING_LIST}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` },
            body: JSON.stringify(body)
        });
        return res.status
    } catch (e) {
        console.log(e);
    }
}

export const fetchRemoveFromShoppingList = async (token, ingredients) => {
    try {
        const body = {
            ingredients: ingredients
        }
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_SHOPPING_LIST}`,
        {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` },
            body: JSON.stringify(body)
        });
        return res.status
    } catch (e) {
        console.log(e);
    }
}