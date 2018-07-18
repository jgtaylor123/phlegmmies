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

function buildClipsArray(categoryID) {
  var clipsMap = new Array();
  console.log(String(categoryID));
  return app.content.getByField('clips', 'category', categoryID ,{
    fields: [ 'nominee', 'show', 'url', 'season', 'category' ]})
  .then(response => {
    for(var key in response) {
       if(response.hasOwnProperty(key)) {
         clipsMap.push(response[key]);
       }
    }
    console.log(clipsMap)
    return clipsMap;
  })
}

async function makeNomineeContent() {
  var categoryArray = await buildCategoryArray();

  for (var i = 0; i < categoryArray.length; i++) {
    console.log(String(categoryArray[i]['id']));
    var clipsArray = await buildClipsArray(String(categoryArray[i]['id']));
    var div = document.createElement('div');
    div.setAttribute('class', 'tabcontent');
    div.setAttribute('id', categoryArray[i]['id']);
    console.log(String(categoryArray[i]['id']));
    div.innerHTML =

    '<h3>' + categoryArray[i]['category'] + '</h3>\
    <p>Lets put the ' + categoryArray[i]['category'] + ' list here</p>';

    document.getElementById('tabcontent').appendChild(div);

    var clipsDiv = document.createElement('div');
    clipsDiv.setAttribute('class', 'clips');
    clipsDiv.setAttribute('id', clipsArray[i]['category']);
    console.log(clipsArray);
    var urlStrings = '';
    for (var x = 0; x < clipsArray.length; x++) {
        console.log(clipsArray[x]['url']);
        urlStrings = urlStrings + '</br><a href=\'' + clipsArray[x]['url'] + '\'>' + clipsArray[x]['nominee'] + '</a>';
    }
    clipsDiv.innerHTML = urlStrings;
    console.log(clipsArray);
    document.getElementById(String(categoryArray[i]['id'])).appendChild(clipsDiv);

  }
}

makeNomineeContent();
