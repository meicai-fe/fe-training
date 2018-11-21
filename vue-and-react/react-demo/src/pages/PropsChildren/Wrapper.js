import React, { Component } from 'react';

export default class Wrapper extends Component {
  render() {
    return (
      <section>
        <header>我是Wrapper头部</header>
        { this.props.children }
        <footer>我是Wrapper尾部</footer>
      </section>
    );
  }
}

// 无状态组件，单纯的函数
// const Wrapper = (props) => (
//   <section>
//     <header>我是Wrapper头部</header>
//     { props.children }
//     <footer>我是Wrapper尾部</footer>
//   </section>
// )
//
// export default Wrapper