import { Link } from "react-router-dom";
import logo from "../../img/costs_logo.png";
import Container from "./Container";

function Navbar() {
  return (
    <ul>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <Link to="/company">Empresa</Link>
        </li>
      </Container>
    </ul>
  );
}

export default Navbar;
