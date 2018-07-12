const flamelink = require('flamelink');

const app = flamelink({
  apiKey: "AIzaSyCg0mw1NQOiOzwADfoMm21K5FRBCRLtFeQ",
  authDomain: "phlegmmies.firebaseapp.com",
  databaseURL: "https://phlegmmies.firebaseio.com",
  projectId: "phlegmmies",
  storageBucket: "phlegmmies.appspot.com",
  messagingSenderId: "731501145424"
});

  var mainMenuDiv = document.createElement("div");
  mainMenuDiv.id = "mainMenu";
  mainMenuDiv.setAttribute("style", "float:top; width:100%; line-height: 26px; text-align:top; font-size:12pt; padding-left:8px; height:26px;"); //Set div attributes
  mainMenuDiv.style.background =  "#ffa100";

  app.nav.getItems('mainMenu')
    .then(items => {
      for(var key in items) {
        menuRecord = items[key];

        a = document.createElement('a');
        a.href =  menuRecord.url;
        a.innerHTML = menuRecord.title;
        mainMenuDiv.appendChild(a);
    }
    document.body.appendChild(mainMenuDiv);
  })
  .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
