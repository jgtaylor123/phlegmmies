const flamelink = require('flamelink');
var firstBy = require('thenby');

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

function buildClipsArray(categoryID) {
  var clipsMap = new Array();
  // console.log(String(categoryID));
  return app.content.getByField('clips', 'category', categoryID ,{
    fields: [ 'nominee', 'show', 'url', 'season', 'category', 'score' ]})
  .then(response => {
    for(var key in response) {
       if(response.hasOwnProperty(key)) {
         clipsMap.push(response[key]);
       }
    }
    // console.log(clipsMap)
    return clipsMap;
  })
}

async function makeNomineeContent() {
  var categoryArray = await buildCategoryArray();

  for (var i = 0; i < categoryArray.length; i++) {
    // console.log(String(categoryArray[i]['id']));
    var clipsArray = await buildClipsArray(String(categoryArray[i]['id']));

    // first by length of name descending, then by population descending, then by ID ascending
    clipsArray.sort(
        firstBy(function (v1, v2) { return v1.score - v2.score; }, -1)
        .thenBy("nominee", -1)
        .thenBy("show")
    );


    var div = document.createElement('div');
    div.setAttribute('class', 'tabcontent');
    div.setAttribute('id', categoryArray[i]['id']);
    // console.log(String(categoryArray[i]['id']));
    div.innerHTML =

    '<h3>' + categoryArray[i]['category'] + '</h3>';

    document.getElementById('tabcontent').appendChild(div);

    var clipsDiv = document.createElement('div');
    clipsDiv.setAttribute('class', 'clips');
    clipsDiv.setAttribute('id', clipsArray[i]['category']);
    // console.log(clipsArray);
    var urlStrings = '';
    for (var x = 0; x < clipsArray.length; x++) {
        console.log(clipsArray[x]['url']);
        urlStrings = urlStrings + '</br>' + String(x+1) + ': <a href=\'' + clipsArray[x]['url'] + '\' target="ytplayer">' + clipsArray[x]['nominee'] + '</a>  //  ' + clipsArray[x]['show'] + '  //  ' + clipsArray[x]['score'] + '  //  <button id="submitButton" class="buttonLittle" onclick="submitClick()">UP</button> <button id="submitButton" class="buttonLittle" onclick="submitClick()">DOWN</button>' ;
    }

    clipsDiv.innerHTML = urlStrings;
    console.log(clipsArray);
    document.getElementById(String(categoryArray[i]['id'])).appendChild(clipsDiv);

  }
}

makeNomineeContent();
