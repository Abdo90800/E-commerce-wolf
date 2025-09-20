import React, { useState } from 'react';
import { X } from 'lucide-react';
import './_OrderDialog.scss';

interface OrderDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderDialog({ isOpen, onClose }: OrderDialogProps) {
  const [couponCode, setCouponCode] = useState('');

  if (!isOpen) {
    return (
      <div className="reopen-container">
        <button 
          onClick={() => onClose()}
          className="reopen-button"
        >
          Open Order Dialog
        </button>
      </div>
    );
  }

  return (
    <div className="overlay">
      <div className="dialog sidebar-dialog">
        {/* Header */}
        <div className="header">
          <h2 className="title">Your Order Total</h2>
          <div className="header-actions">
            <button className="edit-cart-btn">
              Edit Cart
            </button>
            <button
              onClick={onClose}
              className="close-btn"
            >
              <X className="close-icon" />
            </button>
          </div>
        </div>

        {/* Order Details */}
        <div className="content">
          {/* Items Count */}
          <div className="items-count">
            3 Items
          </div>

          {/* Order Summary */}
          <div className="order-summary">
            <div className="summary-row">
              <span className="label">Subtotal (3items)</span>
              <span className="value">375 EGP</span>
            </div>

            <div className="summary-row">
              <span className="label">Shipping</span>
              <span className="value">40 EGP</span>
            </div>

            <div className="summary-row">
              <span className="label">Discount</span>
              <span className="value discount">-50 EGP</span>
            </div>

            <div className="summary-row">
              <span className="label">Tax</span>
              <span className="value">14 EGP</span>
            </div>
          </div>

          {/* Total */}
          <div className="total-section">
            <div className="total-row">
              <span className="total-label">Total Order</span>
              <span className="total-value">379 EGP</span>
            </div>
          </div>

          {/* Coupon Code */}
          <div className="coupon-section">
            <div className="coupon-input-container">
              <input
                type="text"
                placeholder="Coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="coupon-input"
              />
            </div>
            <button className="apply-btn">
              Apply
            </button>
          </div>

          {/* Savings Notice */}
          <div className="savings-notice">
            <div className="savings-header">
              <span className="savings-text">Your saving on this order</span>
              <button className="remove-btn">
                Remove
              </button>
            </div>
            <div className="savings-amount">50 EGP</div>
          </div>

          {/* Shipping Address */}
          <div className="shipping-address">
            <span className="address-label">Shipping Address</span>
            <button className="change-btn">
              Change
            </button>
          </div>

          {/* Shipping Method */}
          <div className="shipping-method">
            <span className="method-label">Shipping Method</span>
          </div>

          {/* Payment */}
          <div className="payment">
            <span className="payment-label">Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
}