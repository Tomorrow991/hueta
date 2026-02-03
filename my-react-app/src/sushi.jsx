import "./Sushi.css";

function Sushi() {
  const sushiList = [
    {
      id: 1,
      name: "Филадельфия",
      description: "Лосось, сливочный сыр, рис",
      price: 8.9,
      image:
        "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=800",
    },
    {
      id: 2,
      name: "Калифорния",
      description: "Краб, авокадо, огурец",
      price: 7.5,
      image:
        "https://images.unsplash.com/photo-1607301406259-dfb186e15de8?w=800",
    },
    {
      id: 3,
      name: "Запечённый ролл",
      description: "Лосось, сыр, соус унаги",
      price: 9.2,
      image:
        "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800",
    },
    {
      id: 4,
      name: "Дракон",
      description: "Угорь, авокадо, унаги",
      price: 10.5,
      image:
        "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800",
    },
    {
      id: 5,
      name: "Сет мини",
      description: "12 кусочков ассорти",
      price: 14.9,
      image:
        "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=800",
    },
    {
      id: 6,
      name: "Темпура ролл",
      description: "Креветка, соус спайси",
      price: 8.4,
      image:
        "https://лапша-и-рис.рф/wp-content/uploads/2023/12/natz_tempura.jpg",
    },
  ];

  return (
    <section className="sushi-section">
      <h2 className="sushi-title">🍣 Суши</h2>

      <div className="sushi-grid">
        {sushiList.map((sushi) => (
          <div key={sushi.id} className="sushi-card">
            <img src={sushi.image} alt={sushi.name} />

            <div className="sushi-content">
              <h3>{sushi.name}</h3>
              <p>{sushi.description}</p>
              <div className="sushi-price">{sushi.price} €</div>

              <button className="sushi-btn">➕ Добавить</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sushi;
