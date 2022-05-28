const BlogList = ({blogs, title, deleteBlog}) => {

    return (
        <div className="container">
            <h2>{title}</h2>
            <div className="bloglist">
                {
                    blogs.map((blog) => {
                        return (
                            <div className="blog" key={blog.id}>
                                <a href="" className="blog-title">{blog.title}</a>
                                <p className="blog-description">{blog.body}</p>
                                <small className="blog-date">{blog.date}</small>
                                <p className="blog-author">Publie par {blog.author}</p>
                                <button className="blog-delete" onClick={() => deleteBlog(blog.id)}>supprimer</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default BlogList;