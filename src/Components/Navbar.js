import './../Styles/Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/">
                <img src="logo.png" alt="logo"/>
            </a>
            <ul className="items">
                <li className="item">
                    <a href="ln-blog/src/Components/Navbar">Accueil</a>
                </li>
                <li className="item item-article">
                    <a href="ln-blog/src/Components/Navbar">Creer un article</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;