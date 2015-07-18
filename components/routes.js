"use strict";

import React from 'react'
import {RouteHandler, Route} from 'react-router'

module.exports = (
  <Route handler={RouteHandler}>
    <Route name="home" path="/" handler={require('./pages/home.js')} />
    <Route name="articles" path="/articles" handler={require('./pages/articles.js')} />
  </Route>
);
