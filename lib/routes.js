Meteor.startup(function () {
  Router.configure({
      layoutTemplate: 'app'
  });

  // Router.route('/', function() {
  //   this.render('app');
  // });

  // Provide a manual override for syncing if spreadsheet has gone through
  // updates that you'd like to see right away.
  Router.route('/sync', {where: 'server'})
    .get(function () {
      let result = syncWithGoogleSpreadsheet();
      this.response.end('Successful sync! Entries processed: ' + result);
    });
});
