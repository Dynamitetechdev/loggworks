"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/bookings",{

/***/ "./components/general/tabSwitchCategory/switchMiniNav.tsx":
/*!****************************************************************!*\
  !*** ./components/general/tabSwitchCategory/switchMiniNav.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SwitchMiniNav = (param)=>{\n    let { switchOptions, activeSwitchIndex, handleSelectSwitch } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-sm:text-[16px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"flex items-center text-center px-3 rounded border-b border-grey cursor-pointer\",\n            children: switchOptions.map((x, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \" py-3 capitalize px-36 \".concat(activeSwitchIndex === i && \"border-b-2 border-green text-green font-bold\", \" \"),\n                    onClick: ()=>handleSelectSwitch(i, x),\n                    children: x\n                }, i, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/tabSwitchCategory/switchMiniNav.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/tabSwitchCategory/switchMiniNav.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/tabSwitchCategory/switchMiniNav.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SwitchMiniNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwitchMiniNav);\nvar _c;\n$RefreshReg$(_c, \"SwitchMiniNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dlbmVyYWwvdGFiU3dpdGNoQ2F0ZWdvcnkvc3dpdGNoTWluaU5hdi50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLGdCQUlEO1FBQUMsRUFBRUMsYUFBYSxFQUFFQyxpQkFBaUIsRUFBRUMsa0JBQWtCLEVBQUU7SUFDNUQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUdELFdBQVU7c0JBQ1hKLGNBQWNNLEdBQUcsQ0FBQyxDQUFDQyxHQUFRQyxrQkFDMUIsOERBQUNDO29CQUNDTCxXQUFXLDBCQUdWLE9BRkNILHNCQUFzQk8sS0FDdEIsZ0RBQ0Q7b0JBRURFLFNBQVMsSUFBTVIsbUJBQW1CTSxHQUFHRDs4QkFFcENBO21CQUhJQzs7Ozs7Ozs7Ozs7Ozs7O0FBU2pCO0tBdkJNVDtBQXlCTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dlbmVyYWwvdGFiU3dpdGNoQ2F0ZWdvcnkvc3dpdGNoTWluaU5hdi50c3g/NDBkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTd2l0Y2hNaW5pTmF2OiBSZWFjdC5GQzx7XG4gIHN3aXRjaE9wdGlvbnM6IGFueTtcbiAgYWN0aXZlU3dpdGNoSW5kZXg6IG51bWJlcjtcbiAgaGFuZGxlU2VsZWN0U3dpdGNoOiBhbnk7XG59PiA9ICh7IHN3aXRjaE9wdGlvbnMsIGFjdGl2ZVN3aXRjaEluZGV4LCBoYW5kbGVTZWxlY3RTd2l0Y2ggfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXNtOnRleHQtWzE2cHhdXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgcHgtMyByb3VuZGVkIGJvcmRlci1iIGJvcmRlci1ncmV5IGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgIHtzd2l0Y2hPcHRpb25zLm1hcCgoeDogYW55LCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCBweS0zIGNhcGl0YWxpemUgcHgtMzYgJHtcbiAgICAgICAgICAgICAgYWN0aXZlU3dpdGNoSW5kZXggPT09IGkgJiZcbiAgICAgICAgICAgICAgXCJib3JkZXItYi0yIGJvcmRlci1ncmVlbiB0ZXh0LWdyZWVuIGZvbnQtYm9sZFwiXG4gICAgICAgICAgICB9IGB9XG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3RTd2l0Y2goaSwgeCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3h9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoTWluaU5hdjtcbiJdLCJuYW1lcyI6WyJTd2l0Y2hNaW5pTmF2Iiwic3dpdGNoT3B0aW9ucyIsImFjdGl2ZVN3aXRjaEluZGV4IiwiaGFuZGxlU2VsZWN0U3dpdGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJ4IiwiaSIsImxpIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/general/tabSwitchCategory/switchMiniNav.tsx\n"));

/***/ })

});