var firebase = require('firebase');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBSi3RgxkWGiBNIRbzxjjmK6CHaafGumhI",
    authDomain: "melanies-recipes.firebaseapp.com",
    databaseURL: "https://melanies-recipes.firebaseio.com",
    storageBucket: "",
};

module.exports = firebase.initializeApp(config);
