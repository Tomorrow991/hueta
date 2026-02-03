import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Food from './Food';
import Payment from './Payment';
import LeftMenu from "./LeftMenu";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [foodEmojis, setFoodEmojis] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const emojis = ['🍔', '🍕', '🌭', '🍟', '🌮', '🍿', '🥤', '🍦', '🍩', '🧇', '🥙', '🌯'];
    const generatedEmojis = [];

    for (let i = 0; i < 20; i++) {
      generatedEmojis.push({
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 15 + Math.random() * 10
      });
    }

    setFoodEmojis(generatedEmojis);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Floating food emojis */}
      {foodEmojis.map((item, index) => (
        <div
          key={index}
          className="food-emoji"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`
          }}
        >
          {item.emoji}
        </div>
      ))}

      {/* Pizza cursor */}
      <div
        className="burger-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        🍔
      </div>

      <Header />
 <LeftMenu />
      {/* 🔥 ROUTES */}
      <Routes>
        <Route path="/" element={<Food />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
