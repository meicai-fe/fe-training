import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

// @inject('global')
// @observer
class MobxDemo extends Component {

  componentDidMount () {
    const { global } = this.props;
    window.addEventListener('resize', () => {
      global.setHeight();
      // 问题：如果render中不渲染global.width，更新global.width组件会更新吗
      // global.setWidth();
    })
  }
  render () {
    const { global } = this.props;
    return (
      <div className={'mcrm-container'} style={{ height: global.height }}>
        { global.height }
      </div>
    );
  }
}

export default inject('global')(observer(MobxDemo))