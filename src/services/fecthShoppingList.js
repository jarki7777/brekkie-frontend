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