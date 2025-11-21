import { createBrowserRouter } from "react-router";
import App from "./App";
import TvShow from "./componants/TvShow";
import Root from "./Root";
import Blog from "./componants/Blog";
import Moive from "./componants/Moive";
import Pages from "./componants/Pages";
import About from "./componants/About";

export const router = createBrowserRouter([
    {
        path: "/", element: <Root />, children: [
            {
                path: "/tv-show", element: <TvShow />
            },
            {
                path: "/", index: true, element: <App />
            },
            {
                path: "/blog-genre", index: true, element: <Blog/>
            },
            {
                path: "/pages", index: true, element: <Pages/>
            },{
                path: "/about", index: true, element: <About/>
            }
        ]
    }
])