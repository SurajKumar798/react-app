import React, { Component } from 'react'
import Header from '../../Header'
import QuickSearch from './QuickSearch';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <QuickSearch />
      </div>
    )
  }
}
