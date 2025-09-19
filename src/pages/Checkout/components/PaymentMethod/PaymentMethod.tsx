import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Box, Typography, Radio, FormControlLabel, RadioGroup, TextField, Grid } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import styles from '../../Checkout.module.scss';

interface PaymentMethodProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  paymentMethod: string;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ register, errors, paymentMethod }) => {
  return (
    <Box className={styles.sectionCard}>
      <Typography variant="h6" component="h3" gutterBottom>
        Payment Method
      </Typography>
      
      <RadioGroup
        aria-label="payment method"
        defaultValue="creditCard"
        {...register('paymentMethod')}
      >
        {/* Credit Card Option */}
        <Box className={styles.paymentOption}>
          <FormControlLabel
            value="creditCard"
            control={
              <Radio
                color="primary"
                icon={<CreditCardIcon />}
                checkedIcon={<CreditCardIcon />}
              />
            }
            label="Credit/Debit Card"
            sx={{ width: '100%', mb: 2 }}
          />
          
          {paymentMethod === 'creditCard' && (
            <Box className={styles.paymentDetails}>
              <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' } }}>
                <Box>
                  <TextField
                    fullWidth
                    label="Card Number"
                    placeholder="1234 5678 9012 3456"
                    {...register('cardNumber')}
                    error={!!errors.cardNumber}
                    helperText={errors.cardNumber?.message as string}
                    InputLabelProps={{ shrink: true }}
                  />
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    label="Name on Card"
                    {...register('cardName')}
                    error={!!errors.cardName}
                    helperText={errors.cardName?.message as string}
                  />
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    label="Expiry Date"
                    placeholder="MM/YY"
                    {...register('cardExpiry')}
                    error={!!errors.cardExpiry}
                    helperText={errors.cardExpiry?.message as string}
                  />
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    label="CVV"
                    type="password"
                    {...register('cardCvv')}
                    error={!!errors.cardCvv}
                    helperText={errors.cardCvv?.message as string}
                  />
                </Box>
              </Box>
            </Box>
          )}
        </Box>
        
        {/* PayPal Option */}
        <Box className={styles.paymentOption}>
          <FormControlLabel
            value="paypal"
            control={
              <Radio
                color="primary"
                icon={<CreditCardIcon />}
                checkedIcon={<CreditCardIcon />}
              />
            }
            label="PayPal"
            sx={{ width: '100%' }}
          />
          {paymentMethod === 'paypal' && (
            <Box className={styles.paymentNote}>
              <Typography variant="body2" color="textSecondary">
                You'll be redirected to PayPal to complete your purchase securely.
              </Typography>
            </Box>
          )}
        </Box>
        
        {/* Cash on Delivery Option */}
        <Box className={styles.paymentOption}>
          <FormControlLabel
            value="cashOnDelivery"
            control={
              <Radio
                color="primary"
                icon={<LocalAtmIcon />}
                checkedIcon={<LocalAtmIcon />}
              />
            }
            label="Cash on Delivery"
            sx={{ width: '100%' }}
          />
          {paymentMethod === 'cashOnDelivery' && (
            <Box className={styles.paymentNote}>
              <Typography variant="body2" color="textSecondary">
                Pay with cash upon delivery. An additional $2.00 fee will be applied.
              </Typography>
            </Box>
          )}
        </Box>
      </RadioGroup>
    </Box>
  );
};

export default PaymentMethod;
