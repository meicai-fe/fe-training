import { observable, action, decorate } from "mobx";

// 使用装饰器的写法
// export default class Global {
//   @observable height = window.innerHeight
//   @observable width = window.innerWidth
//
//   @action
//   setHeight () {
//     this.height = window.innerHeight
//   }
//
//   @action
//   setWidth () {
//     this.width = window.innerWidth
//   }
// }

class Global {
  height = window.innerHeight;
  width = window.innerWidth;
  setHeight = () => {
    this.height = window.innerHeight
  }
  setWidth = () => {
    this.width = window.innerWidth
  }
}

export default decorate(Global, {
  width: observable,
  height: observable,
  setHeight: action,
  setWidth: action,
})