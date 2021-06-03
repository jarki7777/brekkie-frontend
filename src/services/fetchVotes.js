export const fetchVotes = async (token, id, starQtty) => {
    try {
        const castVotes = async (url) => {
            let res = await fetch(`${process.env.REACT_APP_BASE_URL}${url}${id}`,
            {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` }
            });
            console.log(res.status);
        return res.status;
        }
        switch (starQtty) {
            case 1:
                castVotes(process.env.REACT_APP_VOTE_ONE_STAR);
                break;
            case 2:
                castVotes(process.env.REACT_APP_VOTE_TWO_STAR);
                break;
            case 3:
                castVotes(process.env.REACT_APP_VOTE_THREE_STAR);
                break;
            case 4:
                castVotes(process.env.REACT_APP_VOTE_FOUR_STAR);
                break;
            case 5:
                castVotes(process.env.REACT_APP_VOTE_FIVE_STAR);
                break;
            default:
                break;
        }
    } catch (e) {
        console.log(e);
    }
}