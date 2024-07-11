import { useEffect, useState } from 'react';
import './styles/home.css'
import { Link } from 'react-router-dom';

// Function to fetch posts, this will fetch the last 3 posts using the correct route
const fetchPosts = async () => {
    try {
        const response = await fetch("https://blog-api-app.fly.dev/posts/last/3", { mode: 'cors' });
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data.posts;
    } catch (error) {
        console.log(error);
    }
};

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // scroll to the top when the component mounts
        window.scrollTo(0, 0);

        const loadPosts = async () => {
            const fetchedPosts = await fetchPosts();
            setPosts(fetchedPosts);
        }
        loadPosts()
    }, []);

    return (
        <>
            <div className="home-content">
                <div className="banner-container">
                    <div className="banner-container-info">
                        <h1 className="banner-container-text">The Road less Traveled</h1>
                    </div>
                </div>
                <div className="segment-1-container">
                    <div className='home-posts-container'>
                        {posts.map((post, index) => {
                            if (!post.imageURL) {
                                console.error(`Post at index ${index} does not have a valid imageURL`, post);
                            }
                            return (
                                <div 
                                    key={index} 
                                    className={`home-post-item-container item-${index + 1}`} 
                                >
                                    <Link className='post-link-home' to={`/posts/${post._id}`}>
                                        {post.imageURL && (
                                            <img className='home-post-image' src={post.imageURL} alt="" /> 
                                        )}
                                        <div className='home-post-overlay'>
                                            <h1 className='home-post-title'>{post.title}</h1>
                                            <h2 className='home-post-author-and-date'>{post.author.username} | {new Date(post.createdAt).toLocaleDateString('en-GB').replace(/\//g, '-')}</h2>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                    <div className='home-posts-link-container'>
                        <Link className='home-posts-link-reset' to={'/posts'}>
                            <span className='home-all-posts-link'>See all Posts ➜</span>
                        </Link>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default Home;
