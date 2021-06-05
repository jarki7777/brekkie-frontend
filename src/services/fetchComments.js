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

export const fetchNewComment = async (recipeId, token, comment) => {
    try {
        const body = {
            comment: comment
        }
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_COMMENTS}${recipeId}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` },
                body: JSON.stringify(body)
            });
        return res.status;
    } catch (e) {
        console.log(e);
    }
}