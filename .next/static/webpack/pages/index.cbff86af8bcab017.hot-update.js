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

/***/ "./components/mainPageTabs/offers.tsx":
/*!********************************************!*\
  !*** ./components/mainPageTabs/offers.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _general_cards_cardMedium__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/cards/cardMedium */ \"./components/general/cards/cardMedium.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst Offers = ()=>{\n    _s();\n    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [offers, setOffers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(6).fill(\"\"));\n    const handleSlideChange = (index)=>{\n        setActiveSlide(index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"Offers max-sm:py-3 px-3 md:mx-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold my-3 max-sm:text-[18px]\",\n                children: \"Offers\"\n            }, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/offers.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" grid-cols-9 gap-5 max-md:flex overflow-x-scroll max-md:scrolling-touch \",\n                children: offers.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:col-span-3 flex-shrink-0 max-sm:w-[200px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_general_cards_cardMedium__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/offers.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, undefined)\n                    }, i, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/offers.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/offers.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/offers.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Offers, \"bAHGlYPTQX/PG//Qpd+Ir428LPE=\");\n_c = Offers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Offers);\nvar _c;\n$RefreshReg$(_c, \"Offers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5QYWdlVGFicy9vZmZlcnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBQ29CO0FBRXJELE1BQU1FLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdKLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBUU8sTUFBTSxHQUFHQyxJQUFJLENBQUM7SUFDMUQsTUFBTUMsb0JBQW9CLENBQUNDO1FBQ3pCTixlQUFlTTtJQUNqQjtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTZDOzs7Ozs7MEJBQzNELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWlAsT0FBT1MsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUNkLDhEQUFDTDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ1gsaUVBQVVBOzs7Ozt1QkFEc0RlOzs7Ozs7Ozs7Ozs7Ozs7O0FBTzdFO0dBbEJNZDtLQUFBQTtBQW9CTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21haW5QYWdlVGFicy9vZmZlcnMudHN4P2NlYzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJkTWVkaXVtIGZyb20gXCIuLi9nZW5lcmFsL2NhcmRzL2NhcmRNZWRpdW1cIjtcblxuY29uc3QgT2ZmZXJzID0gKCkgPT4ge1xuICBjb25zdCBbYWN0aXZlU2xpZGUsIHNldEFjdGl2ZVNsaWRlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbb2ZmZXJzLCBzZXRPZmZlcnNdID0gdXNlU3RhdGU8YW55W10+KEFycmF5KDYpLmZpbGwoXCJcIikpO1xuICBjb25zdCBoYW5kbGVTbGlkZUNoYW5nZSA9IChpbmRleDogYW55KSA9PiB7XG4gICAgc2V0QWN0aXZlU2xpZGUoaW5kZXgpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiT2ZmZXJzIG1heC1zbTpweS0zIHB4LTMgbWQ6bXgtNFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBteS0zIG1heC1zbTp0ZXh0LVsxOHB4XVwiPk9mZmVyczwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBncmlkLWNvbHMtOSBnYXAtNSBtYXgtbWQ6ZmxleCBvdmVyZmxvdy14LXNjcm9sbCBtYXgtbWQ6c2Nyb2xsaW5nLXRvdWNoIFwiPlxuICAgICAgICB7b2ZmZXJzLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMyBmbGV4LXNocmluay0wIG1heC1zbTp3LVsyMDBweF1cIiBrZXk9e2l9PlxuICAgICAgICAgICAgPENhcmRNZWRpdW0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9mZmVycztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNhcmRNZWRpdW0iLCJPZmZlcnMiLCJhY3RpdmVTbGlkZSIsInNldEFjdGl2ZVNsaWRlIiwib2ZmZXJzIiwic2V0T2ZmZXJzIiwiQXJyYXkiLCJmaWxsIiwiaGFuZGxlU2xpZGVDaGFuZ2UiLCJpbmRleCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiXyIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/mainPageTabs/offers.tsx\n"));

/***/ })

});