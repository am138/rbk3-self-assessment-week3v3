// Please modify this file!

/*var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  }

});*/

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },
  //////we use toggle function to change the inFormation in displayInfo , if it true it will make it false and if it false it will make it true.
  
  	toggleDescription: function(){

  		if(this.displayInfo!==this.displayInfo){
  		return this.displayInfo;
  	}
  }

});