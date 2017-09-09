// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  }

});
// a function when clicked on the object it ll change 
defaults.on("Click","change",this.render)
//{
    // change the discription when clicked 
    
//    Fish.deafults.description = description

//})


