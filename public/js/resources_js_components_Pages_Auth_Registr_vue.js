"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_Auth_Registr_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Auth/Registr.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Auth/Registr.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _constants_field_validation_rules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/field-validation-rules */ "./resources/js/constants/field-validation-rules.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Registr",
  data: function data() {
    return {
      show: false,
      show1: false,
      form: {
        name: '',
        surname: '',
        patronymic: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: '+380'
      },
      rules: _constants_field_validation_rules__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('authStore', ['registerAsync', 'getCurrentUserAsync'])), {}, {
    register: function register() {
      var _this = this;

      if (this.$refs.form.validate()) {
        this.form.password_confirmation = this.form.password;
        this.registerAsync(this.form).then(function (response) {
          if (response.result) {
            _this.$swal({
              icon: 'success',
              title: _this.$t("auth.".concat(response.message), {
                name: response.name
              }),
              showConfirmButton: false,
              timer: 2000
            });

            _this.$router.push({
              path: '/'
            });

            _this.getCurrentUserAsync();
          } else {
            _this.$swal({
              icon: 'error',
              title: _this.$t("auth.".concat(response.message), {
                error: response.errors
              }),
              showConfirmButton: false,
              timer: 5000
            });
          }
        });
      }
    }
  })
});

/***/ }),

/***/ "./resources/js/constants/field-validation-rules.js":
/*!**********************************************************!*\
  !*** ./resources/js/constants/field-validation-rules.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugins/i18n.js */ "./resources/js/plugins/i18n.js");

var rules = {
  required: function required(value) {
    return !!value || _plugins_i18n_js__WEBPACK_IMPORTED_MODULE_0__["default"].t('validation.required');
  },
  email: function email(value) {
    return new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/).test(value) || _plugins_i18n_js__WEBPACK_IMPORTED_MODULE_0__["default"].t('validation.wrongEmail');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rules);

/***/ }),

/***/ "./resources/js/components/Pages/Auth/Registr.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Pages/Auth/Registr.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Registr_vue_vue_type_template_id_f3959f2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registr.vue?vue&type=template&id=f3959f2a& */ "./resources/js/components/Pages/Auth/Registr.vue?vue&type=template&id=f3959f2a&");
/* harmony import */ var _Registr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registr.vue?vue&type=script&lang=js& */ "./resources/js/components/Pages/Auth/Registr.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registr_vue_vue_type_template_id_f3959f2a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Registr_vue_vue_type_template_id_f3959f2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/Auth/Registr.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/Auth/Registr.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Pages/Auth/Registr.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registr.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Auth/Registr.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/Auth/Registr.vue?vue&type=template&id=f3959f2a&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Pages/Auth/Registr.vue?vue&type=template&id=f3959f2a& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registr_vue_vue_type_template_id_f3959f2a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registr_vue_vue_type_template_id_f3959f2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registr_vue_vue_type_template_id_f3959f2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registr.vue?vue&type=template&id=f3959f2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Auth/Registr.vue?vue&type=template&id=f3959f2a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Auth/Registr.vue?vue&type=template&id=f3959f2a&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Auth/Registr.vue?vue&type=template&id=f3959f2a& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-form",
    { ref: "form" },
    [
      _c(
        "v-card",
        { staticClass: "m-1 p-1 my-1 ", attrs: { width: "500px" } },
        [
          _c(
            "v-card-title",
            { staticClass: "text-center justify-center py-6 gen-ft-style" },
            [
              _c("span", { staticClass: "display-0" }, [
                _vm._v(_vm._s(_vm.$t("app.reg"))),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-text-field", {
                attrs: {
                  rules: [_vm.rules.required],
                  maxlength: "50",
                  counter: "",
                  outlined: "",
                  clearable: "",
                  label: _vm.$t("app.name"),
                },
                model: {
                  value: _vm.form.name,
                  callback: function ($$v) {
                    _vm.$set(_vm.form, "name", $$v)
                  },
                  expression: "form.name",
                },
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  rules: [_vm.rules.required],
                  maxlength: "50",
                  counter: "",
                  outlined: "",
                  clearable: "",
                  label: _vm.$t("app.surname"),
                },
                model: {
                  value: _vm.form.surname,
                  callback: function ($$v) {
                    _vm.$set(_vm.form, "surname", $$v)
                  },
                  expression: "form.surname",
                },
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  rules: [_vm.rules.required],
                  maxlength: "50",
                  counter: "",
                  outlined: "",
                  clearable: "",
                  label: _vm.$t("app.patronymic"),
                },
                model: {
                  value: _vm.form.patronymic,
                  callback: function ($$v) {
                    _vm.$set(_vm.form, "patronymic", $$v)
                  },
                  expression: "form.patronymic",
                },
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  rules: [_vm.rules.required, _vm.rules.email],
                  maxlength: "50",
                  counter: "",
                  outlined: "",
                  clearable: "",
                  type: "email",
                  label: _vm.$t("app.email"),
                },
                model: {
                  value: _vm.form.email,
                  callback: function ($$v) {
                    _vm.$set(_vm.form, "email", $$v)
                  },
                  expression: "form.email",
                },
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  rules: [_vm.rules.required],
                  outlined: "",
                  "append-icon": _vm.show ? "mdi-eye" : "mdi-eye-off",
                  type: _vm.show ? "text" : "password",
                  counter: "",
                  label: _vm.$t("app.password"),
                },
                on: {
                  "click:append": function ($event) {
                    _vm.show = !_vm.show
                  },
                },
                model: {
                  value: _vm.form.password,
                  callback: function ($$v) {
                    _vm.$set(_vm.form, "password", $$v)
                  },
                  expression: "form.password",
                },
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  rules: [_vm.rules.required],
                  outlined: "",
                  clearable: "",
                  counter: "",
                  maxlength: "13",
                  label: _vm.$t("app.phone"),
                },
                model: {
                  value: _vm.form.phone,
                  callback: function ($$v) {
                    _vm.$set(_vm.form, "phone", $$v)
                  },
                  expression: "form.phone",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "green", text: "" },
                  on: { click: _vm.register },
                },
                [_c("v-icon", [_vm._v("done")])],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);