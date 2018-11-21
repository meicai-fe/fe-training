import React, { Component } from 'react';

export default class Child extends Component {
  state = {
    content: ''
  };

  setContent = (e) => {
    this.setState({ content: e.target.value })
  }

  submit = (e) => {
    const { props: { last }, state: { content } } = this
    const time = new Date().getTime()
    if (last && (time - last.time < 10 * 1000)) {
      alert('你发言太快了')
      return
    }
    this.props.onClick({ content, time })
    this.setState({ content: '' })
  }

  render() {
    const { content } = this.state;
    return (
      <div className="Child">
        <input value={content} onChange={this.setContent} />
        <button onClick={this.submit}>增加</button>
      </div>
    );
  }
}
