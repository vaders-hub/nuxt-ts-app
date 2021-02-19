exports.ids = [1];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=c13cfbec&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"user"},[_vm._ssrNode("<div class=\"title\">"+_vm._ssrEscape("Welcome "+_vm._s(_vm.fullName))+"</div> <div>\n    First:\n    <input type=\"text\""+(_vm._ssrAttr("value",(_vm.localData.first)))+"></div> <button>Update Info</button>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=c13cfbec&

// EXTERNAL MODULE: external "nuxt-property-decorator"
var external_nuxt_property_decorator_ = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const user = Object(external_nuxt_property_decorator_["namespace"])('user');
let lib_vue_loader_options_pagesvue_type_script_lang_ts_User = class User extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.localData = {};
  }

  mounted() {
    this.localData = { ...this.localData,
      ...this.info
    };
    this.$axios.get('test');
    this.$injectway.hide();
    console.log('this.$log', this.$injectway);
  }

  update() {
    this.updateUserInfo(this.localData);
  }

};

__decorate([user.State], lib_vue_loader_options_pagesvue_type_script_lang_ts_User.prototype, "info", void 0);

__decorate([user.Getter], lib_vue_loader_options_pagesvue_type_script_lang_ts_User.prototype, "fullName", void 0);

__decorate([user.Mutation], lib_vue_loader_options_pagesvue_type_script_lang_ts_User.prototype, "updateUserInfo", void 0);

lib_vue_loader_options_pagesvue_type_script_lang_ts_User = __decorate([external_nuxt_property_decorator_["Component"]], lib_vue_loader_options_pagesvue_type_script_lang_ts_User);
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_ts_ = (lib_vue_loader_options_pagesvue_type_script_lang_ts_User);
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pagesvue_type_script_lang_ts_ = (lib_vue_loader_options_pagesvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "54d20e33"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map