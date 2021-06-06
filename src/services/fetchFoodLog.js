import { dateFormatter } from "../util/dateFormatter";

export const fetchFoodLog = async (page, limit, token) => {
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
export const fetchFoodLogByDay = async (date, token) => {
    try {
        const dateFormatted = dateFormatter(date);
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_FOOD_LOGS_BY_DATE}?date=${dateFormatted}`,
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` }
            });
        if (res.status === 200) res = await res.json();
        return res;
    } catch (e) {
        console.log(e);
    }
}