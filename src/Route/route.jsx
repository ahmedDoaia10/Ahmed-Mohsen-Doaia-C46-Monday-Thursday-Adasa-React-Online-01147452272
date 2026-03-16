import { createBrowserRouter } from "react-router";
import Layout from "../Component/Layout/Layout";
import Home from "../Pages/Home/Home";
import Aboutus from "../Pages/Aboutus/Aboutus";
import Blog from "../Pages/Blog/Blog";
import NotFound from "../Component/NotFound/NotFound";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";

const routes =createBrowserRouter([
    {path : "/" , element : <Layout /> , children : [
        {index : true , element : <Home />},
        {path : "aboutus" , element : <Aboutus />},
        {path : "blog" , element : <Blog />},
        {path : "blogdetails/:slug" , element : <BlogDetails />},
        {path : "*" , element : <NotFound />},
    ]}


])

export default routes