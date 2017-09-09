var FishTable = (props) => (
  <table>
    <tbody>
    // pass data as propreties so i can use them with my class function without getting an error 
      <FishTableRow name="nemo" description={"where is my food?"} />
      <FishTableRow name="golden" description={"where is my mother?"} />
      <FishTableRow name="silver" description={"where is my dad?"}/>
    </tbody>
  </table>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTable.propTypes = {
  fishes: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTable = FishTable;
