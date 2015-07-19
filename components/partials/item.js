"use strict";

import React from 'react'
import {ReactItem} from 'sails-react-store'

export class Item extends ReactItem {
  render() {
    let item = this.state ? this.state.item : this.props.item;
    return (
      <h5 className="doc-title">{item.title}</h5>
    )
  }
}
