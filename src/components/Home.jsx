import { useEffect, useState } from 'react';
import './styles/home.css'
import { Link } from 'react-router-dom';



// Mock data of posts for development and testing purposes
let mock_posts = [
    {
        id: 1,
        title: "test 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03',
        comments: 3,
    },
    {
        id: 2,
        title: "test 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03',
        comments: 3,
    },
    {
        id: 3,
        title: "test 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03',
        comments: 3,
    },
    {
        id: 4,
        title: "test 4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03',
        comments: 3,
    },
    {
        id: 5,
        title: "test 5",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03',
        comments: 3,
    },
    {
        id: 6,
        title: "test 6",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03',
        comments: 3,
    },
    {
        id: 7,
        title: "test 7",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03',
        comments: 3,
    },
    {
        id: 8,
        title: "test 8",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03',
        comments: 3,
    }
]




const Home = () => {

    useEffect(() => {
        // scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);


    const [data, setData] = useState(mock_posts);

    return (
        <>
            <div className="home-content">
                <div className="banner-container">
                    <div className="banner-container-info">
                        <h1 className="banner-container-text">HOME Banner text</h1>
                    </div>
                </div>
                <div className="segment-1-container">
                    <div className='home-posts-container'>
                        {data.slice(0, 3).map((post, index) => (
                            <div key={index} className={`home-post-item-container item-${index + 1}`}>
                                <Link className='post-link-home' to={`/posts/${post.id}`}>
                                    <h1>{post.title}</h1>
                                    <h2>{post.author} | {post.createdAt}</h2>
                                </Link>
                            </div>
                        ))
                        }
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