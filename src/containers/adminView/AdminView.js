import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ErrorMsg from '../../components/errorMsg/ErrorMsg';
import Pagination from '../../components/pagination/Pagination';
import { fetchUserList } from '../../services/fetchUser';
import './AdminView.sass';

const AdminView = () => {
    const token = useSelector(state => state.loginState.token);
    const email = useRef();
    const [page, setPage] = useState(1);
    const limit = 10
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        email.current.focus();
    }, []);

    const search = async (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        console.log(email);
        if (email !== '') {
            try {
                let res = await fetchUserList(token, page, limit, email);
                setUsers(res.docs);
                setTotalPages(res.totalPages);
                console.log(res.docs);
            } catch (e) {
                setError('Service is currently unavailable, please try again later');
            }
        }
    }

    const goNext = async () => {
        try {
            if (page < totalPages) {
                let res = await fetchUserList(token, page + 1, limit, email);
                setUsers(res.docs);
                setTotalPages(res.totalPages);
                setPage(res.page);
            }
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const goPrevious = async () => {
        try {
            if (page > 1) {
                let res = await fetchUserList(token, page - 1, limit, email);
                setUsers(res.docs);
                setTotalPages(res.totalPages);
                setPage(res.page);
            }
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    return (

        <div className='admin-container'>
            {error && <ErrorMsg>{error}</ErrorMsg>}
            <form className='admin-form' onSubmit={event => search(event)}>

                <div className='admin-input-field'>
                    <label htmlFor='admin-search'>Search users by E-mail</label>
                    <input className='admin-input-text' type='text' name='search-user' id='admin-search' ref={email}></input>
                </div>

                <button className='admin-btn' name='submit' type='submit'>Search</button>
            </form>

            {users.length > 0 &&

                users.map(user =>
                    <div className='users-search-results'>
                        <div className='search-result' key={users.indexOf(user)}>{user.email}</div>
                        <button className='admin-btn users-btn' name='select' type='button'>select</button>
                    </div>)
            }

            <Pagination
                actualPage={page}
                totalPages={totalPages}
                goPrevious={() => goPrevious()}
                goNext={() => goNext()}
                document={'Page'}
            />
        </div>
    )
}

export default AdminView
