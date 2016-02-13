Meteor.subscribe('foods');

Template.app.helpers({
  foodsList: () => Foods.find(),
  currentDiet: () => 'AIP Paleo',
  selectedFood: () => Foods.findOne({ name: Session.get('selectedFood') })
});
