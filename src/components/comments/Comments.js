import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as User } from '../../icons/user-solid.svg';
import { fetchRecipeComments, fetchNewComment } from '../../services/fetchComments';
import UserComment from '../userComment/UserComment';
import ErrorMsg from '../errorMsg/ErrorMsg';
import './Comments.sass';

const Comments = (props) => {
    const recipeId = useSelector(state => state.recipeState.id);
    const user = useSelector(state => state.loginState);
    const [error, setError] = useState(null);
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
            setError('Service is currently unavailable, please try again later');
        }
    }

    const postComment = async (event) => {
        event.preventDefault();
        try {
            const text = event.target.childNodes[0].textContent;
            if (text.length > 2) fetchNewComment(recipeId, user.token, text);

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

            {comments.length !== 0 && comments.map(comment =>
                <UserComment
                    key={comments.indexOf(comment)}
                    user={comment.user.username}
                    date={comment.date}
                    comment={comment.comment}
                />
            )}

        </div>
    );
}

export default Comments;
