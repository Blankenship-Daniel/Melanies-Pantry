var firebase = require('./firebase_init');
module.exports = firebase.database().ref();
