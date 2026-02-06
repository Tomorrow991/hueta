import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <div className="cart">
      <h2>🛒 Корзина</h2>

      {cart.length === 0 && <p className="empty">Корзина пуста</p>}

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <span>{item.name}</span>
          <span>x{item.qty}</span>
          <span>{item.qty * item.price} €</span>
          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            ✕
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <div className="total">
            Итого: <strong>{totalPrice.toFixed(2)} €</strong>
          </div>

          <button
            className="checkout-btn"
            onClick={() => navigate("/payment")}
          >
            Оформить заказ
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
