var React = require('react');
var WeatherDataRow = require('./WeatherDataRow');
var WeatherDataTable = React.createClass({  
  render:function() {
    var rows = [];
    var lastCategory = null;	
	if(this.props.weatherDatas!=null){
    this.props.weatherDatas.forEach((weatherData) => {
     rows.push(<WeatherDataRow weatherData={weatherData} key={weatherData.dt_txt} />);    
    });
	
    return (
      <table className="twc-sticky-col">
        <thead>
          <tr>
            <th>Date</th>
			<th></th>
            <th>Description</th>
			<th>Wind Speed(m/s)</th>
            <th>temp(K)</th>
			<th>Min temp</th>
			<th>Max temp</th>
			<th>HUMIDITY(%)</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
	}else{
		return (<div> Loading Data Please Wait..... </div>)
	}
  }
});
  
module.exports = WeatherDataTable ;
