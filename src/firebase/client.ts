import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyD3Zy1ZQXrI_ZoRorfMxGYnz4-i0wHRhVs",
    authDomain: "portfolio-9d348.firebaseapp.com",
    projectId: "portfolio-9d348",
    storageBucket: "portfolio-9d348.appspot.com",
    messagingSenderId: "636129074080",
    appId: "1:636129074080:web:09db26f2bff3c8429762c5",
    measurementId: "G-SV2RPW5MS8"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);