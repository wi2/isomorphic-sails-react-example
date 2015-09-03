"use strict";

import React from 'react'
import {ReactItem} from 'sails-react-store'

export class View extends ReactItem {
  render() {
    let item = this.state.item;
    return (
      <div>
        <h1 className="doc-title">{item.title}</h1>
        <p className="doc-content">{item.content||''}</p>
      </div>
    )
  }
}
