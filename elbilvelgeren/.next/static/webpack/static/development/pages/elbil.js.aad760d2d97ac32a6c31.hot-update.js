webpackHotUpdate("static/development/pages/elbil.js",{

/***/ "./pages/elbil.js":
/*!************************!*\
  !*** ./pages/elbil.js ***!
  \************************/
/*! exports provided: ALL_POSTS_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_POSTS_QUERY", function() { return ALL_POSTS_QUERY; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Navbar */ "./Components/Navbar.js");
/* harmony import */ var _Components_CarCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/CarCard */ "./Components/CarCard.js");
/* harmony import */ var _Components_FlexWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/FlexWrapper */ "./Components/FlexWrapper.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _elbiler_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../elbiler.json */ "./elbiler.json");
var _elbiler_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../elbiler.json */ "./elbiler.json", 1);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../lib/apollo */ "./lib/apollo.js");









var _jsxFileName = "/Users/mariusgrondahl/Documents/GitHub/elbilvelger/elbilvelgeren/pages/elbil.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n{\n    labrador {\n    article(id: 71564397) {\n      title\n      bodytextHTML\n    }\n  }\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\nwidth: 100%;\ndisplay: flex;\nflex-direction: column;\nalign-self: center;  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var Detail = _emotion_styled__WEBPACK_IMPORTED_MODULE_13__["default"].div(_templateObject());
var ALL_POSTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_17___default()(_templateObject2());

function ElbilDetail() {
  useEffect(function () {});
}

ElbilDetail.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var req;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req;
            return _context.abrupt("return",
            /*#__PURE__*/
            function (_Component) {
              Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ElbilDetail, _Component);

              function ElbilDetail(props) {
                var _this;

                Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ElbilDetail);

                _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ElbilDetail).call(this, props));
                _this.state = {
                  elbilId: "0"
                };
                return _this;
              }

              Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ElbilDetail, [{
                key: "componentDidMount",
                value: function componentDidMount() {
                  // Fetching this location: http://localhost:3000/elbil?id=1
                  var url = window.location.href; // Spltting the URL to this http://localhost:3000/elbil?id = 1 

                  var query = url.split("="); // Getting the id from the second part of the URL

                  var queryId = Number(query[1]); // Setting elbilId state to the id from Params

                  this.setState({
                    elbilId: queryId
                  });
                }
              }, {
                key: "render",
                value: function render() {
                  var _this2 = this;

                  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_16__["useQuery"])(ALL_POSTS_QUERY, {
                    notifyOnNetworkStatusChange: true
                  }),
                      loading = _useQuery.loading,
                      error = _useQuery.error,
                      data = _useQuery.data,
                      fetchMore = _useQuery.fetchMore,
                      networkStatus = _useQuery.networkStatus; // Filtering out all the Cars that does not match the id 


                  var elbilDetail = _elbiler_json__WEBPACK_IMPORTED_MODULE_14__.filter(function (elbil) {
                    return elbil.id === _this2.state.elbilId;
                  }); // Mapping the id that remains after filtering

                  var elBiler = elbilDetail.map(function (elbil) {
                    return __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default.a, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                      },
                      __self: this
                    }, __jsx(Detail, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                      },
                      __self: this
                    }, __jsx(_Components_CarCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
                      merke: elbil.modell,
                      modell: elbil.merke,
                      type: elbil.type,
                      rekkevidde: elbil.rekkevidde,
                      pris: elbil.pris,
                      bildeURL: elbil.bildeURL,
                      id: elbil.id,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                      },
                      __self: this
                    }), __jsx("h1", {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84
                      },
                      __self: this
                    }, elbil.merke, " ", elbil.modell, " ", elbil.type), __jsx("h3", {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                      },
                      __self: this
                    }, "Sitteplasser: ", elbil.sitteplasser), __jsx("h3", {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 87
                      },
                      __self: this
                    }, "Tester:"), __jsx("a", {
                      href: elbil.tester,
                      target: "_blank",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 88
                      },
                      __self: this
                    }, elbil.tester), _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                      data: data
                    })));
                  });
                  return __jsx(_Components_FlexWrapper__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 95
                    },
                    __self: this
                  }, __jsx(_Components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 96
                    },
                    __self: this
                  }), elBiler);
                }
              }]);

              return ElbilDetail;
            }(react__WEBPACK_IMPORTED_MODULE_9__["Component"]));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_18__["withApollo"])(ElbilDetail));

/***/ })

})
//# sourceMappingURL=elbil.js.aad760d2d97ac32a6c31.hot-update.js.map