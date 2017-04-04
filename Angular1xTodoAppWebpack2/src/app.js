import {todoComponent}    from './todoComponent'
import * as angular from 'angular'

var app = angular.module('myTodoApp', []);
app.component('todoComponent', todoComponent);

// console.log(app);