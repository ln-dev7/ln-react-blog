import '../Styles/Home.css'
import BlogList from "../Components/BlogList";
import getData from "../Data/getData.js";

const Home = () => {

    const {data: blogs, loading, error} = getData('http://localhost:8000/blogs?_sort=id&_order=desc');

    return (
        <div className="home">
            {
                error && <h2>Une erreur s'est produite ...</h2>
            }
            {
                loading && <div className="loading"></div>
            }
            {
                blogs && <BlogList blogs={blogs} title={'Liste des blogs'}/>
            }
        </div>
    );
}

export default Home;