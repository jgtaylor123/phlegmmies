const flamelink = require('flamelink');
var uniqid = require('uniqid');

const app = flamelink({
  apiKey: "AIzaSyCg0mw1NQOiOzwADfoMm21K5FRBCRLtFeQ",
  authDomain: "phlegmmies.firebaseapp.com",
  databaseURL: "https://phlegmmies.firebaseio.com",
  projectId: "phlegmmies",
  storageBucket: "phlegmmies.appspot.com",
  messagingSenderId: "731501145424"
});

window.submitClick = function() {
  var clipURL = document.getElementById("clipURL").value;
  var categoryId = document.getElementById("selectCategory").value;
  var nomineeText = document.getElementById("nominee").value;
  var showText = document.getElementById("show").value;
  var seasonText = document.getElementById("season").value;

  // To create a new clip entry, use uniqid() for the documentID (arg 2)
  // to update and existing clip field value, use the existing documentID
  app.content.set('clips', uniqid(), { url: clipURL, category: categoryId, nominee: nomineeText, show: showText, season: seasonText, score: '1'  })
    .then(() => console.log('Updating the entry succeeded'))
    .catch(() => console.error('Something went wrong while updating the entry.'));

  window.location.href = "thanks.html";
  return false;
}
