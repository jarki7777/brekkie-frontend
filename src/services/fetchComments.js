export const fetchRecipeComments = async (recipeId, page, limit, token) => {
    try {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_COMMENTS}${recipeId}?page=${page}&limit=${limit}`,
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