// Please modify this file!

//* [ ] Inside of `fishModel.js`, create a `toggleDescription` function such that when a fish <tr> is clicked, the fish description will toggle on or off. DO NOT MODIFY any other files. 

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },

  toggleDescription: function() {
    this.view.on('toggle:description', this.toggle, this);
  },

  // I will create a function named toggleDescription
  	 toggleDescription: function() {}

  	 // inside it I'll put a listenTo that will wait until it called
  	 	object.listenTo(other, event, callback) 

  	 		// when it called and that happened when when a fish <tr> is clicked it will switched the fish description will toggle on or off, that will done by using ((set)) in the callBack 
  	 			this.model.set('displayInfo'=!'displayInfo') 
});
