// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },
  //declaring the function
  toggleDescription: function(){
  	//toggleing the displayInfo attribute
  	this.set('displayInfo', !this.get('displayInfo'));
  	
  	//re-render FishView

  }

});

