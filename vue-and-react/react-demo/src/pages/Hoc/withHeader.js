import React, { Component } from 'react';

// 高阶组件用法
// 单纯的函数，接受组件作为参数并返回一个新的组件
const withHeader = (WrappedComponent) =>
  class WrapperComponent extends Component {
    render() {
      return <section>
        <header><h1>顶部信息</h1></header>
        <WrappedComponent {...this.props} />
      </section>
    }
}

export default withHeader