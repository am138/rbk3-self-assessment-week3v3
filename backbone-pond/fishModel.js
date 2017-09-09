// Please modify this file!

var Fish = Backbone.Model.extend({
  
  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },
  toggleDescription: function () {
  	//since the watch is on description, we want to alter description with .set() method
  }
});
