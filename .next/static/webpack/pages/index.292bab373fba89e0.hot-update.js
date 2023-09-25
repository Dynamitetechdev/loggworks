"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/general/categories.tsx":
/*!*******************************************!*\
  !*** ./components/general/categories.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Categories = ()=>{\n    _s();\n    const categories = [\n        {\n            title: \"Catering\",\n            image: \"catering\",\n            hoverImg: \"catering\"\n        },\n        {\n            title: \"Childcare\",\n            image: \"childcare\",\n            hoverImg: \"childcare\"\n        },\n        {\n            title: \"Cleaning\",\n            image: \"cleaning\",\n            hoverImg: \"cleaning\"\n        },\n        {\n            title: \"Entertainment\",\n            image: \"entertainment\",\n            hoverImg: \"entertainment\"\n        }\n    ];\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Array(categories.length).fill(false));\n    const onHoverEnter = (index)=>{\n        const newArr = [\n            ...hover\n        ];\n        newArr[index] = true;\n        setHover(newArr);\n    };\n    const onHoverLeave = (index)=>{\n        const newArr = [\n            ...hover\n        ];\n        newArr[index] = false;\n        setHover(newArr);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:fixed bg-white md:z-10 top-12 categories border-b md:my-2 border-categoriesColor md:w-8/12 cat-scroll md:pr-38\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center max-md:overflow-x-auto md:hover:overflow-auto md:overflow-x-scroll\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"max-md:mb-4 flex items-center md:px-7 max-md:px-3 transition-transform duration-300 mr-36\",\n                children: categories.map((x, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex items-center justify-between md:my-4 py-2 px-3 border border-categoriesColor rounded-full hover:text-white hover:bg-[#000000] cursor-pointer mr-3\",\n                        onMouseEnter: ()=>onHoverEnter(index),\n                        onMouseLeave: ()=>onHoverLeave(index),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"w-[14px]\",\n                                children: hover[index] ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/assets/icons/category/\".concat(x.hoverImg, \"-white.svg\"),\n                                    width: 30,\n                                    height: 30,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/categories.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 19\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/assets/icons/category/\".concat(x.image, \".svg\"),\n                                    width: 30,\n                                    height: 30,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/categories.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/categories.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"capitalize text-[14px] ml-1 whitespace-nowrap\",\n                                children: x.title\n                            }, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/categories.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, \"nav--\".concat(index), true, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/categories.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/categories.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/categories.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/categories.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Categories, \"eMV/LEvV9vVxk4HrU6NOURlFQE8=\");\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dlbmVyYWwvY2F0ZWdvcmllcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStCO0FBRXFCO0FBRXBELE1BQU1FLGFBQWE7O0lBQ2pCLE1BQU1DLGFBQWE7UUFDakI7WUFDRUMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFVBQVU7UUFDWjtRQUNBO1lBQ0VGLE9BQU87WUFDUEMsT0FBTztZQUNQQyxVQUFVO1FBQ1o7UUFDQTtZQUNFRixPQUFPO1lBQ1BDLE9BQU87WUFDUEMsVUFBVTtRQUNaO1FBQ0E7WUFDRUYsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFVBQVU7UUFDWjtLQUNEO0lBQ0QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDUSxNQUFNTixXQUFXTyxNQUFNLEVBQUVDLElBQUksQ0FBQztJQUVqRSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU1DLFNBQVM7ZUFBSVA7U0FBTTtRQUN6Qk8sTUFBTSxDQUFDRCxNQUFNLEdBQUc7UUFDaEJMLFNBQVNNO0lBQ1g7SUFFQSxNQUFNQyxlQUFlLENBQUNGO1FBQ3BCLE1BQU1DLFNBQVM7ZUFBSVA7U0FBTTtRQUN6Qk8sTUFBTSxDQUFDRCxNQUFNLEdBQUc7UUFDaEJMLFNBQVNNO0lBQ1g7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0M7Z0JBQUdELFdBQVU7MEJBQ1hkLFdBQVdnQixHQUFHLENBQUMsQ0FBQ0MsR0FBR1Asc0JBQ2xCLDhEQUFDUTt3QkFFQ0osV0FBVTt3QkFDVkssY0FBYyxJQUFNVixhQUFhQzt3QkFDakNVLGNBQWMsSUFBTVIsYUFBYUY7OzBDQUVqQyw4REFBQ1c7Z0NBQUtQLFdBQVU7MENBQ2JWLEtBQUssQ0FBQ00sTUFBTSxpQkFDWCw4REFBQ2IsbURBQUtBO29DQUNKeUIsS0FBSywwQkFBcUMsT0FBWEwsRUFBRWQsUUFBUSxFQUFDO29DQUMxQ29CLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JDLEtBQUk7Ozs7OzhEQUdOLDhEQUFDNUIsbURBQUtBO29DQUNKeUIsS0FBSywwQkFBa0MsT0FBUkwsRUFBRWYsS0FBSyxFQUFDO29DQUN2Q3FCLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JDLEtBQUk7Ozs7Ozs7Ozs7OzBDQUlWLDhEQUFDQztnQ0FBRVosV0FBVTswQ0FDVkcsRUFBRWhCLEtBQUs7Ozs7Ozs7dUJBdkJMLFFBQWMsT0FBTlM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0IzQjtHQTFFTVg7S0FBQUE7QUE0RU4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZW5lcmFsL2NhdGVnb3JpZXMudHN4PzE4ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBEcmFnQ29udHJvbHMsIG1vdGlvbiwgdXNlRHJhZ0NvbnRyb2xzIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRXllSWNvbiwgSG9tZUljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lXCI7XG5jb25zdCBDYXRlZ29yaWVzID0gKCkgPT4ge1xuICBjb25zdCBjYXRlZ29yaWVzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNhdGVyaW5nXCIsXG4gICAgICBpbWFnZTogXCJjYXRlcmluZ1wiLFxuICAgICAgaG92ZXJJbWc6IFwiY2F0ZXJpbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNoaWxkY2FyZVwiLFxuICAgICAgaW1hZ2U6IFwiY2hpbGRjYXJlXCIsXG4gICAgICBob3ZlckltZzogXCJjaGlsZGNhcmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNsZWFuaW5nXCIsXG4gICAgICBpbWFnZTogXCJjbGVhbmluZ1wiLFxuICAgICAgaG92ZXJJbWc6IFwiY2xlYW5pbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkVudGVydGFpbm1lbnRcIixcbiAgICAgIGltYWdlOiBcImVudGVydGFpbm1lbnRcIixcbiAgICAgIGhvdmVySW1nOiBcImVudGVydGFpbm1lbnRcIixcbiAgICB9LFxuICBdO1xuICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKEFycmF5KGNhdGVnb3JpZXMubGVuZ3RoKS5maWxsKGZhbHNlKSk7XG5cbiAgY29uc3Qgb25Ib3ZlckVudGVyID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBuZXdBcnIgPSBbLi4uaG92ZXJdO1xuICAgIG5ld0FycltpbmRleF0gPSB0cnVlO1xuICAgIHNldEhvdmVyKG5ld0Fycik7XG4gIH07XG5cbiAgY29uc3Qgb25Ib3ZlckxlYXZlID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBuZXdBcnIgPSBbLi4uaG92ZXJdO1xuICAgIG5ld0FycltpbmRleF0gPSBmYWxzZTtcbiAgICBzZXRIb3ZlcihuZXdBcnIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmaXhlZCBiZy13aGl0ZSBtZDp6LTEwIHRvcC0xMiBjYXRlZ29yaWVzIGJvcmRlci1iIG1kOm15LTIgYm9yZGVyLWNhdGVnb3JpZXNDb2xvciBtZDp3LTgvMTIgY2F0LXNjcm9sbCBtZDpwci0zOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYXgtbWQ6b3ZlcmZsb3cteC1hdXRvIG1kOmhvdmVyOm92ZXJmbG93LWF1dG8gbWQ6b3ZlcmZsb3cteC1zY3JvbGxcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1heC1tZDptYi00IGZsZXggaXRlbXMtY2VudGVyIG1kOnB4LTcgbWF4LW1kOnB4LTMgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIG1yLTM2XCI+XG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKCh4LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIGtleT17YG5hdi0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWQ6bXktNCBweS0yIHB4LTMgYm9yZGVyIGJvcmRlci1jYXRlZ29yaWVzQ29sb3Igcm91bmRlZC1mdWxsIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctWyMwMDAwMDBdIGN1cnNvci1wb2ludGVyIG1yLTNcIlxuICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IG9uSG92ZXJFbnRlcihpbmRleCl9XG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gb25Ib3ZlckxlYXZlKGluZGV4KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy1bMTRweF1cIj5cbiAgICAgICAgICAgICAgICB7aG92ZXJbaW5kZXhdID8gKFxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YC9hc3NldHMvaWNvbnMvY2F0ZWdvcnkvJHt4LmhvdmVySW1nfS13aGl0ZS5zdmdgfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzB9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2Fzc2V0cy9pY29ucy9jYXRlZ29yeS8ke3guaW1hZ2V9LnN2Z2B9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXBpdGFsaXplIHRleHQtWzE0cHhdIG1sLTEgd2hpdGVzcGFjZS1ub3dyYXBcIj5cbiAgICAgICAgICAgICAgICB7eC50aXRsZX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllcztcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwiQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJ0aXRsZSIsImltYWdlIiwiaG92ZXJJbWciLCJob3ZlciIsInNldEhvdmVyIiwiQXJyYXkiLCJsZW5ndGgiLCJmaWxsIiwib25Ib3ZlckVudGVyIiwiaW5kZXgiLCJuZXdBcnIiLCJvbkhvdmVyTGVhdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsIngiLCJsaSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInNwYW4iLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/general/categories.tsx\n"));

/***/ })

});