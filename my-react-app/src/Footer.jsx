import './Footer.css';

function Footer() {
  return (
    <footer className="fastfood-footer">
      <div className="footer-emojis">
        🍔 🍟 🌭 🍕 🌮 🍩 🥤
      </div>

      <h2 className="footer-title">
        Быстро • Вкусно • Весело
      </h2>

      <p className="footer-text">
        Сделано с любовью и без сожалений 😎
      </p>

      <div className="footer-bottom">
        © {new Date().getFullYear()} FastFood App
      </div>
    </footer>
  );
}

export default Footer;
