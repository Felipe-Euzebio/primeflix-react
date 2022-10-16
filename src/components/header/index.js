import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className="header">
            
            <Link to="/" className="logo">PrimeFlix</Link>
            <Link to="/movies" className="menu">Filmes</Link>
            <Link to="/favorites" className="favorites">Meus Filmes</Link>

        </header>
    )
}

export default Header;