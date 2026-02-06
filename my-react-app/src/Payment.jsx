import "./Payment.css";

function Payment() {
  return (
    <div className="payment-page">
      <div className="payment-card">
        <h1>💳 Оплата</h1>
        <p className="subtitle">Быстро • Безопасно • Вкусно</p>

        <form className="payment-form">
          <input type="text" placeholder="Имя владельца карты" />
          <input type="text" placeholder="Номер карты" maxLength="19" />

          <div className="row">
            <input type="text" placeholder="ММ / ГГ" />
            <input type="text" placeholder="CVV" maxLength="3" />
          </div>

          <div className="total">
            Итого: <span>25.00 €</span>
          </div>

          <button type="button" className="pay-btn">
            <span className="pay-text">🍔 Оплатить</span>
            <span className="pay-sub">Быстро и безопасно</span>
          </button>
        </form>

        <p className="hint">🔒 Это демо-страница оплаты</p>
      </div>
    </div>
  );
}

export default Payment;
