webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      open: false
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Page"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__["TitleBar"], {
        primaryAction: {
          content: 'Select products'
        }
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["EmptyState"], {
        heading: "Discount your products temporarily",
        action: {
          content: 'Select products',
          onAction: function onAction() {
            return console.log('clicked');
          }
        },
        image: img
      }, __jsx("p", null, "Select products to change their price temporarily."))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbWciLCJJbmRleCIsIm9wZW4iLCJjb250ZW50Iiwib25BY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEdBQUcsR0FBRyxtRUFBWjs7SUFHTUMsSzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDTTtBQUFFQyxVQUFJLEVBQUU7QUFBUixLOzs7Ozs7OzZCQUNDO0FBQ1AsYUFDRixNQUFDLHFEQUFELFFBQ08sTUFBQyxrRUFBRDtBQUNMLHFCQUFhLEVBQUU7QUFDYkMsaUJBQU8sRUFBRTtBQURJO0FBRFYsUUFEUCxFQU1JLE1BQUMsdURBQUQsUUFDSSxNQUFDLDJEQUFEO0FBQ0EsZUFBTyxFQUFDLG9DQURSO0FBRUEsY0FBTSxFQUFFO0FBQ1JBLGlCQUFPLEVBQUUsaUJBREQ7QUFFUkMsa0JBQVEsRUFBRTtBQUFBLG1CQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLENBQU47QUFBQTtBQUZGLFNBRlI7QUFNQSxhQUFLLEVBQUVOO0FBTlAsU0FRQSxzRUFSQSxDQURKLENBTkosQ0FERTtBQXFCRzs7OztFQXhCV08sNENBQUssQ0FBQ0MsUzs7QUEyQlRQLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5mMDdlZmE4NTMyZTEwNTgwYTU3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBFbXB0eVN0YXRlLCBMYXlvdXQsIFBhZ2UgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHsgVGl0bGVCYXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuY29uc3QgaW1nID0gJ2h0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnJztcclxuXHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHsgb3BlbjogZmFsc2UgfTtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgIDxQYWdlPlxyXG4gICAgICAgICAgIDxUaXRsZUJhclxyXG4gICAgICBwcmltYXJ5QWN0aW9uPXt7XHJcbiAgICAgICAgY29udGVudDogJ1NlbGVjdCBwcm9kdWN0cycsXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxFbXB0eVN0YXRlXHJcbiAgICAgICAgICAgIGhlYWRpbmc9XCJEaXNjb3VudCB5b3VyIHByb2R1Y3RzIHRlbXBvcmFyaWx5XCJcclxuICAgICAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdTZWxlY3QgcHJvZHVjdHMnLFxyXG4gICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gY29uc29sZS5sb2coJ2NsaWNrZWQnKSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaW1hZ2U9e2ltZ31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPlNlbGVjdCBwcm9kdWN0cyB0byBjaGFuZ2UgdGhlaXIgcHJpY2UgdGVtcG9yYXJpbHkuPC9wPlxyXG4gICAgICAgIDwvRW1wdHlTdGF0ZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIDwvUGFnZT5cclxuICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9