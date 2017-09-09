// Please modify this file!
var Fish = Backbone.Model.extend({

	toggleDescription: () => (
			this.set({displayInfo : !this.get("displayInfo")});
		)


  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  }

});
