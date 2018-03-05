
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/routes'
 
ReactDOM.render(
  <Router/>,
  document.getElementById('root-react')
);