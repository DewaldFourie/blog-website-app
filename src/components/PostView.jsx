import { useParams } from "react-router-dom";
import './styles/postView.css'

let mock_posts = [
    {
        id: 1,
        title: "test 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03',
        comments: [
            {
                author: "John Doe",
                text: "nice man",
                date: "2024-06-04",
                likes: 2,
            },
            {
                author: "Mary Min",
                text: "Well done",
                date: "2024-06-05",
                likes: 7,
            },
            {
                author: "Phill Pill",
                text: "this is amazing dude",
                date: "2024-06-11",
                likes: 12,
            },
        ]
    },
    {
        id: 2,
        title: "test 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03',
        comments: [
            {
                author: "John Doe",
                text: "nice man",
                date: "2024-06-04",
                likes: 2,
            },
        ]
    },
    {
        id: 3,
        title: "test 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03',
        comments: [],
    },
    {
        id: 4,
        title: "test 4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03',
        comments: [],
    },
    {
        id: 5,
        title: "test 5",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03',
        comments: [],
    },
    {
        id: 6,
        title: "test 6",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03',
        comments: [],
    },
    {
        id: 7,
        title: "test 7",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03',
        comments: [],
    },
    {
        id: 8,
        title: "test 8",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03',
        comments: [],
    }
]



const PostView = () => {

    const { postId } = useParams();

    // Fetch th post using postId (Do this with an AOI fetch call for real data with an error message also)
    const post = mock_posts.find(post => post.id === parseInt(postId));


    return (
        <>
            <div className="postView-content">
                <div className="postView-container">
                    {post ? (
                        <>
                        <div className="postView-main-container">
                            <div className="postView-main-title-container">
                                <h1 className="postView-main-title-text">{post.title}</h1>
                            </div>
                            <div className="postView-main-info-container">
                                <div className="postView-main-info-data-container">
                                    <span className="postView-main-info-data-author">{post.author}</span>
                                    <span className="postView-main-info-data-date">{post.createdAt}</span>
                                </div>
                                <div className="postView-main-info-like-container">
                                    <span className="postView-main-info-like-btn">♥️</span>
                                    <span className="postView-main-info-like-text">{post.likes}</span> 
                                </div>
                            </div>
                            <div className="postView-main-text-container">
                                <p className="postView-main-text">{post.text}</p>
                            </div>
                        </div>
                        <div className="postView-container-break"></div>
                        <div className="postView-secondary-container">
                            <div className="postView-comments-input-container">
                                <form className="postView-comments-input-form" id="comment-input" action="post">
                                    <span className="postView-comments-input-header">Add a Comment</span>
                                    <input name="comment-username" id="comment-input" type="text" className="comment-username" placeholder="Username"/>
                                    <textarea name="comment-content" id="comment-input" className="comment-content" placeholder="Comment"></textarea>
                                    <input className="comment-submit-btn" type="submit" value="Post Comment" />
                                </form>
                            </div>
                            <div className="postView-comments-break"></div>
                            <div className="postView-comments-content-container">
                                {post.comments.map((comment, index) => (
                                    <div key={index} className="postView-comments-comment-container">
                                        <div className="postView-comment-favicon-container">
                                            <img className="postView-comment-favicon" src="#" alt="Favicon" />
                                        </div>
                                        <div className="postView-comment-data-container">
                                            <div className="postView-comment-info-container">
                                                <div className="postView-comment-info-text-container">
                                                    <h4 className="postView-comment-info-author">{comment.author}</h4>
                                                    <span className="postView-comment-info-date">{comment.date}</span>
                                                </div>
                                                <div className="postView-comment-info-like-container">
                                                    <span className="postView-comment-info-like-btn">♥️</span>
                                                    <span className="postView-comment-info-like-text">{comment.likes}</span> 
                                                </div>
                                            </div>
                                            <div className="postView-comment-content-container">
                                                <p className="postView-comment-content-text">{comment.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </>
                    ) : (
                        <span>Post not found.</span>
                    )}
                </div>
            </div>
        </>
    )
}

export default PostView;