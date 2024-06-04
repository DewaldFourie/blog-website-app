import { useRouteError } from "react-router-dom";

// this is the error component that will be rendered if 
// any route error occurs. Giving a basic error message 
// and also the error detail 
export default function ErrorPage() {
    
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <h4>Sorry, an unexpected error has occurred</h4>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}