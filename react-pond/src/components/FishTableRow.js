class FishTableRow extends React.Component {
  constructor(props) { // take one fish from the fishData array
    super(props);
    this.state = {
      showDescription: false,
      props:props // store props as a variable, because functions don't have access to it. I think!!
    };
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com 
  render() {
// {console.log(this.state.props)}
    return (
      <tr onClick={() => this.setState({showDescription: !this.state.showDescription})}>
        <td className="fish-name">{this.state.props.fish.name}</td>
        <td>
          <img src= {this.state.props.fish.image} />
        </td>
        {this.state.showDescription ? <td className="fish-description">{this.state.props.fish.description}</td> : null}
      </tr>
    )
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTableRow.propTypes = {
  fish: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTableRow = FishTableRow;
