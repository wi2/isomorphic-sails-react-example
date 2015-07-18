"use strict";

import React from 'react'
import {Nav} from './partials/nav.js'

export class Layout {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}
