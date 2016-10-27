var React = require('react');
var SearchBar = require('./SearchBar');
var WeatherDataTable = require('./WeatherDataTable');
var LeftNav = require('./LeftNav');


var FilterableWeatherDataTable = React.createClass({
  getInitialState : function() {
    return ({filterText: ''});
  },
  handleUserInput:function(filterText) {
	  
  this.props.addData(filterText); 
  },

  render:function() {
    return (
      <div>
	   <center>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
		 <div>
			Weather ForeCast for {this.props.city}
		</div>
		 </center>
		 <div className="leftNav">
			<LeftNav onUserInput={this.handleUserInput}/>
		 </div>
		 
		 <div  className="displayArea">
        <WeatherDataTable
          weatherDatas={this.props.weatherDatas}
          filterText={this.state.filterText}          
        />
		</div>
      </div>
    );
  }
});
  
module.exports = FilterableWeatherDataTable ;
