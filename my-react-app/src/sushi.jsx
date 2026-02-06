import { useState } from "react";
import { useCart } from "./context/CartContext";
import "./Sushi.css";

const sushiList = [
  {
    id: 7,
    name: "Филадельфия",
    description: "Лосось, сливочный сыр, рис",
    price: 8.9,
    image:
      "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=800",
  },
  {
    id: 8,
    name: "Калифорния",
    description: "Краб, авокадо, огурец",
    price: 7.5,
    image:
      "https://images.unsplash.com/photo-1607301406259-dfb186e15de8?w=800",
  },
  {
    id: 9,
    name: "Запечённый ролл",
    description: "Лосось, сыр, соус унаги",
    price: 9.2,
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800",
  },
  {
    id: 10,
    name: "Дракон",
    description: "Угорь, авокадо, унаги",
    price: 10.5,
    image:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800",
  },
  {
    id: 11,
    name: "Сет мини",
    description: "12 кусочков ассорти",
    price: 14.9,
    image:
      "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=800",
  },
  {
    id: 12,
    name: "Темпура ролл",
    description: "Креветка, соус спайси",
    price: 8.4,
    image:
      "https://лапша-и-рис.рф/wp-content/uploads/2023/12/natz_tempura.jpg",
  },
];

function Sushi() {
  const [searchQuery, setSearchQuery] = useState("");
  const [animateId, setAnimateId] = useState(null);
  
  const { addToCart } = useCart();

  const handleAddToCart = (sushi) => {
    addToCart(sushi);
    
    setAnimateId(sushi.id);
    setTimeout(() => setAnimateId(null), 500);
  };

  const filteredSushi = sushiList.filter((sushi) =>
    sushi.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="sushi-section">
      <h2 className="sushi-title">🍣 Суши</h2>

      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Поиск суши..."
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
          Найдено {filteredSushi.length} {filteredSushi.length === 1 ? 'блюдо' : filteredSushi.length < 5 ? 'блюда' : 'блюд'}
        </p>
      )}

      {filteredSushi.length === 0 && (
        <div className="no-results">
          <p>😔 Ничего не найдено для "{searchQuery}"</p>
        </div>
      )}

      <div className="sushi-grid">
        {filteredSushi.map((sushi) => (
          <div 
            key={sushi.id} 
            className={`sushi-card ${
              animateId === sushi.id ? "sushi-animate" : ""
            }`}
          >
            <img src={sushi.image} alt={sushi.name} />

            <div className="sushi-content">
              <h3>{sushi.name}</h3>
              <p>{sushi.description}</p>
              <div className="sushi-price">{sushi.price} €</div>

              <button 
                className={`sushi-btn ${
                  animateId === sushi.id ? "btn-animate" : ""
                }`}
                onClick={() => handleAddToCart(sushi)}
              >
                ➕ Добавить
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sushi;