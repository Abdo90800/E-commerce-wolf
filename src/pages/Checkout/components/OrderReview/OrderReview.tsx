import React from 'react';
import { Control, UseFormWatch } from 'react-hook-form';
import { Box, Typography, Divider, Button } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import styles from '../../Checkout.module.scss';

interface OrderReviewProps {
  watch: UseFormWatch<any>;
}

const OrderReview: React.FC<OrderReviewProps> = ({ watch }) => {
  // Get all form values to display in the review
  const formValues = watch();
  
  // Calculate order summary
  const subtotal = 89.97; // This would come from your cart state
  const shipping = formValues.shippingMethod === 'standard' ? 4.99 : 
                  formValues.shippingMethod === 'express' ? 9.99 : 19.99;
  const tax = subtotal * 0.1; // 10% tax for demo
  const total = subtotal + shipping + tax;
  
  // Format address for display
  const formatAddress = () => {
    if (!formValues.street) return 'No address provided';
    return (
      <>
        <div>{formValues.fullName}</div>
        <div>{formValues.street}</div>
        <div>{formValues.city}, {formValues.state} {formValues.postalCode}</div>
        <div>{formValues.country}</div>
      </>
    );
  };
  
  // Format payment method for display
  const formatPaymentMethod = () => {
    if (!formValues.paymentMethod) return 'No payment method selected';
    
    switch(formValues.paymentMethod) {
      case 'creditCard':
        return `Credit Card ending in ${formValues.cardNumber?.slice(-4) || '****'}`;
      case 'paypal':
        return 'PayPal';
      case 'cashOnDelivery':
        return 'Cash on Delivery';
      default:
        return formValues.paymentMethod;
    }
  };
  
  // Format shipping method for display
  const formatShippingMethod = () => {
    if (!formValues.shippingMethod) return 'No shipping method selected';
    
    switch(formValues.shippingMethod) {
      case 'standard':
        return 'Standard Shipping (3-5 business days) - $4.99';
      case 'express':
        return 'Express Shipping (1-2 business days) - $9.99';
      case 'overnight':
        return 'Overnight Shipping (next business day) - $19.99';
      default:
        return formValues.shippingMethod;
    }
  };

  return (
    <Box className={styles.sectionCard}>
      <Typography variant="h6" component="h3" gutterBottom>
        Review Your Order
      </Typography>
      
      {/* Contact Information */}
      <Box className={styles.reviewSection}>
        <Box className={styles.sectionHeader}>
          <PersonOutlineOutlinedIcon color="action" />
          <Typography variant="subtitle1" component="h4">Contact Information</Typography>
          <Button size="small" onClick={() => window.scrollTo(0, 0)}>
            Edit
          </Button>
        </Box>
        <Typography>{formValues.email || 'No email provided'}</Typography>
        <Typography>{formValues.phone || 'No phone number provided'}</Typography>
      </Box>
      
      <Divider sx={{ my: 3 }} />
      
      {/* Shipping Address */}
      <Box className={styles.reviewSection}>
        <Box className={styles.sectionHeader}>
          <HomeOutlinedIcon color="action" />
          <Typography variant="subtitle1" component="h4">Shipping Address</Typography>
          <Button size="small" onClick={() => window.scrollTo(0, 0)}>
            Edit
          </Button>
        </Box>
        {formatAddress()}
      </Box>
      
      <Divider sx={{ my: 3 }} />
      
      {/* Shipping Method */}
      <Box className={styles.reviewSection}>
        <Box className={styles.sectionHeader}>
          <LocalShippingOutlinedIcon color="action" />
          <Typography variant="subtitle1" component="h4">Shipping Method</Typography>
          <Button size="small" onClick={() => window.scrollTo(0, 0)}>
            Edit
          </Button>
        </Box>
        <Typography>{formatShippingMethod()}</Typography>
      </Box>
      
      <Divider sx={{ my: 3 }} />
      
      {/* Payment Method */}
      <Box className={styles.reviewSection}>
        <Box className={styles.sectionHeader}>
          <CreditCardIcon color="action" />
          <Typography variant="subtitle1" component="h4">Payment Method</Typography>
          <Button size="small" onClick={() => window.scrollTo(0, 0)}>
            Edit
          </Button>
        </Box>
        <Typography>{formatPaymentMethod()}</Typography>
      </Box>
      
      <Divider sx={{ my: 3 }} />
      
      {/* Order Summary */}
      <Box className={styles.reviewSection}>
        <Typography variant="h6" component="h4" gutterBottom>
          Order Summary
        </Typography>
        <Box className={styles.summaryRow}>
          <Typography>Subtotal</Typography>
          <Typography>${subtotal.toFixed(2)}</Typography>
        </Box>
        <Box className={styles.summaryRow}>
          <Typography>Shipping</Typography>
          <Typography>${shipping.toFixed(2)}</Typography>
        </Box>
        <Box className={styles.summaryRow}>
          <Typography>Tax</Typography>
          <Typography>${tax.toFixed(2)}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box className={styles.summaryRow}>
          <Typography variant="subtitle1" fontWeight="bold">Total</Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            ${total.toFixed(2)}
          </Typography>
        </Box>
      </Box>
      
      <Box className={styles.termsAgreement}>
        <Typography variant="body2" color="textSecondary">
          By placing your order, you agree to our Terms of Service and Privacy Policy. 
          Your payment will be processed securely. You will be charged ${total.toFixed(2)} when the order is placed.
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderReview;
