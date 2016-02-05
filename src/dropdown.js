import React from 'react';
import ReactDOM from 'react-dom';


var Dropdown = React.createClass({
  getInitialState: function() {
    return { visibile: false };
  },

  propTypes: {
    btnText: React.PropTypes.string,
    items: React.PropTypes.array
  },

  onclick: function() {
    this.setState({
      visibile: !this.state.visibile
    });
  },

  render: function() {
    var displayValue = this.state.visibile ? 'block' : 'none';

    return (
      <div className="dropdown">
        <button className="btn btn-default" onClick={this.onclick}>{this.props.btnText}</button>
        <ul className="dropdown-menu" style={{display: displayValue}}>
          {
            this.props.items.map((item, index) => (
                <li key={index}>
                    <a href="#">{item}</a>
                </li>
            ))
          }
        </ul>
      </div>
    );
  }
});

module.exports = Dropdown;