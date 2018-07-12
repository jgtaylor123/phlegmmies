const flamelink = require('flamelink');

const app = flamelink({
  apiKey: "AIzaSyCg0mw1NQOiOzwADfoMm21K5FRBCRLtFeQ",
  authDomain: "phlegmmies.firebaseapp.com",
  databaseURL: "https://phlegmmies.firebaseio.com",
  projectId: "phlegmmies",
  storageBucket: "phlegmmies.appspot.com",
  messagingSenderId: "731501145424"
});

app.content.get('category', { fields: [ 'category', 'id' ] })
  .then(response => {

     for(var key in response) {
        if(response.hasOwnProperty(key)) {
          categoryRecord = response[key];
          var select = document.getElementById("selectCategory");
          select.options[select.options.length] = new Option(categoryRecord.category, categoryRecord.id);

        }
     }
  })
  .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
