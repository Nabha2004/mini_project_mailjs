import React, { useState, useEffect } from 'react';
import { Paper, TextField, Button, Typography } from '@mui/material';
import emailjs from 'emailjs-com';
import { requestNotificationPermission, showNotification } from './NotificationService';
import './NotificationForm.css';

const NotificationForm = () => {
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    sendEmailNotification(email);

    setNotification('A confirmation email has been sent to your email address.');
    setEmail('');

    showNotification('Subscription Successful', {
      body: 'You have successfully sent the notification.',
    });
  };

  const sendEmailNotification = (email) => {
    const templateParams = {
      to_email: email,
    };

    emailjs.send(
      // 'service_iqyz6tf', // Replace with your EmailJS service ID old one
      'service_v6r89ob',
      // 'template_vsnoirs', // Replace with your EmailJS template ID old one
      'template_xryx1ql',
      templateParams,
      // 'EuRj7zAf9Y1DYuCa6' // Replace with your EmailJS user ID
      'aGpO7zGUZOZSaLU9k'
    )
    .then((response) => {
      console.log('Email successfully sent!', response.status, response.text);
    })
    .catch((err) => {
      console.error('There was an error sending the email:', err);
    });
  };

  return (
    <Paper className="notification-form">
      <Typography variant="h6" className="form-title">Subscribe for Updates</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" className="submit-button">
          Send
        </Button>
      </form>
      {notification && <Typography className="notification-message">{notification}</Typography>}
    </Paper>
  );
};

export default NotificationForm;
