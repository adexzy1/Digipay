import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCY7_j1k91js3hxWCV_RTAEGjPDtDhEpJM',
  authDomain: 'digipay-development.firebaseapp.com',
  projectId: 'digipay-development',
  storageBucket: 'digipay-development.appspot.com',
  messagingSenderId: '1036612830725',
  appId: '1:1036612830725:web:acf779bcdf715cefbabe6c',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
