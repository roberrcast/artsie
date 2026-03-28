import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>The Open Gallery</h1>

            <nav>
                <ul>
                    <li>Exhibitions</li>
                    <li>Artists</li>
                    <li>Genres</li>
                    <li>Collection</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
