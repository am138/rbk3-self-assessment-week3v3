// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  }

 	toggleDescription: function(){
 		// my idea here is if I clicked on <tr> fish the displaying
 		//of the fish description it will be appearing or disappearing
 		// so the displayInfo it will be true(appearing) or false (disappearing)
 		this.get('displayInfo', !this.get('displayInfo') )

 	}

});
