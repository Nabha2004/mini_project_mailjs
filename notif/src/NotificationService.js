export const requestNotificationPermission = () => {
    if ('Notification' in window) {
      Notification.requestPermission()
        .then(permission => {
          if (permission !== 'granted') {
            console.log('Notification permission denied');
          }
        })
        .catch(error => {
          console.error('Error requesting notification permission:', error);
        });
    }
  };
  
  export const showNotification = (title, options) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, options);
    }
  };
  