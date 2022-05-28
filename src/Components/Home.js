import {useState, useEffect} from "react";
import './../Styles/Home.css'
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const deleteBlog = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then((response) => {
                if (response.ok){
                    setError(false)
                    return response.json()
                }
                else {
                    setLoading(false)
                    setError(true)
                }
            })
            .then((data) => {
                setLoading(false)
                setError(false)
                setBlogs(data)
            })
            .catch(err => {
                setLoading(false)
                setError(true)
                console.log(err.message)
            })
    }, [])

    return (
        <div className="home">
            {
                error && <h2>Une erreur s'est produite ...</h2>
            }
            {
                loading && <div className="loading"></div>
            }
            {
                blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog} title={'Liste des blogs'}/>
            }
        </div>
    );
}

export default Home;