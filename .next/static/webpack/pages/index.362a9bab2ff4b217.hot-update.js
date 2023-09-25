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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Categories = ()=>{\n    _s();\n    const categories = [\n        {\n            title: \"Catering\",\n            image: \"catering\",\n            hoverImg: \"catering\"\n        },\n        {\n            title: \"Childcare\",\n            image: \"childcare\",\n            hoverImg: \"childcare\"\n        },\n        {\n            title: \"Cleaning\",\n            image: \"cleaning\",\n            hoverImg: \"cleaning\"\n        },\n        {\n            title: \"Entertainment\",\n            image: \"entertainment\",\n            hoverImg: \"entertainment\"\n        },\n        {\n            title: \"Entertainment\",\n            image: \"appRepair\",\n            hoverImg: \"appRepair\"\n        }\n    ];\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Array(categories.length).fill(false));\n    const onHoverEnter = (index)=>{\n        const newArr = [\n            ...hover\n        ];\n        newArr[index] = true;\n        setHover(newArr);\n    };\n    const onHoverLeave = (index)=>{\n        const newArr = [\n            ...hover\n        ];\n        newArr[index] = false;\n        setHover(newArr);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:fixed bg-white md:z-10 top-12 categories border-b md:my-2 border-categoriesColor md:w-8/12 cat-scroll md:pr-38\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center max-md:overflow-x-auto md:hover:overflow-auto md:overflow-x-scroll\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"max-md:mb-4 flex items-center md:px-7 max-md:px-3 transition-transform duration-300 mr-36\",\n                children: categories.map((x, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex items-center md:my-4 py-2 px-3 border border-categoriesColor rounded-full hover:text-white hover:bg-[#000000] cursor-pointer mr-3\",\n                        onMouseEnter: ()=>onHoverEnter(index),\n                        onMouseLeave: ()=>onHoverLeave(index),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"w-[24px]\",\n                                children: hover[index] ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/assets/icons/category/\".concat(x.hoverImg, \"-white.svg\"),\n                                    width: 24,\n                                    height: 24,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/categories.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 19\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/assets/icons/category/\".concat(x.image, \".svg\"),\n                                    width: 24,\n                                    height: 24,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/categories.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/categories.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"capitalize text-[14px] ml-1 whitespace-nowrap\",\n                                children: x.title\n                            }, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/categories.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, \"nav--\".concat(index), true, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/categories.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/categories.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/categories.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/categories.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Categories, \"eMV/LEvV9vVxk4HrU6NOURlFQE8=\");\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dlbmVyYWwvY2F0ZWdvcmllcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStCO0FBRXFCO0FBRXBELE1BQU1FLGFBQWE7O0lBQ2pCLE1BQU1DLGFBQWE7UUFDakI7WUFDRUMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFVBQVU7UUFDWjtRQUNBO1lBQ0VGLE9BQU87WUFDUEMsT0FBTztZQUNQQyxVQUFVO1FBQ1o7UUFDQTtZQUNFRixPQUFPO1lBQ1BDLE9BQU87WUFDUEMsVUFBVTtRQUNaO1FBQ0E7WUFDRUYsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFVBQVU7UUFDWjtRQUNBO1lBQ0VGLE9BQU87WUFDUEMsT0FBTztZQUNQQyxVQUFVO1FBQ1o7S0FDRDtJQUNELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQ1EsTUFBTU4sV0FBV08sTUFBTSxFQUFFQyxJQUFJLENBQUM7SUFFakUsTUFBTUMsZUFBZSxDQUFDQztRQUNwQixNQUFNQyxTQUFTO2VBQUlQO1NBQU07UUFDekJPLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHO1FBQ2hCTCxTQUFTTTtJQUNYO0lBRUEsTUFBTUMsZUFBZSxDQUFDRjtRQUNwQixNQUFNQyxTQUFTO2VBQUlQO1NBQU07UUFDekJPLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHO1FBQ2hCTCxTQUFTTTtJQUNYO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUFHRCxXQUFVOzBCQUNYZCxXQUFXZ0IsR0FBRyxDQUFDLENBQUNDLEdBQUdQLHNCQUNsQiw4REFBQ1E7d0JBRUNKLFdBQVU7d0JBQ1ZLLGNBQWMsSUFBTVYsYUFBYUM7d0JBQ2pDVSxjQUFjLElBQU1SLGFBQWFGOzswQ0FFakMsOERBQUNXO2dDQUFLUCxXQUFVOzBDQUNiVixLQUFLLENBQUNNLE1BQU0saUJBQ1gsOERBQUNiLG1EQUFLQTtvQ0FDSnlCLEtBQUssMEJBQXFDLE9BQVhMLEVBQUVkLFFBQVEsRUFBQztvQ0FDMUNvQixPQUFPO29DQUNQQyxRQUFRO29DQUNSQyxLQUFJOzs7Ozs4REFHTiw4REFBQzVCLG1EQUFLQTtvQ0FDSnlCLEtBQUssMEJBQWtDLE9BQVJMLEVBQUVmLEtBQUssRUFBQztvQ0FDdkNxQixPQUFPO29DQUNQQyxRQUFRO29DQUNSQyxLQUFJOzs7Ozs7Ozs7OzswQ0FJViw4REFBQ0M7Z0NBQUVaLFdBQVU7MENBQ1ZHLEVBQUVoQixLQUFLOzs7Ozs7O3VCQXZCTCxRQUFjLE9BQU5TOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCM0I7R0EvRU1YO0tBQUFBO0FBaUZOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2VuZXJhbC9jYXRlZ29yaWVzLnRzeD8xOGRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgRHJhZ0NvbnRyb2xzLCBtb3Rpb24sIHVzZURyYWdDb250cm9scyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEV5ZUljb24sIEhvbWVJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZVwiO1xuY29uc3QgQ2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJDYXRlcmluZ1wiLFxuICAgICAgaW1hZ2U6IFwiY2F0ZXJpbmdcIixcbiAgICAgIGhvdmVySW1nOiBcImNhdGVyaW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJDaGlsZGNhcmVcIixcbiAgICAgIGltYWdlOiBcImNoaWxkY2FyZVwiLFxuICAgICAgaG92ZXJJbWc6IFwiY2hpbGRjYXJlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJDbGVhbmluZ1wiLFxuICAgICAgaW1hZ2U6IFwiY2xlYW5pbmdcIixcbiAgICAgIGhvdmVySW1nOiBcImNsZWFuaW5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJFbnRlcnRhaW5tZW50XCIsXG4gICAgICBpbWFnZTogXCJlbnRlcnRhaW5tZW50XCIsXG4gICAgICBob3ZlckltZzogXCJlbnRlcnRhaW5tZW50XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJFbnRlcnRhaW5tZW50XCIsXG4gICAgICBpbWFnZTogXCJhcHBSZXBhaXJcIixcbiAgICAgIGhvdmVySW1nOiBcImFwcFJlcGFpclwiLFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoQXJyYXkoY2F0ZWdvcmllcy5sZW5ndGgpLmZpbGwoZmFsc2UpKTtcblxuICBjb25zdCBvbkhvdmVyRW50ZXIgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG5ld0FyciA9IFsuLi5ob3Zlcl07XG4gICAgbmV3QXJyW2luZGV4XSA9IHRydWU7XG4gICAgc2V0SG92ZXIobmV3QXJyKTtcbiAgfTtcblxuICBjb25zdCBvbkhvdmVyTGVhdmUgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG5ld0FyciA9IFsuLi5ob3Zlcl07XG4gICAgbmV3QXJyW2luZGV4XSA9IGZhbHNlO1xuICAgIHNldEhvdmVyKG5ld0Fycik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmZpeGVkIGJnLXdoaXRlIG1kOnotMTAgdG9wLTEyIGNhdGVnb3JpZXMgYm9yZGVyLWIgbWQ6bXktMiBib3JkZXItY2F0ZWdvcmllc0NvbG9yIG1kOnctOC8xMiBjYXQtc2Nyb2xsIG1kOnByLTM4XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1heC1tZDpvdmVyZmxvdy14LWF1dG8gbWQ6aG92ZXI6b3ZlcmZsb3ctYXV0byBtZDpvdmVyZmxvdy14LXNjcm9sbFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWF4LW1kOm1iLTQgZmxleCBpdGVtcy1jZW50ZXIgbWQ6cHgtNyBtYXgtbWQ6cHgtMyB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgbXItMzZcIj5cbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKHgsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAga2V5PXtgbmF2LS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1kOm15LTQgcHktMiBweC0zIGJvcmRlciBib3JkZXItY2F0ZWdvcmllc0NvbG9yIHJvdW5kZWQtZnVsbCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLVsjMDAwMDAwXSBjdXJzb3ItcG9pbnRlciBtci0zXCJcbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBvbkhvdmVyRW50ZXIoaW5kZXgpfVxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IG9uSG92ZXJMZWF2ZShpbmRleCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctWzI0cHhdXCI+XG4gICAgICAgICAgICAgICAge2hvdmVyW2luZGV4XSA/IChcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2AvYXNzZXRzL2ljb25zL2NhdGVnb3J5LyR7eC5ob3ZlckltZ30td2hpdGUuc3ZnYH1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI0fVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI0fVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YC9hc3NldHMvaWNvbnMvY2F0ZWdvcnkvJHt4LmltYWdlfS5zdmdgfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjR9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FwaXRhbGl6ZSB0ZXh0LVsxNHB4XSBtbC0xIHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgICAgICAgICAge3gudGl0bGV9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXM7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VTdGF0ZSIsIkNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwidGl0bGUiLCJpbWFnZSIsImhvdmVySW1nIiwiaG92ZXIiLCJzZXRIb3ZlciIsIkFycmF5IiwibGVuZ3RoIiwiZmlsbCIsIm9uSG92ZXJFbnRlciIsImluZGV4IiwibmV3QXJyIiwib25Ib3ZlckxlYXZlIiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJ4IiwibGkiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzcGFuIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/general/categories.tsx\n"));

/***/ })

});