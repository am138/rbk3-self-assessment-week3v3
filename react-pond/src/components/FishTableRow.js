class FishTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false
    };
    onClickfunc(){
      this.setState({showDescription: !this.state.showDescription})

    }
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com 
  render() {
    return (
      <tr onClick={() => this.setState({showDescription: !this.state.showDescription})}>
        <td className="fish-name">Nemo</td>
        <td>
          <img src={fishData.image} />
        </td>
        {this.state.showDescription ? <td className="fish-description">Does anyone know where my dad is?</td> : null}
      </tr>
      
    )
  }
}
window.FishTableRow = FishTableRow;

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTableRow.propTypes = {
  fish: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTableRow = FishTableRow;

