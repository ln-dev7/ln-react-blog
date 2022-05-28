import './../Styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src="/logo.png" alt="logo"/>
            </Link>
            <ul className="items">
                <li className="item">
                    <Link to="/">Accueil</Link>
                </li>
                <li className="item">
                    <Link className="item-article" to="/add-article">Creer un article</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;