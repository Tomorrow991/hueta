import { useState } from "react";
import { useCart } from "./context/CartContext";
import "./Food.css";

const foodMenu = [
  {
    id: 1,
    name: "Пицца",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    recipe: "Тесто, томатный соус, моцарелла, базилик",
    price: 8,
  },
  {
    id: 2,
    name: "Бургер",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    recipe: "Булка, говяжья котлета, сыр, салат, соус",
    price: 8,
  },
  {
    id: 3,
    name: "Хот-дог",
    image:
      "https://s.yimg.com/ny/api/res/1.2/Ja7TP8wzyQayr5cD90XO9g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU7Y2Y9d2VicA--/https://media.zenfs.com/en/food_republic_969/682da8ede78ff8fb5d0cfb7b7bf42ec6",
    recipe: "Сосиска, булка, горчица, кетчуп",
    price: 8,
  },
  {
    id: 4,
    name: "Картошка фри",
    image:
      "https://i.pinimg.com/736x/80/34/37/80343721093255119bc76ff45bb2b101.jpg",
    recipe: "Картофель, соль, масло",
    price: 8,
  },
  {
    id: 5,
    name: "Чёрный бургер",
    image:
      "https://img.freepik.com/free-photo/grilled-beef-burger-with-melted-cheddar-cheese-generative-ai_188544-40944.jpg?semt=ais_hybrid",
    recipe: "Чёрная булка, говяжья котлета, сыр",
    price: 8,
  },
  {
    id: 6,
    name: "Острые крылышки",
    image:
      "https://i.pinimg.com/736x/67/67/d3/6767d3f1b11332b59942d4f491e0bc5a.jpg",
    recipe: "Острые куриные крылышки с соусом",
    price: 8,
  },
];

function Food() {
  const [animateId, setAnimateId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();

  const handleAddToCart = (food) => {
    addToCart(food);
    
    setAnimateId(food.id);
    setTimeout(() => setAnimateId(null), 500);
  };

  const filteredFood = foodMenu.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="menu">
      <h2>🍔 Бургеры</h2>

        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Поиск блюд..."
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
            Найдено {filteredFood.length} {filteredFood.length === 1 ? 'блюдо' : filteredFood.length < 5 ? 'блюда' : 'блюд'}
          </p>
        )}

        {filteredFood.length === 0 && (
          <div className="no-results">
            <p>😔 Ничего не найдено для "{searchQuery}"</p>
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
                  ➕ В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Food;