var FishTable = ({fishes,showDescription}) => (
  <table>
    <tbody>
   files.map(fish =>{<FishTableRow
   	files:files
   	cfish:fish
   	showDescription:{showDescription}
   }) />
    </tbody>
  </table>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTable.fishes = {
  fishes: window.fishData
  
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTable = FishTable;