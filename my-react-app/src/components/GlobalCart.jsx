import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./GlobalCart.css";

function GlobalCart() {
  const { totalCount } = useCart();
  const navigate = useNavigate();

  if (totalCount === 0) return null;

  return (
    <button
      className="global-cart-btn"
      onClick={() => navigate("/")}
    >
      🛒 <span className="cart-badge">{totalCount}</span>
    </button>
  );
}

export default GlobalCart;