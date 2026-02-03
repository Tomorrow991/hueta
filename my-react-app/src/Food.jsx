import { useState } from 'react';
import './Food.css';

const PRICE = 8;

function Food() {
  const [foods, setFoods] = useState([
    {
      name: "Pizza",
      ingredients: ["Dough", "Tomato Sauce", "Mozzarella", "Basil"],
      recipe: [
        "Roll out the dough",
        "Spread tomato sauce",
        "Add mozzarella",
        "Bake at 220°C for 12 minutes",
        "Add basil before serving"
      ],
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
      open: false
    },
    {
      name: "Burger",
      ingredients: ["Bun", "Chicken Patty", "Cheese", "Lettuce"],
      recipe: [
        "Grill the chicken patty",
        "Toast the buns",
        "Assemble burger with sauce",
        "Add cheese and lettuce"
      ],
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      open: false
    },
    {
      name: "Pasta",
      ingredients: ["Pasta", "Tomato Sauce", "Parmesan"],
      recipe: [
        "Boil pasta until al dente",
        "Heat tomato sauce",
        "Mix pasta with sauce",
        "Top with parmesan"
      ],
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
      open: false
    }
  ]);

  const [cart, setCart] = useState([]);

  const toggleOpen = (index) => {
    setFoods(
      foods.map((f, i) =>
        i === index ? { ...f, open: !f.open } : f
      )
    );
  };

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="menu-layout">
      
      {/* MENU */}
      <div className="menu">
        <h2>🍴 Fast Food Menu</h2>

        <div className="food-grid">
          {foods.map((food, index) => (
            <div className="food-card" key={index}>
              <img src={food.image} alt={food.name} />

              <div className="food-content">
                <h3>{food.name}</h3>
                <p className="price">💰 {PRICE} €</p>

                <button onClick={() => addToCart(food)}>
                  🛒 Add to cart
                </button>

                <span
                  className="details-toggle"
                  onClick={() => toggleOpen(index)}
                >
                  {food.open ? "Hide details ▲" : "Show details ▼"}
                </span>

                {food.open && (
                  <div className="details">
                    <strong>Ingredients:</strong>
                    <ul>
                      {food.ingredients.map((i, idx) => (
                        <li key={idx}>✓ {i}</li>
                      ))}
                    </ul>

                    <strong>Recipe:</strong>
                    <ol>
                      {food.recipe.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CART */}
      <aside className="cart">
        <h3>🛒 Cart</h3>

        {cart.length === 0 && (
          <p className="empty">Cart is empty</p>
        )}

        {cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <span>{item.name}</span>
            <span>{PRICE} €</span>
            <button onClick={() => removeFromCart(index)}>✕</button>
          </div>
        ))}

        <div className="cart-total">
          Total: <strong>{cart.length * PRICE} €</strong>
        </div>

        <button className="checkout">
          ✅ Checkout
        </button>
      </aside>

    </div>
  );
}

export default Food;
