Meteor.startup(function () {
  SyncedCron.add({
    name: 'Sync with Jon\'s foods spreadsheet',
    schedule: function(parser) {
      // parser is a later.parse object
      return parser.text('on the first day of the week');
    },
    job: function() {
      return syncWithGoogleSpreadsheet();
    }
  });

  SyncedCron.start();
});
