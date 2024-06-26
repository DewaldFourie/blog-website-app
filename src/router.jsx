import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./errorPage";
import Home from "./components/Home";
import Posts from "./components/Posts";
import PostView from "./components/PostView";
import About from "./components/About";
import Base from "./base";


const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Base />,
            errorElement: <ErrorPage />,
            children: [
                { path: "home", element: <Home /> },
                { path: "posts", element: <Posts /> },
                { path: "posts/:postId", element: <PostView /> },
                { path: "about", element: <About /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />

}

export default Router;