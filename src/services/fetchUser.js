export const fetchUpdateUserCalories = async (token, calories) => {
    try {
        const body = {
            caloriesGoal: calories
        }
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_USER_BY_ID}`,
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