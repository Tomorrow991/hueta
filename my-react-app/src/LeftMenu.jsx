// LeftMenu.jsx
import "./LeftMenu.css";

export default function LeftMenu() {
  return (
    <nav className="left-menu">
      <ul className="nav-list">
        <li><span className="nav-link">Home</span></li>
        <li><span className="nav-link">Menu</span></li>
        <li><span className="nav-link">Cart</span></li>
        <li><span className="nav-link">Payment</span></li>
        <li><span className="nav-link">Contact</span></li>
      </ul>
    </nav>
  );
}
