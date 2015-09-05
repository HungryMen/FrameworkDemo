'use strict';
var Reflux = require('reflux');
var $ = require('jquery');

var NewsActions = require('../actions/NewsActions.js');

/**
 * Store handles all logic related to Todo Data.
 * Such as adding, removing, and toggling of one or multiple Todos
 *
 * The store listens to actions triggered by TodoActions
 */
var NewsStore = Reflux.createStore({
    listenables: [NewsActions],
    init: function () {
        this.listenTo(NewsActions.load, this.fetchData);
    },
    getInitialState: function () {
        this.list = [];
        return this.list;
    },
    fetchData: function () {
        $.get('http://localhost:8000/v1/news/.json', function (res) {
            // var todos = JSON.parse(res.text).todos;
            // this.list = todos.map(function (todo) {
            //     return new Todo(todo.key, todo.title, todo.isChecked, todo.createdAt);
            // });
            this.list = res;
            console.log(res);
            // this.todoCounter = this.list.length + 1;
            this.trigger(this.list);
        }.bind(this));
    }
});

module.exports = NewsStore;
