var FishTable = () => (
  <table>
    <tbody>
      <FishTableRow />
      <FishTableRow />
      <FishTableRow />
    </tbody>
  </table>
);





// descripe in this you want to get data from array ,we have main function from react i wanna to 

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTable.propTypes = {
  fishes: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTable = FishTable;
ReactDOM.render(
  <FishTable fishes={fishData}/>,
  document.getElementById('app')
);