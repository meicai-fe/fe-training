import React, { Component } from 'react';

export default class Example extends Component {
  constructor() {
    super();
    this.clickBtn = this.clickBtn.bind(this);
  }

  state = {
    count: 0
  }

  clickBtn() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { count } = this.state;

    return (
      <>
        <p>clicked {count} times</p>
        <button onClick={this.clickBtn}>
          Click me
        </button>
      </>
    )
  }
}
