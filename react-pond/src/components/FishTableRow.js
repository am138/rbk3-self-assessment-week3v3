class FishTableRow extends React.Component {
    // i need to pass props(fishdata and other proprties since fish data isnt excist ) to this class so i can use its proprties in the other subclasses 
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false
    };
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com 
  render() {
    return (
      <tr onClick={() => this.setState({showDescription: !this.state.showDescription})}>
        // change the name of the fish to props.name so it can render dynmically means its no state anymore but interact with the calss methods 
        <td className="fish-name">{props.name}</td>
        <td>
          <img src="http://tinyurl.com/h8o5szh" />
        </td>
        {this.state.showDescription ? <td className="fish-description"> {props.description} </td> : null}
      </tr>
    )
  }
}
        // rendering element 
        ReactDOM.render=(<FishTableRow />, document.getElementById('app'))
       

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTableRow.propTypes = {
  fish: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTableRow = FishTableRow;
