//* [ ] Refactor the `FishTable` and `FishTableRow` components to dynamically render the passed in `fishData`

// var FishTable = () => (
//   <table>
//     <tbody>
//       <FishTableRow {this.props.fishes=}/>
//       <FishTableRow />
//       <FishTableRow />
//     </tbody>
//   </table>
// );

// // PropTypes tell other developers what `props` a component expects
// // Warnings will be shown in the console when the defined rules are violated
// FishTable.propTypes = {
//   fishes: React.PropTypes.array.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
// window.FishTable = FishTable;


var FishTable = React.createClass({
	render: function(){
		return (
			var Node= <FishTableRow {this.props.fishes.map(function(fish){
				FishName=fish.name FishImage=fish.image FishDescription=fish.description
			})}/>
			return (
			<table>
    <tbody>
			<Node />
			</tbody>
  </table>)
		);
	}
})

ReactDOM.render(React.createElement(FishTable, { fishes: fishData }), document.getElementById('app'));

//ReactDOM.render(<FishTable )

//'use strict';

//DO NOT MODIFY THIS FILE

// var fishData = [{
//   name: 'Goldfish',
//   image: 'http://tinyurl.com/n4vgcl5',
//   description: 'Everyone\'s first pet'
// }, {
//   name: 'Pufferfish',
//   image: 'http://tinyurl.com/kxd7cuu',
//   description: 'So puffy!'
// }, {
//   name: 'Tuna',
//   image: 'http://tinyurl.com/zgs7z2s',
//   description: 'Why are these things so huge? THey\'re terrifying.'
// }];

// ReactDOM.render(React.createElement(FishTable, { fishes: fishData }), document.getElementById('app'));
// //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmaXNoRGF0YSIsIm5hbWUiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQUlBLFdBQVcsQ0FDYjtBQUNFQyxRQUFNLFVBRFI7QUFFRUMsU0FBTyw0QkFGVDtBQUdFQyxlQUFhO0FBSGYsQ0FEYSxFQU1iO0FBQ0VGLFFBQU0sWUFEUjtBQUVFQyxTQUFPLDRCQUZUO0FBR0VDLGVBQWE7QUFIZixDQU5hLEVBV2I7QUFDRUYsUUFBTSxNQURSO0FBRUVDLFNBQU8sNEJBRlQ7QUFHRUMsZUFBYTtBQUhmLENBWGEsQ0FBZjs7QUFrQkFDLFNBQVNDLE1BQVQsQ0FDRSxvQkFBQyxTQUFELElBQVcsUUFBUUwsUUFBbkIsR0FERixFQUVFTSxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBRkYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0RPIE5PVCBNT0RJRlkgVEhJUyBGSUxFXHJcblxyXG52YXIgZmlzaERhdGEgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ0dvbGRmaXNoJyxcclxuICAgIGltYWdlOiAnaHR0cDovL3Rpbnl1cmwuY29tL240dmdjbDUnLFxyXG4gICAgZGVzY3JpcHRpb246ICdFdmVyeW9uZVxcJ3MgZmlyc3QgcGV0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1B1ZmZlcmZpc2gnLFxyXG4gICAgaW1hZ2U6ICdodHRwOi8vdGlueXVybC5jb20va3hkN2N1dScsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1NvIHB1ZmZ5ISdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUdW5hJyxcclxuICAgIGltYWdlOiAnaHR0cDovL3Rpbnl1cmwuY29tL3pnczd6MnMnLFxyXG4gICAgZGVzY3JpcHRpb246ICdXaHkgYXJlIHRoZXNlIHRoaW5ncyBzbyBodWdlPyBUSGV5XFwncmUgdGVycmlmeWluZy4nXHJcbiAgfVxyXG5dO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxGaXNoVGFibGUgZmlzaGVzPXtmaXNoRGF0YX0vPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcclxuKTtcclxuIl19