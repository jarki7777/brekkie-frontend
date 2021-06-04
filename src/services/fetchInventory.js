export const fetchUserInventory = async (token) => {
    try {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_INVENTORY}`,
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

export const fetchRemoveFromInventory = async (token, ingredient) => {
    try {
        const body = {
            ingredients: [ingredient]
        }
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_INVENTORY}`,
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

export const fetchAddToInventory = async (token, ingredient) => {
    try {
        const body = {
            ingredients: [ingredient]
        }
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_INVENTORY}`,
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