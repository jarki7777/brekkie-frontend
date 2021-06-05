export const fetchFoodLog = async (token, page, limit) => {
    try {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_FOOD_LOGS}?page=${page}&limit=${limit}`,
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