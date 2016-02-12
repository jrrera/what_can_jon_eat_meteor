Meteor.subscribe('foods');

Template.body.helpers({
  foodsList: () => Foods.find({}),
  currentDiet: () => 'AIP Paleo'
});
