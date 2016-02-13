// https://docs.google.com/spreadsheets/d/1JwIXaeatd7JrLMNDNtZWND1bPjupsLaJZluLDwKdOOM/pub?output=csv

// model: { name, canEat, suggestions [{ name }] }

let key = '1JwIXaeatd7JrLMNDNtZWND1bPjupsLaJZluLDwKdOOM';

Meteor.startup(function () {
  Meteor.call('spreadsheet/fetch', key);

  let spreadsheetData = GASpreadsheet.find().fetch();

  // Do a bulk insert operation, with upsert functionality.
  var bulk = Foods.rawCollection().initializeUnorderedBulkOp();

  _.each(spreadsheetData[0].cells, function(foodRow, rowKey) {
    if (rowKey === '1') { return; } // Ignore headers.

    let name = foodRow[1].value;
    let canEat = foodRow[2].value.toLowerCase() === "true"; // Convert to boolean type.
    let suggestions = foodRow[3] && foodRow[3].value.split(',')
        .map(suggestion => { return { name: suggestion } });

    bulk.find({ name }).upsert().replaceOne( { name, canEat, suggestions } );
  });

  Meteor.wrapAsync(bulk.execute)();
});
