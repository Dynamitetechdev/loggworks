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

/***/ "./components/postJobComponents/postJobForm.tsx":
/*!******************************************************!*\
  !*** ./components/postJobComponents/postJobForm.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/ChevronDownIcon */ \"./node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modalPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalPopup */ \"./components/postJobComponents/modalPopup.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PostJobForm = (param)=>{\n    let { activeStep, setActiveStep } = param;\n    _s();\n    const [optionSelected, setOptionSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    console.log(\"dd\", activeStep);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        description: \"\",\n        category: \"\"\n    });\n    const [modalPop, setModalPopUp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleOnChange = (event)=>{\n        setFormData((prevData)=>({\n                ...prevData,\n                [event.target.name]: event.target.value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(formData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"all-forms\",\n                children: [\n                    activeStep == 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"\",\n                        onSubmit: handleSubmit,\n                        className: \"text-grey20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap mb-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"x-3 my-2 md:mb-0 w-full\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"capitalize tracking-wide text-md\",\n                                                id: \"grid-first-name\",\n                                                children: \"First Name\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                className: \"appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80\",\n                                                id: \"grid-first-name\",\n                                                type: \"text\",\n                                                name: \"title\",\n                                                value: formData.title,\n                                                onChange: handleOnChange\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"x-3 my-2 md:mb-0 w-full\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"capitalize tracking-wide text-md\",\n                                                id: \"grid-first-name\",\n                                                children: \"Provide a brief description of the job\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                className: \"appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80 h-[108px]\",\n                                                id: \"grid-first-name\",\n                                                placeholder: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"x-3 my-2 md:mb-0 w-full\",\n                                        onClick: ()=>setModalPopUp(true),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"capitalize tracking-wide text-md\",\n                                                id: \"grid-first-name\",\n                                                children: \"Category\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80 flex items-center justify-between cursor-pointer\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                        children: optionSelected ? \"\".concat(optionSelected.title, \" (\").concat(optionSelected.options[0], \")\") : \" Choose a category\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                            width: 24,\n                                                            height: 24\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                                            lineNumber: 84,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded\",\n                                onClick: ()=>setActiveStep(activeStep + 1),\n                                children: \"Enter location & Date\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined),\n                    activeStep == 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"\",\n                        onSubmit: handleSubmit,\n                        className: \"text-grey20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap mb-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"x-3 my-2 md:mb-0 w-full\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"capitalize tracking-wide text-md\",\n                                            id: \"grid-first-name\",\n                                            children: \"Address line 1\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80\",\n                                            id: \"grid-first-name\",\n                                            type: \"text\",\n                                            name: \"title\",\n                                            value: formData.title,\n                                            onChange: handleOnChange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-[12px]\",\n                                            children: \"Street address, P.O. Box\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded\",\n                                onClick: ()=>setActiveStep(activeStep + 1),\n                                children: \"Enter location & Date\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            modalPop && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modalPopup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                modalPop: modalPop,\n                setModalPopUp: setModalPopUp,\n                optionSelected: optionSelected,\n                setOptionSelected: setOptionSelected\n            }, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/postJobForm.tsx\",\n                lineNumber: 131,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(PostJobForm, \"lEp7S+WA2NH8ictMw7wwwpykr4o=\");\n_c = PostJobForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostJobForm);\nvar _c;\n$RefreshReg$(_c, \"PostJobForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RKb2JDb21wb25lbnRzL3Bvc3RKb2JGb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEQ7QUFDN0I7QUFDSztBQUV0QyxNQUFNRyxjQUdEO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyxhQUFhLEVBQUU7O0lBQ2pDLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR04sK0NBQVFBLENBQU07SUFFMURPLFFBQVFDLEdBQUcsQ0FBQyxNQUFNTDtJQUNsQixNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQU07UUFDNUNXLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFDQSxNQUFNLENBQUNDLFVBQVVDLGNBQWMsR0FBR2YsK0NBQVFBLENBQUM7SUFFM0MsTUFBTWdCLGlCQUFpQixDQUFDQztRQUN0QlAsWUFBWSxDQUFDUSxXQUF3QjtnQkFDbkMsR0FBR0EsUUFBUTtnQkFDWCxDQUFDRCxNQUFNRSxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFSCxNQUFNRSxNQUFNLENBQUNFLEtBQUs7WUFDekM7SUFDRjtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDcEJBLEVBQUVDLGNBQWM7UUFDaEJqQixRQUFRQyxHQUFHLENBQUNDO0lBQ2Q7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNnQjtnQkFBSUMsV0FBVTs7b0JBQ1p2QixjQUFjLG1CQUNiLDhEQUFDd0I7d0JBQUtDLFFBQU87d0JBQUdDLFVBQVVQO3dCQUFjSSxXQUFVOzswQ0FDaEQsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDSTtnREFDQ0osV0FBVTtnREFDVkssSUFBRzswREFDSjs7Ozs7OzBEQUdELDhEQUFDQztnREFDQ04sV0FBVTtnREFDVkssSUFBRztnREFDSEUsTUFBSztnREFDTGIsTUFBSztnREFDTEMsT0FBT1osU0FBU0UsS0FBSztnREFDckJ1QixVQUFVbEI7Ozs7Ozs7Ozs7OztrREFHZCw4REFBQ1M7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDSTtnREFDQ0osV0FBVTtnREFDVkssSUFBRzswREFDSjs7Ozs7OzBEQUdELDhEQUFDSTtnREFDQ1QsV0FBVTtnREFDVkssSUFBRztnREFDSEssYUFBWTs7Ozs7Ozs7Ozs7O2tEQUdoQiw4REFBQ1g7d0NBQ0NDLFdBQVU7d0NBQ1ZXLFNBQVMsSUFBTXRCLGNBQWM7OzBEQUU3Qiw4REFBQ2U7Z0RBQ0NKLFdBQVU7Z0RBQ1ZLLElBQUc7MERBQ0o7Ozs7OzswREFJRCw4REFBQ047Z0RBQUlDLFdBQVU7O2tFQUNiLDhEQUFDWTtrRUFDRWpDLGlCQUNHLEdBQTRCQSxPQUF6QkEsZUFBZU0sS0FBSyxFQUFDLE1BQThCLE9BQTFCTixlQUFla0MsT0FBTyxDQUFDLEVBQUUsRUFBQyxPQUN0RDs7Ozs7O2tFQUVOLDhEQUFDQztrRUFDQyw0RUFBQ3pDLHVGQUFlQTs0REFBQzBDLE9BQU87NERBQUlDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQU01Qyw4REFBQ0M7Z0NBQ0NqQixXQUFVO2dDQUNWVyxTQUFTLElBQU1qQyxjQUFjRCxhQUFhOzBDQUMzQzs7Ozs7Ozs7Ozs7O29CQUtKQSxjQUFjLG1CQUNiLDhEQUFDd0I7d0JBQUtDLFFBQU87d0JBQUdDLFVBQVVQO3dCQUFjSSxXQUFVOzswQ0FDaEQsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNJOzRDQUNDSixXQUFVOzRDQUNWSyxJQUFHO3NEQUNKOzs7Ozs7c0RBR0QsOERBQUNDOzRDQUNDTixXQUFVOzRDQUNWSyxJQUFHOzRDQUNIRSxNQUFLOzRDQUNMYixNQUFLOzRDQUNMQyxPQUFPWixTQUFTRSxLQUFLOzRDQUNyQnVCLFVBQVVsQjs7Ozs7O3NEQUVaLDhEQUFDNEI7NENBQUVsQixXQUFVO3NEQUFjOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJL0IsOERBQUNpQjtnQ0FDQ2pCLFdBQVU7Z0NBQ1ZXLFNBQVMsSUFBTWpDLGNBQWNELGFBQWE7MENBQzNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPTlcsMEJBQ0MsOERBQUNiLG1EQUFVQTtnQkFDVGEsVUFBVUE7Z0JBQ1ZDLGVBQWVBO2dCQUNmVixnQkFBZ0JBO2dCQUNoQkMsbUJBQW1CQTs7Ozs7Ozs7QUFLN0I7R0F2SU1KO0tBQUFBO0FBeUlOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdEpvYkNvbXBvbmVudHMvcG9zdEpvYkZvcm0udHN4Pzk1ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hldnJvbkRvd25JY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RhbFBvcHVwIGZyb20gXCIuL21vZGFsUG9wdXBcIjtcblxuY29uc3QgUG9zdEpvYkZvcm06IFJlYWN0LkZDPHtcbiAgYWN0aXZlU3RlcDogbnVtYmVyO1xuICBzZXRBY3RpdmVTdGVwOiBhbnk7XG59PiA9ICh7IGFjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXAgfSkgPT4ge1xuICBjb25zdCBbb3B0aW9uU2VsZWN0ZWQsIHNldE9wdGlvblNlbGVjdGVkXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG5cbiAgY29uc29sZS5sb2coXCJkZFwiLCBhY3RpdmVTdGVwKTtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KHtcbiAgICB0aXRsZTogXCJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBjYXRlZ29yeTogXCJcIixcbiAgfSk7XG4gIGNvbnN0IFttb2RhbFBvcCwgc2V0TW9kYWxQb3BVcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSAoZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xuICAgIHNldEZvcm1EYXRhKChwcmV2RGF0YTogRm9ybURhdGEpID0+ICh7XG4gICAgICAuLi5wcmV2RGF0YSxcbiAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGwtZm9ybXNcIj5cbiAgICAgICAge2FjdGl2ZVN0ZXAgPT0gMCAmJiAoXG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwidGV4dC1ncmV5MjBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbWItNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIngtMyBteS0yIG1kOm1iLTAgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXBpdGFsaXplIHRyYWNraW5nLXdpZGUgdGV4dC1tZFwiXG4gICAgICAgICAgICAgICAgICBpZD1cImdyaWQtZmlyc3QtbmFtZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRmlyc3QgTmFtZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgdy1mdWxsIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1yZWQtNTAwIHJvdW5kZWQgcC00IG15LTIgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgYmctbGlnaHRXaGl0ZSBib3JkZXIgYm9yZGVyLWdyZXk4MFwiXG4gICAgICAgICAgICAgICAgICBpZD1cImdyaWQtZmlyc3QtbmFtZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIngtMyBteS0yIG1kOm1iLTAgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXBpdGFsaXplIHRyYWNraW5nLXdpZGUgdGV4dC1tZFwiXG4gICAgICAgICAgICAgICAgICBpZD1cImdyaWQtZmlyc3QtbmFtZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUHJvdmlkZSBhIGJyaWVmIGRlc2NyaXB0aW9uIG9mIHRoZSBqb2JcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIHctZnVsbCB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItcmVkLTUwMCByb3VuZGVkIHAtNCBteS0yIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGJnLWxpZ2h0V2hpdGUgYm9yZGVyIGJvcmRlci1ncmV5ODAgaC1bMTA4cHhdXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZ3JpZC1maXJzdC1uYW1lXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIngtMyBteS0yIG1kOm1iLTAgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbFBvcFVwKHRydWUpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXBpdGFsaXplIHRyYWNraW5nLXdpZGUgdGV4dC1tZFwiXG4gICAgICAgICAgICAgICAgICBpZD1cImdyaWQtZmlyc3QtbmFtZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgdy1mdWxsIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1yZWQtNTAwIHJvdW5kZWQgcC00IG15LTIgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgYmctbGlnaHRXaGl0ZSBib3JkZXIgYm9yZGVyLWdyZXk4MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAge29wdGlvblNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBgJHtvcHRpb25TZWxlY3RlZC50aXRsZX0gKCR7b3B0aW9uU2VsZWN0ZWQub3B0aW9uc1swXX0pYFxuICAgICAgICAgICAgICAgICAgICAgIDogXCIgQ2hvb3NlIGEgY2F0ZWdvcnlcIn1cbiAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duSWNvbiB3aWR0aD17MjR9IGhlaWdodD17MjR9IC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4gdGV4dC13aGl0ZSB3LWZ1bGwgaC1bNDhweF0gZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlU3RlcChhY3RpdmVTdGVwICsgMSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEVudGVyIGxvY2F0aW9uICYgRGF0ZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgICB7YWN0aXZlU3RlcCA9PSAxICYmIChcbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJ0ZXh0LWdyZXkyMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBtYi02XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieC0zIG15LTIgbWQ6bWItMCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcGl0YWxpemUgdHJhY2tpbmctd2lkZSB0ZXh0LW1kXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZ3JpZC1maXJzdC1uYW1lXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBZGRyZXNzIGxpbmUgMVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgdy1mdWxsIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1yZWQtNTAwIHJvdW5kZWQgcC00IG15LTIgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgYmctbGlnaHRXaGl0ZSBib3JkZXIgYm9yZGVyLWdyZXk4MFwiXG4gICAgICAgICAgICAgICAgICBpZD1cImdyaWQtZmlyc3QtbmFtZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTJweF1cIj5TdHJlZXQgYWRkcmVzcywgUC5PLiBCb3g8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4gdGV4dC13aGl0ZSB3LWZ1bGwgaC1bNDhweF0gZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlU3RlcChhY3RpdmVTdGVwICsgMSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEVudGVyIGxvY2F0aW9uICYgRGF0ZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHttb2RhbFBvcCAmJiAoXG4gICAgICAgIDxNb2RhbFBvcHVwXG4gICAgICAgICAgbW9kYWxQb3A9e21vZGFsUG9wfVxuICAgICAgICAgIHNldE1vZGFsUG9wVXA9e3NldE1vZGFsUG9wVXB9XG4gICAgICAgICAgb3B0aW9uU2VsZWN0ZWQ9e29wdGlvblNlbGVjdGVkfVxuICAgICAgICAgIHNldE9wdGlvblNlbGVjdGVkPXtzZXRPcHRpb25TZWxlY3RlZH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Sm9iRm9ybTtcbiJdLCJuYW1lcyI6WyJDaGV2cm9uRG93bkljb24iLCJ1c2VTdGF0ZSIsIk1vZGFsUG9wdXAiLCJQb3N0Sm9iRm9ybSIsImFjdGl2ZVN0ZXAiLCJzZXRBY3RpdmVTdGVwIiwib3B0aW9uU2VsZWN0ZWQiLCJzZXRPcHRpb25TZWxlY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwibW9kYWxQb3AiLCJzZXRNb2RhbFBvcFVwIiwiaGFuZGxlT25DaGFuZ2UiLCJldmVudCIsInByZXZEYXRhIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImFjdGlvbiIsIm9uU3VibWl0IiwibGFiZWwiLCJpZCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siLCJoMSIsIm9wdGlvbnMiLCJzcGFuIiwid2lkdGgiLCJoZWlnaHQiLCJidXR0b24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/postJobComponents/postJobForm.tsx\n"));

/***/ })

});