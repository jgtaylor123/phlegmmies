const flamelink = require('flamelink');

const app = flamelink({
  apiKey: "AIzaSyCg0mw1NQOiOzwADfoMm21K5FRBCRLtFeQ",
  authDomain: "phlegmmies.firebaseapp.com",
  databaseURL: "https://phlegmmies.firebaseio.com",
  projectId: "phlegmmies",
  storageBucket: "phlegmmies.appspot.com",
  messagingSenderId: "731501145424"
});

function buildCategoryArray() {
    var categoryMap = new Array();
    return app.content.get('category', { fields: [ 'category', 'id' ] })
    .then(response => {
      for(var key in response) {
         if(response.hasOwnProperty(key)) {
           categoryMap.push(response[key]);
         }
      }
      return categoryMap;
    })
}

async function getCategories() {
  var categoryArray = await buildCategoryArray();
  console.log(categoryArray);
}

getCategories();
