import './Footer.css';

function Footer() {
  return (
    <footer className="fastfood-footer">
      <div className="footer-emojis">
        🍔 🍟 🌭 🍕 🌮 🍩 🥤
      </div>

      <h2 className="footer-title">
        Fast • Tasty • Fun
      </h2>

      <p className="footer-text">
        Made with extra cheese & zero regrets 😎
      </p>

      <div className="footer-bottom">
        © {new Date().getFullYear()} FastFood App
      </div>
    </footer>
  );
}

export default Footer;
