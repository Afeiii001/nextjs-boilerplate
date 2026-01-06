export default function Home() {
  return (
    <div>
      <header>
        <div className="container nav-container">
          <div className="logo">🛒 SaveSmart</div>
          <nav className="nav-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a
              href="#"
              className="btn btn-primary"
              style={{ padding: "8px 16px", fontSize: "0.9rem" }}
            >
              Install Now
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>
              SaveSmart: Smart, Automatic Cashback. <br />
              Never Miss a Deal.
            </h1>
            <p className="sub-headline">
              Instantly Get Verified Coupons & Auto-Pilot Cashback on 1,000+
              Stores. One-Click Activation. Shop like normal.
            </p>
            <a
              href="#"
              className="btn btn-primary"
              style={{ fontSize: "1.1rem", padding: "16px 32px" }}
            >
              Get SaveSmart & Start Saving Free
            </a>
            <p className="trust-text">
              ✅ Trusted by 5,000+ Smart Shoppers. Available for Chrome.
            </p>
          </div>
          <div className="hero-image">
            <div
              style={{
                width: "90%",
                height: "80%",
                background: "#f9f9f9",
                borderRadius: 8,
                position: "relative",
              }}
            >
              <div
                style={{
                  height: 30,
                  background: "#ddd",
                  borderRadius: "8px 8px 0 0",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 10px",
                  gap: 5,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    background: "#ff5f56",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    background: "#ffbd2e",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    background: "#27c93f",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div className="mockup-popup">
                <div
                  style={{
                    color: "var(--primary-navy)",
                    fontWeight: "bold",
                    marginBottom: 10,
                  }}
                >
                  🎉 Cashback Found!
                </div>
                <div
                  style={{
                    fontSize: "2rem",
                    color: "var(--accent-orange)",
                    fontWeight: 800,
                    marginBottom: 10,
                  }}
                >
                  15% OFF
                </div>
                <div
                  style={{
                    background: "var(--primary-navy)",
                    color: "white",
                    padding: "5px 20px",
                    borderRadius: 4,
                    fontSize: "0.8rem",
                  }}
                >
                  Activate Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Use SaveSmart?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon-box">🔔</div>
              <h3>Cashback Activation</h3>
              <p style={{ color: "var(--text-light)" }}>
                Detects when a store supports cashback and lets you activate it
                with one simple click.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon-box">🏷️</div>
              <h3>Verified Deals</h3>
              <p style={{ color: "var(--text-light)" }}>
                Automatically applies verified coupons and discounts. No more
                dead codes.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon-box">⚡</div>
              <h3>Easy to Use</h3>
              <p style={{ color: "var(--text-light)" }}>
                Simple popup interface shows cashback status instantly. Set it
                and forget it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="steps">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-circle">1</div>
              <h3>Install</h3>
              <p style={{ color: "var(--text-light)", marginTop: 10 }}>
                Add SaveSmart to Chrome in seconds. It's free.
              </p>
            </div>
            <div className="step-item">
              <div className="step-circle">2</div>
              <h3>Shop</h3>
              <p style={{ color: "var(--text-light)", marginTop: 10 }}>
                Browse your favorite stores like you normally do.
              </p>
            </div>
            <div className="step-item">
              <div className="step-circle">3</div>
              <h3>Save</h3>
              <p style={{ color: "var(--text-light)", marginTop: 10 }}>
                Click "Activate" when the popup appears and earn cash.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <details>
            <summary>Which stores are supported?</summary>
            <p>
              SaveSmart works with hundreds of top online stores in fashion,
              beauty, electronics, and more.
            </p>
          </details>
          <details>
            <summary>How do I get my cashback?</summary>
            <p>
              After purchase, your cashback will be available in your SaveSmart
              account. You can request payout via PayPal.
            </p>
          </details>
          <details>
            <summary>Is my data safe?</summary>
            <p>
              Absolutely. We only collect necessary information to track
              cashback. We do not sell your personal data.
            </p>
          </details>
        </div>
      </section>

      <footer>
        <div className="container">
          <p style={{ marginBottom: 10 }}>
            &copy; 2025 SaveSmart Extension. All rights reserved.
          </p>
          <div>
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> |{" "}
            <a href="mailto:support@example.com">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
