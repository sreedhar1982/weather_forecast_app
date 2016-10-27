var React = require('react');
var LeftNavRow = React.createClass({   

 handleChange1:function() {

    this.props.onUserInput(
      this.props.cityName
    );	
  },
  render:function() {	  
	  
    return (     
       <tr>
		   <td> 
				<a href="#" onClick={this.handleChange1} key={this.props.cityName}>{ this.props.cityName}</a>
		   </td>
	   </tr>     
    );
  }
});  
module.exports = LeftNavRow ;
