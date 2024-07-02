import Posts from './Posts';
import './styles/postItem.css';


const PostItem = ({ post }) => {
    


    return (
        <>
            <div className="post-item-container">
                <div className="post-item-main">
                    <h1>{post.title}</h1>
                    
                </div>
                <div className="post-item-secondary">
                    <div className="post-item-secondary-left">
                        <span>{post.author.username}</span> 
                        <span> | </span>
                        <span>{new Date(post.createdAt).toLocaleString()}</span>
                    </div>
                    <div className="post-item-secondary-right">
                        <span>♥️ {post.likes}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostItem;