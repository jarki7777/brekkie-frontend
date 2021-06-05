import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as User } from '../../icons/user-solid.svg';
import { fetchRecipeComments } from '../../services/fetchComments';
import './Comments.sass';

const Comments = (props) => {
    const recipeId = useSelector(state => state.recipeState.id);
    const user = useSelector(state => state.loginState);
    const [comments, setComments] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        getComments();
    }, []);

    const getComments = async () => {
        try {
            const res = await fetchRecipeComments(recipeId, page, limit, user.token);
            setComments(res.docs);
            setTotalPages(res.totalPages);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='comments-container'>
            <div className='comments-count'>
                <span>{props.commentsCount} Comments</span>
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