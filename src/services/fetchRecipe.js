export const fetchById = async (id, token) => {
    try {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_RECIPE_BY_ID}${id}`,
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` }
            });
        res = await res.json();
        return res;
    } catch (e) {
        console.log(e);
    }
}

export const fetchAll = async (page, limit, token) => {
    try {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ALL_RECIPES}?page=${page}&limit=${limit}`,
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` }
            });
            res = await res.json();
        return res.docs;
    } catch (e) {
        console.log(e);
    }
}