"use strict";

import React from 'react'
import {ReactItem, ReactCollection} from 'sails-react-store'
import {Link} from 'react-router'

export class List extends ReactCollection {
  render() {
    return (
      <div id="list" className="pure-u-1">
        {this.state.items.map( (item,i) => {
          return <Item item={item} key={i} />;
        } )}
      </div>
    )
  }
}

class Item {
  render() {
    let item = this.props.item;
    return (
      <Link to="article" params={{id: item.id}}>
        <h5 className="doc-title">{item.title}</h5>
      </Link>
    )
  }
}
