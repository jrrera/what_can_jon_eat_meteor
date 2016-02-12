var mockFoods = [
  { id: 1, name: 'broccoli', canEat: true, suggestions: [] },
  { id: 2, name: 'cheese', canEat: false, suggestions: [ {id: 1, name: 'prosciutto'} ] },
  { id: 3, name: 'beef', canEat: true, suggestions: [] },
];


Template.body.helpers({
  foodsList: () => mockFoods,
  currentDiet: () => 'AIP Paleo'
});
