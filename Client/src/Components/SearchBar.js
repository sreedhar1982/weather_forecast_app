var React = require('react');

var SearchBar = React.createClass({   
  handleChange:function() {

    this.props.onUserInput(
      this.refs.myText.value
    );
  },
  componentDidMount :function(){
       
       },
  render:function() {
    return (
      <div  className="searchNavBar">
	  <form>
        <input  type="text" ref="myText" placeholder="Enter City Name" className="form-control"/><input
          type="button" value="Search" className="btn btn-orange"
          onClick={this.handleChange}
        />
        </form>
      </div>
    );
  }
});

  
module.exports = SearchBar ;
