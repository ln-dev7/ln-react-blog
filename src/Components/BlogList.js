import {Link} from "react-router-dom";
import './../Styles/BlogList.css'

const BlogList = ({blogs, title}) => {

    return (
        <div className="container">
            <div className="bloglist">
                {
                    blogs.map((blog) => {
                        return (
                            <Link className="blog-link" to={`blog/${blog.id}`}>
                                <div className="blog" key={blog.id}>
                                    <h3 className="blog-title">{blog.title}</h3>
                                    <p className="blog-description">{blog.body.length > 200 ? blog.body.substring(0, 150) + " ..." : blog.body}</p>
                                    <small className="blog-date">{blog.date}</small>
                                    <p className="blog-author">Publie par {blog.author}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default BlogList;