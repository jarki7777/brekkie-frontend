export const fetchById = async (id, token) => {
    try {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_RECIPE_BY_ID}${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` }
        });
        res = await res.json();
        return res;
    } catch (e) {
        console.log(e);
    }
}