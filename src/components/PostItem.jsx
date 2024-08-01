import PropTypes from 'prop-types';
import './styles/postItem.css';

const PostItem = ({ post }) => {
    return (
        <>
            <div className="post-item-container">
                <div className="post-item-main">
                    <h1 className='post-item-main-title'>{post.title}</h1>
                </div>
                <div className='post-item-text-container'>
                    <span className='post-item-text-small'>{post.text.slice(0, 150) + "..."}</span>
                </div>
                <div className="post-item-image-container">
                    <img className='post-item-image' src={post.imageURL} alt="post-image" />
                </div>
                <div className="post-item-secondary">
                    <div className="post-item-secondary-left">
                        <span>{post.author.username}</span> 
                        <span> | </span>
                        <span>{new Date(post.updatedAt).toLocaleDateString('en-GB').replace(/\//g, '-')}</span>
                    </div>
                    <div className="post-item-secondary-right">
                        <span>♥️ {post.likes}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

PostItem.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        imageURL: PropTypes.string,
        author: PropTypes.shape({
            username: PropTypes.string.isRequired,
        }).isRequired,
        updatedAt: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};

export default PostItem;
