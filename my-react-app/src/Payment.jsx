import "./Payment.css";

function Payment() {
  return (
    <div className="payment-page">
      <div className="payment-card">
        <h1>💳 Payment</h1>
        <p className="subtitle">Fast • Secure • Tasty</p>

        <form className="payment-form">
          <input type="text" placeholder="Cardholder Name" />
          <input type="text" placeholder="Card Number" maxLength="19" />

          <div className="row">
            <input type="text" placeholder="MM / YY" />
            <input type="text" placeholder="CVV" maxLength="3" />
          </div>

          <div className="total">
            Total: <span>$25.00</span>
          </div>

          <button type="button" className="pay-btn">
            <span className="pay-text">🍔 Pay Now</span>
            <span className="pay-sub">Fast & Secure</span>
          </button>
        </form>

        <p className="hint">🔒 This is a demo payment page</p>
      </div>
    </div>
  );
}

export default Payment;
