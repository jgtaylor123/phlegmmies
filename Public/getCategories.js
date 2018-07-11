const flamelink = require('flamelink');

const app = flamelink({
  apiKey: "AIzaSyCg0mw1NQOiOzwADfoMm21K5FRBCRLtFeQ",
  authDomain: "phlegmmies.firebaseapp.com",
  databaseURL: "https://phlegmmies.firebaseio.com",
  projectId: "phlegmmies",
  storageBucket: "phlegmmies.appspot.com",
  messagingSenderId: "731501145424"
});

var firstResponse = [];
var select = document.getElementById("selectCategory");

app.content.get('category', { fields: [ 'category', 'id' ] })
  .then(response => {

     firstResponse = response[Object.keys(response)[0]].category;
     console.log('first category:', firstResponse);

     for(var key in response) {
        if(response.hasOwnProperty(key)) {
          categoryRecord = response[key];
          console.log(categoryRecord.category);

          var select = document.getElementById("selectCategory");
          select.options[select.options.length] = new Option(categoryRecord.category, categoryRecord.id);

        }
     }
  })
  .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
