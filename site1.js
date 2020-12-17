var Airtable = require("airtable");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "key3kQAZHgzH6SAix",
});
var base = Airtable.base("app7PiRH6J2bC4tS9");

base("Table 1")
  .select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record) {

        // var image = document.createElement('img');
        // image.setAttribute('src', record.fields.pics[0].url);
        // pics.appendChild(image);

        // console.log('Retrieved', record.get('Name'));
        var firstValue = document.getElementById("name");
        firstValue.innerHTML = record.get("Name");
        // console.log(record.get('Name'));

        var secondValue = document.getElementById("short");
        secondValue.innerHTML = record.get("shortdesc");
        //  console.log(record.get('shortdesc'));

        var thirdValue = document.getElementById("long");
        thirdValue.innerHTML = record.get("longdesc");


        var fifthValue = document.getElementById("links");
        fifthValue.innerHTML = record.get("links");

        var sixthValue = document.getElementById("createdBy");
        sixthValue.innerHTML = record.get("creator");

        var sixthValue = document.getElementById("vids");
        sixthValue.innerHTML = record.get("video");
var seventhValue = document.getElementById("pics");
        seventhValue.innerHTML = record.get("pictures");

      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );

  var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key3kQAZHgzH6SAix'}).base('app7PiRH6J2bC4tS9');

base('Table 1').find('recak5uIHLNpI8Odc', function(err, record) {
 
    var firstValue = document.getElementById("name");
    firstValue.innerHTML = record.get("Name");
    // console.log(record.get('Name'));

    var secondValue = document.getElementById("short");
    secondValue.innerHTML = record.get("shortdesc");
    //  console.log(record.get('shortdesc'));

    var thirdValue = document.getElementById("long");
    thirdValue.innerHTML = record.get("longdesc");

    var fourthValue = document.getElementById("Date");
    fourthValue.innerHTML = record.get("date");

    var fifthValue = document.getElementById("links");
    fifthValue.innerHTML = record.get("links");

    var sixthValue = document.getElementById("createdBy");
    sixthValue.innerHTML = record.get("creator");

    var sixthValue = document.getElementById("vids");
    sixthValue.innerHTML = record.get("video");

    var seventhValue = document.getElementById("img");
    seventhValue.innerHTML = record.get("pictures");



    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
});

drag(document.getElementById("drag"));
drag(document.getElementById("drag1"));
drag(document.getElementById("drag2"));
drag(document.getElementById("drag3"));
drag(document.getElementById("drag4"));
drag(document.getElementById("drag5"));
drag(document.getElementById("drag6"));
drag(document.getElementById("drag7"));


function drag(elmnt) {
 
  var position1 = 0, position2 = 0, position3 = 0, position4 = 0;
  if (document.getElementById(elmnt.id)) {
   elmnt.onmousedown = dragImage;
  } 

  function dragImage(click) {
    click = click || window.event;
    click.preventDefault();
    position3 = click.clientX;
    position4 = click.clientY;
    document.onmouseup = lockPosition;
    document.onmousemove = newPosition;
  }

  function newPosition(click) {
    click = click || window.event;
    click.preventDefault();
    position1 = position3 - click.clientX;
    position2 = position4 - click.clientY;
    position3 = click.clientX;
    position4 = click.clientY;
    elmnt.style.top = (elmnt.offsetTop - position2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - position1) + "px";
  }

  function lockPosition() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  
  
  
}