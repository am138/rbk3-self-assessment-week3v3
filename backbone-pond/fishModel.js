// Please modify this file!

var Fish = Backbone.Model.extend({
  'clik handle ' : 'handleClick',
	toggleDescription:function () {
	
		displayInfo=true;

	},
  handleClick :function(){
    var x =!this.get('displayInfo');
    

      this.render();
    this.set('displayInfo',x);
  
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
