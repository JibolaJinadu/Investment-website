import React, { useState } from "react";
import "./App.css";

const LandingPage = () => {
  const investmentData = [
    {
      title: "Stocks Investment",
      description:
        "Buying shares of publicly traded companies, giving you ownership and potential returns through dividends and capital appreciation.",
    },
    {
      title: "Bonds Investment",
      description:
        "Fixed-income securities where you lend money to governments or corporations in exchange for regular interest payments and return of principal at maturity.",
    },
    {
      title: "Mutual Funds Investment",
      description:
        "Pools of money collected from multiple investors to invest in diversified portfolios of stocks, bonds, or other securities, managed by professional fund managers.",
    },
    {
      title: "Exchange-Traded Funds (ETFs) Investment",
      description:
        "Similar to mutual funds, but traded on stock exchanges like individual stocks, offering diversification and flexibility.",
    },
    {
      title: "Real Estate Investment",
      description:
        "Investing in properties, either residential or commercial, for rental income and potential appreciation.",
    },
    {
      title: "Commodities Investment",
      description:
        "Investing in physical goods like gold, oil, or agricultural products, seeking profit from price fluctuations.",
    },
    {
      title: "Cryptocurrencies Investment",
      description:
        "Digital assets like Bitcoin and Ethereum that use cryptography for secure transactions.",
    },
    {
      title: "Index Funds Investment",
      description:
        "Passive investment funds that track a specific market index, offering broad market exposure and low fees.",
    },
  ];

  // State for active navigation tab
  const [activeTab, setActiveTab] = useState("home");

  // Function to handle tab selection
  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">...A-i-L...</div>
          <ul className="nav-links">
            <li
              className={`nav-link ${activeTab === "home" ? "active" : ""}`}
              onClick={() => handleTabSelect("home")}
            >
              Home
            </li>
            <li
              className={`nav-link ${activeTab === "about" ? "active" : ""}`}
              onClick={() => handleTabSelect("about")}
            >
              About
            </li>
            <li
              className={`nav-link ${
                activeTab === "invest" ? "active" : ""
              }`}
              onClick={() => handleTabSelect("invest")}
            >
              Invest
            </li>
            <li
              className={`nav-link ${
                activeTab === "contact" ? "active" : ""
              }`}
              onClick={() => handleTabSelect("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {activeTab === "home" && (
          <section className="section">
            <h2 className="heading1">Welcome to Ajibsyn Investment Limited</h2>
            <p className="heading2">Invest with confidence and grow your wealth...</p>
            <div className="body-container">
              <div className="body-portion1">
                <div className="body-portion1-wrapper">
                  <h2 className="body-portion1-top-h2">
                    Solutions that never miss the aim
                  </h2>
                  <button
                    className="body-portion1-bottom1"
                    onClick={() => handleTabSelect("about")}
                  >
                    Learn More
                  </button>
                  <button
                    className="body-portion1-bottom2"
                    onClick={() => handleTabSelect("invest")}
                  >
                    Our Services
                  </button>
                </div>
              </div>
              <div className="body-portion2">
                <p className="body-portion2-p">
                  <small>Professional Investment Management</small>
                </p>
                <h3 className="body-portion2-h3">
                  Join 30,000+ Clients that Entrust Their Money to Us
                </h3>
                <button
                    className="body-portion1-bottom1"
                    onClick={() => handleTabSelect("invest")}
                  >
                    Get Started
                </button>
              </div>
            </div>
          </section>
        )}

        {activeTab === "about" && (
          <section className="section about-us">
            <h2 className="section-aboutus">About Us</h2>
            <div className="about-us">
              <p>
                Ajibsyn Investment Limited is a leading investment company
                dedicated to helping individuals and businesses achieve their
                financial goals. With years of experience in the industry, we
                have built a reputation for delivering exceptional investment
                solutions and superior returns to our clients.
              </p>
              <p>
                Our team of experienced professionals combines expertise, market
                insights, and rigorous research to identify lucrative investment
                opportunities across various sectors. We offer a wide range of
                investment options tailored to meet the diverse needs and risk
                profiles of our clients.
              </p>
              <p>
                At Ajibsyn Investment Limited, we prioritize the security and
                growth of our clients' capital. We adhere to strict risk
                management practices and employ advanced investment strategies
                to mitigate risks and maximize returns. Our commitment to
                transparency, integrity, and client satisfaction sets us apart
                in the investment industry.
              </p>
              <p>
                Whether you are an individual looking to grow your personal
                wealth or a business seeking capital growth, we have the
                expertise and resources to help you achieve your financial
                objectives. Join us on the journey to financial success and let
                us be your trusted partner in investments.
              </p>
            </div>
          </section>
        )}


        {activeTab === "invest" && (
          <section className="section investment">
            <h2>Investment Options</h2>
            <div className="investment-grid">
              {investmentData.map((option, index) => (
                <div key={index} className="investment-card">
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                  <button className="invest-button">Invest Now</button>
                </div>
              ))}
            </div>
          </section>
        )}

{activeTab === "contact" && (
          <section className="section contact">
            <h2>Contact Us</h2>
            <p>
              Thank you for your interest in Ajibsyn Investment Limited. We are
              here to assist you and answer any questions you may have. Please
              feel free to reach out to our dedicated team through any of the
              following channels:
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <h3>Head Office</h3>
                <p>Address: 123 Investment Street, Lagos, Nigeria</p>
                <p>Phone: +(234) 817000110</p>
                <p>Email: info@ajibsyninvestment.com</p>
              </div>
              <div className="contact-item">
                <h3>Customer Support</h3>
                <p>Phone: +(234) 817000117</p>
                <p>Email: support@ajibsyninvestment.com</p>
              </div>
              <div className="contact-item">
                <h3>Investment Inquiries</h3>
                <p>Phone:+(234) 817000112</p>
                <p>Email: investments@ajibsyninvestment.com</p>
              </div>
            </div>
            <p>
              Our dedicated team is available during business hours to provide
              personalized assistance and address any concerns. We strive to
              deliver prompt and reliable support to ensure a seamless
              experience for our clients.
            </p>
            <p>
              Connect with us today and let us guide you towards achieving your
              financial goals with confidence.
            </p>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Ajibsyn Investment Limited. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;





