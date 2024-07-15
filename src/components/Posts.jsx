import './styles/posts.css'
import PostItem from './PostItem'
import { Link, useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'
import loadingIcon from '../assets/icons8-loading.gif';


// Function to fetch posts
const fetchPosts = async () => {
    try {
        const response = await fetch("https://blog-api-app.fly.dev/posts/", { mode: 'cors' });
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data.posts;
    } catch (error) {
        console.log(error);
    }
};


const Posts = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        // scroll to the top when the component mounts
        window.scrollTo(0, 0);
    
        const loadPosts = async () => {
            const fetchedPosts = await fetchPosts();
            setPosts(fetchedPosts);
        }
        loadPosts();    
    }, []);

    return (
        <>
            <div className="posts-content">
                <div className="posts-block">
                    
                        {
                            posts.length === 0 ? (
                                <div className='loading-container'>
                                    <img className='loading-icon' src={loadingIcon} alt="loading..." />
                                </div>
                            ) : (
                                <div className='posts-container'>
                                    {posts.map((post) => (
                                        <div className="post-item" key={post._id}>
                                            <Link className='post-link-posts' to={`/posts/${post._id}`}>
                                                <PostItem key={post._id} post={post}/>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                                )
                        }
                </div>
            </div>
        </>
    )
}

export default Posts;