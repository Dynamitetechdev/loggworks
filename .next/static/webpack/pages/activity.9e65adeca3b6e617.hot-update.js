"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/activity",{

/***/ "./pages/activity/index.tsx":
/*!**********************************!*\
  !*** ./pages/activity/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_general_sideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/general/sideBar */ \"./components/general/sideBar.tsx\");\n/* harmony import */ var _components_postJobComponents_navHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/postJobComponents/navHead */ \"./components/postJobComponents/navHead.tsx\");\n/* harmony import */ var _components_general_tabSwitchCategory_tabNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/general/tabSwitchCategory/tabNav */ \"./components/general/tabSwitchCategory/tabNav.tsx\");\n/* harmony import */ var _components_general_tabSwitchCategory_switchMiniNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/general/tabSwitchCategory/switchMiniNav */ \"./components/general/tabSwitchCategory/switchMiniNav.tsx\");\n/* harmony import */ var _components_activitiesComponents_notificationsTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/activitiesComponents/notificationsTab */ \"./components/activitiesComponents/notificationsTab.tsx\");\n/* harmony import */ var _components_activitiesComponents_communityTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/activitiesComponents/communityTab */ \"./components/activitiesComponents/communityTab.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Notifications = ()=>{\n    _s();\n    const communityData = [\n        {\n            title: \"RNS products\",\n            status: \"current\"\n        }\n    ];\n    const notificationData = [\n        {\n            name: \"Dyson Electricals\",\n            category: \"booking\",\n            booking: true,\n            date: \"Sun 01 July at 7:20pm\",\n            data: \"You have an upcoming Booking with Smith’s constructions on 1st Oct 2021; 9:00pm\"\n        },\n        {\n            name: \"Dyson Electricals\",\n            category: \"booking\",\n            status: \"completed\",\n            booking: true,\n            date: \"Sun 01 July at 7:20pm\",\n            data: \"You have an upcoming Booking with Smith’s constructions on 1st Oct 2021; 9:00pm\"\n        },\n        {\n            name: \"Dyson Electricals\",\n            category: \"payment\",\n            booking: true,\n            date: \"Sun 01 July at 7:20pm\",\n            data: \"Payment of \\xa3450 to Smith’s constructions is successful\"\n        },\n        {\n            name: \"Dyson Electricals\",\n            category: \"promotion\",\n            booking: true,\n            date: \"Sun 01 July at 7:20pm\",\n            data: \"Smith’s constructions  is currently running an offer. Tap to find out more.\"\n        },\n        {\n            name: \"Dyson Electricals\",\n            category: \"message\",\n            booking: true,\n            date: \"Sun 01 July at 7:20pm\",\n            data: \"Payment of \\xa3450 to Smith’s constructions is successful\"\n        }\n    ];\n    const [activeStep, setActiveStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [activeTab, setTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"notifications\");\n    const [activeSwitchIndex, setActiveSwitchIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [selectedOption, setSelectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleActive = (tab)=>{\n        setTab(tab);\n    };\n    const handleSelectSwitch = (index, option)=>{\n        setActiveSwitchIndex(index);\n        setSelectedOptions(option);\n    };\n    const activitiesSectionData = {\n        tabSwitch: [\n            \"notifications\",\n            \"community\"\n        ],\n        notifications: {\n            options: [\n                \"booking\",\n                \"Payment\",\n                \"Promotion\",\n                \"Message\"\n            ],\n            notificationData\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[221px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_general_sideBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/activity/index.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/activity/index.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"post-job bg-white min-h-screen relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_postJobComponents_navHead__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            activeStep: activeStep,\n                            setActiveStep: setActiveStep,\n                            title: \"Activities\",\n                            type: \"plain\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/activity/index.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-6 md:px-6 lg:px-8 pt-5 md:flex text-pTagGrey \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:w-8/12 lp:w-7/12 lg:w-5/12 mx-auto lp:text-[14px] lg:text-[16px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_general_tabSwitchCategory_tabNav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        options: activitiesSectionData.tabSwitch,\n                                        activeTab: activeTab,\n                                        handleActive: handleActive,\n                                        setSelectedOptions: setSelectedOptions\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/activity/index.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    activeTab === \"notifications\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_general_tabSwitchCategory_switchMiniNav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        switchOptions: activeTab === \"notifications\" && activitiesSectionData.notifications.options,\n                                        activeSwitchIndex: activeSwitchIndex,\n                                        handleSelectSwitch: handleSelectSwitch\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/activity/index.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    activeTab === \"notifications\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_activitiesComponents_notificationsTab__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        data: activitiesSectionData.notifications.notificationData,\n                                        selectedOption: selectedOption || \"booking\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/activity/index.tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    activeTab === \"community\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_activitiesComponents_communityTab__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        data: communityData\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/activity/index.tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/activity/index.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/activity/index.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/activity/index.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/activity/index.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/activity/index.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Notifications, \"s8AWM8zSnmhDi6OyNnE+MubO1sA=\");\n_c = Notifications;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notifications);\nvar _c;\n$RefreshReg$(_c, \"Notifications\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY3Rpdml0eS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QztBQUVXO0FBQ1U7QUFDTTtBQUNjO0FBR0M7QUFDSjtBQUVsRixNQUFNTyxnQkFBZ0I7O0lBQ3BCLE1BQU1DLGdCQUFnQjtRQUNwQjtZQUNFQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtLQUNEO0lBQ0QsTUFBTUMsbUJBQW1CO1FBQ3ZCO1lBQ0VDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxTQUFTO1lBQ1RDLE1BQU07WUFDTkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUosTUFBTTtZQUNOQyxVQUFVO1lBQ1ZILFFBQVE7WUFDUkksU0FBUztZQUNUQyxNQUFNO1lBQ05DLE1BQU07UUFDUjtRQUNBO1lBQ0VKLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxTQUFTO1lBQ1RDLE1BQU07WUFDTkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUosTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLFNBQVM7WUFDVEMsTUFBTTtZQUNOQyxNQUFNO1FBQ1I7UUFDQTtZQUNFSixNQUFNO1lBQ05DLFVBQVU7WUFDVkMsU0FBUztZQUNUQyxNQUFNO1lBQ05DLE1BQU07UUFDUjtLQUNEO0lBQ0QsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNLENBQUNtQixXQUFXQyxPQUFPLEdBQUdwQiwrQ0FBUUEsQ0FBUztJQUM3QyxNQUFNLENBQUNxQixtQkFBbUJDLHFCQUFxQixHQUFHdEIsK0NBQVFBLENBQVM7SUFDbkUsTUFBTSxDQUFDdUIsZ0JBQWdCQyxtQkFBbUIsR0FBR3hCLCtDQUFRQTtJQUVyRCxNQUFNeUIsZUFBZSxDQUFDQztRQUNwQk4sT0FBT007SUFDVDtJQUVBLE1BQU1DLHFCQUFxQixDQUFDQyxPQUFlQztRQUN6Q1AscUJBQXFCTTtRQUNyQkosbUJBQW1CSztJQUNyQjtJQUVBLE1BQU1DLHdCQUF3QjtRQUM1QkMsV0FBVztZQUFDO1lBQWlCO1NBQVk7UUFDekNDLGVBQWU7WUFDYkMsU0FBUztnQkFBQztnQkFBVztnQkFBVztnQkFBYTthQUFVO1lBQ3ZEdEI7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUN1QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNsQyxtRUFBT0E7Ozs7Ozs7Ozs7MEJBRVYsOERBQUNpQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDakMsNkVBQU9BOzRCQUNOZSxZQUFZQTs0QkFDWkMsZUFBZUE7NEJBQ2ZULE9BQU07NEJBQ04yQixNQUFLOzs7Ozs7c0NBRVAsOERBQUNGOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNoQyxvRkFBTUE7d0NBQ0w4QixTQUFTSCxzQkFBc0JDLFNBQVM7d0NBQ3hDWixXQUFXQTt3Q0FDWE0sY0FBY0E7d0NBQ2RELG9CQUFvQkE7Ozs7OztvQ0FHckJMLGNBQWMsaUNBQ2IsOERBQUNmLDJGQUFhQTt3Q0FDWmlDLGVBQ0VsQixjQUFjLG1CQUNkVyxzQkFBc0JFLGFBQWEsQ0FBQ0MsT0FBTzt3Q0FFN0NaLG1CQUFtQkE7d0NBQ25CTSxvQkFBb0JBOzs7Ozs7b0NBSXZCUixjQUFjLGlDQUNiLDhEQUFDZCx5RkFBZ0JBO3dDQUNmVyxNQUFNYyxzQkFBc0JFLGFBQWEsQ0FBQ3JCLGdCQUFnQjt3Q0FDMURZLGdCQUFnQkEsa0JBQWtCOzs7Ozs7b0NBSW5DSixjQUFjLDZCQUNiLDhEQUFDYixxRkFBZ0JBO3dDQUFDVSxNQUFNUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVUxQztHQXZITUQ7S0FBQUE7QUF5SE4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWN0aXZpdHkvaW5kZXgudHN4PzU3MGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsL25hdi9oZWFkZXJcIjtcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWwvc2lkZUJhclwiO1xuaW1wb3J0IE5hdkhlYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdEpvYkNvbXBvbmVudHMvbmF2SGVhZFwiO1xuaW1wb3J0IFRhYk5hdiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsL3RhYlN3aXRjaENhdGVnb3J5L3RhYk5hdlwiO1xuaW1wb3J0IFN3aXRjaE1pbmlOYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbC90YWJTd2l0Y2hDYXRlZ29yeS9zd2l0Y2hNaW5pTmF2XCI7XG5pbXBvcnQgQm9va2luZ1RhYkRhdGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbC90YWJTd2l0Y2hDYXRlZ29yeS9ib29raW5nVGFiRGF0YVwiO1xuaW1wb3J0IFJldmlld1RhYkRhdGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbC90YWJTd2l0Y2hDYXRlZ29yeS9yZXZpZXdUYWJcIjtcbmltcG9ydCBOb3RpZmljYXRpb25zVGFiIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FjdGl2aXRpZXNDb21wb25lbnRzL25vdGlmaWNhdGlvbnNUYWJcIjtcbmltcG9ydCBDb21tdW5pdHlUYWJEYXRhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FjdGl2aXRpZXNDb21wb25lbnRzL2NvbW11bml0eVRhYlwiO1xuXG5jb25zdCBOb3RpZmljYXRpb25zID0gKCkgPT4ge1xuICBjb25zdCBjb21tdW5pdHlEYXRhID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIlJOUyBwcm9kdWN0c1wiLFxuICAgICAgc3RhdHVzOiBcImN1cnJlbnRcIixcbiAgICB9LFxuICBdO1xuICBjb25zdCBub3RpZmljYXRpb25EYXRhID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiRHlzb24gRWxlY3RyaWNhbHNcIixcbiAgICAgIGNhdGVnb3J5OiBcImJvb2tpbmdcIixcbiAgICAgIGJvb2tpbmc6IHRydWUsXG4gICAgICBkYXRlOiBcIlN1biAwMSBKdWx5IGF0IDc6MjBwbVwiLFxuICAgICAgZGF0YTogXCJZb3UgaGF2ZSBhbiB1cGNvbWluZyBCb29raW5nIHdpdGggU21pdGjigJlzIGNvbnN0cnVjdGlvbnMgb24gMXN0IE9jdCAyMDIxOyA5OjAwcG1cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiRHlzb24gRWxlY3RyaWNhbHNcIixcbiAgICAgIGNhdGVnb3J5OiBcImJvb2tpbmdcIixcbiAgICAgIHN0YXR1czogXCJjb21wbGV0ZWRcIixcbiAgICAgIGJvb2tpbmc6IHRydWUsXG4gICAgICBkYXRlOiBcIlN1biAwMSBKdWx5IGF0IDc6MjBwbVwiLFxuICAgICAgZGF0YTogXCJZb3UgaGF2ZSBhbiB1cGNvbWluZyBCb29raW5nIHdpdGggU21pdGjigJlzIGNvbnN0cnVjdGlvbnMgb24gMXN0IE9jdCAyMDIxOyA5OjAwcG1cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiRHlzb24gRWxlY3RyaWNhbHNcIixcbiAgICAgIGNhdGVnb3J5OiBcInBheW1lbnRcIixcbiAgICAgIGJvb2tpbmc6IHRydWUsXG4gICAgICBkYXRlOiBcIlN1biAwMSBKdWx5IGF0IDc6MjBwbVwiLFxuICAgICAgZGF0YTogXCJQYXltZW50IG9mIMKjNDUwIHRvIFNtaXRo4oCZcyBjb25zdHJ1Y3Rpb25zIGlzIHN1Y2Nlc3NmdWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiRHlzb24gRWxlY3RyaWNhbHNcIixcbiAgICAgIGNhdGVnb3J5OiBcInByb21vdGlvblwiLFxuICAgICAgYm9va2luZzogdHJ1ZSxcbiAgICAgIGRhdGU6IFwiU3VuIDAxIEp1bHkgYXQgNzoyMHBtXCIsXG4gICAgICBkYXRhOiBcIlNtaXRo4oCZcyBjb25zdHJ1Y3Rpb25zICBpcyBjdXJyZW50bHkgcnVubmluZyBhbiBvZmZlci4gVGFwIHRvIGZpbmQgb3V0IG1vcmUuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkR5c29uIEVsZWN0cmljYWxzXCIsXG4gICAgICBjYXRlZ29yeTogXCJtZXNzYWdlXCIsXG4gICAgICBib29raW5nOiB0cnVlLFxuICAgICAgZGF0ZTogXCJTdW4gMDEgSnVseSBhdCA3OjIwcG1cIixcbiAgICAgIGRhdGE6IFwiUGF5bWVudCBvZiDCozQ1MCB0byBTbWl0aOKAmXMgY29uc3RydWN0aW9ucyBpcyBzdWNjZXNzZnVsXCIsXG4gICAgfSxcbiAgXTtcbiAgY29uc3QgW2FjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXBdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0VGFiXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJub3RpZmljYXRpb25zXCIpO1xuICBjb25zdCBbYWN0aXZlU3dpdGNoSW5kZXgsIHNldEFjdGl2ZVN3aXRjaEluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25zXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgaGFuZGxlQWN0aXZlID0gKHRhYjogc3RyaW5nKSA9PiB7XG4gICAgc2V0VGFiKHRhYik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0U3dpdGNoID0gKGluZGV4OiBudW1iZXIsIG9wdGlvbjogYW55KSA9PiB7XG4gICAgc2V0QWN0aXZlU3dpdGNoSW5kZXgoaW5kZXgpO1xuICAgIHNldFNlbGVjdGVkT3B0aW9ucyhvcHRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGFjdGl2aXRpZXNTZWN0aW9uRGF0YSA9IHtcbiAgICB0YWJTd2l0Y2g6IFtcIm5vdGlmaWNhdGlvbnNcIiwgXCJjb21tdW5pdHlcIl0sXG4gICAgbm90aWZpY2F0aW9uczoge1xuICAgICAgb3B0aW9uczogW1wiYm9va2luZ1wiLCBcIlBheW1lbnRcIiwgXCJQcm9tb3Rpb25cIiwgXCJNZXNzYWdlXCJdLFxuICAgICAgbm90aWZpY2F0aW9uRGF0YSxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmbGV4XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzIyMXB4XVwiPlxuICAgICAgICA8U2lkZUJhciAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWpvYiBiZy13aGl0ZSBtaW4taC1zY3JlZW4gcmVsYXRpdmVcIj5cbiAgICAgICAgICA8TmF2SGVhZFxuICAgICAgICAgICAgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH1cbiAgICAgICAgICAgIHNldEFjdGl2ZVN0ZXA9e3NldEFjdGl2ZVN0ZXB9XG4gICAgICAgICAgICB0aXRsZT1cIkFjdGl2aXRpZXNcIlxuICAgICAgICAgICAgdHlwZT1cInBsYWluXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBtZDpweC02IGxnOnB4LTggcHQtNSBtZDpmbGV4IHRleHQtcFRhZ0dyZXkgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctOC8xMiBscDp3LTcvMTIgbGc6dy01LzEyIG14LWF1dG8gbHA6dGV4dC1bMTRweF0gbGc6dGV4dC1bMTZweF1cIj5cbiAgICAgICAgICAgICAgPFRhYk5hdlxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2FjdGl2aXRpZXNTZWN0aW9uRGF0YS50YWJTd2l0Y2h9XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiPXthY3RpdmVUYWJ9XG4gICAgICAgICAgICAgICAgaGFuZGxlQWN0aXZlPXtoYW5kbGVBY3RpdmV9XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRPcHRpb25zPXtzZXRTZWxlY3RlZE9wdGlvbnN9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gXCJub3RpZmljYXRpb25zXCIgJiYgKFxuICAgICAgICAgICAgICAgIDxTd2l0Y2hNaW5pTmF2XG4gICAgICAgICAgICAgICAgICBzd2l0Y2hPcHRpb25zPXtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSBcIm5vdGlmaWNhdGlvbnNcIiAmJlxuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0aWVzU2VjdGlvbkRhdGEubm90aWZpY2F0aW9ucy5vcHRpb25zXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhY3RpdmVTd2l0Y2hJbmRleD17YWN0aXZlU3dpdGNoSW5kZXh9XG4gICAgICAgICAgICAgICAgICBoYW5kbGVTZWxlY3RTd2l0Y2g9e2hhbmRsZVNlbGVjdFN3aXRjaH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09IFwibm90aWZpY2F0aW9uc1wiICYmIChcbiAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uc1RhYlxuICAgICAgICAgICAgICAgICAgZGF0YT17YWN0aXZpdGllc1NlY3Rpb25EYXRhLm5vdGlmaWNhdGlvbnMubm90aWZpY2F0aW9uRGF0YX1cbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXtzZWxlY3RlZE9wdGlvbiB8fCBcImJvb2tpbmdcIn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSBcImNvbW11bml0eVwiICYmIChcbiAgICAgICAgICAgICAgICAgIDxDb21tdW5pdHlUYWJEYXRhIGRhdGE9e2NvbW11bml0eURhdGF9IC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbnM7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTaWRlQmFyIiwiTmF2SGVhZCIsIlRhYk5hdiIsIlN3aXRjaE1pbmlOYXYiLCJOb3RpZmljYXRpb25zVGFiIiwiQ29tbXVuaXR5VGFiRGF0YSIsIk5vdGlmaWNhdGlvbnMiLCJjb21tdW5pdHlEYXRhIiwidGl0bGUiLCJzdGF0dXMiLCJub3RpZmljYXRpb25EYXRhIiwibmFtZSIsImNhdGVnb3J5IiwiYm9va2luZyIsImRhdGUiLCJkYXRhIiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJhY3RpdmVUYWIiLCJzZXRUYWIiLCJhY3RpdmVTd2l0Y2hJbmRleCIsInNldEFjdGl2ZVN3aXRjaEluZGV4Iiwic2VsZWN0ZWRPcHRpb24iLCJzZXRTZWxlY3RlZE9wdGlvbnMiLCJoYW5kbGVBY3RpdmUiLCJ0YWIiLCJoYW5kbGVTZWxlY3RTd2l0Y2giLCJpbmRleCIsIm9wdGlvbiIsImFjdGl2aXRpZXNTZWN0aW9uRGF0YSIsInRhYlN3aXRjaCIsIm5vdGlmaWNhdGlvbnMiLCJvcHRpb25zIiwiZGl2IiwiY2xhc3NOYW1lIiwidHlwZSIsInN3aXRjaE9wdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/activity/index.tsx\n"));

/***/ })

});