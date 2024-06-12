import './styles/postItem.css';


const PostItem = ({ post }) => {
    


    return (
        <>
            <div className="post-item-container">
                <div className="post-item-main">
                    <h1>{post.title}</h1>
                </div>
                <div className="post-item-secondary">
                        {post.author}
                </div>
            </div>
        </>
    )
}

export default PostItem;