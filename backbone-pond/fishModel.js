// Please modify this file!

var Fish = Backbone.Model.extend({
  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  }
  toggleDescription : function(){
  	this.click();
  	this.model.on('change:description', this.click, this)
  	//this.FishView ();
  	//this.set('tr','on')
  	//this.model.on('change:description', this.click, this)
  }
 

});
