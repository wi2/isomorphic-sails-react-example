"use strict";

import React from 'react'
import {ReactItem} from 'sails-react-store'

export class Item extends ReactItem {
  render() {
    return (
      <h5 className="doc-title">{this.props.item.title}</h5>
    )
  }
}
