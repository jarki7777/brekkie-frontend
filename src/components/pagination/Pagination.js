import './Pagination.sass';
import { ReactComponent as Previous } from '../../icons/angle-left-solid.svg';
import { ReactComponent as Next } from '../../icons/angle-right-solid.svg';

const Pagination = (props) => {
    return (
        <div className='pagination'>
            <div className='arrow-icon' onClick={props.goPrevious}><Previous /></div>
            <div>Page {props.actualPage} of {props.totalPages}</div>
            <div className='arrow-icon' onClick={props.goNext}><Next /></div>
        </div>
    );
}

export default Pagination;