import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/" style={{ color: "#fff" }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/services" style={{ color: "#fff" }}>Services</Link>
                    </li>
                    <li>
                        <Link to="/about" style={{ color: "#fff" }}>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" style={{ color: "#fff" }}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
