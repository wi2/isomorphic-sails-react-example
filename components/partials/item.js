"use strict";

import React from 'react'
import {ReactItem} from 'sails-react-store'
import {Link} from 'react-router'

export class Item extends ReactItem {
  render() {
    let item = this.store ? this.store.value : this.props.item;
    return (
      <Link to="article" params={{id: this.props.item.id}}>
        <h5 className="doc-title">{item.title}</h5>
      </Link>
    )
  }
}
