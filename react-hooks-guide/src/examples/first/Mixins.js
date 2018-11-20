import React, { Component } from 'react';

const MousePosition = {
  onMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  },
  componentDidMount() {
    window.addEventListener("mousemove", this.onMouseMove);
  },
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onMouseMove);
  }
}

// 仅仅示例，实际React当中class不能配合mixins使用
export default class MouseRender extends Component {
  mixins: [MousePosition]
  state = {
    x: 0,
    y: 0
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
