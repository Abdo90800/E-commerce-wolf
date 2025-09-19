import React from 'react';
import { Box, Typography, Button, Divider, Paper, Link } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import styles from '../../Checkout.module.scss';

interface OrderConfirmationProps {
  orderNumber: string;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ orderNumber }) => {
  const navigate = useNavigate();
  
  // Calculate expected delivery date (3 business days from now)
  const getDeliveryDate = () => {
    const deliveryDate = new Date();
    let daysToAdd = 3;
    
    while (daysToAdd > 0) {
      deliveryDate.setDate(deliveryDate.getDate() + 1);
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (deliveryDate.getDay() !== 0 && deliveryDate.getDay() !== 6) {
        daysToAdd--;
      }
    }
    
    return deliveryDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Box className={styles.confirmationContainer}>
      <Paper 
        elevation={3} 
        className={styles.confirmationCard}
        sx={{ 
          p: { xs: 2, sm: 4, md: 6 },
          maxWidth: 800,
          mx: 'auto',
          textAlign: 'center'
        }}
      >
        <Box 
          className={styles.successIcon}
          sx={{
            mb: 3,
            '& svg': {
              width: 80,
              height: 80,
              color: 'success.main'
            }
          }}
        >
          <CheckCircleOutlineIcon />
        </Box>
        
        <Typography 
          variant="h4" 
          component="h1" 
          align="center" 
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: 2,
            fontSize: { xs: '1.75rem', sm: '2.125rem' }
          }}
        >
          Thank you for your order!
        </Typography>
        
        <Typography 
          variant="h6" 
          component="h2" 
          align="center" 
          color="text.secondary" 
          gutterBottom
          sx={{ 
            fontSize: { xs: '1.1rem', sm: '1.25rem' },
            mb: 3 
          }}
        >
          Order #{orderNumber}
        </Typography>
        
        <Typography variant="body1" align="center" paragraph>
          We've received your order and it's being processed. You'll receive a confirmation email with all the details shortly.
        </Typography>
        
        <Divider sx={{ my: 4 }} />
        
        {/* Order Summary */}
        <Box sx={{ mb: 4, textAlign: 'left', maxWidth: 800, mx: 'auto' }}>
          <Typography variant="h6" fontWeight={600} mb={2}>
            Order Summary
          </Typography>
          <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
            <Box sx={{ display: 'flex', mb: 2, pb: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
              <Box sx={{ flex: 1, fontWeight: 500 }}>Product</Box>
              <Box sx={{ width: 100, textAlign: 'right', fontWeight: 500 }}>Quantity</Box>
              <Box sx={{ width: 100, textAlign: 'right', fontWeight: 500 }}>Price</Box>
            </Box>
            
            {/* Sample order items - in a real app, this would be mapped from the order data */}
            {[
              { name: 'Premium T-Shirt', quantity: 2, price: 29.99 },
              { name: 'Classic Jeans', quantity: 1, price: 59.99 },
              { name: 'Running Shoes', quantity: 1, price: 89.99 }
            ].map((item, index) => (
              <Box key={index} sx={{ display: 'flex', py: 1.5, alignItems: 'center' }}>
                <Box sx={{ flex: 1 }}>{item.name}</Box>
                <Box sx={{ width: 100, textAlign: 'right' }}>×{item.quantity}</Box>
                <Box sx={{ width: 100, textAlign: 'right' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </Box>
              </Box>
            ))}
            
            <Divider sx={{ my: 2 }} />
            
            {/* Order Totals */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
              <Box sx={{ width: 200 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <span>Subtotal:</span>
                  <span>$179.97</span>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <span>Shipping:</span>
                  <span>Free</span>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, fontWeight: 600 }}>
                  <span>Total:</span>
                  <span>$179.97</span>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
        
        <Divider sx={{ my: 4 }} />
        
        {/* Order Details */}
        <Box 
          className={styles.orderDetails}
          sx={{
            display: 'grid',
            gap: 3,
            textAlign: 'left',
            maxWidth: 600,
            mx: 'auto',
            mb: 4
          }}
        >
          <Box 
            className={styles.detailItem}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 2,
              '& svg': {
                color: 'primary.main',
                mt: 0.5,
                flexShrink: 0
              }
            }}
          >
            <LocalShippingOutlinedIcon />
            <Box>
              <Typography variant="subtitle1" fontWeight="medium">Estimated Delivery</Typography>
              <Typography variant="body1" color="text.secondary">{getDeliveryDate()}</Typography>
            </Box>
          </Box>
          
          <Box 
            className={styles.detailItem}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 2,
              '& svg': {
                color: 'primary.main',
                mt: 0.5,
                flexShrink: 0
              }
            }}
          >
            <EmailOutlinedIcon />
            <Box>
              <Typography variant="subtitle1" fontWeight="medium">Order Confirmation</Typography>
              <Typography variant="body1" color="text.secondary">Sent to your email</Typography>
            </Box>
          </Box>
          
          <Box 
            className={styles.detailItem}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 2,
              '& svg': {
                color: 'primary.main',
                mt: 0.5,
                flexShrink: 0
              }
            }}
          >
            <HomeOutlinedIcon />
            <Box>
              <Typography variant="subtitle1" fontWeight="medium">Shipping Address</Typography>
              <Typography variant="body1" color="text.secondary">123 Main St, Anytown, USA</Typography>
            </Box>
          </Box>
        </Box>
        
        <Divider sx={{ my: 4 }} />
        
        <Box 
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            justifyContent: 'center',
            mt: 4,
            mb: 2
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/orders')}
            size="large"
            startIcon={<LocalShippingOutlinedIcon />}
            fullWidth
            sx={{
              py: 1.5,
              maxWidth: { sm: 220 }
            }}
          >
            Track Order
          </Button>
          
          <Button
            variant="outlined"
            onClick={() => navigate('/')}
            size="large"
            fullWidth
            sx={{
              py: 1.5,
              maxWidth: { sm: 220 },
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
            startIcon={<ArrowBackIcon />}
          >
            Back to Home
          </Button>
        </Box>
        
        <Box 
          sx={{ 
            mt: 4, 
            pt: 3, 
            borderTop: '1px solid',
            borderColor: 'divider',
            textAlign: 'center'
          }}
        >
          <Typography variant="subtitle1" fontWeight={500} gutterBottom>
            Need Help?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            If you have any questions about your order, please email us at{' '}
            <Link href="mailto:support@example.com" color="primary">
              support@example.com
            </Link>{' '}
            or call us at{' '}
            <Link href="tel:5551234567" color="primary">
              (555) 123-4567
            </Link>.
            <Box component="p" sx={{ mt: 2, mb: 0 }}>
              Our support team is available Monday to Friday, 9am - 5pm EST.
            </Box>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default OrderConfirmation;
