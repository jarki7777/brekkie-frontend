import { useEffect, useRef, useState } from 'react';
import Pagination from '../../components/pagination/Pagination';
import './AdminView.sass';

const AdminView = () => {
    const email = useRef();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        email.current.focus();
    }, []);

    const search = (event) => {

    }

    return (
        <div className='admin-container'>
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
