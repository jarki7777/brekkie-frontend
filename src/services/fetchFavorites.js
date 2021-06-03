export const fetchUserFavorites = async (token) => {
    try {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_FAVORITES}`,
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` }
            });
        res = await res.json();
        return res.recipes;
    } catch (e) {
        console.log(e);
    }
}

export const fetchAddFavorite = async (token, recipeId) => {
    try {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_FAVORITES}${recipeId}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` }
            });
            console.log(res);
        return res.status;
    } catch (e) {
        console.log(e);
    }
}