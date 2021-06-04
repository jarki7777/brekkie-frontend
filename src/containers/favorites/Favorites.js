import { useState } from 'react';
import ErrorMsg from '../../components/errorMsg/ErrorMsg';
import './Favorites'

const Favorites = () => {
    const [error, setError] = useState(null)

    return (
        <div className='favorites,container'>
            {error && <ErrorMsg>{error}</ErrorMsg>}

            
        </div>
    )
}

export default Favorites;