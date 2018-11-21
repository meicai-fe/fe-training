import React, { Component } from 'react';
import Wrapper from './Wrapper'

export default class Demo extends Component {

  state = {
    content: '我是Demo组件中的内容'
  };

  render() {
    return (
      <div>
        <Wrapper>
          <div>{ this.state.content }</div>
        </Wrapper>
      </div>
    );
  }
}
