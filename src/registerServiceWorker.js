/* eslint-disable no-console */

import { register } from 'register-service-worker';

// if (process.env.NODE_ENV) {
if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n'
        + 'For more details, visit https://goo.gl/AFskqB',
      );
    },
    registered(registration) {
      console.log('Service worker has been registered.');
      console.log(Notification);
      Notification.requestPermission().then((permission) => {
        if (permission !== 'granted') alert('If you want to have reminders you have to switch it on...');
        else if ('showTrigger' in Notification.prototype) {
          const timestamp = new Date().getTime();
          // console.log(registration, timestamp);
          console.log('dupa');
          registration.showNotification('Awesome toast', {
            tag: timestamp,
            body: 'Your appointment is due in 30 sec!',
            // eslint-disable-next-line
            showTrigger: new TimestampTrigger(timestamp + 30 * 1000),
          });
        }
      });
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound() {
      console.log('New content is downloading.');
    },
    updated() {
      console.log('New content is available; please refresh.');
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}
