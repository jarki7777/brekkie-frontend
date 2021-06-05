import { ReactComponent as User } from '../../icons/user-solid.svg';
import { dateFormatter } from '../../util/dateFormatter';

const UserComment = (props) => {
    const date = dateFormatter(props.date);
    return (
        <div className='user-comment' >
            <div className='comment-info'>
                <div className='username-comment'>
                    <User />
                    <div>{props.user}</div>
                </div>
                <div>{date}</div>
            </div>
            <div className='comment-text'>{props.comment}</div>
        </div>
    );
}

export default UserComment;
