import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchRecipeComments, fetchNewComment, fetchDeleteComment } from '../../services/fetchComments';
import UserComment from '../userComment/UserComment';
import ErrorMsg from '../errorMsg/ErrorMsg';
import './Comments.sass';

const Comments = (props) => {
    const recipeId = useSelector(state => state.recipeState.id);
    const user = useSelector(state => state.loginState);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState([]);
    const [limit, setLimit] = useState(10);
    const [userRole, setUserRole] = useState('client');

    useEffect(() => {
        getComments();
        setUserRole(user.role);
    }, []);

    const getComments = async () => {
        try {
            const res = await fetchRecipeComments(recipeId, 1, limit, user.token);
            setComments(res.docs);
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const loadMoreComments = async () => {
        try {

            const res = await fetchRecipeComments(recipeId, 1, limit + 10, user.token);
            setComments(res.docs);
            setLimit(limit + 10);
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const postComment = async (event) => {
        event.preventDefault();
        try {
            const text = event.target.childNodes[0].textContent;
            if (text.length > 2) {
                setError(null);
                fetchNewComment(recipeId, user.token, text);
                getComments();
            }
            if (text.length <= 2) setError('The comment is too short');
            if (text.length > 255) setError('Comments should not exceed 255 characters');

        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const deleteComment = async (event, commentId) => {
        event.preventDefault();
        try {
            await fetchDeleteComment(commentId, user.token);
            getComments();
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    return (
        <div className='comments-container'>
            <div className='comments-count'>
                <span>{props.commentsCount} Comments</span>
            </div>
            <form className='comment-form' onSubmit={(event) => postComment(event)}>
                <div className='comment-input'>
                    <div className='comment-input-text'
                        role='textbox'
                        name='search'
                        maxlength='255'
                        contentEditable
                    ></div>
                </div>
                <button className='login-btn search-btn post-btn' name='submit' type='submit'>Post</button>
            </form>

            {comments.length === 0 && <ErrorMsg>There are no comments yet, be the first!</ErrorMsg>}
            {error && <ErrorMsg>{error}</ErrorMsg>}

            {comments.length !== 0 && comments.map(comment =>
                <UserComment
                    key={comments.indexOf(comment)}
                    user={comment.user.username}
                    date={comment.date}
                    comment={comment.comment}
                    userRole={userRole}
                    deleteComment={(event) => deleteComment(event, comment._id)}
                />
            )}

            <button
                className='login-btn search-btn post-btn'
                name='load-more'
                type='button'
                onClick={() => loadMoreComments()}
            >More...</button>

        </div>
    );
}

export default Comments;
