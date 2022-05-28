import './Styles/App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="container">
                    <Home/>
                </div>
            </div>
        </Router>
    );
}

export default App;
