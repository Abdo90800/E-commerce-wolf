import React, { useState, useEffect } from 'react';
import { Control } from 'react-hook-form';
import { 
  Box, 
  Typography, 
  Divider, 
  TextField, 
  IconButton, 
  Button,
  useMediaQuery,
  useTheme,
  Paper,
  Stack
} from '@mui/material';
import { 
  Delete as DeleteIcon, 
  Add as AddIcon, 
  Remove as RemoveIcon,
  LocalMall as CartIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import styles from '../../Checkout.module.scss';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartSummaryProps {
  control: Control<any>;
  isSummary?: boolean;
}

// Mock data - in a real app, this would come from your state management
const initialCartItems: CartItem[] = [
  {
    id: '1',
    name: 'Premium T-Shirt',
    price: 29.99,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: '2',
    name: 'Classic Jeans',
    price: 59.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: '3',
    name: 'Running Shoes',
    price: 89.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
  },
];

const CartSummary: React.FC<CartSummaryProps> = ({ control, isSummary = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [isUpdating, setIsUpdating] = useState<Record<string, boolean>>({});

  // Calculate order summary
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? (subtotal > 100 ? 0 : 4.99) : 0; // Free shipping over $100
  const tax = subtotal * 0.1; // 10% tax for demo
  const total = subtotal + shipping + tax;

  // Handle quantity changes
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1 || newQuantity > 99) return;
    
    setIsUpdating(prev => ({ ...prev, [id]: true }));
    
    // Simulate API call
    setTimeout(() => {
      setCartItems(prev => 
        prev.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
      setIsUpdating(prev => ({ ...prev, [id]: false }));
    }, 300);
  };

  // Handle item removal
  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Handle continue shopping
  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <Paper 
      elevation={isSummary ? 0 : 1} 
      sx={{ 
        p: { xs: 2, sm: 3 }, 
        borderRadius: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 3,
            justifyContent: isSummary ? 'center' : 'space-between'
          }}
        >
          {!isSummary && (
            <IconButton 
              onClick={() => navigate(-1)}
              size="small"
              sx={{ mr: 1 }}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography 
            variant="h6" 
            component="h2" 
            sx={{ 
              fontWeight: 600,
              fontSize: isSummary ? '1.25rem' : '1.5rem'
            }}
          >
            {isSummary ? 'Order Summary' : 'Your Shopping Cart'}
          </Typography>
          {!isSummary && (
            <Typography variant="body2" color="text.secondary">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
            </Typography>
          )}
        </Box>
        
        {!isSummary && cartItems.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <CartIcon sx={{ fontSize: 64, color: 'action.disabled', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Your cart is empty
            </Typography>
            <Typography color="text.secondary" paragraph>
              Looks like you haven't added anything to your cart yet.
            </Typography>
            <Button 
              variant="contained" 
              color="primary"
              onClick={handleContinueShopping}
              startIcon={<ArrowBackIcon />}
            >
              Continue Shopping
            </Button>
          </Box>
        ) : (
          <>
            <Box sx={{ mb: 3 }}>
              {cartItems.map((item) => (
                <Box 
                  key={item.id} 
                  sx={{ 
                    display: 'flex', 
                    py: 2,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    '&:last-child': {
                      borderBottom: 'none'
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: 1,
                      overflow: 'hidden',
                      flexShrink: 0,
                      mr: 2,
                      '& img': {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }
                    }}
                  >
                    <img src={item.image} alt={item.name} />
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography 
                      variant="subtitle2" 
                      noWrap 
                      sx={{ 
                        fontWeight: 500,
                        mb: 0.5 
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="primary" 
                      fontWeight={600}
                      sx={{ mb: 1 }}
                    >
                      ${item.price.toFixed(2)}
                    </Typography>
                    <Stack 
                      direction="row" 
                      alignItems="center" 
                      spacing={1}
                      sx={{ 
                        mt: 1,
                        '& .MuiIconButton-root': {
                          border: '1px solid',
                          borderColor: 'divider',
                          p: 0.5,
                          '&:hover': {
                            backgroundColor: 'action.hover'
                          }
                        }
                      }}
                    >
                      <IconButton 
                        size="small" 
                        aria-label="reduce quantity"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={isUpdating[item.id]}
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <TextField
                        size="small"
                        value={item.quantity}
                        type="number"
                        inputProps={{ 
                          min: 1, 
                          max: 99,
                          style: { 
                            textAlign: 'center',
                            width: 40,
                            padding: '8px 4px',
                            WebkitAppearance: 'textfield',
                            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                              WebkitAppearance: 'none',
                              margin: 0,
                            },
                            '&[type=number]': {
                              MozAppearance: 'textfield',
                            },
                          }
                        }}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        disabled={isUpdating[item.id]}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              border: '1px solid',
                              borderColor: 'divider',
                            },
                            '&:hover fieldset': {
                              borderColor: 'text.secondary',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                          '& .MuiInputBase-input': {
                            py: 0.5,
                            textAlign: 'center',
                          },
                          width: 60,
                          mx: 1,
                        }}
                      />
                      <IconButton 
                        size="small" 
                        aria-label="increase quantity"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={isUpdating[item.id]}
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                      <Box sx={{ flex: 1, textAlign: 'right' }}>
                        <Typography variant="subtitle1" fontWeight={600}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </Typography>
                      </Box>
                      <IconButton 
                        size="small" 
                        color="error" 
                        aria-label="remove item"
                        onClick={() => removeItem(item.id)}
                        disabled={isUpdating[item.id]}
                        sx={{ ml: 1 }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                  </Box>
                </Box>
              ))}
            </Box>
            
            {!isSummary && cartItems.length > 0 && (
              <Box sx={{ mb: 3, textAlign: 'right' }}>
                <Button 
                  variant="outlined" 
                  color="error"
                  size="small"
                  startIcon={<DeleteIcon />}
                  onClick={() => setCartItems([])}
                  sx={{ textTransform: 'none' }}
                >
                  Clear Cart
                </Button>
              </Box>
            )}
            
            <Paper 
              variant="outlined" 
              sx={{ 
                p: 2,
                borderRadius: 1,
                backgroundColor: 'background.paper'
              }}
            >
              <Box sx={{ mb: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">Subtotal</Typography>
                  <Typography variant="body2" fontWeight={500}>
                    ${subtotal.toFixed(2)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Shipping
                    {shipping === 0 && ' (Free)'}
                  </Typography>
                  <Typography variant="body2" fontWeight={500}>
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">Tax</Typography>
                  <Typography variant="body2" fontWeight={500}>
                    ${tax.toFixed(2)}
                  </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {isSummary ? 'Total' : 'Estimated Total'}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={700}>
                    ${total.toFixed(2)}
                  </Typography>
                </Box>
                {!isSummary && (
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1, textAlign: 'right' }}>
                    {shipping > 0 ? (
                      <span>Spend ${(100 - subtotal).toFixed(2)} more for <strong>free shipping</strong></span>
                    ) : (
                      <span>🎉 You've qualified for <strong>free shipping</strong>!</span>
                    )}
                  </Typography>
                )}
              </Box>
            </Paper>
          </>
        )}
      </Box>
      {!isSummary && cartItems.length > 0 && (
        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            fullWidth
            onClick={handleContinueShopping}
            startIcon={<ArrowBackIcon />}
            sx={{ py: 1.5 }}
          >
            Continue Shopping
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => navigate('/checkout')}
            disabled={cartItems.length === 0}
            sx={{ py: 1.5 }}
          >
            Proceed to Checkout
          </Button>
        </Box>
      )}
    </Paper>
  );
};

export default CartSummary;
