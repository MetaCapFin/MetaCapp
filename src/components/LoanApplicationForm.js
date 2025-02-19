// components/LoanApplicationForm.js
import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

const LoanApplicationForm = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Loan Application Form
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField label="Full Name" variant="outlined" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" variant="outlined" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Phone Number" variant="outlined" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Loan Amount" variant="outlined" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Purpose of Loan" variant="outlined" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit Application
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LoanApplicationForm;
