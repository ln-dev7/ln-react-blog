import './Styles/App.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import AddArticle from "./Pages/AddArticle";
import BlogDetail from "./Components/BlogDetail";


function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/add-article'>
                    <AddArticle/>
                </Route>
                <Route path='/blog/:id'>
                    <BlogDetail/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
