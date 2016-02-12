Template.foodSearch.onRendered(() => Meteor.typeahead.inject());

Template.foodSearch.events({
  'keyup .typeahead': (e) => {
    let code = e.keyCode || e.which;

    if (e.target.value === '') {
      Session.set('selectedFood', null);
    }

    if (code == 13) { //Enter keycode
      Session.set('selectedFood', e.target.value);
      // Emit close event -- this is the officially supported way to do so.
      $('.typeahead').typeahead('close');
    }
  }
});

Template.foodSearch.helpers({
  'foodNames': () => Foods.find().fetch().map(f => f.name),
  'select': (e) => Session.set('selectedFood', e.target.value)
})
