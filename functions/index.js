// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const firebaseFunctions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(firebaseFunctions.config().gmail.email);
const gmailPassword = encodeURIComponent(firebaseFunctions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendContactMessage = firebaseFunctions.database.ref('/messages/{pushKey}').onWrite(event => {
    const snapshot = event.data;
  
  // Only send email for new messages.
    if (snapshot.previous.val() || !snapshot.val().name) {
      return;
    }
    
    const val = snapshot.val();
    
    const mailOptions = {
      to: 'test@example.com',
      subject: `Information Request from ${val.name}`,
      html: val.html
    };
  
    return mailTransport.sendMail(mailOptions).then(() => {
      return console.log('Mail sent to: test@example.com')
    });
  });