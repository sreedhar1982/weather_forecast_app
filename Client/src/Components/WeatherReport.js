var React = require('react');
var FilterableWeatherDataTable = require('./FilterableWeatherDataTable');
var Header = require('./Header');
var Footer = require('./Footer');
var WeatherReport = React.createClass({
  getInitialState : function() {
    return ({city:'Bangalore',wData:null,cityNames :[{"name":'Bangalore',"temp":"50"},{"name":'Chennai',"temp":"50"},{"name":'Vijayawada',"temp":"50"},{"name":'Hyderabad',"temp":"50"},{"name":'Delhi',"temp":"50"},{"name":'Kolkata',"temp":"50"}]});
  },

  addData:function(cityName){
    console.log(cityName);
	$(".displayArea").hide();
    var my_url = "http://api.openweathermap.org/data/2.5/forecast/?q="+cityName+'&APPID=651461505bc14e4059cfe70cac957db3'
    $.ajax({
          url: my_url,
          dataType: 'json',
          cache: false,
          success: function(data) {
          this.setState({city:cityName,wData:data.list})    
$(".displayArea").show();		  
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(my_url, status, err.toString());
          }.bind(this)
        });

  },
  componentDidMount :function(){
        this.addData("Bangalore");
       },
  render:function(){
    var data = this.state.cityNames;
    var tData = this.state.wData;
   
    return (
	
      <div>
	  <center>
	  <Header/>	  
	  </center>
	 
       <FilterableWeatherDataTable weatherDatas={tData} addData={this.addData} city={this.state.city}/>
	 <center>
	 <Footer/> 
	  </center>
      </div>
    );
  }
});
module.exports = WeatherReport ;