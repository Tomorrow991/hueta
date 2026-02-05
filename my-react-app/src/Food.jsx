import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Food.css";

const foodMenu = [
  {
    id: 1,
    name: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    recipe: "Dough, tomato sauce, mozzarella, basil",
    price: 8,
  },
  {
    id: 2,
    name: "Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    recipe: "Bun, beef patty, cheese, lettuce, sauce",
    price: 8,
  },
  {
    id: 3,
    name: "Hot Dog",
    image:
      "https://s.yimg.com/ny/api/res/1.2/Ja7TP8wzyQayr5cD90XO9g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU7Y2Y9d2VicA--/https://media.zenfs.com/en/food_republic_969/682da8ede78ff8fb5d0cfb7b7bf42ec6",
    recipe: "Sausage, bun, mustard, ketchup",
    price: 8,
  },
  {
    id: 4,
    name: "Fries",
    image:
      "https://i.pinimg.com/736x/80/34/37/80343721093255119bc76ff45bb2b101.jpg",
    recipe: "Potatoes, salt, oil",
    price: 8,
  },
  {
    id: 5,
    name: "Black Burger",
    image:
      "https://img.freepik.com/free-photo/grilled-beef-burger-with-melted-cheddar-cheese-generative-ai_188544-40944.jpg?semt=ais_hybrid",
    recipe: "Black bun, beef patty, cheese",
    price: 8,
  },
  {
    id: 6,
    name: "Hot Chicken Wings",
    image:
      "https://i.pinimg.com/736x/67/67/d3/6767d3f1b11332b59942d4f491e0bc5a.jpg",
    recipe: "Spicy chicken wings with sauce",
    price: 8,
  },
];

function Food() {
  const [animateId, setAnimateId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const { cart, addToCart, removeFromCart, totalPrice } = useCart();

  const handleAddToCart = (food) => {
    addToCart(food);
    
    setAnimateId(food.id);
    setTimeout(() => setAnimateId(null), 500);
  };

  const filteredFood = foodMenu.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="food-page">
      <div className="menu">
        <h2>🍔 Fast Food Menu</h2>

        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Search for food..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              className="clear-search"
              onClick={() => setSearchQuery("")}
            >
              ✕
            </button>
          )}
        </div>

        {searchQuery && (
          <p className="search-results">
            Found {filteredFood.length} dish{filteredFood.length !== 1 ? 'es' : ''}
          </p>
        )}

        {filteredFood.length === 0 && (
          <div className="no-results">
            <p>😔 No dishes found for "{searchQuery}"</p>
          </div>
        )}

        <div className="food-grid">
          {filteredFood.map((food) => (
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
                <div className="food-price">{food.price} €</div>

                <button
                  className={`add-btn ${
                    animateId === food.id ? "btn-animate" : ""
                  }`}
                  onClick={() => handleAddToCart(food)}
                >
                  ➕ Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cart">
        <h2>🛒 Cart</h2>

        {cart.length === 0 && <p className="empty">Cart is empty</p>}

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
              Total: <strong>{totalPrice.toFixed(2)} €</strong>
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