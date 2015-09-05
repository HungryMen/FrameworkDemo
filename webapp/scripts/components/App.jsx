'use strict';
var React = require('react');
var Reflux = require('reflux');

var NewsStore = require('../stores/NewsStore.js');
var NewsAction = require('../actions/NewsActions.js');

var NewsRow = React.createClass({
    render: function () {
        return (
            <li>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </li>
        );
    }
});

var App = React.createClass({
    mixins: [Reflux.connect(NewsStore, "list")],
    componentDidMount: function () {
        NewsAction.load();
    },
    render: function () {
        var rows = this.state.list.map(function(v){
            return (<NewsRow title={v.title} content={v.content} />);
        });
        return (
            <ul className="news-list">
                {rows}
            </ul>
        );
    }
});

module.exports = App;
