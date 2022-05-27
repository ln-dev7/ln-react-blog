import './Styles/App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="container">
                <Home />
            </div>
        </div>
    );
}

export default App;
