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

var categoryArray = [];
console.log(categoryArray.length);
app.content.get('category', { fields: [ 'category', 'id' ] })
  .then(response => {

     for(var key in response) {
        if(response.hasOwnProperty(key)) {
          categoryRecord = response[key];
          categoryArray.push(categoryRecord.id);
          // console.log(categoryArray.length);
        }
     }
     console.log("====== Ok, here's the whole array");
     console.log(categoryArray);
     console.log("======");

     var arrayLength = categoryArray.length;
     for (var i = 0; i < arrayLength; i++) {
         // alert(categoryArray[i]);

         console.log("======, and here's the elements");
         console.log(categoryArray[i]);
         console.log("======");

         app.content.getByField('clips', 'category', String(categoryArray[i]), {
            fields: [ 'nominee', 'show', 'season', 'category' ] })
           .then(recordByCategory => console.log('Individual clip records:', recordByCategory))
           .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));

           // app.content.getByField('clips', 'category', categoryArray[i], {
           //   fields: [ 'nominee', 'show', 'season', 'category' ]
           //   }
           //   .then(recordByCategory => console.log('Individual clip records:', recordByCategory))
           //   .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));

         // app.content.get('clips', { fields: [ 'nominee', 'show', 'season', 'category' ] }, { orderByChild: 'category', equalTo: categoryArray[i] })
         //   .then(recordByCategory => console.log('Individual clip records:', recordByCategory))
         //   .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
     }

  })
.catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));


var arrayLength = categoryArray.length;
for (var i = 0; i < arrayLength; i++) {
    // console.log("======");
    // console.log(categoryArray[i]);
    // console.log("======");
    //
    // app.content.get('clips', { orderByChild: 'category', equalTo: categoryArray[i] })
    //   .then(recordByCategory => console.log('Individual blog post:', recordByCategory))
    //   .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));

}

// for(var arElement in categoryArray) {
//   // app.content.get('blog-posts', { orderByChild: 'slug', equalTo: 'my-famous-blog-post' })
//   //   .then(blogPost => console.log('Individual blog post:', blogPost))
//   //   .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));
//   console.log(arElement);
//
// }




// console.log(categoryArray.length);

app.content.get('clips', { fields: [ 'nominee', 'show', 'season', 'category' ] })
    .then(items => {

      // for(var arElement in categoryArray) {
      //   console.log("categoryArray");
      //   console.log(categoryArray);
      //   console.log("categoryArray");
      // }

      for(var key in items) {
        clipsRecord = items[key];

        var nomineeText = clipsRecord.nominee;
        var showText = clipsRecord.show;
        var seasonText = clipsRecord.season;
        var categoryID = clipsRecord.category;

        app.content.get('category', categoryID, { fields: [ 'category' ] })
        .then(record => {
          console.log(nomineeText);
          console.log(showText);
          console.log(seasonText);
          console.log(categoryID + ' = ' + record.category)
        })
        .catch(error => console.error('Something went wrong while retrieving the entry. Details:', error));

        // console.log(nomineeText + ', ' + categoryText)
        // div = document.getElementById( 'myTopnav' );
        // div.insertAdjacentHTML( 'beforeend', result );
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
