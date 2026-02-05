import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartCount } from "../store/cartSlice";
import "./GlobalCart.css";

function GlobalCart() {
  const cartCount = useSelector(selectCartCount);
  const navigate = useNavigate();

  if (cartCount === 0) return null;

  return (
    <button 
      className="global-cart-btn"
      onClick={() => navigate("/food")}
    >
      🛒 <span className="cart-badge">{cartCount}</span>
    </button>
  );
}

export default GlobalCart;