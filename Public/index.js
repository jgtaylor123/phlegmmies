const flamelink = require('flamelink');

const app = flamelink({
  apiKey: "AIzaSyCg0mw1NQOiOzwADfoMm21K5FRBCRLtFeQ",
  authDomain: "phlegmmies.firebaseapp.com",
  databaseURL: "https://phlegmmies.firebaseio.com",
  projectId: "phlegmmies",
  storageBucket: "phlegmmies.appspot.com",
  messagingSenderId: "731501145424"
});

var clipURL = document.getElementById("clipURL");
var clipCategory = document.getElementById("selectCategory");
var submitButton = document.getElementById("submitButton");

window.submitClick = function() {
  var messageText = document.getElementById("clipURL").value;
  var categoryId = document.getElementById("selectCategory").value;
  window.alert("URL:" + messageText + "\nCat:" + categoryId);


  app.content.set('clips', '1528201892192', { url: messageText, category: categoryId, score: '5'  })
    .then(() => console.log('Updating the entry succeeded'))
    .catch(() => console.error('Something went wrong while updating the entry.'));
}
