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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _general_cards_cardLarge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/cards/cardLarge */ \"./components/general/cards/cardLarge.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst DealOfTheDay = ()=>{\n    _s();\n    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [deals, setDeals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(6).fill(\"\"));\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [startX, setStartX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [scrollLeft, setScrollLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleMouseDown = (e)=>{\n        setIsDragging(true);\n        setStartX(e.pageX - containerRef.current.offsetLeft);\n        setScrollLeft(containerRef.current.scrollLeft);\n    };\n    const handleMouseUp = ()=>{\n        setIsDragging(false);\n    };\n    const handleMouseMove = (e)=>{\n        if (!isDragging) return;\n        e.preventDefault();\n        const x = e.pageX - containerRef.current.offsetLeft;\n        const walk = (x - startX) * 4; // Adjust the multiplier for sensitivity\n        containerRef.current.scrollLeft = scrollLeft - walk;\n    };\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const slide = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setWidth(slide.current.scrollWidth - slide.current.offsetWidth);\n    // console.log(slide.current);\n    }, []);\n    const handleNext = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            className: \" deals px-3 max-sm:py-3 md:mx-4\",\n            ref: slide,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold max-sm:text-[18px]\",\n                    children: \"Deal of the day\"\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"deals-container\",\n                    className: \"deals md:hidden gap-4 flex overflow-x-scroll scrolling-touch overflow-x-hidden\",\n                    style: {\n                        scrollBehavior: \"smooth\"\n                    },\n                    children: deals.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-shrink-0 md:col-span-4 cursor-pointer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_general_cards_cardLarge__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, undefined)\n                        }, i, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: containerRef,\n                    className: \"deals max-md:hidden gap-7 flex scrolling-touch  overflow-x-hidden\",\n                    style: {\n                        scrollBehavior: \"smooth\"\n                    },\n                    onMouseDown: handleMouseDown,\n                    onMouseUp: handleMouseUp,\n                    onMouseLeave: handleMouseUp,\n                    onMouseMove: handleMouseMove,\n                    onTouchStart: handleMouseDown,\n                    onTouchEnd: handleMouseUp,\n                    onTouchMove: handleMouseMove,\n                    children: deals.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-shrink-0 md:col-span-4 cursor-pointer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_general_cards_cardLarge__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, undefined)\n                        }, i, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(DealOfTheDay, \"TxK2U9c0peTuU+aCI1ZwqcP0ETs=\");\n_c = DealOfTheDay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DealOfTheDay);\nvar _c;\n$RefreshReg$(_c, \"DealOfTheDay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5QYWdlVGFicy9kZWFsT2ZUaGVEYXkudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFvRDtBQUNEO0FBQ1o7QUFDdkMsTUFBTUssZUFBZTs7SUFDbkIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBUVUsTUFBTSxHQUFHQyxJQUFJLENBQUM7SUFDeEQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2MsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNnQixZQUFZQyxjQUFjLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNa0IsZUFBb0JqQiw2Q0FBTUEsQ0FBQztJQUVqQyxNQUFNa0Isa0JBQWtCLENBQUNDO1FBQ3ZCUCxjQUFjO1FBQ2RFLFVBQVVLLEVBQUVDLEtBQUssR0FBR0gsYUFBYUksT0FBTyxDQUFDQyxVQUFVO1FBQ25ETixjQUFjQyxhQUFhSSxPQUFPLENBQUNOLFVBQVU7SUFDL0M7SUFFQSxNQUFNUSxnQkFBZ0I7UUFDcEJYLGNBQWM7SUFDaEI7SUFFQSxNQUFNWSxrQkFBa0IsQ0FBQ0w7UUFDdkIsSUFBSSxDQUFDUixZQUFZO1FBQ2pCUSxFQUFFTSxjQUFjO1FBQ2hCLE1BQU1DLElBQUlQLEVBQUVDLEtBQUssR0FBR0gsYUFBYUksT0FBTyxDQUFDQyxVQUFVO1FBQ25ELE1BQU1LLE9BQU8sQ0FBQ0QsSUFBSWIsTUFBSyxJQUFLLEdBQUcsd0NBQXdDO1FBQ3ZFSSxhQUFhSSxPQUFPLENBQUNOLFVBQVUsR0FBR0EsYUFBYVk7SUFDakQ7SUFDQSxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBRzlCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0rQixRQUFhOUIsNkNBQU1BO0lBRXpCQyxnREFBU0EsQ0FBQztRQUNSNEIsU0FBU0MsTUFBTVQsT0FBTyxDQUFDVSxXQUFXLEdBQUdELE1BQU1ULE9BQU8sQ0FBQ1csV0FBVztJQUM5RCw4QkFBOEI7SUFDaEMsR0FBRyxFQUFFO0lBQ0wsTUFBTUMsYUFBYSxLQUFPO0lBQzFCLHFCQUNFO2tCQUNFLDRFQUFDOUIsaURBQU1BLENBQUMrQixHQUFHO1lBQUNDLFdBQVU7WUFBa0NDLEtBQUtOOzs4QkFDM0QsOERBQUNPO29CQUFHRixXQUFVOzhCQUF3Qzs7Ozs7OzhCQUl0RCw4REFBQ0Q7b0JBQ0NJLElBQUc7b0JBQ0hILFdBQVU7b0JBQ1ZJLE9BQU87d0JBQUVDLGdCQUFnQjtvQkFBUzs4QkFFakNqQyxNQUFNa0MsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUNiLDhEQUFDVDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ2pDLGdFQUFTQTs7Ozs7MkJBRHFEeUM7Ozs7Ozs7Ozs7OEJBS3JFLDhEQUFDVDtvQkFDQ0UsS0FBS25CO29CQUNMa0IsV0FBVTtvQkFDVkksT0FBTzt3QkFBRUMsZ0JBQWdCO29CQUFTO29CQUNsQ0ksYUFBYTFCO29CQUNiMkIsV0FBV3RCO29CQUNYdUIsY0FBY3ZCO29CQUNkd0IsYUFBYXZCO29CQUNid0IsY0FBYzlCO29CQUNkK0IsWUFBWTFCO29CQUNaMkIsYUFBYTFCOzhCQUVaakIsTUFBTWtDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxrQkFDYiw4REFBQ1Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNqQyxnRUFBU0E7Ozs7OzJCQURxRHlDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVE3RTtHQXhFTXZDO0tBQUFBO0FBMEVOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWFpblBhZ2VUYWJzL2RlYWxPZlRoZURheS50c3g/OTNjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJkTGFyZ2UgZnJvbSBcIi4uL2dlbmVyYWwvY2FyZHMvY2FyZExhcmdlXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuY29uc3QgRGVhbE9mVGhlRGF5ID0gKCkgPT4ge1xuICBjb25zdCBbYWN0aXZlU2xpZGUsIHNldEFjdGl2ZVNsaWRlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZGVhbHMsIHNldERlYWxzXSA9IHVzZVN0YXRlPGFueVtdPihBcnJheSg2KS5maWxsKFwiXCIpKTtcbiAgY29uc3QgW2lzRHJhZ2dpbmcsIHNldElzRHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3RhcnRYLCBzZXRTdGFydFhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzY3JvbGxMZWZ0LCBzZXRTY3JvbGxMZWZ0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBjb250YWluZXJSZWY6IGFueSA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSAoZTogYW55KSA9PiB7XG4gICAgc2V0SXNEcmFnZ2luZyh0cnVlKTtcbiAgICBzZXRTdGFydFgoZS5wYWdlWCAtIGNvbnRhaW5lclJlZi5jdXJyZW50Lm9mZnNldExlZnQpO1xuICAgIHNldFNjcm9sbExlZnQoY29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcbiAgICBzZXRJc0RyYWdnaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogYW55KSA9PiB7XG4gICAgaWYgKCFpc0RyYWdnaW5nKSByZXR1cm47XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHggPSBlLnBhZ2VYIC0gY29udGFpbmVyUmVmLmN1cnJlbnQub2Zmc2V0TGVmdDtcbiAgICBjb25zdCB3YWxrID0gKHggLSBzdGFydFgpICogNDsgLy8gQWRqdXN0IHRoZSBtdWx0aXBsaWVyIGZvciBzZW5zaXRpdml0eVxuICAgIGNvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0IC0gd2FsaztcbiAgfTtcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3Qgc2xpZGU6IGFueSA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2lkdGgoc2xpZGUuY3VycmVudC5zY3JvbGxXaWR0aCAtIHNsaWRlLmN1cnJlbnQub2Zmc2V0V2lkdGgpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNsaWRlLmN1cnJlbnQpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7fTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiIGRlYWxzIHB4LTMgbWF4LXNtOnB5LTMgbWQ6bXgtNFwiIHJlZj17c2xpZGV9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1heC1zbTp0ZXh0LVsxOHB4XVwiPlxuICAgICAgICAgIERlYWwgb2YgdGhlIGRheVxuICAgICAgICA8L2gxPlxuICAgICAgICB7LyogbW9iaWxlICovfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJkZWFscy1jb250YWluZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImRlYWxzIG1kOmhpZGRlbiBnYXAtNCBmbGV4IG92ZXJmbG93LXgtc2Nyb2xsIHNjcm9sbGluZy10b3VjaCBvdmVyZmxvdy14LWhpZGRlblwiXG4gICAgICAgICAgc3R5bGU9e3sgc2Nyb2xsQmVoYXZpb3I6IFwic21vb3RoXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkZWFscy5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBtZDpjb2wtc3Bhbi00IGN1cnNvci1wb2ludGVyXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgPENhcmRMYXJnZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGVhbHMgbWF4LW1kOmhpZGRlbiBnYXAtNyBmbGV4IHNjcm9sbGluZy10b3VjaCAgb3ZlcmZsb3cteC1oaWRkZW5cIlxuICAgICAgICAgIHN0eWxlPXt7IHNjcm9sbEJlaGF2aW9yOiBcInNtb290aFwiIH19XG4gICAgICAgICAgb25Nb3VzZURvd249e2hhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgICBvbk1vdXNlVXA9e2hhbmRsZU1vdXNlVXB9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZVVwfVxuICAgICAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9XG4gICAgICAgICAgb25Ub3VjaFN0YXJ0PXtoYW5kbGVNb3VzZURvd259XG4gICAgICAgICAgb25Ub3VjaEVuZD17aGFuZGxlTW91c2VVcH1cbiAgICAgICAgICBvblRvdWNoTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxuICAgICAgICA+XG4gICAgICAgICAge2RlYWxzLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIG1kOmNvbC1zcGFuLTQgY3Vyc29yLXBvaW50ZXJcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICA8Q2FyZExhcmdlIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWFsT2ZUaGVEYXk7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJDYXJkTGFyZ2UiLCJtb3Rpb24iLCJEZWFsT2ZUaGVEYXkiLCJhY3RpdmVTbGlkZSIsInNldEFjdGl2ZVNsaWRlIiwiZGVhbHMiLCJzZXREZWFscyIsIkFycmF5IiwiZmlsbCIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic3RhcnRYIiwic2V0U3RhcnRYIiwic2Nyb2xsTGVmdCIsInNldFNjcm9sbExlZnQiLCJjb250YWluZXJSZWYiLCJoYW5kbGVNb3VzZURvd24iLCJlIiwicGFnZVgiLCJjdXJyZW50Iiwib2Zmc2V0TGVmdCIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVNb3VzZU1vdmUiLCJwcmV2ZW50RGVmYXVsdCIsIngiLCJ3YWxrIiwid2lkdGgiLCJzZXRXaWR0aCIsInNsaWRlIiwic2Nyb2xsV2lkdGgiLCJvZmZzZXRXaWR0aCIsImhhbmRsZU5leHQiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJoMSIsImlkIiwic3R5bGUiLCJzY3JvbGxCZWhhdmlvciIsIm1hcCIsIl8iLCJpIiwib25Nb3VzZURvd24iLCJvbk1vdXNlVXAiLCJvbk1vdXNlTGVhdmUiLCJvbk1vdXNlTW92ZSIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJvblRvdWNoTW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/mainPageTabs/dealOfTheDay.tsx\n"));

/***/ })

});