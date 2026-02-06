import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Sushi from "./sushi";
import Payment from "./Payment";
import LeftMenu from "./LeftMenu";
import GlobalCart from "./components/GlobalCart";
import Cart from "./components/Cart";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [foodEmojis, setFoodEmojis] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const emojis = [
      "🍔",
      "🍕",
      "🌭",
      "🍟",
      "🌮",
      "🍿",
      "🥤",
      "🍦",
      "🍩",
      "🧇",
      "🥙",
      "🌯",
    ];

    const generated = Array.from({ length: 20 }).map(() => ({
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 10,
    }));

    setFoodEmojis(generated);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* FLOATING EMOJIS */}
      {foodEmojis.map((item, index) => (
        <div
          key={index}
          className="food-emoji"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        >
          {item.emoji}
        </div>
      ))}

      {/* CURSOR */}
      <div
        className="burger-cursor"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        🍔
      </div>

      <Header />

      <div className="main-layout">
        <LeftMenu />

        <div className="food-page">
          <Routes>
            <Route path="/" element={<Food />} />
            <Route path="/sushi" element={<Sushi />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>

        <Cart />
      </div>
      <Footer />
      <GlobalCart />
    </>
  );
}

export default App;
