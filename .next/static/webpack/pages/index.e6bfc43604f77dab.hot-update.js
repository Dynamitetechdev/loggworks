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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _general_cards_cardMedium__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/cards/cardMedium */ \"./components/general/cards/cardMedium.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Offers = ()=>{\n    _s();\n    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [offers, setOffers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(6).fill(\"\"));\n    const handleSlideChange = (index)=>{\n        setActiveSlide(index);\n    };\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const slide = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setWidth(slide.current.scrollWidth - slide.current.offsetWidth);\n    // console.log(slide.current);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        className: \"Offers max-sm:py-3 px-3 md:mx-4\",\n        ref: slide,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold my-3 max-sm:text-[18px]\",\n                children: \"Offers\"\n            }, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/offers.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"grid grid-cols-9 gap-5 flex max-md:overflow-x-scroll max-md:scrolling-touch \",\n                drag: \"x\",\n                dragConstraints: {\n                    right: 0,\n                    left: -width\n                },\n                children: offers.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:col-span-3 flex-shrink-0 max-sm:w-[200px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_general_cards_cardMedium__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/offers.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined)\n                    }, i, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/offers.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/offers.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/offers.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Offers, \"Lk+pDbanSPkO1EjUDjJUrXcHXDw=\");\n_c = Offers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Offers);\nvar _c;\n$RefreshReg$(_c, \"Offers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5QYWdlVGFicy9vZmZlcnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFvRDtBQUNDO0FBQ2Q7QUFFdkMsTUFBTUssU0FBUzs7SUFDYixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDTSxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFRUSxNQUFNLEdBQUdDLElBQUksQ0FBQztJQUMxRCxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDekJOLGVBQWVNO0lBQ2pCO0lBQ0EsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1jLFFBQWFmLDZDQUFNQTtJQUV6QkQsZ0RBQVNBLENBQUM7UUFDUmUsU0FBU0MsTUFBTUMsT0FBTyxDQUFDQyxXQUFXLEdBQUdGLE1BQU1DLE9BQU8sQ0FBQ0UsV0FBVztJQUM5RCw4QkFBOEI7SUFDaEMsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNmLGlEQUFNQSxDQUFDZ0IsR0FBRztRQUFDQyxXQUFVO1FBQWtDQyxLQUFLTjs7MEJBQzNELDhEQUFDTztnQkFBR0YsV0FBVTswQkFBNkM7Ozs7OzswQkFDM0QsOERBQUNqQixpREFBTUEsQ0FBQ2dCLEdBQUc7Z0JBQ1RDLFdBQVU7Z0JBQ1ZHLE1BQUs7Z0JBQ0xDLGlCQUFpQjtvQkFBRUMsT0FBTztvQkFBR0MsTUFBTSxDQUFDYjtnQkFBTTswQkFFekNOLE9BQU9vQixHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msa0JBQ2QsOERBQUNWO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDbEIsaUVBQVVBOzs7Ozt1QkFEc0QyQjs7Ozs7Ozs7Ozs7Ozs7OztBQU83RTtHQTlCTXpCO0tBQUFBO0FBZ0NOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWFpblBhZ2VUYWJzL29mZmVycy50c3g/Y2VjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJkTWVkaXVtIGZyb20gXCIuLi9nZW5lcmFsL2NhcmRzL2NhcmRNZWRpdW1cIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IE9mZmVycyA9ICgpID0+IHtcbiAgY29uc3QgW2FjdGl2ZVNsaWRlLCBzZXRBY3RpdmVTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW29mZmVycywgc2V0T2ZmZXJzXSA9IHVzZVN0YXRlPGFueVtdPihBcnJheSg2KS5maWxsKFwiXCIpKTtcbiAgY29uc3QgaGFuZGxlU2xpZGVDaGFuZ2UgPSAoaW5kZXg6IGFueSkgPT4ge1xuICAgIHNldEFjdGl2ZVNsaWRlKGluZGV4KTtcbiAgfTtcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3Qgc2xpZGU6IGFueSA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2lkdGgoc2xpZGUuY3VycmVudC5zY3JvbGxXaWR0aCAtIHNsaWRlLmN1cnJlbnQub2Zmc2V0V2lkdGgpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNsaWRlLmN1cnJlbnQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJPZmZlcnMgbWF4LXNtOnB5LTMgcHgtMyBtZDpteC00XCIgcmVmPXtzbGlkZX0+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG15LTMgbWF4LXNtOnRleHQtWzE4cHhdXCI+T2ZmZXJzPC9oMT5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTkgZ2FwLTUgZmxleCBtYXgtbWQ6b3ZlcmZsb3cteC1zY3JvbGwgbWF4LW1kOnNjcm9sbGluZy10b3VjaCBcIlxuICAgICAgICBkcmFnPVwieFwiXG4gICAgICAgIGRyYWdDb25zdHJhaW50cz17eyByaWdodDogMCwgbGVmdDogLXdpZHRoIH19XG4gICAgICA+XG4gICAgICAgIHtvZmZlcnMubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0zIGZsZXgtc2hyaW5rLTAgbWF4LXNtOnctWzIwMHB4XVwiIGtleT17aX0+XG4gICAgICAgICAgICA8Q2FyZE1lZGl1bSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPZmZlcnM7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJDYXJkTWVkaXVtIiwibW90aW9uIiwiT2ZmZXJzIiwiYWN0aXZlU2xpZGUiLCJzZXRBY3RpdmVTbGlkZSIsIm9mZmVycyIsInNldE9mZmVycyIsIkFycmF5IiwiZmlsbCIsImhhbmRsZVNsaWRlQ2hhbmdlIiwiaW5kZXgiLCJ3aWR0aCIsInNldFdpZHRoIiwic2xpZGUiLCJjdXJyZW50Iiwic2Nyb2xsV2lkdGgiLCJvZmZzZXRXaWR0aCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsImgxIiwiZHJhZyIsImRyYWdDb25zdHJhaW50cyIsInJpZ2h0IiwibGVmdCIsIm1hcCIsIl8iLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/mainPageTabs/offers.tsx\n"));

/***/ })

});