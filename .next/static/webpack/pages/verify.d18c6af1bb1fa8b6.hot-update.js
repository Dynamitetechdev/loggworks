"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/verify",{

/***/ "./components/auth/verify/index.tsx":
/*!******************************************!*\
  !*** ./components/auth/verify/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-phone-input-2/lib/style.css */ \"./node_modules/react-phone-input-2/lib/style.css\");\n/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _testimonial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../testimonial */ \"./components/auth/testimonial.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nlet currentInputIndex;\nconst VerifyForm = (param)=>{\n    let { title, login } = param;\n    var _formData_FACode;\n    _s();\n    const [verifyCode, setVerifyCode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Array(5).fill(\"\"));\n    const [editNumber, setEditNumber] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(60);\n    const [phoneNumber, setPhoneNumber] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"+44 7911 123456\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        phoneNumber,\n        FACode: verifyCode.join(\"\")\n    });\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(formData);\n    };\n    const [activeInputIndex, setActiveInputIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const handleOnChange = (event)=>{\n        const { value } = event.target;\n        const newVal = [\n            ...verifyCode\n        ];\n        newVal[currentInputIndex] = value.substring(value.length - 1);\n        if (!value) setActiveInputIndex(currentInputIndex - 1);\n        else setActiveInputIndex(currentInputIndex + 1);\n        setVerifyCode(newVal);\n        setFormData({\n            FACode: newVal.join(\"\")\n        });\n    };\n    console.log(\"activeInputIndex\", activeInputIndex);\n    const handleKeyDown = (e, index)=>{\n        const { key } = e;\n        currentInputIndex = index;\n        if (key === \"Backspace\") setActiveInputIndex(currentInputIndex - 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setTimer((prevTime)=>prevTime === 0 ? 60 : prevTime - 1);\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"authForm text-center md:grid grid-cols-7 gap-8 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_testimonial__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right max-sm:flex max-sm:flex-col max-sm:justify-between formInput col-span-4 px-5 md:w-6/12 md:mx-auto md:my-auto \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"max-sm:mt-12 form_header max-sm:text-center text-3xl md:font-bold text-greyDark \",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            action: \"\",\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-pColor my-1\",\n                                    children: \"Enter the verification number sent to\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"user_phone flex justify-between items-center\",\n                                    children: [\n                                        editNumber ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            placeholder: \"\",\n                                            name: \"phoneNumber\",\n                                            value: phoneNumber,\n                                            onChange: (e)=>setPhoneNumber(e.target.value),\n                                            className: \"w-full text-center focus:outline-none pl-6\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-center w-full\",\n                                            children: phoneNumber\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-green cursor-pointer capitalize\",\n                                            onClick: ()=>setEditNumber(!editNumber),\n                                            children: editNumber ? \"done\" : \"edit\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-10\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-between items-center mb-3\",\n                                            children: verifyCode.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    ref: index === activeInputIndex ? inputRef : null,\n                                                    className: \"w-[66px] h-[48px] border rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-normalGrey focus:border-green focus:text-gray-700 text-gray-400 transition max-sm:w-[48px] max-sm:rounded-lg bg-normalGrey\",\n                                                    type: \"password\",\n                                                    name: \"FACode\",\n                                                    value: verifyCode[index],\n                                                    maxLength: 1,\n                                                    onKeyDown: (e)=>handleKeyDown(e, index),\n                                                    onChange: (e)=>handleOnChange(e),\n                                                    required: true\n                                                }, index, false, {\n                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 19\n                                                }, undefined))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"resendCount\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-right\",\n                                                children: [\n                                                    timer,\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: \"s\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                                        lineNumber: 118,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                                lineNumber: 116,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 115,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"flex flex-col mb-8\",\n                                    children: [\n                                        \"Didn’t get the OTP?\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-green ml-1\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"\",\n                                                children: \"Resend OTP\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                                lineNumber: 126,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 125,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"md:mb-4\",\n                                    children: ((_formData_FACode = formData.FACode) === null || _formData_FACode === void 0 ? void 0 : _formData_FACode.length) == 5 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"w-full h-[48px] bg-green  font-bold py-2 px-4 rounded\",\n                                        children: \"Verify OTP\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                        lineNumber: 131,\n                                        columnNumber: 17\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"w-full h-[48px] text-[#000000] bg-normalGrey font-bold py-2 px-4 rounded\",\n                                        children: \"Verify OTP\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                        lineNumber: 135,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VerifyForm, \"rrVz7ajypnQe7LtknnJkbuBuagg=\");\n_c = VerifyForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VerifyForm);\nvar _c;\n$RefreshReg$(_c, \"VerifyForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxHQUFHLENBQUMsQ0FBQ0MsR0FBR3BCLHNCQUNsQiw4REFBQ2E7b0RBQ0NRLEtBQUtyQixVQUFVWCxtQkFBbUJFLFdBQVc7b0RBRTdDZ0IsV0FBVTtvREFDVk8sTUFBSztvREFDTEUsTUFBSztvREFDTHRCLE9BQU92QixVQUFVLENBQUM2QixNQUFNO29EQUN4QnNCLFdBQVc7b0RBQ1hDLFdBQVcsQ0FBQ3RDLElBQU1jLGNBQWNkLEdBQUdlO29EQUNuQ2lCLFVBQVUsQ0FBQ2hDLElBQU1PLGVBQWVQO29EQUNoQ3VDLFFBQVE7bURBUkh4Qjs7Ozs7Ozs7OztzREFhWCw4REFBQ007NENBQUlDLFdBQVU7c0RBQ2IsNEVBQUNLO2dEQUFHTCxXQUFVOztvREFDWDlCO2tFQUNELDhEQUFDZ0Q7a0VBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUtaLDhEQUFDQztvQ0FBR25CLFdBQVU7O3dDQUFxQjtzREFFakMsOERBQUNrQjs0Q0FBS2xCLFdBQVU7c0RBQ2QsNEVBQUM5QyxrREFBSUE7Z0RBQUNrRSxNQUFNOzBEQUFJOzs7Ozs7Ozs7Ozt3Q0FDVjs7Ozs7Ozs4Q0FFViw4REFBQ3JCO29DQUFJQyxXQUFVOzhDQUNackMsRUFBQUEsbUJBQUFBLFNBQVNZLE1BQU0sY0FBZlosdUNBQUFBLGlCQUFpQjRCLE1BQU0sS0FBSSxrQkFDMUIsOERBQUM4Qjt3Q0FBT3JCLFdBQVU7a0RBQXdEOzs7OztrRUFJMUUsOERBQUNxQjt3Q0FBT3JCLFdBQVU7a0RBQTJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTdHO0dBaElNeEM7S0FBQUE7QUFrSU4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL3ZlcmlmeS9pbmRleC50c3g/YmE2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBob25lSW5wdXQgZnJvbSBcInJlYWN0LXBob25lLWlucHV0LTJcIjtcbmltcG9ydCBcInJlYWN0LXBob25lLWlucHV0LTIvbGliL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFRlc3RpbW9uaWFsIGZyb20gXCIuLi90ZXN0aW1vbmlhbFwiO1xuXG5pbnRlcmZhY2UgQXV0aEZvcm1Qcm9wIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbG9naW4/OiBib29sZWFuO1xufVxuaW50ZXJmYWNlIEZvcm1EYXRhIHtcbiAgcGhvbmVOdW1iZXI/OiBzdHJpbmc7XG4gIEZBQ29kZTogYW55O1xufVxubGV0IGN1cnJlbnRJbnB1dEluZGV4OiBudW1iZXI7XG5jb25zdCBWZXJpZnlGb3JtOiBSZWFjdC5GQzxBdXRoRm9ybVByb3A+ID0gKHsgdGl0bGUsIGxvZ2luIH0pID0+IHtcbiAgY29uc3QgW3ZlcmlmeUNvZGUsIHNldFZlcmlmeUNvZGVdID0gdXNlU3RhdGU8c3RyaW5nW10+KG5ldyBBcnJheSg1KS5maWxsKFwiXCIpKTtcbiAgY29uc3QgW2VkaXROdW1iZXIsIHNldEVkaXROdW1iZXJdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlPG51bWJlcj4oNjApO1xuXG4gIGNvbnN0IFtwaG9uZU51bWJlciwgc2V0UGhvbmVOdW1iZXJdID0gdXNlU3RhdGUoXCIrNDQgNzkxMSAxMjM0NTZcIik7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGU8Rm9ybURhdGE+KHtcbiAgICBwaG9uZU51bWJlcixcbiAgICBGQUNvZGU6IHZlcmlmeUNvZGUuam9pbihcIlwiKSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4gIH07XG5cbiAgY29uc3QgW2FjdGl2ZUlucHV0SW5kZXgsIHNldEFjdGl2ZUlucHV0SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSAoZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBuZXdWYWwgPSBbLi4udmVyaWZ5Q29kZV07XG4gICAgbmV3VmFsW2N1cnJlbnRJbnB1dEluZGV4XSA9IHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5sZW5ndGggLSAxKTtcbiAgICBpZiAoIXZhbHVlKSBzZXRBY3RpdmVJbnB1dEluZGV4KGN1cnJlbnRJbnB1dEluZGV4IC0gMSk7XG4gICAgZWxzZSBzZXRBY3RpdmVJbnB1dEluZGV4KGN1cnJlbnRJbnB1dEluZGV4ICsgMSk7XG4gICAgc2V0VmVyaWZ5Q29kZShuZXdWYWwpO1xuICAgIHNldEZvcm1EYXRhKHsgRkFDb2RlOiBuZXdWYWwuam9pbihcIlwiKSB9KTtcbiAgfTtcbiAgY29uc29sZS5sb2coXCJhY3RpdmVJbnB1dEluZGV4XCIsIGFjdGl2ZUlucHV0SW5kZXgpO1xuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKFxuICAgIGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sXG4gICAgaW5kZXg6IG51bWJlclxuICApID0+IHtcbiAgICBjb25zdCB7IGtleSB9ID0gZTtcbiAgICBjdXJyZW50SW5wdXRJbmRleCA9IGluZGV4O1xuICAgIGlmIChrZXkgPT09IFwiQmFja3NwYWNlXCIpIHNldEFjdGl2ZUlucHV0SW5kZXgoY3VycmVudElucHV0SW5kZXggLSAxKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFRpbWVyKChwcmV2VGltZSkgPT4gKHByZXZUaW1lID09PSAwID8gNjAgOiBwcmV2VGltZSAtIDEpKTtcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aEZvcm0gdGV4dC1jZW50ZXIgbWQ6Z3JpZCBncmlkLWNvbHMtNyBnYXAtOCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxUZXN0aW1vbmlhbCAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IG1heC1zbTpmbGV4IG1heC1zbTpmbGV4LWNvbCBtYXgtc206anVzdGlmeS1iZXR3ZWVuIGZvcm1JbnB1dCBjb2wtc3Bhbi00IHB4LTUgbWQ6dy02LzEyIG1kOm14LWF1dG8gbWQ6bXktYXV0byBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1heC1zbTptdC0xMiBmb3JtX2hlYWRlciBtYXgtc206dGV4dC1jZW50ZXIgdGV4dC0zeGwgbWQ6Zm9udC1ib2xkIHRleHQtZ3JleURhcmsgXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1wQ29sb3IgbXktMVwiPlxuICAgICAgICAgICAgICBFbnRlciB0aGUgdmVyaWZpY2F0aW9uIG51bWJlciBzZW50IHRvXG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJfcGhvbmUgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIHtlZGl0TnVtYmVyID8gKFxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwaG9uZU51bWJlcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGhvbmVOdW1iZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIGZvY3VzOm91dGxpbmUtbm9uZSBwbC02XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3LWZ1bGxcIj57cGhvbmVOdW1iZXJ9PC9oMz5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmVlbiBjdXJzb3ItcG9pbnRlciBjYXBpdGFsaXplXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0TnVtYmVyKCFlZGl0TnVtYmVyKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtlZGl0TnVtYmVyID8gXCJkb25lXCIgOiBcImVkaXRcIn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAgICAgIHt2ZXJpZnlDb2RlLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICByZWY9e2luZGV4ID09PSBhY3RpdmVJbnB1dEluZGV4ID8gaW5wdXRSZWYgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs2NnB4XSBoLVs0OHB4XSBib3JkZXIgcm91bmRlZCBiZy10cmFuc3BhcmVudCBvdXRsaW5lLW5vbmUgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCB0ZXh0LXhsIHNwaW4tYnV0dG9uLW5vbmUgYm9yZGVyLW5vcm1hbEdyZXkgZm9jdXM6Ym9yZGVyLWdyZWVuIGZvY3VzOnRleHQtZ3JheS03MDAgdGV4dC1ncmF5LTQwMCB0cmFuc2l0aW9uIG1heC1zbTp3LVs0OHB4XSBtYXgtc206cm91bmRlZC1sZyBiZy1ub3JtYWxHcmV5XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkZBQ29kZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2ZXJpZnlDb2RlW2luZGV4XX1cbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxfVxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiBoYW5kbGVLZXlEb3duKGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVPbkNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzZW5kQ291bnRcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAge3RpbWVyfVxuICAgICAgICAgICAgICAgICAgPHNwYW4+czwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtYi04XCI+XG4gICAgICAgICAgICAgIERpZG7igJl0IGdldCB0aGUgT1RQP1xuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuIG1sLTFcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIlwifT5SZXNlbmQgT1RQPC9MaW5rPlxuICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6bWItNFwiPlxuICAgICAgICAgICAgICB7Zm9ybURhdGEuRkFDb2RlPy5sZW5ndGggPT0gNSA/IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBoLVs0OHB4XSBiZy1ncmVlbiAgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICBWZXJpZnkgT1RQXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bNDhweF0gdGV4dC1bIzAwMDAwMF0gYmctbm9ybWFsR3JleSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgIFZlcmlmeSBPVFBcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZlcmlmeUZvcm07XG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiVGVzdGltb25pYWwiLCJjdXJyZW50SW5wdXRJbmRleCIsIlZlcmlmeUZvcm0iLCJ0aXRsZSIsImxvZ2luIiwiZm9ybURhdGEiLCJ2ZXJpZnlDb2RlIiwic2V0VmVyaWZ5Q29kZSIsIkFycmF5IiwiZmlsbCIsImVkaXROdW1iZXIiLCJzZXRFZGl0TnVtYmVyIiwidGltZXIiLCJzZXRUaW1lciIsInBob25lTnVtYmVyIiwic2V0UGhvbmVOdW1iZXIiLCJzZXRGb3JtRGF0YSIsIkZBQ29kZSIsImpvaW4iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlSW5wdXRJbmRleCIsInNldEFjdGl2ZUlucHV0SW5kZXgiLCJpbnB1dFJlZiIsImhhbmRsZU9uQ2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsIm5ld1ZhbCIsInN1YnN0cmluZyIsImxlbmd0aCIsImhhbmRsZUtleURvd24iLCJpbmRleCIsImtleSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJhY3Rpb24iLCJvblN1Ym1pdCIsImgzIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwibWFwIiwiXyIsInJlZiIsIm1heExlbmd0aCIsIm9uS2V5RG93biIsInJlcXVpcmVkIiwic3BhbiIsImg0IiwiaHJlZiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/auth/verify/index.tsx\n"));

/***/ })

});