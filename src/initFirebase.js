import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import router from './router';
import store from './store';

const configOptions = {
  apiKey: 'AIzaSyCutesdRUeG964BiVBdL5t4E6RKGW3oTM8',
  authDomain: 'cognitive-d7a2e.firebaseapp.com',
  databaseURL: 'https://cognitive-d7a2e.firebaseio.com',
  projectId: 'cognitive-d7a2e',
  storageBucket: 'cognitive-d7a2e.appspot.com',
  messagingSenderId: '730664048281',
  appId: '1:730664048281:web:f7b7ff3ffe152a22950a08',
  measurementId: 'G-RH8LR3SQ5S',
};

firebase.initializeApp(configOptions);

export const auth = firebase.auth();

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch('fetchUser', user);
  if (router.currentRoute.meta.requiresAuth && !user) {
    router.push('/login');
  } else if (router.currentRoute.meta.login && user) {
    router.push('/about');
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.currentUser) {
    router.push('/login')
      .catch(() => {});
  } else if (to.meta.login && auth.currentUser) {
    router.push(from.path)
      .catch(() => {});
  } else next();
});

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
