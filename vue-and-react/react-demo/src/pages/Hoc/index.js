import React, { Component } from 'react';
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import Form from './form'

class Demo extends Component {

  state = {
    content: '我是Demo组件中的内容'
  };

  checkValue = (e) => {
    const { getFieldValue } = this.props.form;
    console.log(getFieldValue('title'));
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <SectionOne />
        <SectionTwo />
        { getFieldDecorator('title')(<input />) }
        <button onClick={this.checkValue}>检查值</button>
      </div>
    );
  }
}

export default Form(Demo)