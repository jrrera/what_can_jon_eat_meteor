Meteor.subscribe('foods');

Template.body.helpers({
  foodsList: () => Foods.find(),
  currentDiet: () => 'AIP Paleo',
  selectedFood: () => Foods.findOne({ name: Session.get('selectedFood') })
});
