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
    const limit = 20
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



            <Pagination
                actualPage={page}
                totalPages={totalPages}
                // goPrevious={() => goPrevious()}
                // goNext={() => goNext()}
                document={'Page'}
            />
        </div>
    )
}

export default AdminView
