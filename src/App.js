import './Styles/App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="container">
                    <Switch>
                        <Route path={'/'}>
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
