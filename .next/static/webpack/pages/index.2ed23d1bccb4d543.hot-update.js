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

/***/ "./components/general/sideBar.tsx":
/*!****************************************!*\
  !*** ./components/general/sideBar.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_outline_esm_CalendarIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/CalendarIcon */ \"./node_modules/@heroicons/react/24/outline/esm/CalendarIcon.js\");\n/* harmony import */ var _heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/HomeIcon */ \"./node_modules/@heroicons/react/24/outline/esm/HomeIcon.js\");\n/* harmony import */ var _heroicons_react_24_outline_esm_ChatBubbleOvalLeftEllipsisIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/ChatBubbleOvalLeftEllipsisIcon */ \"./node_modules/@heroicons/react/24/outline/esm/ChatBubbleOvalLeftEllipsisIcon.js\");\n/* harmony import */ var _heroicons_react_24_outline_esm_ListBulletIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/ListBulletIcon */ \"./node_modules/@heroicons/react/24/outline/esm/ListBulletIcon.js\");\n\n\n\n\n\n\nconst SideBar = ()=>{\n    const allIcons = {\n        CalendarIcon: _heroicons_react_24_outline_esm_CalendarIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        HomeIcon: _heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        ChatBubbleOvalLeftEllipsisIcon: _heroicons_react_24_outline_esm_ChatBubbleOvalLeftEllipsisIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        ListBulletIcon: _heroicons_react_24_outline_esm_ListBulletIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    };\n    const sideNav = [\n        {\n            title: \"home\",\n            icon: \"HomeIcon\"\n        },\n        {\n            title: \"bookings\",\n            icon: \"CalendarIcon\",\n            activeImage: \"bookmark\"\n        },\n        {\n            title: \"messages\",\n            icon: \"ChatBubbleOvalLeftEllipsisIcon\"\n        },\n        {\n            title: \"activities\",\n            icon: \"ListBulletIcon\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sidebar max-sm:fixed max-sm:z-50 max-sm:w-full max-sm:bottom-0 md:fixed md:w-2/12 bg-sideBarColor md:h-screen max-sm:px-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-sm:hidden logo pl-7 pt-7\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/assets/images/Logo-green.png\",\n                    width: 125,\n                    height: 20,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"side_nav md:mt-14\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"max-sm:flex max-sm:justify-between\",\n                    children: sideNav.map((nav, index)=>{\n                        const Icon = allIcons[nav.icon];\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex max-sm:flex-col items-center  md:my-4 py-2 hover:bg-lightWhite cursor-pointer md:pl-7 hover:text-green\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"icon w-[24px] h-[24px]\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {}, void 0, false, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"capitalize ml-2 max-sm:text-[14px]\",\n                                    children: nav.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, \"nav--\".concat(index), true, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SideBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBar);\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dlbmVyYWwvc2lkZUJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQjtBQU1NO0FBQUE7QUFBQTtBQUFBO0FBQ3JDLE1BQU1LLFVBQVU7SUFJZCxNQUFNQyxXQUFxQjtRQUN6QkwsWUFBWUEsc0ZBQUFBO1FBQ1pDLFFBQVFBLGtGQUFBQTtRQUNSQyw4QkFBOEJBLHdHQUFBQTtRQUM5QkMsY0FBY0Esd0ZBQUFBO0lBQ2hCO0lBQ0EsTUFBTUcsVUFBVTtRQUNkO1lBQ0VDLE9BQU87WUFDUEMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsT0FBTztZQUNQQyxNQUFNO1lBQ05DLGFBQWE7UUFDZjtRQUNBO1lBQ0VGLE9BQU87WUFDUEMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsT0FBTztZQUNQQyxNQUFNO1FBQ1I7S0FDRDtJQUVELHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNaLG1EQUFLQTtvQkFDSmEsS0FBSztvQkFDTEMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsS0FBSTs7Ozs7Ozs7Ozs7MEJBSVIsOERBQUNMO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDSztvQkFBR0wsV0FBVTs4QkFDWEwsUUFBUVcsR0FBRyxDQUFDLENBQUNDLEtBQUtDO3dCQUNqQixNQUFNQyxPQUFPZixRQUFRLENBQUNhLElBQUlWLElBQUksQ0FBQzt3QkFFL0IscUJBQ0UsOERBQUNhOzRCQUVDVixXQUFVOzs4Q0FFViw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNTOzs7Ozs7Ozs7OzhDQUVILDhEQUFDRTtvQ0FBRVgsV0FBVTs4Q0FDVk8sSUFBSVgsS0FBSzs7Ozs7OzsyQkFQUCxRQUFjLE9BQU5ZOzs7OztvQkFXbkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7S0FoRU1mO0FBa0VOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2VuZXJhbC9zaWRlQmFyLnRzeD8xNTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHtcbiAgQ2FsZW5kYXJJY29uLFxuICBIb21lSWNvbixcbiAgQ2hhdEJ1YmJsZU92YWxMZWZ0RWxsaXBzaXNJY29uLFxuICBMaXN0QnVsbGV0SWNvbixcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZVwiO1xuY29uc3QgU2lkZUJhciA9ICgpID0+IHtcbiAgaW50ZXJmYWNlIEFsbEljb25zIHtcbiAgICBbaWNvbk5hbWU6IHN0cmluZ106IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PjtcbiAgfVxuICBjb25zdCBhbGxJY29uczogQWxsSWNvbnMgPSB7XG4gICAgQ2FsZW5kYXJJY29uLFxuICAgIEhvbWVJY29uLFxuICAgIENoYXRCdWJibGVPdmFsTGVmdEVsbGlwc2lzSWNvbixcbiAgICBMaXN0QnVsbGV0SWNvbixcbiAgfTtcbiAgY29uc3Qgc2lkZU5hdiA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJob21lXCIsXG4gICAgICBpY29uOiBcIkhvbWVJY29uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJib29raW5nc1wiLFxuICAgICAgaWNvbjogXCJDYWxlbmRhckljb25cIixcbiAgICAgIGFjdGl2ZUltYWdlOiBcImJvb2ttYXJrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJtZXNzYWdlc1wiLFxuICAgICAgaWNvbjogXCJDaGF0QnViYmxlT3ZhbExlZnRFbGxpcHNpc0ljb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcImFjdGl2aXRpZXNcIixcbiAgICAgIGljb246IFwiTGlzdEJ1bGxldEljb25cIixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyIG1heC1zbTpmaXhlZCBtYXgtc206ei01MCBtYXgtc206dy1mdWxsIG1heC1zbTpib3R0b20tMCBtZDpmaXhlZCBtZDp3LTIvMTIgYmctc2lkZUJhckNvbG9yIG1kOmgtc2NyZWVuIG1heC1zbTpweC0zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1zbTpoaWRkZW4gbG9nbyBwbC03IHB0LTdcIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtcIi9hc3NldHMvaW1hZ2VzL0xvZ28tZ3JlZW4ucG5nXCJ9XG4gICAgICAgICAgd2lkdGg9ezEyNX1cbiAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlX25hdiBtZDptdC0xNFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWF4LXNtOmZsZXggbWF4LXNtOmp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIHtzaWRlTmF2Lm1hcCgobmF2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgSWNvbiA9IGFsbEljb25zW25hdi5pY29uXTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXtgbmF2LS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBtYXgtc206ZmxleC1jb2wgaXRlbXMtY2VudGVyICBtZDpteS00IHB5LTIgaG92ZXI6YmctbGlnaHRXaGl0ZSBjdXJzb3ItcG9pbnRlciBtZDpwbC03IGhvdmVyOnRleHQtZ3JlZW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIHctWzI0cHhdIGgtWzI0cHhdXCI+XG4gICAgICAgICAgICAgICAgICA8SWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcGl0YWxpemUgbWwtMiBtYXgtc206dGV4dC1bMTRweF1cIj5cbiAgICAgICAgICAgICAgICAgIHtuYXYudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkNhbGVuZGFySWNvbiIsIkhvbWVJY29uIiwiQ2hhdEJ1YmJsZU92YWxMZWZ0RWxsaXBzaXNJY29uIiwiTGlzdEJ1bGxldEljb24iLCJTaWRlQmFyIiwiYWxsSWNvbnMiLCJzaWRlTmF2IiwidGl0bGUiLCJpY29uIiwiYWN0aXZlSW1hZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInVsIiwibWFwIiwibmF2IiwiaW5kZXgiLCJJY29uIiwibGkiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/general/sideBar.tsx\n"));

/***/ })

});