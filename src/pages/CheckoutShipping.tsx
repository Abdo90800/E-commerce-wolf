import React, { useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  Bell,
  Phone,
  User,
  ChevronDown,
  Home,
  ChevronRight,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import styles from "./_CheckOutShipping.module.scss";
import iconpayment from "../assets/svgs/iconpayment.svg";
import iconpayment2 from "../assets/svgs/iconpayment2.svg";
import visa from "../assets/svgs/visa.svg";
import mastercard from "../assets/svgs/Mastercard.png";
import paypal from "../assets/svgs/image 20.svg";
import cash from "../assets/svgs/image 22.svg";
import other from "../assets/svgs/image 23.svg";
import { OrderDialog } from "../components/OrderDialog";

export function CheckoutShipping() {
  const [selectedMethod, setSelectedMethod] = useState("scheduled");
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [showOrderDialog, setShowOrderDialog] = useState(false);

  const handleContactChange = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.checkoutPage}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            {/* Logo */}
            <div className={styles.logoContainer}>
              <div className={styles.logo}>L</div>
              <span className={styles.logoText}>Logo</span>
            </div>

            {/* Search Bar */}
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>
                <Search className={styles.searchIcon} />
              </button>
            </div>

            {/* Right Side Icons */}
            <div className={styles.iconsContainer}>
              <button className={styles.iconButton}>
                <Heart className={styles.icon} />
                <span className={styles.buttonText}>Wishlist</span>
              </button>
              <button className={styles.iconButton}>
                <ShoppingCart className={styles.icon} />
                <span className={styles.badge}>3</span>
                <span className={styles.buttonText}>Shopping Cart</span>
              </button>
              <button className={styles.iconButton}>
                <Bell className={styles.icon} />
                <span className={styles.badge}>4</span>
                <span className={styles.buttonText}>Notifications</span>
              </button>
              <button className={styles.iconButton}>
                <Phone className={styles.icon} />
                <span className={styles.buttonText}>Call Us</span>
              </button>
              <button className={styles.iconButton}>
                <User className={styles.icon} />
                <span className={styles.buttonText}>Login</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className={styles.navigation}>
        <div className={styles.navContainer}>
          <div className={styles.navContent}>
            <a href="#" className={styles.navLink}>
              Home
            </a>
            <div>
              <a href="#" className={styles.navLink}>
                Our Products
                <ChevronDown className={styles.chevronIcon} />
              </a>
            </div>
            <div>
              <a href="#" className={styles.navLink}>
                Our Services
                <ChevronDown className={styles.chevronIcon} />
              </a>
            </div>
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
      <div className={styles.breadcrumb}>
        <nav className={styles.breadcrumbNav}>
          <div className={styles.breadcrumbItem}>
            <Home className={styles.icon} />
            <ChevronRight className={styles.icon} />
          </div>
          <div className={styles.breadcrumbItem}>
            <span>Page No.1</span>
            <ChevronRight className={styles.icon} />
          </div>
          <div className={styles.breadcrumbItem}>
            <span>Page No.1</span>
            <ChevronRight className={styles.icon} />
          </div>
          <div className={`${styles.breadcrumbItem} ${styles.active}`}>
            <span>Current Page</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Checkout</h1>
          <div
            className={styles.orderSummary}
            onClick={() => setShowOrderDialog(true)}
            style={{ cursor: "pointer" }}
          >
            <span className={styles.summaryText}>Show Order Summary: </span>
            <span className={styles.summaryAmount}>379 EGP</span>
          </div>
        </div>

        {/* Steps */}
        <div className={styles.stepsContainer}>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={`${styles.stepIcon} ${styles.completed}`}>
                <div className={`${styles.stepIcon} ${styles.completed}`}>
                  <img src={iconpayment} alt="iconpayment" />
                </div>
              </div>
              <span className={`${styles.stepText} ${styles.completed}`}>
                Shipping Address
              </span>
              <span className={`${styles.stepSubtext} ${styles.completed}`}>
                Your address and contacts
              </span>
            </div>

            <div className={styles.step}>
              <div className={`${styles.stepIcon} ${styles.current}`}>
                <div className={`${styles.stepIcon} ${styles.completed}`}>
                  <img src={iconpayment} alt="iconpayment" />
                </div>
              </div>
              <span className={`${styles.stepText} ${styles.current}`}>
                Shipping Method
              </span>
              <span className={`${styles.stepSubtext} ${styles.current}`}>
                Your preferred method
              </span>
            </div>

            <div className={styles.step}>
              <div className={`${styles.stepIcon} ${styles.pending}`}>
                <div className={`${styles.stepIcon} ${styles.completed}`}>
                  <img src={iconpayment2} alt="iconpayment" />
                </div>
              </div>
              <span className={`${styles.stepText} ${styles.pending}`}>
                Payment
              </span>
              <span className={`${styles.stepSubtext} ${styles.pending}`}>
                Your preferred method
              </span>
            </div>
          </div>
        </div>

        <div className={styles.checkoutGrid}>
          {/* Main Checkout Form */}
          <div className={styles.formSection}>
            {/* Shipping Method Selection */}
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>Select your delivery method:</h2>

              <div className={styles.deliveryOptions}>
                {/* Scheduled Courier Delivery */}
                <div
                  className={`${styles.deliveryOption} ${
                    selectedMethod === "scheduled" ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedMethod("scheduled")}
                >
                  <div className={styles.optionContent}>
                    <div className={styles.optionLeft}>
                      <input
                        type="radio"
                        name="delivery"
                        value="scheduled"
                        checked={selectedMethod === "scheduled"}
                        onChange={(e) => setSelectedMethod(e.target.value)}
                        className={styles.radioInput}
                      />
                      <div className={styles.optionInfo}>
                        <h3 className={styles.optionTitle}>
                          Scheduled Courier Delivery
                        </h3>
                        <p className={styles.optionDescription}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit sed, do eu tempor
                        </p>
                      </div>
                    </div>
                    <span className={styles.optionPrice}>29 EGP</span>
                  </div>
                </div>

                {/* Express Delivery */}
                <div
                  className={`${styles.deliveryOption} ${
                    selectedMethod === "express" ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedMethod("express")}
                >
                  <div className={styles.optionContent}>
                    <div className={styles.optionLeft}>
                      <input
                        type="radio"
                        name="delivery"
                        value="express"
                        checked={selectedMethod === "express"}
                        onChange={(e) => setSelectedMethod(e.target.value)}
                        className={styles.radioInput}
                      />
                      <div className={styles.optionInfo}>
                        <h3 className={styles.optionTitle}>Express Delivery</h3>
                        <p className={styles.optionDescription}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit sed, do eu tempor
                        </p>
                      </div>
                    </div>
                    <span className={styles.optionPrice}>29 EGP</span>
                  </div>
                </div>

                {/* Standard Delivery */}
                <div
                  className={`${styles.deliveryOption} ${
                    selectedMethod === "standard" ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedMethod("standard")}
                >
                  <div className={styles.optionContent}>
                    <div className={styles.optionLeft}>
                      <input
                        type="radio"
                        name="delivery"
                        value="standard"
                        checked={selectedMethod === "standard"}
                        onChange={(e) => setSelectedMethod(e.target.value)}
                        className={styles.radioInput}
                      />
                      <div className={styles.optionInfo}>
                        <h3 className={styles.optionTitle}>
                          Standard Delivery
                        </h3>
                        <p className={styles.optionDescription}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit sed, do eu tempor
                        </p>
                      </div>
                    </div>
                    <span className={styles.optionPrice}>FREE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>
                What's your contact information?
              </h2>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={contactInfo.firstName}
                    onChange={handleContactChange}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Last Name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={contactInfo.lastName}
                    onChange={handleContactChange}
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>E-mail Address*</label>
                <input
                  type="email"
                  name="email"
                  value={contactInfo.email}
                  onChange={handleContactChange}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  value={contactInfo.phone}
                  onChange={handleContactChange}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.contactNotes}>
                <p>
                  • We'll email you a receipt and send order updates to your
                  mobile phone via SMS
                </p>
                <p>
                  • The phone number you enter can't be changed after you place
                  your order, so please make sure it's correct
                </p>
              </div>
            </div>
          </div>

          {/* Side Note Box */}
          <div className={styles.sideNoteBox}>
            <div className={styles.sideNoteContainer}>
              <h3 className={styles.sideNoteTitle}>
                Keep this in mind about your selection:
              </h3>
              <ul className={styles.sideNoteList}>
                <li className={styles.sideNoteItem}>
                  The carrier may require a signature upon delivery
                </li>
                <li className={styles.sideNoteItem}>
                  Fri-Sat delivery means your order will arrive you
                </li>
                <li className={styles.sideNoteItem}>
                  Express Delivery arrives super fast, your fast for
                </li>
                <li className={styles.sideNoteItem}>
                  Standard Delivery comes at least in 2-3 Days
                </li>
              </ul>

              <button className={styles.policyButton}>
                View Shipping Policy
              </button>

              <div className={styles.divider}></div>
              <div className={styles.priceRow}>
                <span>Subtotal:</span>
                <span>350 EGP</span>
              </div>
              <div className={styles.priceRow}>
                <span>Shipping:</span>
                <span>29 EGP</span>
              </div>
              <div className={styles.totalRow}>
                <span>Total:</span>
                <span>379 EGP</span>
              </div>
              <div>
                <button type="button" className={styles.continueButton}>
                  Continue to shipping Method
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            {/* About Us */}
            <div className={styles.footerSection}>
              <h3>About Us</h3>
              <ul>
                <li>
                  <a href="#">Our Features No.1</a>
                </li>
                <li>
                  <a href="#">Our Features No.2</a>
                </li>
                <li>
                  <a href="#">Our Features No.3</a>
                </li>
                <li>
                  <a href="#">Our Features No.4</a>
                </li>
                <li>
                  <a href="#">Our Features No.5</a>
                </li>
              </ul>
            </div>

            {/* Customer Care */}
            <div className={styles.footerSection}>
              <h3>Customer Care</h3>
              <ul>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Store</a>
                </li>
                <li>
                  <a href="#">Returns & Exchanges</a>
                </li>
                <li>
                  <a href="#">Shipping Information</a>
                </li>
                <li>
                  <a href="#">Order tracking</a>
                </li>
                <li>
                  <a href="#">Store Location</a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className={styles.footerSection}>
              <h3>Contact Us</h3>
              <div className={styles.contactInfo}>
                <p>Street Name, Building Number 123,</p>
                <p>City, Country Name</p>
                <p>company.email123@gmail.com</p>
                <p>+02 01234567869</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className={`${styles.footerSection} ${styles.newsletter}`}>
              <h3>Subscribe To our Newsletter</h3>
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
                  <img src={visa} alt="visa" />
                </div>
                <div className={`${styles.paymentMethod} ${styles.mastercard}`}>
                  <img src={mastercard} alt="mastercard" />
                </div>
                <div className={`${styles.paymentMethod} ${styles.paypal}`}>
                  <img src={paypal} alt="paypal" />
                </div>
                <div className={`${styles.paymentMethod} ${styles.cash}`}>
                  <img src={cash} alt="cash" />
                </div>
                <div className={`${styles.paymentMethod} ${styles.other}`}>
                  <img src={other} alt="other" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className={styles.footerBottom}>
          <div className={styles.bottomContainer}>
            <div className={styles.bottomContent}>
              <div className={styles.footerLinks}>
                <a href="#">Privacy Policy</a>
                <span className={styles.divider}>|</span>
                <a href="#">Terms & Conditions</a>
                <span className={styles.divider}>|</span>
                <a href="#">Site Map</a>
              </div>

              <div className={styles.copyright}>
                <span className={styles.copyrightText}>
                  Copyright © 2024 Your Company
                </span>
                <div className={styles.socialIcons}>
                  <Facebook
                    className={`${styles.socialIcon} ${styles.facebook}`}
                  />
                  <Instagram
                    className={`${styles.socialIcon} ${styles.instagram}`}
                  />
                  <Twitter
                    className={`${styles.socialIcon} ${styles.twitter}`}
                  />
                  <Linkedin
                    className={`${styles.socialIcon} ${styles.linkedin}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {showOrderDialog && (
        <OrderDialog
          isOpen={showOrderDialog}
          onClose={() => setShowOrderDialog(false)}
        />
      )}
    </div>
  );
}
