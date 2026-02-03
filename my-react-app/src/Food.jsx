import { useState } from 'react';
import './Food.css';

const PRICE_PER_ITEM = 8; // одинаковая цена

function Food() {
  const [foods, setFoods] = useState([
    {
      name: "Pizza",
      ingredients: ["Dough", "Tomato Sauce", "Mozzarella", "Basil"],
      isOpen: false,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop"
    },
    {
      name: "Burger",
      ingredients: ["Bun", "Chicken Patty", "Cheese", "Lettuce"],
      isOpen: false,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"
    },
    {
      name: "Pasta",
      ingredients: ["Pasta", "Tomato Sauce", "Parmesan"],
      isOpen: false,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
    }
  ]);

  const [cart, setCart] = useState([]);
  const [newFood, setNewFood] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [newImage, setNewImage] = useState("");

  const toggleIngredients = (index) => {
    setFoods(
      foods.map((food, i) =>
        i === index ? { ...food, isOpen: !food.isOpen } : food
      )
    );
  };

  const handleAddFood = () => {
    if (!newFood.trim()) return;

    const ingredientsArray = newIngredients
      .split(',')
      .map(i => i.trim())
      .filter(Boolean);

    setFoods([
      ...foods,
      {
        name: newFood,
        ingredients: ingredientsArray.length ? ingredientsArray : ["No ingredients"],
        isOpen: false,
        image:
          newImage ||
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
      }
    ]);

    setNewFood("");
    setNewIngredients("");
    setNewImage("");
  };

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.length * PRICE_PER_ITEM;

  return (
    <div className="food-container">
      <h2 className="food-title">🍔 Fast Food Menu</h2>

      {/* ADD FOOD */}
      <div className="add-food-panel">
        <input
          value={newFood}
          onChange={(e) => setNewFood(e.target.value)}
          placeholder="🍕 Food name"
        />
        <input
          value={newIngredients}
          onChange={(e) => setNewIngredients(e.target.value)}
          placeholder="🥬 Ingredients (comma separated)"
        />
        <input
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
          placeholder="🖼 Image URL"
        />
        <button onClick={handleAddFood}>➕ Add Food</button>
      </div>

      {/* CART */}
      <div className="cart">
        <h3>🛒 Cart</h3>

        {cart.length === 0 && <p className="empty-cart">Cart is empty</p>}

        {cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <span>{item.name}</span>
            <span>{PRICE_PER_ITEM} €</span>
            <button onClick={() => removeFromCart(index)}>❌</button>
          </div>
        ))}

        <div className="cart-total">
          Total: <strong>{totalPrice} €</strong>
        </div>
      </div>

      {/* FOOD GRID */}
      <div className="food-grid">
        {foods.map((food, index) => (
          <div className="food-card" key={index}>
            <img
              src={food.image}
              alt={food.name}
              onClick={() => toggleIngredients(index)}
            />

            <div className="food-card-body">
              <h3 onClick={() => toggleIngredients(index)}>
                {food.isOpen ? '▼' : '▶'} {food.name}
              </h3>

              <p className="price">💰 {PRICE_PER_ITEM} €</p>

              <button
                className="add-cart-btn"
                onClick={() => addToCart(food)}
              >
                🛒 Add to cart
              </button>

              {food.isOpen && (
                <div className="ingredients">
                  <strong>Ingredients:</strong>
                  <ul>
                    {food.ingredients.map((i, idx) => (
                      <li key={idx}>✓ {i}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
