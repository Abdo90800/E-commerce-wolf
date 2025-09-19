import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Box, Typography, Radio, FormControlLabel, RadioGroup, Divider } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import styles from '../../Checkout.module.scss';

interface ShippingMethodProps {
  register: UseFormRegister<any>;
}

const shippingOptions = [
  {
    id: 'standard',
    name: 'Standard Shipping',
    description: '3-5 business days',
    price: 4.99,
  },
  {
    id: 'express',
    name: 'Express Shipping',
    description: '1-2 business days',
    price: 9.99,
  },
  {
    id: 'overnight',
    name: 'Overnight Shipping',
    description: 'Next business day',
    price: 19.99,
  },
];

const ShippingMethod: React.FC<ShippingMethodProps> = ({ register }) => {
  return (
    <Box className={styles.sectionCard}>
      <Typography variant="h6" component="h3" gutterBottom>
        <LocalShippingOutlinedIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
        Shipping Method
      </Typography>
      
      <RadioGroup
        aria-label="shipping method"
        defaultValue="standard"
        {...register('shippingMethod')}
      >
        {shippingOptions.map((option) => (
          <Box key={option.id} className={styles.shippingOption}>
            <FormControlLabel
              value={option.id}
              control={
                <Radio
                  color="primary"
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
              }
              label={
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Typography variant="subtitle1" component="span">
                      {option.name}
                    </Typography>
                    <Typography variant="subtitle1" component="span" fontWeight="bold">
                      ${option.price.toFixed(2)}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    {option.description}
                  </Typography>
                </Box>
              }
              sx={{
                width: '100%',
                m: 0,
                p: 2,
                borderRadius: 1,
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            />
            <Divider />
          </Box>
        ))}
      </RadioGroup>
    </Box>
  );
};

export default ShippingMethod;
