import { ReactComponent as User } from '../../icons/user-solid.svg';
import { ReactComponent as Delete } from '../../icons/trash-alt-solid.svg';
import { dateFormatter } from '../../util/dateFormatter';

const UserComment = (props) => {
    const date = dateFormatter(props.date);
    return (
        <div className='user-comment' >
            <div className='comment-info'>
                <div className='username-comment'>
                    <User />
                    <div className='username-text'>{props.user}</div>
                </div>
                <div>{date}</div>
            </div>
            <div className='comment-text'>{props.comment}</div>
            {props.userRole === 'admin' && <Delete className='delete-icon' onClick={props.deleteComment}/>}
            {props.userRole === 'mod' && <Delete className='delete-icon'onClick={props.deleteComment} />}
        </div>
    );
}

export default UserComment;
