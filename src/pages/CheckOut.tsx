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
  CheckCircle,
  Circle,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import iconpayment from "../assets/svgs/iconpayment.svg";
import iconpayment2 from "../assets/svgs/iconpayment2.svg";
import styles from "./CheckOut.module.scss";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    address: "",
    buildingNumber: "",
    floorNumber: "",
    apartmentNumber: "",
    postalCode: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
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
          <div className={styles.orderSummary}>
            <span className={styles.summaryText}>Show Order Summary: </span>
            <span className={styles.summaryAmount}>379 EGP</span>
          </div>
        </div>

        {/* Steps */}
        <div className={styles.stepsContainer}>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={`${styles.stepIcon} ${styles.completed}`}>
                <img src={iconpayment} alt="iconpayment" />
              </div>
              <span className={`${styles.stepText} ${styles.completed}`}>
                Shipping Address
              </span>
              
            </div>

            <div className={styles.step}>
              <div className={`${styles.stepIcon} ${styles.pending}`}>
                <img src={iconpayment2} alt="iconpayment" />
              </div>
              <span className={`${styles.stepText} ${styles.pending}`}>
                Shipping Method
              </span>
            </div>

            <div className={styles.step}>
              <div className={`${styles.stepIcon} ${styles.pending}`}>
                <img src={iconpayment2} alt="iconpayment" />
              </div>
              <span className={`${styles.stepText} ${styles.pending}`}>
                Payment
              </span>
            </div>
          </div>
        </div>

        <div className={styles.checkoutGrid}>
          {/* Main Checkout Form */}
          <div className={styles.formSection}>
            {/* Shipping Address Form */}
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>
                Where would you like to get your order?
              </h2>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>State</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                  >
                    <option value="">State</option>
                    <option value="cairo">Cairo</option>
                    <option value="giza">Giza</option>
                    <option value="alexandria">Alexandria</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>City</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                  >
                    <option value="">City</option>
                    <option value="nasr-city">Nasr City</option>
                    <option value="maadi">Maadi</option>
                    <option value="heliopolis">Heliopolis</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder="Enter your address"
                />
              </div>

              <button className={styles.findLocationButton}>
                <MapPin className={styles.icon} />
                Find your location on Map
              </button>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Building Number</label>
                  <input
                    type="text"
                    name="buildingNumber"
                    value={formData.buildingNumber}
                    onChange={handleInputChange}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Floor Number</label>
                  <input
                    type="text"
                    name="floorNumber"
                    value={formData.floorNumber}
                    onChange={handleInputChange}
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Apartment Number</label>
                  <input
                    type="text"
                    name="apartmentNumber"
                    value={formData.apartmentNumber}
                    onChange={handleInputChange}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className={styles.formInput}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Side Note Box */}
          <div className={styles.sideNoteBox}>
            <div className={styles.sideNoteContainer}>
              <h3 className={styles.sideNoteTitle}>
                Please concern the following:
              </h3>
              <ul className={styles.sideNoteList}>
                <li className={styles.sideNoteItem}>
                  Lorem ipsum dolor sit amet
                </li>
                <li className={styles.sideNoteItem}>
                  consectetur adipiscing elit
                </li>
                <li className={styles.sideNoteItem}>
                  sed do eiusmod tempor incididunt
                </li>
                <li className={styles.sideNoteItem}>
                  ut labore et dolore magna aliqua
                </li>
              </ul>
              <p className={styles.noteText}>
                For best service, please arrive during your planned time or you
                may receive delays. Delivery on most vehicles will be held for 7
                days.
              </p>
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
                  Continue to Shipping Method
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
                  VISA
                </div>
                <div className={`${styles.paymentMethod} ${styles.mastercard}`}>
                  MC
                </div>
                <div className={`${styles.paymentMethod} ${styles.paypal}`}>
                  PP
                </div>
                <div className={`${styles.paymentMethod} ${styles.cash}`}>
                  $
                </div>
                <div
                  className={`${styles.paymentMethod} ${styles.other}`}
                ></div>
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
    </div>
  );
}
