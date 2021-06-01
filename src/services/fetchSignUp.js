export const fetchSignUp = async (username, email, password) => {
    try {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_SIGNUP}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password })
        });
        const status = res.status;
        res = await res.json();
        res = { ...res, status }
        return res;
    } catch (e) {
        console.log(e);
    }
}