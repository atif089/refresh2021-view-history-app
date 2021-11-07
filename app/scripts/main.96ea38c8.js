"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvue_webpack_setup"] = self["webpackChunkvue_webpack_setup"] || []).push([["main"],{

/***/ 3197:
/*!******************************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_AppData_Roaming_npm_node_modules_fdk_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/style-loader/dist/cjs.js!../node_modules/css-loader/dist/cjs.js!../../../AppData/Roaming/npm/node_modules/fdk/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css& */ 1097);\n\n\n//# sourceURL=webpack://vue-webpack-setup/./src/App.vue?");

/***/ }),

/***/ 9028:
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 9936);\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://vue-webpack-setup/./src/App.vue?");

/***/ }),

/***/ 7988:
/*!****************************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true& ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _AppData_Roaming_npm_node_modules_fdk_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _AppData_Roaming_npm_node_modules_fdk_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _AppData_Roaming_npm_node_modules_fdk_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../AppData/Roaming/npm/node_modules/fdk/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90&scoped=true& */ 7183);\n\n\n//# sourceURL=webpack://vue-webpack-setup/./src/App.vue?");

/***/ }),

/***/ 7183:
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../AppData/Roaming/npm/node_modules/fdk/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"h2\", [_vm._v(\"Ticket Viewing History\")]),\n    _vm._v(\" \"),\n    _c(\"div\", [\n      _c(\n        \"div\",\n        { staticClass: \"grid\" },\n        [\n          _vm._m(0),\n          _vm._v(\" \"),\n          _vm._l(_vm.recent_tickets, function (ticket) {\n            return _c(\n              \"div\",\n              {\n                key: ticket.id,\n                staticClass: \"grid-item\",\n                on: {\n                  click: function ($event) {\n                    return _vm.openTicket(ticket.id)\n                  },\n                },\n              },\n              [\n                _c(\"span\", { staticClass: \"id\" }, [_vm._v(_vm._s(ticket.id))]),\n                _vm._v(\" \"),\n                _c(\"span\", { staticClass: \"link\" }, [\n                  _vm._v(_vm._s(ticket.subject)),\n                ]),\n                _vm._v(\" \"),\n                _c(\"span\", { staticClass: \"last-viewed\" }, [\n                  _vm._v(_vm._s(_vm._f(\"timeago\")(ticket.last_viewed_at))),\n                ]),\n              ]\n            )\n          }),\n        ],\n        2\n      ),\n    ]),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"grid-item\" }, [\n      _c(\"strong\", [_vm._v(\"Ticket ID\")]),\n      _vm._v(\" \"),\n      _c(\"strong\", [_vm._v(\"Subject\")]),\n      _vm._v(\" \"),\n      _c(\"strong\", [_vm._v(\"Last Viewed\")]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://vue-webpack-setup/./src/App.vue?../../AppData/Roaming/npm/node_modules/fdk/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ 5457:
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../../AppData/Roaming/npm/node_modules/fdk/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 3645);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.link[data-v-7ba5bd90] {\\n  cursor: pointer;\\n  text-decoration: underline;\\n  color: #0070f3;\\n}\\n.last-viewed[data-v-7ba5bd90] {\\n  font-style: italic;\\n}\\n.grid-item[data-v-7ba5bd90] {\\n  display: grid;\\n  grid-template-columns: 1fr 6fr 3fr;\\n  grid-gap: 10px;\\n  margin-bottom: 1em;\\n  font-size: 1.2em;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vue-webpack-setup/./src/App.vue?./node_modules/css-loader/dist/cjs.js!../../AppData/Roaming/npm/node_modules/fdk/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ 1097:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!../../AppData/Roaming/npm/node_modules/fdk/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_AppData_Roaming_npm_node_modules_fdk_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../../../AppData/Roaming/npm/node_modules/fdk/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css& */ 5457);\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_AppData_Roaming_npm_node_modules_fdk_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_AppData_Roaming_npm_node_modules_fdk_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack://vue-webpack-setup/./src/App.vue?./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!../../AppData/Roaming/npm/node_modules/fdk/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ 7828:
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90&scoped=true& */ 7988);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 9028);\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&scoped=true&lang=css& */ 3197);\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 1900);\n\n\n\n;\n\n\n/* normalize component */\n\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7ba5bd90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n  _App_vue_vue_type_template_id_7ba5bd90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  \"7ba5bd90\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://vue-webpack-setup/./src/App.vue?");

/***/ }),

/***/ 9936:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 7484);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ 4110);\n/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mounted() {\n    app.initialized().then((client) => {\n      this.client = client;\n    });\n    this.getTickets();\n  },\n  name: \"App\",\n  data() {\n    return {\n      recent_tickets: [],\n    };\n  },\n  methods: {\n    getTickets() {\n      // parse recent_tickets from localStorage into this.recent_tickets\n      var recent_tickets = JSON.parse(localStorage.getItem(\"recent_tickets\"));\n      if (recent_tickets) {\n        this.recent_tickets = recent_tickets;\n      }\n    },\n    openTicket(ticketID) {\n      this.client.interface.trigger(\"click\", { id: \"ticket\", value: ticketID });\n    },\n  },\n  filters: {\n    timeago(input) {\n      const time = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(input);\n      dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default()));\n      return time.fromNow();\n    },\n  },\n});\n\n\n//# sourceURL=webpack://vue-webpack-setup/./src/App.vue?./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ 2225:
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ 144);\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue */ 7828);\n\n\n\nnew vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n}).$mount(\"#app\");\n\n\n//# sourceURL=webpack://vue-webpack-setup/./src/main.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors"], function() { return __webpack_exec__(6981), __webpack_exec__(2225); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);