var React = require('react');
var LeftNavRow = require('./LeftNavRow');

var LeftNav = React.createClass({   
 getInitialState : function() {
    return ({cityNames :[{"name":'Bangalore'},{"name":'Chennai'},{"name":'Vijayawada'},{"name":'Hyderabad'},{"name":'Delhi'},{"name":'Kolkata'}]});
  },
 handleChange:function(city) {

    this.props.onUserInput(
      city
    );
  },
  render:function() {
	  var cities=[]; 
	   this.state.cityNames.forEach((city) => {
      cities.push(<LeftNavRow onUserInput={this.handleChange} key ={city.name} cityName={city.name}/>);            
	  });
	  
	  
    return (     
      <div>
        <table>
		<tbody>
		<h3>LOCATIONS </h3>
		{cities}
		</tbody>
		</table>
      </div>
    );
  }
});  
module.exports = LeftNav ;
