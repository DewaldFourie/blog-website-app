import { Link, useParams } from "react-router-dom";
import './styles/postView.css'
import { useState, useEffect } from "react";
import generateUniqueId from "../lib/userIdUtils";
import heartInitial from '../assets/heart-initial.png';
import heartActive from '../assets/heart-active.png';




// Function to fetch posts, this will fetch the correct individual post by using ID
const fetchPost = async (post_id) => {
    try {
        const response = await fetch(`https://blog-api-app.fly.dev/posts/${post_id}`, { mode: 'cors' });
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const post = data.post;
        const comments = data.comments;
        return {post, comments};
    } catch (error) {
        console.log(error);
    }
};


// Function to check if a user has liked a post
const checkIfLiked = async (post_id) => {
    // fetch the userID from local storage
    let userId = localStorage.getItem('x-user-id');
    // check to see if there is a user ID in local storage
    // if not, create a new one and store it
    if (!userId) {
        userId = generateUniqueId();
        localStorage.setItem('x-user-id', userId);
    }

    try {
        const response = await fetch(`https://blog-api-app.fly.dev/posts/${post_id}/liked`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-user-id': userId
            }
        });

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`)
        }

        const data = await response.json();
        return data.liked;
    } catch (error){
        console.log('Error checking if liked: ', error);
    }
} 


// Function to fetch request a like on a post
const likePost = async (post_id) => {
    // fetch the userID from local storage
    let userId = localStorage.getItem('x-user-id');
    // check to see if there is a user ID in local storage
    // if not, create a new one and store it
    if (!userId) {
        userId = generateUniqueId();
        localStorage.setItem('x-user-id', userId);
    }

    try {
        const response = await fetch(`https://blog-api-app.fly.dev/posts/${post_id}/like`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-user-id': userId
            }
        });
        
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error liking post: ', error);
    }
}


// Function to request an unlike on a post
const unlikePost = async (post_id) => {
    let userId = localStorage.getItem('x-user-id');
    if (!userId) {
        userId = generateUniqueId();
        localStorage.setItem('x-user-id', userId);
    }

    try {
        const response = await fetch(`https://blog-api-app.fly.dev/posts/${post_id}/unlike`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-user-id': userId
            }
        });

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error unliking post: ', error);
    }
};



