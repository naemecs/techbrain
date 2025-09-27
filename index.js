"use client";
export default function Home() {
  return (
    <div>
      <header>
        <h1>Brain Fintech</h1>
        <p>Portfolio Management Services (PMS)</p>
      </header>
      <nav>
        <a href="#plan">Investment Plan</a>
        <a href="#strategy">Trading Strategy</a>
        <a href="#profit">Profit Sharing</a>
        <a href="#terms">Policy & Terms</a>
      </nav>

      <section id="plan" className="section">
        <div className="card">
          <h2>Investment Plan</h2>
          <ul>
            <li>Minimum: ₹50,00,000 and multiples / $100,000 and multiples</li>
            <li>Algorithmic trading with MT4 and MT5 platforms</li>
            <li>Markets: NSE, BSE, MCX, NCDEX, Commodities, Indices, Forex</li>
          </ul>
        </div>
      </section>

      <section id="strategy" className="section">
        <div className="card">
          <h2>Trading Strategy</h2>
          <ul>
            <li>Total trades: 3–300 per period</li>
            <li>Strategies: RSI, CDMA, Pivot, Averaging, Hedging</li>
            <li>Expected annual profit: 30–500%</li>
          </ul>
        </div>
      </section>

      <section id="profit" className="section">
        <div className="card">
          <h2>Profit &amp; Loss Sharing</h2>
          <ul>
            <li>Investor: 65%</li>
            <li>Fund Manager: 35%</li>
            <li>Both profit and loss shared in this ratio</li>
          </ul>
        </div>
      </section>

      <section id="terms" className="section">
        <div className="card">
          <h2>Policy &amp; Terms</h2>
          <ul>
            <li>Withdrawals: On every 10% increase in equity/profit, day or month</li>
            <li>Funds remain in investor's trading account and under investor's control</li>
            <li>Lock-in period: 3 years</li>
            <li>Terms & Conditions apply</li>
          </ul>
        </div>
      </section>
      <div className="footer">
        © 2025 Brain Fintech. All rights reserved.
      </div>
      <style jsx>{`
        body {
          background: #e3f0fc;
          color: #14315a;
          font-family: Arial, sans-serif;
          margin: 0;
        }
        header {
          background: #2563eb;
          color: #fff;
          padding: 2rem 1rem;
          text-align: center;
        }
        nav {
          background: #1e40af;
          display: flex;
          justify-content: center;
          gap: 2rem;
          padding: 1rem 0;
        }
        nav a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
        }
        nav a:hover {
          text-decoration: underline;
        }
        .section {
          padding: 2rem 5vw;
        }
        .card {
          background: #fff;
          border-radius: 1rem;
          box-shadow: 0 2px 8px #60a5fa;
          padding: 2rem;
          margin: 2rem 0;
        }
        .footer {
          background: #bcd5fc;
          text-align: center;
          padding: 1rem;
          color: #222;
        }
      `}</style>
    </div>
  );
}
