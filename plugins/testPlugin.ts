import Vue from 'vue'

export default ({ app, store }, inject) => {
  let wrap = null
  store.state.test = 1
  let component = null
  class inst {
    hide: () => void
    constructor() { }
  }
  var test = new inst()
  inst.prototype.hide = function() {
    console.log('hide')
  }
  // const inst = {
  //   show: function(msg) {
  //     var vm = new Vue({
  //       render (h) {
  //         return h('div', msg)
  //       }
  //     })
  //     vm.$mount('.test');
  //   }
  // }

  inject('injectway', test)
}