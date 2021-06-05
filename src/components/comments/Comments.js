import { useSelector } from 'react-redux';
import { ReactComponent as User } from '../../icons/user-solid.svg';
import './Comments.sass';

const Comments = (props) => {
    const recipeId = useSelector(state => state.recipeState.id);
    const user = useSelector(state => state.loginState)

    return (
        <div className='comments-container'>
            <div className='comments-count'>
                <span>{props.commentsCount}Comments</span>
            </div>
            <form className='comment-form' /*onSubmit={(event) => postComment(event)}*/>
                <div className='comment-input'>
                    <input className='input-text' type='search' name='search' placeholder='Add a public comment'></input>
                </div>
                <button className='login-btn search-btn post-btn' name='submit' type='submit'>Post</button>
            </form>
            <div className='user-comment'>
                <div className='comment-info'>
                    <div className='username-comment'>
                        <User />
                        <div>user</div>
                    </div>
                    <div>06-05-2021</div>
                </div>
                <div className='comment-text'>this is a comment</div>
            </div>
        </div>
    );
}

export default Comments;
