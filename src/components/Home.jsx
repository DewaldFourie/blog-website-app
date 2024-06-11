import { useEffect, useState } from 'react';
import './styles/home.css'



// Mock data of posts for development and testing purposes
let mock_posts = [
    {
        id: 1,
        title: "test 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03T13:02:04.530+00:00'
    },
    {
        id: 2,
        title: "test 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03T13:02:04.530+00:00'
    },
    {
        id: 3,
        title: "test 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03T13:02:04.530+00:00'
    },
    {
        id: 4,
        title: "test 4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        author: "test Author",
        likes: 0,
        published: true,
        createdAt: '2024-06-03T13:02:04.530+00:00'
    }
]



const Home = () => {

    // useEffect(() => {
    //     // scroll to the top when the component mounts
    //     window.scrollTo(0, 0);
    // }, []);


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
                        {data.slice(0, 3).map((item, index) => (
                            <div key={index} className={`home-post-item-container item-${index + 1}`}>
                                <h1>{item.title}</h1>
                                <h2>{item.author} | {item.createdAt}</h2>
                            </div>
                        ))
                        }
                    </div>
                    <div className='home-posts-link-container'>
                        <span className='home-posts-link'>See all Posts ➜</span>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default Home;