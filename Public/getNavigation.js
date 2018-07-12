const flamelink = require('flamelink');

const app = flamelink({
  apiKey: "AIzaSyCg0mw1NQOiOzwADfoMm21K5FRBCRLtFeQ",
  authDomain: "phlegmmies.firebaseapp.com",
  databaseURL: "https://phlegmmies.firebaseio.com",
  projectId: "phlegmmies",
  storageBucket: "phlegmmies.appspot.com",
  messagingSenderId: "731501145424"
});

  // var mainMenuDiv = document.createElement("header-nav");
  // var myTopnav = document.getElementById("myTopnav");
  // mainMenuDiv.id = "mainMenu";
  // mainMenuDiv.setAttribute("style", "float:top; width:100%; line-height: 26px; text-align:top; font-size:12pt; padding-left:8px; height:26px;"); //Set div attributes
  // mainMenuDiv.style.background =  "#ffa100";

  app.nav.getItems('mainMenu')
    .then(items => {
      for(var key in items) {
        menuRecord = items[key];

        var str = menuRecord.title;
        var result = str.link(menuRecord.url);
        div = document.getElementById( 'myTopnav' );
        div.insertAdjacentHTML( 'beforeend', result );
        // document.getElementById("myTopnav").appendChild(result);

        // document.write("<a href='" + menuRecord.url + "'>" + menuRecord.title + "</a> ||");
        // a = document.createElement('a');
        // a.href =  menuRecord.url;
        // a.innerHTML = menuRecord.title;
        // myTopnav.appendChild(a);
    }
    // document.body.appendChild(myTopnav);
  })
  .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
