import React, { Component } from 'react';

const Form = (Wrapped) =>
  class WrapperComponent extends Component {

    state = {
      fields: {
      }
    };

    getFieldValue = (name) => {
      return this.state.fields[name];
    };

    setFieldValue = (name, value) => {
      const fields = this.state.fields;
      fields[name] = value;
      this.setState({ fields });
    };

    getFieldDecorator = (name, value) => {
      const { fields } = this.state;
      if (fields[name] === undefined) {
        fields[name] = value || '';
        this.setState({ fields })
      }
      return (WrappedInput) =>
        React.cloneElement(WrappedInput,
          Object.assign({}, WrappedInput.props, { value: fields[name], onChange: (e) => this.setFieldValue(name, e.target.value) }));
    };

    render () {
      const { getFieldValue, getFieldDecorator } = this;
      const form = {
        state: this.state,
        getFieldValue,
        getFieldDecorator,
      };
      return (<Wrapped {...this.props} form={form}></Wrapped>);
    }
  };

export default Form
