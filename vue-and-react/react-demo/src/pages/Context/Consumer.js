import React, { Component } from 'react';
import { ThemeContext } from './context';

// 两种写法

// 一、直接使用静态属性 static contextType
// export default class Comsumer extends Component {
//   static contextType = ThemeContext;
//
//   render() {
//     const { theme } = this.context;
//     return (
//       <div style={{backgroundColor: theme.background}}>
//         我是写法一
//       </div>
//     );
//   }
// }

// 二、利用Context提供的Consumer
export default class Consumer extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <div style={{backgroundColor: theme.background}}>
            我是写法二
            <button onClick={toggleTheme}>我也可以改变主题</button>
          </div>
        )}
      </ThemeContext.Consumer>

    );
  }
}
