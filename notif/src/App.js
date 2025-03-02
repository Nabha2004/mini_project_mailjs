import React from 'react';
import { Container, Typography } from '@mui/material';
import NotificationForm from './NotificationForm';
import './App.css';

const App = () => {
  return (
    <Container>
      <Typography variant="h4" className="app-title">Notification App</Typography>
      <NotificationForm />
    </Container>
  );
};

export default App;
