"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_HomePage_components_DesktopHomePage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/HomePage/components/DesktopHomePage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/HomePage/components/DesktopHomePage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _constants_bg_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants/bg-image */ "./resources/js/constants/bg-image.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var trans_prefix = 'pages.homePage';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DesktopHomePage",
  data: function data() {
    return {
      loading: _constants_bg_image__WEBPACK_IMPORTED_MODULE_0__.loading,
      trans_prefix: trans_prefix
    };
  },
  mounted: function mounted() {
    this.getCarouselImageAsync();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('appStore', ['carouselImage'])),
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('appStore', ['getCarouselImageAsync']))
});

/***/ }),

/***/ "./resources/js/components/Pages/HomePage/components/DesktopHomePage.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Pages/HomePage/components/DesktopHomePage.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DesktopHomePage_vue_vue_type_template_id_04a370e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesktopHomePage.vue?vue&type=template&id=04a370e8& */ "./resources/js/components/Pages/HomePage/components/DesktopHomePage.vue?vue&type=template&id=04a370e8&");
/* harmony import */ var _DesktopHomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesktopHomePage.vue?vue&type=script&lang=js& */ "./resources/js/components/Pages/HomePage/components/DesktopHomePage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DesktopHomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DesktopHomePage_vue_vue_type_template_id_04a370e8___WEBPACK_IMPORTED_MODULE_0__.render,
  _DesktopHomePage_vue_vue_type_template_id_04a370e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/HomePage/components/DesktopHomePage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/HomePage/components/DesktopHomePage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Pages/HomePage/components/DesktopHomePage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopHomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DesktopHomePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/HomePage/components/DesktopHomePage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopHomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/HomePage/components/DesktopHomePage.vue?vue&type=template&id=04a370e8&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Pages/HomePage/components/DesktopHomePage.vue?vue&type=template&id=04a370e8& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopHomePage_vue_vue_type_template_id_04a370e8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopHomePage_vue_vue_type_template_id_04a370e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopHomePage_vue_vue_type_template_id_04a370e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DesktopHomePage.vue?vue&type=template&id=04a370e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/HomePage/components/DesktopHomePage.vue?vue&type=template&id=04a370e8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/HomePage/components/DesktopHomePage.vue?vue&type=template&id=04a370e8&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/HomePage/components/DesktopHomePage.vue?vue&type=template&id=04a370e8& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    {
      staticClass: "d-flex flex-row",
      staticStyle: { width: "98%", height: "auto" },
    },
    [
      _c(
        "v-card",
        {
          staticClass: "d-flex flex-row align-self-start pl-5",
          staticStyle: { width: "45%", height: "500pt" },
          attrs: { shaped: "" },
        },
        [
          _c("div", { staticStyle: { width: "100%" } }, [
            _c("div", { staticClass: "text-center mt-2" }, [
              _c("span", { staticClass: "textInHomePage" }, [
                _vm._v(_vm._s(_vm.$t(_vm.trans_prefix + ".title"))),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex flex-row" },
              [
                _c("div", {
                  staticClass: "my-auto",
                  attrs: { id: "lineInHomePage" },
                }),
                _vm._v(" "),
                _c("v-card-title", { staticClass: "text-center" }, [
                  _c(
                    "span",
                    {
                      staticClass: "textInHomePage",
                      attrs: { id: "projectName" },
                    },
                    [_vm._v(_vm._s(_vm.$t("projectName")))]
                  ),
                ]),
                _vm._v(" "),
                _c("div", {
                  staticClass: "my-auto",
                  attrs: { id: "lineInHomePage" },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mx-auto my-3", attrs: { id: "check_list" } },
              [
                _c(
                  "div",
                  { staticStyle: { float: "left", clear: "left" } },
                  [
                    _c(
                      "v-icon",
                      { staticClass: "mr-3", attrs: { color: "green" } },
                      [_vm._v("done")]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("span", { staticClass: "textInHomePage" }, [
                  _vm._v(_vm._s(_vm.$t(_vm.trans_prefix + ".title2"))),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mx-auto my-3", attrs: { id: "check_list" } },
              [
                _c(
                  "div",
                  { staticStyle: { float: "left", clear: "left" } },
                  [
                    _c(
                      "v-icon",
                      { staticClass: "mr-3", attrs: { color: "green" } },
                      [_vm._v("done")]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("span", { staticClass: "textInHomePage" }, [
                  _vm._v(_vm._s(_vm.$t(_vm.trans_prefix + ".title3"))),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mx-auto my-3", attrs: { id: "check_list" } },
              [
                _c(
                  "div",
                  { staticStyle: { float: "left", clear: "left" } },
                  [
                    _c(
                      "v-icon",
                      { staticClass: "mr-3", attrs: { color: "green" } },
                      [_vm._v("done")]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("span", { staticClass: "textInHomePage" }, [
                  _vm._v(_vm._s(_vm.$t(_vm.trans_prefix + ".title4"))),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-row justify-center" }, [
              _c(
                "div",
                { staticClass: "d-flex flex-row" },
                [
                  _c("v-icon", { attrs: { size: "75", color: "#4F53B1" } }, [
                    _vm._v(
                      "\n                        bed\n                    "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("v-card-title", [
                    _c("span", { staticClass: "textInIcons" }, [
                      _vm._v(_vm._s(_vm.$t(_vm.trans_prefix + ".bed"))),
                    ]),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex flex-row" },
                [
                  _c("v-icon", { attrs: { size: "75", color: "#4F53B1" } }, [
                    _vm._v(
                      "\n                        sensor_window\n                    "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("v-card-title", [
                    _c("span", { staticClass: "textInIcons" }, [
                      _vm._v(_vm._s(_vm.$t(_vm.trans_prefix + ".drawer"))),
                    ]),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex flex-row" },
                [
                  _c("v-icon", { attrs: { size: "75", color: "#4F53B1" } }, [
                    _vm._v(
                      "\n                        weekend\n                    "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("v-card-title", [
                    _c("span", { staticClass: "textInIcons" }, [
                      _vm._v(_vm._s(_vm.$t(_vm.trans_prefix + ".sofa"))),
                    ]),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex flex-row" },
                [
                  _c("v-icon", { attrs: { size: "75", color: "#4F53B1" } }, [
                    _vm._v(
                      "\n                        panorama_vertical\n                    "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("v-card-title", [
                    _c("span", { staticClass: "textInIcons" }, [
                      _vm._v(_vm._s(_vm.$t(_vm.trans_prefix + ".poof"))),
                    ]),
                  ]),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-row my-2" }, [
              _c(
                "div",
                { staticClass: "mx-auto", staticStyle: { width: "50%" } },
                [
                  _c(
                    "router-link",
                    {
                      staticStyle: { "text-decoration": "none" },
                      attrs: { to: { name: "upholstery" } },
                    },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mx-auto",
                          staticStyle: { width: "100%" },
                          attrs: {
                            rounded: "",
                            color: "#4F53B1",
                            dark: "",
                            elevation: "12",
                            large: "",
                            outlined: "",
                          },
                        },
                        [
                          _c("span", { staticClass: "textBtn" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(_vm.trans_prefix + ".lincToTextile")
                              )
                            ),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-row my-2" }, [
              _c(
                "div",
                { staticClass: "mx-auto", staticStyle: { width: "50%" } },
                [
                  _c(
                    "router-link",
                    {
                      staticStyle: { "text-decoration": "none" },
                      attrs: { to: { name: "wholesaleCustomers" } },
                    },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mx-auto",
                          staticStyle: { width: "100%" },
                          attrs: {
                            rounded: "",
                            color: "#4F53B1",
                            dark: "",
                            elevation: "12",
                            large: "",
                            outlined: "",
                          },
                        },
                        [
                          _c("span", { staticClass: "textBtn" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(_vm.trans_prefix + ".lincToWholesale")
                              )
                            ),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-row my-2" }, [
              _c(
                "div",
                { staticClass: "mx-auto", staticStyle: { width: "50%" } },
                [
                  _c(
                    "router-link",
                    {
                      staticStyle: { "text-decoration": "none" },
                      attrs: { to: { name: "aboutAs" } },
                    },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mx-auto",
                          staticStyle: { width: "100%" },
                          attrs: {
                            rounded: "",
                            color: "#4F53B1",
                            dark: "",
                            elevation: "12",
                            large: "",
                            outlined: "",
                          },
                        },
                        [
                          _c("span", { staticClass: "textBtn" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(_vm.trans_prefix + ".lincToAboutAs")
                              )
                            ),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex flex-row my-2" }, [
              _c(
                "div",
                { staticClass: "mx-auto", staticStyle: { width: "50%" } },
                [
                  _c(
                    "router-link",
                    {
                      staticStyle: { "text-decoration": "none" },
                      attrs: { to: { name: "catalog" } },
                    },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mx-auto",
                          staticStyle: { width: "100%" },
                          attrs: {
                            rounded: "",
                            color: "#4F53B1",
                            dark: "",
                            elevation: "12",
                            large: "",
                            outlined: "",
                          },
                        },
                        [
                          _c("span", { staticClass: "textBtn" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(_vm.trans_prefix + ".lincToCatalog")
                              )
                            ),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-5", attrs: { id: "lineInHomePage" } }),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "d-flex flex-row align-self-start ml-5",
          staticStyle: { width: "55%" },
        },
        [
          _c(
            "v-card",
            { attrs: { shaped: "" } },
            [
              _c(
                "v-carousel",
                {
                  attrs: {
                    continuous: true,
                    height: "500pt",
                    cycle: "",
                    "show-arrows-on-hover": "",
                  },
                },
                _vm._l(_vm.carouselImage, function (i) {
                  return _c(
                    "v-carousel-item",
                    {
                      key: i.id,
                      attrs: {
                        "reverse-transition": "fade-transition",
                        transition: "fade-transition",
                      },
                    },
                    [
                      _c("img", {
                        attrs: {
                          alt: _vm.loading.img,
                          height: "670pt",
                          width: "100%",
                          src: i.path,
                        },
                      }),
                    ]
                  )
                }),
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