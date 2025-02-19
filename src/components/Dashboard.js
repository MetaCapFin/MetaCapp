import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/apply');
  };

  return (
    <Container>
      <Box mb={4}> {/* Add margin-bottom to create space */}
        <Typography variant="h4" gutterBottom>
          Welcome to Contractor Capital Access
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Apply for Loan</Typography>
              <Button variant="contained" color="primary" fullWidth onClick={handleApplyNow}>
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Fractional CFO Services</Typography>
              <Button variant="contained" color="primary" fullWidth>
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">My Account</Typography>
              <Button variant="contained" color="primary" fullWidth>
                View Account
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Financial Overview</Typography>
              <Typography variant="body1">Available Capital: $50,000</Typography>
              <Typography variant="body1">Outstanding Loans: $20,000</Typography>
              <Typography variant="body1">Recent Transactions: $5,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Upcoming Deadlines</Typography>
              <Typography variant="body1">Loan Repayment: March 15, 2025</Typography>
              <Typography variant="body1">Financial Report: April 1, 2025</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Notifications</Typography>
              <Typography variant="body1">You have 3 new messages.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Resources</Typography>
              <Typography variant="body1">
                <a href="#">Guide to Capital Funding</a>
              </Typography>
              <Typography variant="body1">
                <a href="#">Financial Management Tips</a>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Contact Information</Typography>
              <Typography variant="body1">Email: support@contractorcapital.com</Typography>
              <Typography variant="body1">Phone: (123) 456-7890</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
