import React, { Component } from 'react';
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

export default class Demo extends Component {

  state = {
    content: '我是Demo组件中的内容'
  };

  render() {
    return (
      <div>
        <SectionOne />
        <SectionTwo />
      </div>
    );
  }
}
