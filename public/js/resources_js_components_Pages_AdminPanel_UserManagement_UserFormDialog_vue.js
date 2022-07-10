"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_AdminPanel_UserManagement_UserFormDialog_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/AdminPanel/UserManagement/UserFormDialog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/AdminPanel/UserManagement/UserFormDialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var trans_prefix = 'adminPanel.userManagement';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UserFormDialog",
  data: function data() {
    return {
      trans_prefix: trans_prefix,
      show: false,
      dialog: false,
      confirmDialog: false,
      hasItem: false,
      form: {
        id: '',
        name: '',
        surname: '',
        patronymic: '',
        password: '',
        email: '',
        phone: '+380',
        role: 1
      }
    };
  },
  mounted: function mounted() {
    if (this.item !== undefined) {
      this.form.id = this.item.id;
      this.form.name = this.item.name;
      this.form.surname = this.item.surname;
      this.form.patronymic = this.item.patronymic;
      this.form.email = this.item.email;
      this.form.phone = this.item.phone;
      this.form.role = this.item.roleId;
      this.hasItem = true;
    }
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('userManagementStore', ['roles'])), {}, {
    disableRunAction: function disableRunAction() {
      var result = true;

      if (this.form.name !== '' && this.form.name !== null && this.form.surname !== '' && this.form.surname !== null && this.form.patronymic !== '' && this.form.patronymic !== null && this.form.email !== '' && this.form.email !== null && this.form.phone !== '' && this.form.phone !== null) {
        if (this.hasItem) {
          result = false;
        } else {
          if (this.form.password !== '' && this.form.password !== null) {
            result = false;
          }
        }
      }

      return result;
    }
  }),
  props: {
    item: Object,
    title: String
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('userManagementStore', ['editUserAsync', 'getUsersAsync', 'addUserAsync'])), {}, {
    runAction: function runAction() {
      this.hasItem ? this.edit() : this.saveNewItem();
      this.dialog = false;
    },
    edit: function edit() {
      var _this = this;

      this.editUserAsync(this.form).then(function (result) {
        if (result) {
          _this.$swal({
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          });
        } else {
          _this.$swal({
            icon: 'error',
            title: _this.$t("".concat(trans_prefix, ".errorEditUser")),
            showConfirmButton: false,
            timer: 5000
          });
        }

        _this.getUsersAsync();
      });
    },
    saveNewItem: function saveNewItem() {
      var _this2 = this;

      this.addUserAsync(this.form).then(function (result) {
        if (result) {
          _this2.$swal({
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          });
        } else {
          _this2.$swal({
            icon: 'error',
            title: _this2.$t("".concat(trans_prefix, ".errorAddUser")),
            showConfirmButton: false,
            timer: 5000
          });
        }

        _this2.getUsersAsync();
      });
    }
  })
});

/***/ }),

/***/ "./resources/js/components/Pages/AdminPanel/UserManagement/UserFormDialog.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Pages/AdminPanel/UserManagement/UserFormDialog.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserFormDialog_vue_vue_type_template_id_67f58198___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserFormDialog.vue?vue&type=template&id=67f58198& */ "./resources/js/components/Pages/AdminPanel/UserManagement/UserFormDialog.vue?vue&type=template&id=67f58198&");
/* harmony import */ var _UserFormDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserFormDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/Pages/AdminPanel/UserManagement/UserFormDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserFormDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserFormDialog_vue_vue_type_template_id_67f58198___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserFormDialog_vue_vue_type_template_id_67f58198___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/AdminPanel/UserManagement/UserFormDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/AdminPanel/UserManagement/UserFormDialog.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Pages/AdminPanel/UserManagement/UserFormDialog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserFormDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserFormDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/AdminPanel/UserManagement/UserFormDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserFormDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/AdminPanel/UserManagement/UserFormDialog.vue?vue&type=template&id=67f58198&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/Pages/AdminPanel/UserManagement/UserFormDialog.vue?vue&type=template&id=67f58198& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserFormDialog_vue_vue_type_template_id_67f58198___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserFormDialog_vue_vue_type_template_id_67f58198___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserFormDialog_vue_vue_type_template_id_67f58198___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserFormDialog.vue?vue&type=template&id=67f58198& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/AdminPanel/UserManagement/UserFormDialog.vue?vue&type=template&id=67f58198&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/AdminPanel/UserManagement/UserFormDialog.vue?vue&type=template&id=67f58198&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/AdminPanel/UserManagement/UserFormDialog.vue?vue&type=template&id=67f58198& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    "v-row",
    { attrs: { justify: "center" } },
    [
      _c(
        "v-dialog",
        {
          attrs: {
            persistent: "",
            width: _vm.$vuetify.breakpoint.mdAndUp ? "30%" : "100%",
          },
          on: {
            "click:outside": function ($event) {
              _vm.dialog = false
            },
          },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function (ref) {
                var on = ref.on
                var attrs = ref.attrs
                return [
                  _vm.hasItem
                    ? _c(
                        "v-btn",
                        _vm._g(
                          _vm._b(
                            { attrs: { color: "green darken-1", text: "" } },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [_c("v-icon", [_vm._v("edit")])],
                        1
                      )
                    : _c(
                        "v-btn",
                        _vm._g(
                          _vm._b(
                            { attrs: { color: "blue darken-1", text: "" } },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [_c("v-icon", [_vm._v("add")])],
                        1
                      ),
                ]
              },
            },
          ]),
          model: {
            value: _vm.dialog,
            callback: function ($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog",
          },
        },
        [
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "text-h5" }, [
                _c("span", { staticClass: "display-0" }, [
                  _vm._v(_vm._s(_vm.title)),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: {
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
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.hasItem,
                        expression: "!hasItem",
                      },
                    ],
                    attrs: {
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
                      outlined: "",
                      clearable: "",
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
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      items: _vm.roles,
                      label: _vm.$t("app.role"),
                      "item-text": "name",
                      "item-value": "id",
                      dense: "",
                      outlined: "",
                    },
                    model: {
                      value: _vm.form.role,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "role", $$v)
                      },
                      expression: "form.role",
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
                      attrs: { color: "red darken-1", text: "" },
                      on: {
                        click: function ($event) {
                          _vm.dialog = false
                        },
                      },
                    },
                    [_c("v-icon", [_vm._v("close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        disabled: _vm.disableRunAction,
                        color: "green darken-1",
                        text: "",
                      },
                      on: { click: _vm.runAction },
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
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);