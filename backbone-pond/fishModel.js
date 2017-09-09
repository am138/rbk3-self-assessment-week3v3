// Please modify this file!

var Fish = Backbone.Model.extend({

	toggleDescription:function () {
	
		displayInfo=true;

	},

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },
  render:function(){
  	defaults.description.$el.append('<tr>')
  }

});
