'use strict';
var React = require('react');

var App = require('./App.jsx');

require('../../styles/app.css');

document.addEventListener('DOMContentLoaded', function () {
    React.render(<App />, document.getElementById('app'));
});