import {useState, useEffect} from "react";
import './../Styles/Home.css'
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null)

    const deleteBlog = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('https://localhost:8080/blogs')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setBlogs(data)
            })
    }, [])

    return (
        <div className="home">
            {
                blogs ? <BlogList blogs={blogs} deleteBlog={deleteBlog} title={'Liste des blogs'}/> : <div className="loading"></div>
            }
        </div>
    );
}

export default Home;