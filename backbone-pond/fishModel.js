// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  }

  toggleDescription= function(){
  	if(this.defaults.displayInfo){
  		this.defaults.displayInfo=false;
  	}
  	else{
  		this.defaults.displayInfo=true;
  	}
  }

});
