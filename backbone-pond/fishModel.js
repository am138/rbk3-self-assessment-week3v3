// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  }

 	toggleDescription: function(){
 		this.get('description', !this.get('description') )

 	}

});
