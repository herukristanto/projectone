import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDXR8Nhyvfm8rWex_HSUpUPMqqxqsIo600',
  authDomain: 'hospia-4e40b.firebaseapp.com',
  databaseURL: 'https://hospia-4e40b-default-rtdb.firebaseio.com/',
  projectId: 'hospia-4e40b',
  storageBucket: 'hospia-4e40b.appspot.com',
  messagingSenderId: '716579461422',
  appId: '1:716579461422:web:712179a08c22f1936142bf',

  // apiKey: 'AIzaSyCliqlkWsfagXS2fUJ7rBPAAyscK7TF4X4',
  // authDomain: 'myrsf-patien.firebaseapp.com',
  // databaseURL: 'https://myrsf-patien-default-rtdb.asia-southeast1.firebasedatabase.app/',
  // projectId: 'myrsf-patien',
  // storageBucket: 'myrsf-patien.a ppspot.com',
  // messagingSenderId: '717137690485',
  // appId: '1:717137690485:web:b7ee10dd14dccb7ffcdd3c',
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const db = getDatabase(app);

export {authentication, db}
