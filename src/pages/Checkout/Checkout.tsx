import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Box, Container, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
// import CartSummary from './components/CartSummary';
// import CustomerInfo from './components/CustomerInfo';
// import ShippingMethod from './components/ShippingMethod';
// import PaymentMethod from './components/PaymentMethod';
// import OrderReview from './components/OrderReview';
// import OrderConfirmation from './components/OrderConfirmation';
import styles from './Checkout.module.scss';
import CartSummary from './components/CartSummary/CartSummary';
import CustomerInfo from './components/CustomerInfo/CustomerInfo';
import ShippingMethod from './components/ShippingMethod/ShippingMethod';
import PaymentMethod from './components/PaymentMethod/PaymentMethod';
import OrderReview from './components/OrderReview/OrderReview';
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';

// Define form schema using Zod
const formSchema = z.object({
  // Customer Information
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  // Shipping Address
  country: z.string().min(1, 'Please select a country'),
  city: z.string().min(2, 'Please enter a valid city'),
  street: z.string().min(5, 'Please enter a valid street address'),
  postalCode: z.string().min(3, 'Please enter a valid postal code'),
  // Shipping Method
  shippingMethod: z.string().min(1, 'Please select a shipping method'),
  // Payment Method
  paymentMethod: z.string().min(1, 'Please select a payment method'),
  // Credit Card Details (conditionally validated if paymentMethod is 'creditCard')
  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvv: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const steps = ['Cart', 'Information', 'Shipping', 'Payment', 'Review'];

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  
  const { register, handleSubmit, watch, formState: { errors }, control } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: 'creditCard',
      shippingMethod: 'standard',
    },
  });

  const paymentMethod = watch('paymentMethod');
  const shippingMethod = watch('shippingMethod');

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      // Submit order logic here
      const orderNum = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(orderNum);
      setOrderCompleted(true);
      return;
    }
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted:', data);
    await handleNext();
  };

  const onNextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (activeStep === steps.length - 1) {
      handleSubmit(onSubmit)();
    } else {
      handleNext();
    }
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <CartSummary control={control} />;
      case 1:
        return <CustomerInfo register={register} errors={errors} />;
      case 2:
        return <ShippingMethod register={register} />;
      case 3:
        return <PaymentMethod 
          register={register} 
          errors={errors} 
          paymentMethod={paymentMethod} 
        />;
      case 4:
        return <OrderReview watch={watch} />;
      default:
        return null;
    }
  };

  if (orderCompleted) {
    return <OrderConfirmation orderNumber={orderNumber} />;
  }

  return (
    <Container maxWidth="lg" className={styles.checkoutContainer}>
      <Box className={styles.stepperContainer} sx={{ mb: 4 }}>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ width: '100%' }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={styles.checkoutContent}>
          <Box className={styles.formSection}>
            {getStepContent(activeStep)}
          </Box>
          
          <Box className={styles.actions}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={styles.backButton}
              variant="outlined"
              sx={{ mr: 2 }}
              type="button"
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={onNextClick}
              className={styles.nextButton}
              size="large"
              type={activeStep === steps.length - 1 ? 'submit' : 'button'}
            >
              {activeStep === steps.length - 1 ? 'Place Order' : `Continue to ${steps[activeStep + 1]}`}
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
}
