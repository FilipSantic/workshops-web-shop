import { Link } from "react-router-dom";
import Logo from '../img/logo.png';

function Header() {

  return (
    <header className="header">
      <div className="logo">
        <Link to="/login">
        <img src={Logo} alt="logo" />
        </Link>
      </div>
    </header>
  );
}

export default Header;