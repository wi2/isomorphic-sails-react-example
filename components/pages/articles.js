"use strict";

import React from 'react'
import {Layout} from '../layout.js'
import {List} from '../partials/list.js'

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Articles</h1>
        <List identity="post" {...this.props} />
      </Layout>
    );
  }
}
