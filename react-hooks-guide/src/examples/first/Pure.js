import React, { Component } from 'react';

export default class MouseRender extends Component {
  constructor() {
    super();
    this.onMouseMove = this.onMouseMove.bind(this); // 这也是class被人诟病的地方
  }

  state = {
    x: 0, y: 0
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.onMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.onMouseMove)
  }

  onMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  }

  render() {
    const { x, y } = this.state;

    return (
      <span>
        Mouse X: {x} Mouse Y: {y}
      </span>
    )
  }
}
