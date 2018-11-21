import React, { Component } from 'react';
import Child from './Child'

export default class Parent extends Component {
  state = {
    msgs: []
  };

  get last () {
    const { msgs } = this.state;
    return msgs.length ? msgs[msgs.length - 1] : undefined;
  }

  add = (msg) => {
    const { msgs } = this.state;
    msgs.push(msg);
    this.setState({ msgs });
  };

  render() {
    const { msgs } = this.state;
    return (
      <div className="Parent">
        { msgs.map((item, index) => (
            <div key={index}>{ item.content }</div>
          )
        )}
        <Child last={this.last} onClick={this.add}/>
      </div>
    );
  }
}