const PostView = () => {
    const [post, setPost] = useState();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({ author: '', text: '' });
    const [showReturnButton, setShowReturnButton] = useState(false);
    const [isScrolledToMax, setIsScrolledToMax] = useState(false);
    const [liked, setLiked] = useState(false);

    // get the postID from the params of the API routes
    const { postId } = useParams();


    const handleToTop = () => {
        window.scrollTo(0, 0);
    }

    // useEffect hook to render on page load and postId change as dependancy
    useEffect(() => {

        const loadPost = async (post_id) => {
            const fetchedPost = await fetchPost(post_id);
            setPost(fetchedPost.post)
            setComments(fetchedPost.comments)
            const isLiked = await checkIfLiked(post_id);
            setLiked(isLiked);
        }
        loadPost(postId)

        handleToTop();

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;

            if (scrollTop > 20) {
                setShowReturnButton(true);
            } else {
                setShowReturnButton(false);
            }

            if (scrollTop >= maxScrollTop - 10) {
                setIsScrolledToMax(true);
            } else {
                setIsScrolledToMax(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [postId]);

    // function to handle the input change of the comment form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewComment({ ...newComment, [name]: value });
    }

    // function to handlethe submit of the form and to Post the new comment to the database if successful;
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://blog-api-app.fly.dev/posts/${postId}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newComment),
            });

            if (response.ok) {
                const result = await response.json();
                if (result.result === 'done') {
                    // Add new comment to the comments list
                    setComments([...comments, newComment]);
                    // clear the form 
                    setNewComment({ author: '', text: '' })
                }
            } else  {
                console.log('Error posting comment.');
            }
        } catch (error) {
            console.log(error);
        }
    };

    // function to toggle between like and unlike of posts by a user
    const handleLikeClick = async (postId) => {
        if (liked) {
            const result = await unlikePost(postId);
            if (result && result.result === 'done') {
                setPost((prevPost) => ({ ...prevPost, likes: prevPost.likes - 1 }));
                setLiked(false);
            } else {
                console.log('Failed to unlike post:');
            }
        } else {
            const result = await likePost(postId);
            if (result && result.result === 'done') {
                setPost((prevPost) => ({ ...prevPost, likes: prevPost.likes + 1 }));
                setLiked(true);
            } else {
                console.log('Failed to like post:');
            }
        }
    };
    


    return (
        <>
            <div className="postView-content">
                { showReturnButton && (
                    <Link className={!isScrolledToMax ? `postView-return-container` : `postView-return-scrollMax-container` } to={'/posts'}>
                        <span className="postView-return-btn">⬅︎ Back to All Posts</span>
                    </Link>
                )} 
                <div className="postView-container" >
                    {post ? (
                        <>
                        <div className="postView-main-container" >
                            <div className="postView-main-title-container">
                                <h1 className="postView-main-title-text">{post.title}</h1>
                            </div>
                            <div className="postView-main-info-container">
                                <div className="postView-main-info-data-container">
                                    <span className="postView-main-info-data-author">{post.author.username}</span>
                                    <span className="postView-main-info-data-date">{new Date(post.createdAt).toLocaleDateString('en-GB').replace(/\//g, '-')}</span>
                                    <span className="postView-main-info-data-time">{new Date(post.createdAt).toLocaleTimeString('en-GB', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: false
                                    })}</span>
                                </div>
                                <div className="postView-main-info-like-container">
                                    <img src={liked ? heartActive : heartInitial} id="heart" className={`postView-main-info-like-btn ${liked ? 'active' : 'initial'}`} onClick={() => handleLikeClick(post._id)}></img>
                                    <span className="postView-main-info-like-text">{post.likes}</span> 
                                </div>
                            </div>
                            <div className="postView-main-text-container">
                                <div>
                                    <img className="postView-main-image" src={post.imageURL} alt="post-image" />
                                </div>
                                {post.text.split('\n\n').map((paragraph, index) => (
                                    <p className="postView-main-text" key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                        <div className="postView-container-break"></div>
                        <div className="postView-secondary-container">
                            <div className="postView-comments-input-container">
                                <form className="postView-comments-input-form" id="comment-input" action="post" onSubmit={handleSubmit}>
                                    <span className="postView-comments-input-header">Share your Thoughts:</span>
                                    <input 
                                        name="author" 
                                        id="comment-input" 
                                        type="text" 
                                        className="comment-input-box comment-username" 
                                        placeholder="Username" 
                                        value={newComment.author} 
                                        onChange={handleInputChange}
                                    />
                                    <textarea 
                                        name="text" 
                                        id="comment-input" 
                                        className="comment-input-box comment-content" 
                                        placeholder="Comment"
                                        value={newComment.text}
                                        onChange={handleInputChange}
                                        ></textarea>
                                    <input className="comment-submit-btn" type="submit" value="Post Comment" />
                                </form>
                            </div>
                            <div className="postView-comments-break"></div>
                            <div className="postView-comments-content-container">
                                {comments.map((comment, index) => {
                                    return (
                                    <div key={index} className="postView-comments-comment-container">
                                        <div className="postView-comment-favicon-container">
                                            <span className="postView-comment-favicon">{comment.author.slice(0,1)}</span>  
                                        </div>
                                        <div className="postView-comment-data-container">
                                            <div className="postView-comment-info-container">
                                                <div className="postView-comment-info-text-container">
                                                    <h4 className="postView-comment-info-author">{comment.author}</h4>
                                                    <div className="postView-comment-info-date-time-container">
                                                        <span className="postView-comment-info-date">{new Date(comment.createdAt).toLocaleDateString('en-GB').replace(/\//g, '-')}</span>
                                                        <span className="postView-comment-info-time">{new Date(post.createdAt).toLocaleTimeString('en-GB', {
                                                            hour: '2-digit',
                                                            minute: '2-digit',
                                                            hour12: false
                                                        })}</span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="postView-comment-content-container">
                                                <p className="postView-comment-content-text">{comment.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                )})}
                            </div>
                        </div>
                        <div className="postView-footer-container">
                            <button className="postView-footer-btn"  onClick={handleToTop}>To Top ⬆︎</button>
                        </div>
                        </>
                    ) : (
                        <div className="loading-post-container">
                            <span className="loading-post-text">loading post...</span>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default PostView;

