export const fetchLogin = async (email, password) => {
    try {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_LOGIN_URL}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const status = res.status;
        res = await res.json();
        res = { ...res, status }
        return res;
    } catch (e) {
        console.log(e);
    }
}