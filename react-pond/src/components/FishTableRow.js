class FishTableRow extends React.Component {
  constructor() {
    super();
    this.state = {
      showDescription: false
    };
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com 
  render() {
    return (
      <tr onClick={() => this.setState({showDescription: !this.state.showDescription})}>
        <td className="fish-name">Nemo</td>
        <td>
          <img src="http://tinyurl.com/h8o5szh" />
        </td>
        {this.state.showDescription ? <td className="fish-description">Does anyone know where my dad is?</td> : null}
      </tr>

    }



// i need to bulid the 
      var fishes = (props)=>(
  return (
<div>
var fish = this.props.fishData.map( displayfish)=>(

  <DisplayFish   var name=displayfish.this.props.fishData.name 
                  var image =displayfish.this.props.fishData.image
                   var description=displayfish.this.props.fishData.description



  ></DisplayFish >


  )


</div>
)

    )


  


}
// in this line i need display the element in array in dependent 
var DisplayFish = ()=>{
<div >{this.props.fishData.name} : {this. props.fishData.image}:{this.props.fishData.description}
</div>{this.props.children}

}


    )


  )

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTableRow.propTypes = {
  fish: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTableRow = FishTableRow;
