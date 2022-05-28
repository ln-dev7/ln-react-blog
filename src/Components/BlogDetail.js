import {useParams} from "react-router-dom";
import getData from "../Data/getData";
import {useHistory} from "react-router-dom";
import './../Styles/BlogDetail.css'

const BlogDetail = () => {
    const {id} = useParams();

    const {data: blog, loading, error} = getData('http://localhost:8000/blogs/' + id);

    const history = useHistory();

    const deleteBlog = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        })
            .then(() => {
                history.push('/');
            })
    }

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
                        <button onClick={deleteBlog} className="blog-detail-delete">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path
                                    d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm2 2v10h12V10H6zm3 2h2v6H9v-6zm4 0h2v6h-2v-6zM7 5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9z"
                                    fill="rgba(255,255,255,1)"/>
                            </svg>
                        </button>
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