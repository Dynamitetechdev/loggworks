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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-phone-input-2/lib/style.css */ \"./node_modules/react-phone-input-2/lib/style.css\");\n/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _testimonial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../testimonial */ \"./components/auth/testimonial.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nlet currentInputIndex;\nconst VerifyForm = (param)=>{\n    let { title, login } = param;\n    var _formData;\n    _s();\n    const [verifyCode, setVerifyCode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Array(5).fill(\"\"));\n    const [editNumber, setEditNumber] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(60);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        FACode: verifyCode.join(\"\")\n    });\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(formData);\n    };\n    const [activeInputIndex, setActiveInputIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const handleOnChange = (event)=>{\n        const { value } = event.target;\n        const newVal = [\n            ...verifyCode\n        ];\n        newVal[currentInputIndex] = value.substring(value.length - 1);\n        if (!value) setActiveInputIndex(currentInputIndex - 1);\n        else setActiveInputIndex(currentInputIndex + 1);\n        setVerifyCode(newVal);\n        setFormData({\n            FACode: newVal.join(\"\")\n        });\n    };\n    console.log(\"activeInputIndex\", activeInputIndex);\n    const handleKeyDown = (e, index)=>{\n        const { key } = e;\n        currentInputIndex = index;\n        if (key === \"Backspace\") setActiveInputIndex(currentInputIndex - 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setTimer((prevTime)=>prevTime === 0 ? 60 : prevTime - 1);\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"authForm text-center md:grid grid-cols-7 gap-8 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_testimonial__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right max-sm:flex max-sm:flex-col max-sm:justify-between formInput col-span-4 px-5 md:w-6/12 md:mx-auto md:my-auto \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"max-sm:mt-12 form_header max-sm:text-left text-2xl md:font-bold text-greyDark \",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-sm:mt-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            action: \"\",\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-pColor my-1\",\n                                    children: \"Enter the verification number sent to\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"user_phone flex justify-between items-center\",\n                                    children: [\n                                        editNumber ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            placeholder: \"\",\n                                            name: \"phoneNumber\",\n                                            value: formData.phoneNumber,\n                                            // onChange={handleOnChange}\n                                            className: \"w-full text-center focus:outline-none pl-6\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 17\n                                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-center w-full\",\n                                            children: (_formData = formData) === null || _formData === void 0 ? void 0 : _formData.phoneNumber\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-green cursor-pointer capitalize\",\n                                            onClick: ()=>setEditNumber(!editNumber),\n                                            children: editNumber ? \"done\" : \"edit\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-between items-center\",\n                                            children: verifyCode.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    ref: index === activeInputIndex ? inputRef : null,\n                                                    className: \"w-[66px] h-[48px] border rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-normalGrey focus:border-green focus:text-gray-700 text-gray-400 transition\",\n                                                    type: \"text\",\n                                                    name: \"FACode\",\n                                                    value: verifyCode[index],\n                                                    maxLength: 1,\n                                                    onKeyDown: (e)=>handleKeyDown(e, index),\n                                                    onChange: (e)=>handleOnChange(e),\n                                                    required: true\n                                                }, index, false, {\n                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 19\n                                                }, undefined))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"resendCount\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-right\",\n                                                children: [\n                                                    timer,\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: \"s\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                                        lineNumber: 119,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                                lineNumber: 117,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"flex flex-col\",\n                                    children: [\n                                        \"Didn’t get the OTP?\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-green ml-1\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"\",\n                                                children: \"Resend OTP\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                                lineNumber: 127,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 126,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"md:mb-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"w-full h-[48px] bg-green  font-bold py-2 px-4 rounded\",\n                                        children: \"Verify OTP\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                        lineNumber: 131,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VerifyForm, \"aCsei+wM3viKGUi9I8ySHJ9XsVU=\");\n_c = VerifyForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VerifyForm);\nvar _c;\n$RefreshReg$(_c, \"VerifyForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S3JCLFVBQVVYLG1CQUFtQkUsV0FBVztvREFFN0NnQixXQUFVO29EQUNWTyxNQUFLO29EQUNMRSxNQUFLO29EQUNMdEIsT0FBT3JCLFVBQVUsQ0FBQzJCLE1BQU07b0RBQ3hCc0IsV0FBVztvREFDWEMsV0FBVyxDQUFDdEMsSUFBTWMsY0FBY2QsR0FBR2U7b0RBQ25Dd0IsVUFBVSxDQUFDdkMsSUFBTU8sZUFBZVA7b0RBQ2hDd0MsUUFBUTttREFSSHpCOzs7Ozs7Ozs7O3NEQWFYLDhEQUFDTTs0Q0FBSUMsV0FBVTtzREFDYiw0RUFBQ0s7Z0RBQUdMLFdBQVU7O29EQUNYNUI7a0VBQ0QsOERBQUMrQztrRUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBS1osOERBQUNDO29DQUFHcEIsV0FBVTs7d0NBQWdCO3NEQUU1Qiw4REFBQ21COzRDQUFLbkIsV0FBVTtzREFDZCw0RUFBQzVDLGtEQUFJQTtnREFBQ2lFLE1BQU07MERBQUk7Ozs7Ozs7Ozs7O3dDQUNWOzs7Ozs7OzhDQUVWLDhEQUFDdEI7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNzQjt3Q0FBT3RCLFdBQVU7a0RBQXdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3hGO0dBM0hNdEM7S0FBQUE7QUE2SE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL3ZlcmlmeS9pbmRleC50c3g/YmE2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBob25lSW5wdXQgZnJvbSBcInJlYWN0LXBob25lLWlucHV0LTJcIjtcbmltcG9ydCBcInJlYWN0LXBob25lLWlucHV0LTIvbGliL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFRlc3RpbW9uaWFsIGZyb20gXCIuLi90ZXN0aW1vbmlhbFwiO1xuXG5pbnRlcmZhY2UgQXV0aEZvcm1Qcm9wIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbG9naW4/OiBib29sZWFuO1xufVxuaW50ZXJmYWNlIEZvcm1EYXRhIHtcbiAgcGhvbmVOdW1iZXI/OiBzdHJpbmc7XG4gIEZBQ29kZTogYW55O1xufVxubGV0IGN1cnJlbnRJbnB1dEluZGV4OiBudW1iZXI7XG5jb25zdCBWZXJpZnlGb3JtOiBSZWFjdC5GQzxBdXRoRm9ybVByb3A+ID0gKHsgdGl0bGUsIGxvZ2luIH0pID0+IHtcbiAgY29uc3QgW3ZlcmlmeUNvZGUsIHNldFZlcmlmeUNvZGVdID0gdXNlU3RhdGU8c3RyaW5nW10+KG5ldyBBcnJheSg1KS5maWxsKFwiXCIpKTtcbiAgY29uc3QgW2VkaXROdW1iZXIsIHNldEVkaXROdW1iZXJdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlPG51bWJlcj4oNjApO1xuXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGU8Rm9ybURhdGE+KHtcbiAgICBGQUNvZGU6IHZlcmlmeUNvZGUuam9pbihcIlwiKSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4gIH07XG5cbiAgY29uc3QgW2FjdGl2ZUlucHV0SW5kZXgsIHNldEFjdGl2ZUlucHV0SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChldmVudDogYW55KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IG5ld1ZhbCA9IFsuLi52ZXJpZnlDb2RlXTtcbiAgICBuZXdWYWxbY3VycmVudElucHV0SW5kZXhdID0gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmxlbmd0aCAtIDEpO1xuICAgIGlmICghdmFsdWUpIHNldEFjdGl2ZUlucHV0SW5kZXgoY3VycmVudElucHV0SW5kZXggLSAxKTtcbiAgICBlbHNlIHNldEFjdGl2ZUlucHV0SW5kZXgoY3VycmVudElucHV0SW5kZXggKyAxKTtcbiAgICBzZXRWZXJpZnlDb2RlKG5ld1ZhbCk7XG4gICAgc2V0Rm9ybURhdGEoeyBGQUNvZGU6IG5ld1ZhbC5qb2luKFwiXCIpIH0pO1xuICB9O1xuICBjb25zb2xlLmxvZyhcImFjdGl2ZUlucHV0SW5kZXhcIiwgYWN0aXZlSW5wdXRJbmRleCk7XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChcbiAgICBlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LFxuICAgIGluZGV4OiBudW1iZXJcbiAgKSA9PiB7XG4gICAgY29uc3QgeyBrZXkgfSA9IGU7XG4gICAgY3VycmVudElucHV0SW5kZXggPSBpbmRleDtcbiAgICBpZiAoa2V5ID09PSBcIkJhY2tzcGFjZVwiKSBzZXRBY3RpdmVJbnB1dEluZGV4KGN1cnJlbnRJbnB1dEluZGV4IC0gMSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFRpbWVyKChwcmV2VGltZSkgPT4gKHByZXZUaW1lID09PSAwID8gNjAgOiBwcmV2VGltZSAtIDEpKTtcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aEZvcm0gdGV4dC1jZW50ZXIgbWQ6Z3JpZCBncmlkLWNvbHMtNyBnYXAtOCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxUZXN0aW1vbmlhbCAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IG1heC1zbTpmbGV4IG1heC1zbTpmbGV4LWNvbCBtYXgtc206anVzdGlmeS1iZXR3ZWVuIGZvcm1JbnB1dCBjb2wtc3Bhbi00IHB4LTUgbWQ6dy02LzEyIG1kOm14LWF1dG8gbWQ6bXktYXV0byBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1heC1zbTptdC0xMiBmb3JtX2hlYWRlciBtYXgtc206dGV4dC1sZWZ0IHRleHQtMnhsIG1kOmZvbnQtYm9sZCB0ZXh0LWdyZXlEYXJrIFwiPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1zbTptdC0xMFwiPlxuICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtcENvbG9yIG15LTFcIj5cbiAgICAgICAgICAgICAgRW50ZXIgdGhlIHZlcmlmaWNhdGlvbiBudW1iZXIgc2VudCB0b1xuICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyX3Bob25lIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICB7ZWRpdE51bWJlciA/IChcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZU51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGhvbmVOdW1iZXJ9XG4gICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgZm9jdXM6b3V0bGluZS1ub25lIHBsLTZcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHctZnVsbFwiPntmb3JtRGF0YT8ucGhvbmVOdW1iZXJ9PC9oMz5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmVlbiBjdXJzb3ItcG9pbnRlciBjYXBpdGFsaXplXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0TnVtYmVyKCFlZGl0TnVtYmVyKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtlZGl0TnVtYmVyID8gXCJkb25lXCIgOiBcImVkaXRcIn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAge3ZlcmlmeUNvZGUubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlZj17aW5kZXggPT09IGFjdGl2ZUlucHV0SW5kZXggPyBpbnB1dFJlZiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzY2cHhdIGgtWzQ4cHhdIGJvcmRlciByb3VuZGVkIGJnLXRyYW5zcGFyZW50IG91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlciBmb250LXNlbWlib2xkIHRleHQteGwgc3Bpbi1idXR0b24tbm9uZSBib3JkZXItbm9ybWFsR3JleSBmb2N1czpib3JkZXItZ3JlZW4gZm9jdXM6dGV4dC1ncmF5LTcwMCB0ZXh0LWdyYXktNDAwIHRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJGQUNvZGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmVyaWZ5Q29kZVtpbmRleF19XG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gaGFuZGxlS2V5RG93bihlLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlT25DaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc2VuZENvdW50XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIHt0aW1lcn1cbiAgICAgICAgICAgICAgICAgIDxzcGFuPnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgRGlkbuKAmXQgZ2V0IHRoZSBPVFA/XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4gbWwtMVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiXCJ9PlJlc2VuZCBPVFA8L0xpbms+XG4gICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDptYi00XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGgtWzQ4cHhdIGJnLWdyZWVuICBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICBWZXJpZnkgT1RQXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVyaWZ5Rm9ybTtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJUZXN0aW1vbmlhbCIsImN1cnJlbnRJbnB1dEluZGV4IiwiVmVyaWZ5Rm9ybSIsInRpdGxlIiwibG9naW4iLCJmb3JtRGF0YSIsInZlcmlmeUNvZGUiLCJzZXRWZXJpZnlDb2RlIiwiQXJyYXkiLCJmaWxsIiwiZWRpdE51bWJlciIsInNldEVkaXROdW1iZXIiLCJ0aW1lciIsInNldFRpbWVyIiwic2V0Rm9ybURhdGEiLCJGQUNvZGUiLCJqb2luIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImFjdGl2ZUlucHV0SW5kZXgiLCJzZXRBY3RpdmVJbnB1dEluZGV4IiwiaW5wdXRSZWYiLCJoYW5kbGVPbkNoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJuZXdWYWwiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJoYW5kbGVLZXlEb3duIiwiaW5kZXgiLCJrZXkiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiYWN0aW9uIiwib25TdWJtaXQiLCJoMyIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibmFtZSIsInBob25lTnVtYmVyIiwib25DbGljayIsIm1hcCIsIl8iLCJyZWYiLCJtYXhMZW5ndGgiLCJvbktleURvd24iLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwic3BhbiIsImg0IiwiaHJlZiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/auth/verify/index.tsx\n"));

/***/ })

});