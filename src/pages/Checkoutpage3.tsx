import React, { useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  MapPin,
  CreditCard,
  Gift,
  Bell,
  User,
} from "lucide-react";
import styles from "./_CheckoutPage.module.scss";

const CheckoutPage = () => {
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  return (
    <div className={styles.checkoutPage}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            {/* Logo */}
            <div className={styles.logoContainer}>
              <div className={styles.logo}>Logo</div>
            </div>

            {/* Search Bar */}
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search"
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>
                <Search className={styles.searchIcon} />
              </button>
            </div>

            {/* Right Actions */}
            <div className={styles.actionsContainer}>
              <button className={styles.actionButton}>
                <span className={styles.actionText}>Wishlist</span>
                <Heart className={styles.actionIcon} />
              </button>
              <button className={styles.actionButton}>
                <span className={styles.actionText}>Shopping Cart</span>
                <div className={styles.iconWrapper}>
                  <ShoppingCart className={styles.actionIcon} />
                  <span className={styles.badge}>0</span>
                </div>
              </button>
              <button className={styles.actionButton}>
                <span className={styles.actionText}>Notifications</span>
                <div className={styles.iconWrapper}>
                  <Bell className={styles.actionIcon} />
                  <span className={styles.badge}>0</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className={styles.navigation}>
        <div className={styles.navContainer}>
          <div className={styles.navLinks}>
            <a href="#" className={styles.navLink}>
              Home
            </a>
            <a href="#" className={styles.navLink}>
              Our Products
            </a>
            <a href="#" className={styles.navLink}>
              Our Services
            </a>
            <a href="#" className={styles.navLink}>
              About Us
            </a>
            <a href="#" className={styles.navLink}>
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className={styles.breadcrumbContainer}>
        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbItem}>Home</span>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbItem}>Page No.1</span>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbItem}>Page No.1</span>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.currentPage}>Current Page</span>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Checkout</h1>

        <div className={styles.orderSummary}>
          <button className={styles.summaryButton}>
            Show Order Summary: 379 EGP
          </button>
        </div>

        {/* Progress Steps */}
        <div className={styles.progressContainer}>
          <div className={styles.progressLine}></div>
          <div className={styles.progressSteps}>
            {/* Step 1 */}
            <div className={styles.step}>
              <div className={`${styles.stepIcon} ${styles.active}`}>
                <MapPin className={styles.icon} />
              </div>
              <span className={`${styles.stepTitle} ${styles.active}`}>
                1.Shipping Address
              </span>
              <span className={styles.stepSubtitle}>
                Enter your address details
              </span>
            </div>

            {/* Step 2 */}
            <div className={styles.step}>
              <div className={`${styles.stepIcon} ${styles.active}`}>
                <Gift className={styles.icon} />
              </div>
              <span className={`${styles.stepTitle} ${styles.active}`}>
                2.Shipping Method
              </span>
              <span className={styles.stepSubtitle}>
                Choose your preferred method
              </span>
            </div>

            {/* Step 3 */}
            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <CreditCard className={styles.icon} />
              </div>
              <span className={styles.stepTitle}>3.Payment</span>
              <span className={styles.stepSubtitle}>
                Review your payment method
              </span>
            </div>
          </div>
        </div>
    
        {/* Payment Method */}
        <div className={styles.paymentSection}>
          <h2 className={styles.sectionTitle}>Choose your payment method</h2>

          <div className={styles.paymentOptions}>
            <label className={styles.paymentOption}>
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className={styles.radioInput}
              />
              <CreditCard className={styles.paymentIcon} />
              <span className={styles.paymentLabel}>Credit or Debit card</span>
            </label>
          </div>

          <div className={styles.cardForm}>
            <label className={styles.formLabel}>
              Enter your card information:
            </label>
            <div className={styles.formInputs}>
              <input
                type="text"
                placeholder="Cardholder Card Number"
                className={styles.formInput}
              />
              <input
                type="text"
                placeholder="Expiration MM/YY"
                className={styles.formInput}
              />
              <input
                type="text"
                placeholder="CVV"
                className={styles.formInput}
              />
            </div>
          </div>

          <div className={styles.paymentOptions}>
            <label className={styles.paymentOption}>
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className={styles.radioInput}
              />
              <span className={styles.paymentLabel}>Pay with Cash</span>
            </label>
          </div>
        </div>

        {/* Gift Card Info */}
        <div className={styles.infoBox}>
          <p className={styles.infoTitle}>
            Some information about using Gift Card:
          </p>
          <p className={styles.infoText}>
            Gift cards may not be used to purchase gift cards or to cover any
            applicable taxes, fees, or convenience charge. Additional
            restrictions may apply. No cash value.
          </p>
          <button className={styles.policyLink}>View Payment Policy</button>
        </div>

        {/* Terms and Conditions */}
        <div className={styles.termsContainer}>
          <label className={styles.termsLabel}>
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className={styles.checkbox}
            />
            <span className={styles.termsText}>
              Agreed To Terms And Conditions
            </span>
          </label>
        </div>

        {/* Pay Button */}
        <button className={styles.payButton}>Pay 379 EGP</button>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumns}>
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>About Us</h3>
              <ul className={styles.columnList}>
                <li>Our Features No.1</li>
                <li>Our Features No.2</li>
                <li>Our Features No.3</li>
                <li>Our Features No.4</li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Customer Care</h3>
              <ul className={styles.columnList}>
                <li>FAQs</li>
                <li>Store</li>
                <li>Returns & Exchanges</li>
                <li>Shipping Information</li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Contact Us</h3>
              <div className={styles.contactInfo}>
                <p>Street Name, Building Number 123</p>
                <p>City, Country Name</p>
                <p>company.email123@gmail.com</p>
                <p>+02 01234567890</p>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>
                Subscribe To our Newsletter
              </h3>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.newsletterInput}
                />
                <button className={styles.newsletterButton}>Subscribe</button>
              </div>
              <div className={styles.paymentMethods}>
                <div className={`${styles.paymentMethod} ${styles.visa}`}>
                  VISA
                </div>
                <div className={`${styles.paymentMethod} ${styles.mastercard}`}>
                  MC
                </div>
                <div className={`${styles.paymentMethod} ${styles.paypal}`}>
                  PP
                </div>
                <div className={`${styles.paymentMethod} ${styles.cash}`}>
                  CASH
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.bottomContent}>
            <div className={styles.footerLinks}>
              <a href="#">Privacy Policy</a>
              <span className={styles.separator}>|</span>
              <a href="#">Terms & Conditions</a>
              <span className={styles.separator}>|</span>
              <a href="#">Site Map</a>
            </div>
            <p className={styles.copyright}>Copyright © 2024 TNT Company</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;
