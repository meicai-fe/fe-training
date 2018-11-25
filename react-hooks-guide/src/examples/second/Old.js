import React, { Component } from 'react';

export default class Example extends Component {
  constructor() {
    super();
    this.clickBtn = this.clickBtn.bind(this);
    this.moveMouse = this.moveMouse.bind(this);
  }

  state = {
    count: 0,
    mouse: {
      x: 0,
      y: 0
    }
  }

  clickBtn() {
    this.setState({
      count: this.state.count + 1
    })
  }

  moveMouse(e) {
    this.setState({
      mouse: {
        x: e.clientX,
        y: e.clientY
      }
    })
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.moveMouse);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.moveMouse);
  }

  render() {
    const { count, mouse } = this.state;

    return (
      <>
        <p>Mouse X: {mouse.x} Mouse Y: {mouse.y}</p>
        <p>clicked {count} times</p>
        <button onClick={this.clickBtn}>
          Click me
        </button>
      </>
    )
  }
}
