"use strict";

import React from 'react'
import {ReactItem, ReactCollection} from 'sails-react-store'

export class List extends ReactCollection {
  constructor(props) {
    super(props);
    this.reactItem = require('./item.js').Item;
  }
  render() {
    let Item = this.reactItem||ReactItem
      , myitems = this.props.items||this.state.items||[];
    return (
      <div id="list" className="pure-u-1">
        {myitems.map( (item,i) => {
          return <Item
            identity={this.props.identity}
            key={i}
            item={item}
            belongs={this.store} />;
        } )}
      </div>
    )
  }
}
