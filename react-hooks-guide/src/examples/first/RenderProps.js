import React, { Component } from 'react';

// 个人感觉高阶组件其实是一个比较蹩脚的存在
// 倒不是函数式的问题，主要React的生命周期的问题
class MousePosition extends Component {
  constructor() {
    super();
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  state = {
    x: 0,
    y: 0
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.onMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    return this.props.children(this.state);
  }
}

export default class MouseRender extends Component {
  render() {
    return (
      <MousePosition>
        {({x, y}) => (
          <span>
            Mouse X: {x} Mouse Y: {y}
          </span>
        )}
      </MousePosition>
    )
  }
}
