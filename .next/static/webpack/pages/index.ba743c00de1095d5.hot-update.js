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

/***/ "./components/mainPageTabs/dealOfTheDay.tsx":
/*!**************************************************!*\
  !*** ./components/mainPageTabs/dealOfTheDay.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _general_cards_cardLarge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/cards/cardLarge */ \"./components/general/cards/cardLarge.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst DealOfTheDay = ()=>{\n    _s();\n    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [deals, setDeals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(6).fill(\"\"));\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [startX, setStartX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [scrollLeft, setScrollLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleMouseDown = (e)=>{\n        setIsDragging(true);\n        setStartX(e.pageX - containerRef.current.offsetLeft);\n        setScrollLeft(containerRef.current.scrollLeft);\n    };\n    const handleMouseUp = ()=>{\n        setIsDragging(false);\n    };\n    const handleMouseMove = (e)=>{\n        if (!isDragging) return;\n        e.preventDefault();\n        const x = e.pageX - containerRef.current.offsetLeft;\n        const walk = (x - startX) * 4;\n        containerRef.current.scrollLeft = scrollLeft - walk;\n    };\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const slide = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    // useEffect(() => {\n    //   setWidth(slide.current.scrollWidth - slide.current.offsetWidth);\n    //   // console.log(slide.current);\n    // }, []);\n    const handleNext = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            className: \" deals px-3 max-sm:py-3 md:mx-4 overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold max-sm:text-[18px]\",\n                    children: \"Deal of the day\"\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"deals-container\",\n                    className: \"deals gap-4 flex overflow-x-scroll scrolling-touch overflow-x-hidden\",\n                    style: {\n                        scrollBehavior: \"smooth\"\n                    },\n                    children: deals.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-shrink-0 md:col-span-4 cursor-pointer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_general_cards_cardLarge__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, undefined)\n                        }, i, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(DealOfTheDay, \"LCCdWdSsdkLXdzny3kAaBjFnu0c=\");\n_c = DealOfTheDay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DealOfTheDay);\nvar _c;\n$RefreshReg$(_c, \"DealOfTheDay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5QYWdlVGFicy9kZWFsT2ZUaGVEYXkudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFvRDtBQUNEO0FBQ1o7QUFDdkMsTUFBTUksZUFBZTs7SUFDbkIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBUVMsTUFBTSxHQUFHQyxJQUFJLENBQUM7SUFDeEQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2EsUUFBUUMsVUFBVSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNlLFlBQVlDLGNBQWMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU1pQixlQUFvQmhCLDZDQUFNQSxDQUFDO0lBRWpDLE1BQU1pQixrQkFBa0IsQ0FBQ0M7UUFDdkJQLGNBQWM7UUFDZEUsVUFBVUssRUFBRUMsS0FBSyxHQUFHSCxhQUFhSSxPQUFPLENBQUNDLFVBQVU7UUFDbkROLGNBQWNDLGFBQWFJLE9BQU8sQ0FBQ04sVUFBVTtJQUMvQztJQUVBLE1BQU1RLGdCQUFnQjtRQUNwQlgsY0FBYztJQUNoQjtJQUVBLE1BQU1ZLGtCQUFrQixDQUFDTDtRQUN2QixJQUFJLENBQUNSLFlBQVk7UUFDakJRLEVBQUVNLGNBQWM7UUFDaEIsTUFBTUMsSUFBSVAsRUFBRUMsS0FBSyxHQUFHSCxhQUFhSSxPQUFPLENBQUNDLFVBQVU7UUFDbkQsTUFBTUssT0FBTyxDQUFDRCxJQUFJYixNQUFLLElBQUs7UUFDNUJJLGFBQWFJLE9BQU8sQ0FBQ04sVUFBVSxHQUFHQSxhQUFhWTtJQUNqRDtJQUNBLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHN0IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTThCLFFBQWE3Qiw2Q0FBTUE7SUFFekIsb0JBQW9CO0lBQ3BCLHFFQUFxRTtJQUNyRSxtQ0FBbUM7SUFDbkMsVUFBVTtJQUNWLE1BQU04QixhQUFhLEtBQU87SUFDMUIscUJBQ0U7a0JBQ0UsNEVBQUM1QixpREFBTUEsQ0FBQzZCLEdBQUc7WUFBQ0MsV0FBVTs7OEJBQ3BCLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBd0M7Ozs7Ozs4QkFJdEQsOERBQUNEO29CQUNDRyxJQUFHO29CQUNIRixXQUFVO29CQUNWRyxPQUFPO3dCQUFFQyxnQkFBZ0I7b0JBQVM7OEJBRWpDOUIsTUFBTStCLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxrQkFDYiw4REFBQ1I7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUMvQixnRUFBU0E7Ozs7OzJCQURxRHNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQXFCN0U7R0FuRU1wQztLQUFBQTtBQXFFTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21haW5QYWdlVGFicy9kZWFsT2ZUaGVEYXkudHN4PzkzY2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2FyZExhcmdlIGZyb20gXCIuLi9nZW5lcmFsL2NhcmRzL2NhcmRMYXJnZVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmNvbnN0IERlYWxPZlRoZURheSA9ICgpID0+IHtcbiAgY29uc3QgW2FjdGl2ZVNsaWRlLCBzZXRBY3RpdmVTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2RlYWxzLCBzZXREZWFsc10gPSB1c2VTdGF0ZTxhbnlbXT4oQXJyYXkoNikuZmlsbChcIlwiKSk7XG4gIGNvbnN0IFtpc0RyYWdnaW5nLCBzZXRJc0RyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N0YXJ0WCwgc2V0U3RhcnRYXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2Nyb2xsTGVmdCwgc2V0U2Nyb2xsTGVmdF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgY29udGFpbmVyUmVmOiBhbnkgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKGU6IGFueSkgPT4ge1xuICAgIHNldElzRHJhZ2dpbmcodHJ1ZSk7XG4gICAgc2V0U3RhcnRYKGUucGFnZVggLSBjb250YWluZXJSZWYuY3VycmVudC5vZmZzZXRMZWZ0KTtcbiAgICBzZXRTY3JvbGxMZWZ0KGNvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbExlZnQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoKSA9PiB7XG4gICAgc2V0SXNEcmFnZ2luZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IGFueSkgPT4ge1xuICAgIGlmICghaXNEcmFnZ2luZykgcmV0dXJuO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB4ID0gZS5wYWdlWCAtIGNvbnRhaW5lclJlZi5jdXJyZW50Lm9mZnNldExlZnQ7XG4gICAgY29uc3Qgd2FsayA9ICh4IC0gc3RhcnRYKSAqIDQ7XG4gICAgY29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgLSB3YWxrO1xuICB9O1xuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBzbGlkZTogYW55ID0gdXNlUmVmKCk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzZXRXaWR0aChzbGlkZS5jdXJyZW50LnNjcm9sbFdpZHRoIC0gc2xpZGUuY3VycmVudC5vZmZzZXRXaWR0aCk7XG4gIC8vICAgLy8gY29uc29sZS5sb2coc2xpZGUuY3VycmVudCk7XG4gIC8vIH0sIFtdKTtcbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHt9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCIgZGVhbHMgcHgtMyBtYXgtc206cHktMyBtZDpteC00IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1heC1zbTp0ZXh0LVsxOHB4XVwiPlxuICAgICAgICAgIERlYWwgb2YgdGhlIGRheVxuICAgICAgICA8L2gxPlxuICAgICAgICB7LyogbW9iaWxlICovfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJkZWFscy1jb250YWluZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImRlYWxzIGdhcC00IGZsZXggb3ZlcmZsb3cteC1zY3JvbGwgc2Nyb2xsaW5nLXRvdWNoIG92ZXJmbG93LXgtaGlkZGVuXCJcbiAgICAgICAgICBzdHlsZT17eyBzY3JvbGxCZWhhdmlvcjogXCJzbW9vdGhcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAge2RlYWxzLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIG1kOmNvbC1zcGFuLTQgY3Vyc29yLXBvaW50ZXJcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICA8Q2FyZExhcmdlIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8bW90aW9uLmRpdlxuICAgICAgICAgIHJlZj17c2xpZGV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGVhbHMgbWF4LW1kOmhpZGRlbiBnYXAtNyBmbGV4IHNjcm9sbGluZy10b3VjaFwiXG4gICAgICAgICAgc3R5bGU9e3sgc2Nyb2xsQmVoYXZpb3I6IFwic21vb3RoXCIgfX1cbiAgICAgICAgICBkcmFnPVwieFwiXG4gICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7IHJpZ2h0OiAwLCBsZWZ0OiAtd2lkdGggfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkZWFscy5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBtZDpjb2wtc3Bhbi00IGN1cnNvci1wb2ludGVyXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgPENhcmRMYXJnZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvbW90aW9uLmRpdj4gKi99XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWFsT2ZUaGVEYXk7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJDYXJkTGFyZ2UiLCJtb3Rpb24iLCJEZWFsT2ZUaGVEYXkiLCJhY3RpdmVTbGlkZSIsInNldEFjdGl2ZVNsaWRlIiwiZGVhbHMiLCJzZXREZWFscyIsIkFycmF5IiwiZmlsbCIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic3RhcnRYIiwic2V0U3RhcnRYIiwic2Nyb2xsTGVmdCIsInNldFNjcm9sbExlZnQiLCJjb250YWluZXJSZWYiLCJoYW5kbGVNb3VzZURvd24iLCJlIiwicGFnZVgiLCJjdXJyZW50Iiwib2Zmc2V0TGVmdCIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVNb3VzZU1vdmUiLCJwcmV2ZW50RGVmYXVsdCIsIngiLCJ3YWxrIiwid2lkdGgiLCJzZXRXaWR0aCIsInNsaWRlIiwiaGFuZGxlTmV4dCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaWQiLCJzdHlsZSIsInNjcm9sbEJlaGF2aW9yIiwibWFwIiwiXyIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/mainPageTabs/dealOfTheDay.tsx\n"));

/***/ })

});