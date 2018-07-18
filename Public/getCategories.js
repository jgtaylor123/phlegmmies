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

async function makeCategorySelector() {
  var categoryArray = await buildCategoryArray();
  var select = document.getElementById("selectCategory");
  for (var i = 0; i < categoryArray.length; i++) {
    console.log(categoryArray);
    select.options[select.options.length] = new Option(categoryArray[i]['category'], categoryArray[i]['id']);
  }
}

async function makeNomineeTabs() {
  var categoryArray = await buildCategoryArray();
  // var tab = document.getElementById("nomineeTab");
  for (var i = 0; i < categoryArray.length; i++) {
    document.write("<button class=\"tablinks\" onclick=\"openCategory(event, 'Worst Actor')\">Worst Actor</button>");

    // select.options[select.options.length] = new Option(categoryArray[i]['category'], categoryArray[i]['id']);
  }

  // <div class="nomineeTabs">
  //   <button class="tablinks" onclick="openCategory(event, 'Worst Actor')">Worst Actor</button>
  //   <button class="tablinks" onclick="openCategory(event, 'Worst Actress')">Worst Actress</button>
  //   <button class="tablinks" onclick="openCategory(event, 'Worst Show')">Worst Show</button>
  // </div>


}

makeCategorySelector();

// function getGetegories() {
//     // var categoryMap = new Object();
//     categoryMap = [];
//     app.content.get('category', { fields: [ 'category', 'id' ] })
//     .then(response => {
//       for(var key in response) {
//          if(response.hasOwnProperty(key)) {
//            // categoryMap.push(response[key];
//            // categoryMap[key] = response[key];
//            // categoryMap = response[key];
//            categoryMap.push(response[key]);
//          }
//       }
//       console.log("im in here");
//       console.log(categoryMap);
//       console.log("im in here");
//     })
//
//     return categoryMap;
// }


// var select = document.getElementById("selectCategory");
// categoryMap = getGetegories();
// var arrayLength = categoryMap.length;
// for (var i = 0; i < arrayLength; i++) {
//   select.options[select.options.length] = new Option(categoryMap, categoryRecord.id);
// }

// categoryMap = {};
// app.content.get('category', { fields: [ 'category', 'id' ] })
//   .then(response => {
//
//     for(var key in response) {
//        if(response.hasOwnProperty(key)) {
//          categoryMap[key] = response[key];
//        }
//     }
//     // console.log(categoryMap);
//     getGetegories();
//     // console.log(categoryMap[1528120295303]);
//
//      for(var key in response) {
//         if(response.hasOwnProperty(key)) {
//           categoryRecord = response[key];
//           var select = document.getElementById("selectCategory");
//           select.options[select.options.length] = new Option(categoryRecord.category, categoryRecord.id);
//
//         }
//      }
//
//   })
//   .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
