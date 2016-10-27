var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var WeatherReport = require('./Components/WeatherReport');

module.exports = (
<Route>
    <DefaultRoute handler={WeatherReport} name="WeatherReport" />
</Route>
);
