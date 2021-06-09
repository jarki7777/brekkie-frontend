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

export const fetchUserProfile= async (token) => {
    try {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_USER_PROFILE}`,
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

export const fetchUserList= async (token, page, limit, email) => {
    try {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ALL_USERS}?page=${page}&limit=${limit}&email=${email}`,
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

export const fetchUpdateUser= async (token, body) => {
    try {
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

export const fetchDeleteUser= async (token, id) => {
    try {
        console.log(id);
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_USER_BY_ID}${id}`,
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` }
            });
        return res.status
    } catch (e) {
        console.log(e);
    }
}