import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Box, TextField, Typography } from '@mui/material';
import styles from '../../Checkout.module.scss';

interface CustomerInfoProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ register, errors }) => {
  return (
    <Box className={styles.sectionCard}>
      <Typography variant="h6" component="h3" gutterBottom>
        Contact Information
      </Typography>
      
      <Box className={styles.formGroup}>
        <TextField
          fullWidth
          label="Full Name"
          variant="outlined"
          {...register('fullName')}
          error={!!errors.fullName}
          helperText={errors.fullName?.message as string}
        />
      </Box>
      
      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
        <Box className={styles.formGroup}>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message as string}
          />
        </Box>
        <Box className={styles.formGroup}>
          <TextField
            fullWidth
            label="Phone Number"
            type="tel"
            variant="outlined"
            {...register('phone')}
            error={!!errors.phone}
            helperText={errors.phone?.message as string}
          />
        </Box>
      </Box>
      
      <Typography variant="h6" component="h3" sx={{ mt: 4, mb: 2 }}>
        Shipping Address
      </Typography>
      
      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
        <Box className={styles.formGroup}>
          <TextField
            fullWidth
            label="Address Line 1"
            variant="outlined"
            {...register('address1')}
            error={!!errors.address1}
            helperText={errors.address1?.message as string}
          />
        </Box>
        <Box className={styles.formGroup}>
          <TextField
            fullWidth
            label="Address Line 2 (Optional)"
            variant="outlined"
            {...register('address2')}
            error={!!errors.address2}
            helperText={errors.address2?.message as string}
          />
        </Box>
      </Box>
      
      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, mt: 2 }}>
        <Box className={styles.formGroup}>
          <TextField
            fullWidth
            label="City"
            variant="outlined"
            {...register('city')}
            error={!!errors.city}
            helperText={errors.city?.message as string}
          />
        </Box>
        <Box className={styles.formGroup}>
          <TextField
            fullWidth
            label="State/Province"
            variant="outlined"
            {...register('state')}
            error={!!errors.state}
            helperText={errors.state?.message as string}
          />
        </Box>
        <Box className={styles.formGroup}>
          <TextField
            fullWidth
            label="Postal Code"
            variant="outlined"
            {...register('postalCode')}
            error={!!errors.postalCode}
            helperText={errors.postalCode?.message as string}
          />
        </Box>
      </Box>
      
      <Box sx={{ mt: 2 }}>
        <Box className={styles.formGroup}>
          <TextField
            fullWidth
            label="Country/Region"
            variant="outlined"
            {...register('country')}
            error={!!errors.country}
            helperText={errors.country?.message as string}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerInfo;
