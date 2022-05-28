import {useParams} from "react-router-dom";
import getData from "../Data/getData";
import './../Styles/BlogDetail.css'

const BlogDetail = () => {
    const {id} = useParams();

    const {data: blog, loading, error} = getData('http://localhost:8000/blogs/'+id);

    return (
        <div className="detail-blog">
            {
                error && <h2>Une erreur s'est produite ...</h2>
            }
            {
                loading && <div className="loading"></div>
            }
            {
                blog && (
                    <div className="blog-detail">
                        <img src={blog.image} alt="image"/>
                        <div className="content">
                            <h2 className="blog-detail-title">{blog.title}</h2>
                            <p className="blog-detail-description">{blog.body}</p>
                            <small className="blog-detail-date">Depuis le {blog.date}</small>
                            <p className="blog-detail-author">Publie par {blog.author}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default BlogDetail;