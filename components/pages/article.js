"use strict";

import React from 'react'
import {Layout} from '../layout.js'
import {View} from '../partials/view.js'

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <View identity="post" {...this.props} />
      </Layout>
    );
  }
}
