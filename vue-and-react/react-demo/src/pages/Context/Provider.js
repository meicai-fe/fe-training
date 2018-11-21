import React, { Component } from 'react';
import { ThemeContext, themes } from './context'
import Consumer from './Consumer'

export default class Provider extends Component {

  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value={this.state}>
        <button onClick={this.toggleTheme}>改变主题</button>
        <Consumer />
      </ThemeContext.Provider>
    );
  }
}