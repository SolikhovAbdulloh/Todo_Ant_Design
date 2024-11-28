import { createBrowserRouter } from "react-router-dom";
import App from "..";

export const root = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    }
])