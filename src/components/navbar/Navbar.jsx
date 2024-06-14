import './Navbar.css';
import { TbShoppingBagPlus } from "react-icons/tb";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>Rivo</h1>
        </div>
          <ul className='nav-item'>
            <li>HOME</li>
            <li>SHOP</li>
            <li>FEATURES</li>
            <li>CONTACT</li>
          </ul>
          <div className="cart-auth-container">
          <div className="cart">
            <TbShoppingBagPlus />
          </div>
          <div className="auth">
            <button>Login</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
