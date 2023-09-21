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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _general_cards_cardLarge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/cards/cardLarge */ \"./components/general/cards/cardLarge.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst DealOfTheDay = ()=>{\n    _s();\n    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [deals, setDeals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(6).fill(\"\"));\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [startX, setStartX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [scrollLeft, setScrollLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleMouseDown = (e)=>{\n        setIsDragging(true);\n        setStartX(e.pageX - containerRef.current.offsetLeft);\n        setScrollLeft(containerRef.current.scrollLeft);\n    };\n    const handleMouseUp = ()=>{\n        setIsDragging(false);\n    };\n    const handleMouseMove = (e)=>{\n        if (!isDragging) return;\n        e.preventDefault();\n        const x = e.pageX - containerRef.current.offsetLeft;\n        const walk = (x - startX) * 4; // Adjust the multiplier for sensitivity\n        containerRef.current.scrollLeft = scrollLeft - walk;\n    };\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const slide = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setWidth(slide.current.scrollWidth - slide.current.offsetWidth);\n    // console.log(slide.current);\n    }, []);\n    const handleNext = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            className: \" deals px-3 max-sm:py-3 md:mx-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold max-sm:text-[18px]\",\n                    children: \"Deal of the day\"\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"deals-container\",\n                    className: \"deals md:hidden gap-4 flex overflow-x-scroll scrolling-touch overflow-x-hidden\",\n                    style: {\n                        scrollBehavior: \"smooth\"\n                    },\n                    children: deals.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-shrink-0 md:col-span-4 cursor-pointer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_general_cards_cardLarge__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, undefined)\n                        }, i, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    ref: slide,\n                    className: \"deals max-md:hidden gap-7 flex scrolling-touch  overflow-x\",\n                    // style={{ scrollBehavior: \"smooth\" }}\n                    // onMouseDown={handleMouseDown}\n                    // onMouseUp={handleMouseUp}\n                    // onMouseLeave={handleMouseUp}\n                    // onMouseMove={handleMouseMove}\n                    // onTouchStart={handleMouseDown}\n                    // onTouchEnd={handleMouseUp}\n                    // onTouchMove={handleMouseMove}\n                    drag: \"x\",\n                    dragConstraints: {\n                        right: 0,\n                        left: -width\n                    },\n                    children: deals.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-shrink-0 md:col-span-4 cursor-pointer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_general_cards_cardLarge__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, undefined)\n                        }, i, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/mainPageTabs/dealOfTheDay.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(DealOfTheDay, \"TxK2U9c0peTuU+aCI1ZwqcP0ETs=\");\n_c = DealOfTheDay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DealOfTheDay);\nvar _c;\n$RefreshReg$(_c, \"DealOfTheDay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5QYWdlVGFicy9kZWFsT2ZUaGVEYXkudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFvRDtBQUNEO0FBQ1o7QUFDdkMsTUFBTUssZUFBZTs7SUFDbkIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBUVUsTUFBTSxHQUFHQyxJQUFJLENBQUM7SUFDeEQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2MsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNnQixZQUFZQyxjQUFjLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNa0IsZUFBb0JqQiw2Q0FBTUEsQ0FBQztJQUVqQyxNQUFNa0Isa0JBQWtCLENBQUNDO1FBQ3ZCUCxjQUFjO1FBQ2RFLFVBQVVLLEVBQUVDLEtBQUssR0FBR0gsYUFBYUksT0FBTyxDQUFDQyxVQUFVO1FBQ25ETixjQUFjQyxhQUFhSSxPQUFPLENBQUNOLFVBQVU7SUFDL0M7SUFFQSxNQUFNUSxnQkFBZ0I7UUFDcEJYLGNBQWM7SUFDaEI7SUFFQSxNQUFNWSxrQkFBa0IsQ0FBQ0w7UUFDdkIsSUFBSSxDQUFDUixZQUFZO1FBQ2pCUSxFQUFFTSxjQUFjO1FBQ2hCLE1BQU1DLElBQUlQLEVBQUVDLEtBQUssR0FBR0gsYUFBYUksT0FBTyxDQUFDQyxVQUFVO1FBQ25ELE1BQU1LLE9BQU8sQ0FBQ0QsSUFBSWIsTUFBSyxJQUFLLEdBQUcsd0NBQXdDO1FBQ3ZFSSxhQUFhSSxPQUFPLENBQUNOLFVBQVUsR0FBR0EsYUFBYVk7SUFDakQ7SUFDQSxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBRzlCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0rQixRQUFhOUIsNkNBQU1BO0lBRXpCQyxnREFBU0EsQ0FBQztRQUNSNEIsU0FBU0MsTUFBTVQsT0FBTyxDQUFDVSxXQUFXLEdBQUdELE1BQU1ULE9BQU8sQ0FBQ1csV0FBVztJQUM5RCw4QkFBOEI7SUFDaEMsR0FBRyxFQUFFO0lBQ0wsTUFBTUMsYUFBYSxLQUFPO0lBQzFCLHFCQUNFO2tCQUNFLDRFQUFDOUIsaURBQU1BLENBQUMrQixHQUFHO1lBQUNDLFdBQVU7OzhCQUNwQiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQXdDOzs7Ozs7OEJBSXRELDhEQUFDRDtvQkFDQ0csSUFBRztvQkFDSEYsV0FBVTtvQkFDVkcsT0FBTzt3QkFBRUMsZ0JBQWdCO29CQUFTOzhCQUVqQ2hDLE1BQU1pQyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msa0JBQ2IsOERBQUNSOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDakMsZ0VBQVNBOzs7OzsyQkFEcUR3Qzs7Ozs7Ozs7Ozs4QkFLckUsOERBQUN2QyxpREFBTUEsQ0FBQytCLEdBQUc7b0JBQ1RTLEtBQUtiO29CQUNMSyxXQUFVO29CQUNWLHVDQUF1QztvQkFDdkMsZ0NBQWdDO29CQUNoQyw0QkFBNEI7b0JBQzVCLCtCQUErQjtvQkFDL0IsZ0NBQWdDO29CQUNoQyxpQ0FBaUM7b0JBQ2pDLDZCQUE2QjtvQkFDN0IsZ0NBQWdDO29CQUNoQ1MsTUFBSztvQkFDTEMsaUJBQWlCO3dCQUFFQyxPQUFPO3dCQUFHQyxNQUFNLENBQUNuQjtvQkFBTTs4QkFFekNyQixNQUFNaUMsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUNiLDhEQUFDUjs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ2pDLGdFQUFTQTs7Ozs7MkJBRHFEd0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTdFO0dBMUVNdEM7S0FBQUE7QUE0RU4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluUGFnZVRhYnMvZGVhbE9mVGhlRGF5LnRzeD85M2NlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcmRMYXJnZSBmcm9tIFwiLi4vZ2VuZXJhbC9jYXJkcy9jYXJkTGFyZ2VcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5jb25zdCBEZWFsT2ZUaGVEYXkgPSAoKSA9PiB7XG4gIGNvbnN0IFthY3RpdmVTbGlkZSwgc2V0QWN0aXZlU2xpZGVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtkZWFscywgc2V0RGVhbHNdID0gdXNlU3RhdGU8YW55W10+KEFycmF5KDYpLmZpbGwoXCJcIikpO1xuICBjb25zdCBbaXNEcmFnZ2luZywgc2V0SXNEcmFnZ2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdGFydFgsIHNldFN0YXJ0WF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Njcm9sbExlZnQsIHNldFNjcm9sbExlZnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGNvbnRhaW5lclJlZjogYW55ID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChlOiBhbnkpID0+IHtcbiAgICBzZXRJc0RyYWdnaW5nKHRydWUpO1xuICAgIHNldFN0YXJ0WChlLnBhZ2VYIC0gY29udGFpbmVyUmVmLmN1cnJlbnQub2Zmc2V0TGVmdCk7XG4gICAgc2V0U2Nyb2xsTGVmdChjb250YWluZXJSZWYuY3VycmVudC5zY3JvbGxMZWZ0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKCkgPT4ge1xuICAgIHNldElzRHJhZ2dpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChlOiBhbnkpID0+IHtcbiAgICBpZiAoIWlzRHJhZ2dpbmcpIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeCA9IGUucGFnZVggLSBjb250YWluZXJSZWYuY3VycmVudC5vZmZzZXRMZWZ0O1xuICAgIGNvbnN0IHdhbGsgPSAoeCAtIHN0YXJ0WCkgKiA0OyAvLyBBZGp1c3QgdGhlIG11bHRpcGxpZXIgZm9yIHNlbnNpdGl2aXR5XG4gICAgY29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgLSB3YWxrO1xuICB9O1xuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBzbGlkZTogYW55ID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRXaWR0aChzbGlkZS5jdXJyZW50LnNjcm9sbFdpZHRoIC0gc2xpZGUuY3VycmVudC5vZmZzZXRXaWR0aCk7XG4gICAgLy8gY29uc29sZS5sb2coc2xpZGUuY3VycmVudCk7XG4gIH0sIFtdKTtcbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHt9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCIgZGVhbHMgcHgtMyBtYXgtc206cHktMyBtZDpteC00XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWF4LXNtOnRleHQtWzE4cHhdXCI+XG4gICAgICAgICAgRGVhbCBvZiB0aGUgZGF5XG4gICAgICAgIDwvaDE+XG4gICAgICAgIHsvKiBtb2JpbGUgKi99XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBpZD1cImRlYWxzLWNvbnRhaW5lclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGVhbHMgbWQ6aGlkZGVuIGdhcC00IGZsZXggb3ZlcmZsb3cteC1zY3JvbGwgc2Nyb2xsaW5nLXRvdWNoIG92ZXJmbG93LXgtaGlkZGVuXCJcbiAgICAgICAgICBzdHlsZT17eyBzY3JvbGxCZWhhdmlvcjogXCJzbW9vdGhcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAge2RlYWxzLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIG1kOmNvbC1zcGFuLTQgY3Vyc29yLXBvaW50ZXJcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICA8Q2FyZExhcmdlIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgcmVmPXtzbGlkZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJkZWFscyBtYXgtbWQ6aGlkZGVuIGdhcC03IGZsZXggc2Nyb2xsaW5nLXRvdWNoICBvdmVyZmxvdy14XCJcbiAgICAgICAgICAvLyBzdHlsZT17eyBzY3JvbGxCZWhhdmlvcjogXCJzbW9vdGhcIiB9fVxuICAgICAgICAgIC8vIG9uTW91c2VEb3duPXtoYW5kbGVNb3VzZURvd259XG4gICAgICAgICAgLy8gb25Nb3VzZVVwPXtoYW5kbGVNb3VzZVVwfVxuICAgICAgICAgIC8vIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VVcH1cbiAgICAgICAgICAvLyBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxuICAgICAgICAgIC8vIG9uVG91Y2hTdGFydD17aGFuZGxlTW91c2VEb3dufVxuICAgICAgICAgIC8vIG9uVG91Y2hFbmQ9e2hhbmRsZU1vdXNlVXB9XG4gICAgICAgICAgLy8gb25Ub3VjaE1vdmU9e2hhbmRsZU1vdXNlTW92ZX1cbiAgICAgICAgICBkcmFnPVwieFwiXG4gICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7IHJpZ2h0OiAwLCBsZWZ0OiAtd2lkdGggfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkZWFscy5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBtZDpjb2wtc3Bhbi00IGN1cnNvci1wb2ludGVyXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgPENhcmRMYXJnZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlYWxPZlRoZURheTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkNhcmRMYXJnZSIsIm1vdGlvbiIsIkRlYWxPZlRoZURheSIsImFjdGl2ZVNsaWRlIiwic2V0QWN0aXZlU2xpZGUiLCJkZWFscyIsInNldERlYWxzIiwiQXJyYXkiLCJmaWxsIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJzdGFydFgiLCJzZXRTdGFydFgiLCJzY3JvbGxMZWZ0Iiwic2V0U2Nyb2xsTGVmdCIsImNvbnRhaW5lclJlZiIsImhhbmRsZU1vdXNlRG93biIsImUiLCJwYWdlWCIsImN1cnJlbnQiLCJvZmZzZXRMZWZ0IiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZU1vdXNlTW92ZSIsInByZXZlbnREZWZhdWx0IiwieCIsIndhbGsiLCJ3aWR0aCIsInNldFdpZHRoIiwic2xpZGUiLCJzY3JvbGxXaWR0aCIsIm9mZnNldFdpZHRoIiwiaGFuZGxlTmV4dCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaWQiLCJzdHlsZSIsInNjcm9sbEJlaGF2aW9yIiwibWFwIiwiXyIsImkiLCJyZWYiLCJkcmFnIiwiZHJhZ0NvbnN0cmFpbnRzIiwicmlnaHQiLCJsZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/mainPageTabs/dealOfTheDay.tsx\n"));

/***/ })

});