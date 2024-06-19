import './styles/posts.css'
import PostItem from './PostItem'
import { Link, useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Mock data of posts for development and testing purposes
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
                    <div className='posts-container'>
                        {
                            posts.length === 0 ? (
                                <p>Loading posts...</p>
                            ) : (
                            posts.map((post) => (
                                <div className="post-item" key={post._id}>
                                    <Link className='post-link-posts' to={`/posts/${post._id}`}>
                                        <PostItem key={post._id} post={post}/>
                                    </Link>
                                </div>
                            )))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts;