import React, { Component } from 'react';

export default class HelloWorld extends Component {
  state = {
    list: [
      { title: 'first' },
      { title: 'second' },
    ],
    title: '',
  };

  setTitle = (e) => {
    this.setState({ title: e.target.value })
  }

  submit = (e) => {
    const { title, list } = this.state;
    list.push({ title });
    this.setState({ list, title: '' });
  }

  add = (msg) => {
    const { msgs } = this.state;
    msgs.push(msg);
    this.setState({ msgs });
  }

  render() {
    const { title, list } = this.state;
    return (
      <div className="App">
        { list.map((item, index) => (
            <div key={index}>{ item.title }</div>
          )
        )}
        <input value={title} onChange={this.setTitle} />
        <button onClick={this.submit}>增加</button>
      </div>
    );
  }
}