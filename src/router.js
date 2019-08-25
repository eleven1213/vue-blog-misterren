import ShowBlogs from './components/ShowBlogs'
import AddBlog from './components/AddBlog'
import ListBlogs from './components/ListBlogs'
import SingleBlog from './components/SingleBlog'
export default [
     {path:"/",component:ShowBlogs},
    {path:"/blog/:id",component:SingleBlog},
    {path:"/list",component:ListBlogs}
]

