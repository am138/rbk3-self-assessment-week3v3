// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false,
    toggle: "on"
  },

toggleDescription:{
	'toggle': function() {
    if(this.model.get('toggle', 'on')){
      return 
      this.model.set("toggle", "of")
    }
    else {
       this.model.set("toggle", "on")
    }
    }
}

});
