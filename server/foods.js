Meteor.startup(function () {
  
  Meteor.publish('foods', function() {
    return Foods.find();
  });

});
