// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8mV4rBF0jEPEEvQNXN32bHw84Z47NqGE",
  authDomain: "techcrackersweb.firebaseapp.com",
  projectId: "techcrackersweb",
  storageBucket: "techcrackersweb.firebasestorage.app",
  messagingSenderId: "283662279410",
  appId: "1:283662279410:web:f9e49de81c7d72d511266b",
  measurementId: "G-7YCBTKM7JH"
};

const auth = getAuth();

const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting the default way

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Firebase Authentication - Login with email and password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successfully logged in
            const user = userCredential.user;
            console.log('Logged in as:', user.email);
            errorMessage.textContent = ''; // Clear any error message
            alert('Login Successful!');
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessageText = error.message;
            console.error(errorCode, errorMessageText);
            errorMessage.textContent = 'Error: ' + errorMessageText;
        });
});
