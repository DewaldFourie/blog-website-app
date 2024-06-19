import { Link, useParams } from "react-router-dom";
import './styles/postView.css'
import { useState, useEffect } from "react";

let mock_posts = [
    {
        id: 1,
        title: "test 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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

// Function to fetch posts, this will fecth the correct individual post by using ID
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


const PostView = () => {
    const [post, setPost] = useState()
    const [comments, setComments] = useState([])
    const [showReturnButton, setShowReturnButton] = useState(false);
    const [isScrolledToMax, setIsScrolledToMax] = useState(false);

    // get the postID from the params of the API routes
    const { postId } = useParams();


    const handleToTop = () => {
        window.scrollTo(0, 0);
    }


    useEffect(() => {

        const loadPost = async (post_id) => {
            const fetchedPost = await fetchPost(post_id);
            setPost(fetchedPost.post)
            setComments(fetchedPost.comments)
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



    return (
        <>
            <div className="postView-content">
                { showReturnButton && (
                    <Link className={!isScrolledToMax ? `postView-return-container` : `postView-return-scrollMax-container` } to={'/posts'}>
                        <span className="postView-return-btn">⬅︎ Back to All Posts</span>
                    </Link>
                )} 
                <div className="postView-container">
                    {post ? (
                        <>
                        <div className="postView-main-container">
                            <div className="postView-main-title-container">
                                <h1 className="postView-main-title-text">{post.title}</h1>
                            </div>
                            <div className="postView-main-info-container">
                                <div className="postView-main-info-data-container">
                                    <span className="postView-main-info-data-author">{post.author.username}</span>
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
                                                    <span className="postView-comment-info-date">{comment.createdAt}</span>
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
                                )})}
                            </div>
                        </div>
                        <div className="postView-footer-container">
                            <button className="postView-footer-btn"  onClick={handleToTop}>To Top ⬆︎</button>
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