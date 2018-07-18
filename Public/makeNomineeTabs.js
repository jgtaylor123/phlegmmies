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

async function makeNomineeTabs() {
  var categoryArray = await buildCategoryArray();
  for (var i = 0; i < categoryArray.length; i++) {
    var button = document.createElement('button');
    button.innerHTML = categoryArray[i]['category'];
    button.setAttribute('onclick', 'openCategory(event, "' + categoryArray[i]["id"] + '")');
    button.setAttribute('class', 'tablinks');
    document.getElementById('nomineeTab').appendChild(button);
  }
}

makeNomineeTabs();
