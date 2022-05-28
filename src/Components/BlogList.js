import {Link} from "react-router-dom";
import './../Styles/BlogList.css'

const BlogList = ({blogs, title}) => {

    return (
        <div className="container">
            <h2>{title}</h2>
            <div className="bloglist">
                {
                    blogs.map((blog) => {
                        return (
                            <div className="blog" key={blog.id}>
                                <Link to={`blog/${blog.id}`} className="blog-title">{blog.title}</Link>
                                <p className="blog-description">{blog.body}</p>
                                <small className="blog-date">{blog.date}</small>
                                <p className="blog-author">Publie par {blog.author}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default BlogList;