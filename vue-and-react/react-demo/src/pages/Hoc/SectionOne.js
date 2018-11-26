import React, { Component } from 'react';
import withHeader from './withHeader'

// @withHeader  // 装饰器写法
class Section extends Component {

  state = {
    content: '我是SectionOne'
  };

  render() {
    return (
      <div>
        { this.state.content }
      </div>
    );
  }
}

export default withHeader(Section);
