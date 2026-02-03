import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Food.css";

const PRICE = 8;

const foodMenu = [
  {
    id: 1,
    name: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    recipe: "Dough, tomato sauce, mozzarella, basil",
  },
  {
    id: 2,
    name: "Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    recipe: "Bun, beef patty, cheese, lettuce, sauce",
  },
  {
    id: 3,
    name: "Hot Dog",
    image:
      "https://s.yimg.com/ny/api/res/1.2/Ja7TP8wzyQayr5cD90XO9g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU7Y2Y9d2VicA--/https://media.zenfs.com/en/food_republic_969/682da8ede78ff8fb5d0cfb7b7bf42ec6",
    recipe: "Sausage, bun, mustard, ketchup",
  },
  {
    id: 4,
    name: "Fries",
    image:
      "https://i.pinimg.com/736x/80/34/37/80343721093255119bc76ff45bb2b101.jpg",
    recipe: "Potatoes, salt, oil",
  },
  {
    id: 5,
    name: "Black Burger",
    image:
      "https://img.freepik.com/free-photo/grilled-beef-burger-with-melted-cheddar-cheese-generative-ai_188544-40944.jpg?semt=ais_hybrid",
    recipe: "Potatoes, salt, oil",
  },
  {
    id: 6,
    name: "Hot Chinken Wings",
    image:
      "https://i.pinimg.com/736x/67/67/d3/6767d3f1b11332b59942d4f491e0bc5a.jpg",
    recipe: "Potatoes, salt, oil",
  },
];

function Food() {
  const [cart, setCart] = useState([]);
  const [animateId, setAnimateId] = useState(null);
  const navigate = useNavigate();

  const addToCart = (food) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === food.name);

      if (existing) {
        return prev.map((item) =>
          item.name === food.name ? { ...item, qty: item.qty + 1 } : item,
        );
      }

      return [...prev, { ...food, qty: 1 }];
    });

    // 🔥 trigger animation
    setAnimateId(food.id);
    setTimeout(() => setAnimateId(null), 500);
  };

  const removeFromCart = (name) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, qty: item.qty - 1 } : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.qty * PRICE, 0);

  return (
    <div className="food-page">
      {/* MENU */}
      <div className="menu">
        <h2>🍔 Fast Food Menu</h2>

        <div className="food-grid">
          {foodMenu.map((food) => (
            <div
              key={food.id}
              className={`food-card ${
                animateId === food.id ? "food-animate" : ""
              }`}
            >
              <img src={food.image} alt={food.name} />

              <div className="food-content">
                <h3>{food.name}</h3>
                <p className="food-recipe">{food.recipe}</p>
                <div className="food-price">{PRICE} €</div>

                <button
                  className={`add-btn ${
                    animateId === food.id ? "btn-animate" : ""
                  }`}
                  onClick={() => addToCart(food)}
                >
                  ➕ Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CART */}
      <div className="cart">
        <h2>🛒 Cart</h2>

        {cart.length === 0 && <p className="empty">Cart is empty</p>}

        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <span>{item.name}</span>
            <span>x{item.qty}</span>
            <span>{item.qty * PRICE} €</span>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.name)}
            >
              ✕
            </button>
          </div>
        ))}

        {cart.length > 0 && (
          <>
            <div className="total">
              Total: <strong>{totalPrice} €</strong>
            </div>

            <button
              className="checkout-btn"
              onClick={() => navigate("/payment")}
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Food;
