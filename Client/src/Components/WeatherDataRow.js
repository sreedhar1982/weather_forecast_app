var React = require('react');
var WeatherDataRow = React.createClass({
	
	
  render:function() {   
  var imagePath="http://openweathermap.org/img/w/"+this.props.weatherData.weather[0].icon+".png";
    return (
      <tr>
		<td>{this.props.weatherData.dt_txt}</td>
		<td>
		<img src={imagePath}/>  
		</td>      
		<td>{this.props.weatherData.weather[0].description}</td>
        <td>{this.props.weatherData.wind.speed}</td> 	
		<td>{this.props.weatherData.main.temp}</td> 		
		<td>{this.props.weatherData.main.temp_min}</td> 
		<td>{this.props.weatherData.main.temp_max}</td> 
		<td>{this.props.weatherData.main.humidity}</td> 
      </tr>
    );	
  }
});  
module.exports = WeatherDataRow ;