import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './dropdown';

var App = React.createClass({

  getDefaultProps: function() {
    return {
      dropdownBtn: 'Browsers',
      dropdownItems: [
        'Firefox',
        'Chrome',
        'Safari',
        'Opera',
        'Internet Explore'
      ]
    };
  },

  render: function() {
    return (
      <div>
        <h1> This is a Dropdown demo. </h1>
        <Dropdown
          btnText={this.props.dropdownBtn}
          items={this.props.dropdownItems} />
      </div>
    );
  }
});

module.exports = App;

