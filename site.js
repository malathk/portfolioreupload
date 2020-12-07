var Airtable = require('airtable');



Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'key3kQAZHgzH6SAix'
});
var base = Airtable.base('app7PiRH6J2bC4tS9');

base('Table 1').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

var containerElement = document.querySelector('.list ');


  base('Table 1').select({
  
    view: "Grid view"
  }).firstPage(function(err, records) {
    // This function (`page`) will get called for each page of records.
    // Iterate over records

  
    records.forEach(function(record) {
      // Create a div to contain content for this record
      var element = document.createElement('div');
  
      // Add classes to record element
      element.classList.add('Name');
     // Add classes to record element
   
     element.classList.add('additional-NAME');
 
      
  
      // Create a paragraph element
      var paragraph = document.createElement('p');
  
      // Populate paragraph element html
      paragraph.innerHTML = record.get('Name') + " " + record.get('Notes');
  
      // Add paragraph element to record element
      element.appendChild(paragraph);
  
      // Add record element to container element
      containerElement.appendChild(element);
    });
  
    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
  
  }, function done(err) {
    if (err) { console.error(err); return;}
  });

