import { Link } from "react-router-dom";
import './error.css';

function NotFound() {
    return (
      <div className="not-found">
        <h1>Erro 404</h1>
        <h2>Página Não Encontrada</h2>
        <Link to="/">Veja todos os filmes</Link>
      </div>
    );
  }
  
  export default NotFound;
  