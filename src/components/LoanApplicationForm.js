import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const LoanApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    purpose: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Loan Application
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Purpose"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default LoanApplicationForm;
