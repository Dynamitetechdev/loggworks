"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/faq",{

/***/ "./pages/faq/index.tsx":
/*!*****************************!*\
  !*** ./pages/faq/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_general_sideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/general/sideBar */ \"./components/general/sideBar.tsx\");\n/* harmony import */ var _components_postJobComponents_navHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/postJobComponents/navHead */ \"./components/postJobComponents/navHead.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/ChevronDownIcon */ \"./node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FAQ = ()=>{\n    _s();\n    const [activeStep, setActiveStep] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const faq = [\n        {\n            id: 1,\n            title: \"What is Loggworks?\",\n            content: \"Loggworks is a platform connecting Home service consumers (Homeowners, Tenants and Property managers) to Service Professionals.\"\n        },\n        {\n            id: 2,\n            title: \"How does Loggworks work?\",\n            content: \"Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking about is sashimi), but actually the term sushi just refers to the type of vinegar rice used in the traditional Japanese cuisine. The great thing about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed.\"\n        },\n        {\n            id: 3,\n            title: \"Why should I use Loggworks?\",\n            content: \"Loggworks protects both payment and privacy. Your funds are held in our escrow infastructure powered by MangoPay when you use our payment protection. When the job is finished to your liking, you can release payments within three working days by clicking the complete button in your booking section. With our privacy protection, you can communicate in the app or share your contact information. Loggworks does not guarantee any jobs booked outside of the platform.\"\n        },\n        {\n            id: 4,\n            title: \"Do you vet service professionals who sign-up to loggworks?\",\n            content: \"Do you vet service providers who sign up to Loggworks? Service providers who sign up to Loggworks are vetted through a scheme called the Self- Employed Quality Control Scheme(SEQCS). Loggworks SEQCS is a scheme that involves the use of information service companies, trade standard organisations, and relevant regulatory bodies in the service industry to vet service professionals who are self - employed individuals on our platform.These organisations work with other technologies in order to minimise the risk posed by rogue service providers to property owners, property managers, and tenants.This scheme ensures that these self - employed individuals or businesses have the right licences and certifications to operate in their respective fields of service before they can use our platform. This scheme, among other things, prevents fraud, helps in identifying quality service providers, and ensures that self - employed individuals or businesses are recognised for their quality work.\"\n        },\n        {\n            id: 5,\n            title: \"How can you guarantee the quality of a service profession's work?\",\n            content: \"The service providers on Loggworks operate as independent businesses and do not work for Loggworks, so the quality of their work cannot be guaranteed. We can only certify that every service professionals is vetted through our self-employed quality control scheme (SEQCS) and agrees to abide by our code of conduct (Href) before they are allowed on our app or website. It is advisable to read the reviews, comments, and ratings left by previous customers about the service provider's quality of work, reliability, and value for money. By doing so, you will be able to make an informed decision.\"\n        },\n        {\n            id: 5,\n            title: \"Do you disable service professionals' accounts?\",\n            content: \"Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking about is sashimi), but actually the term sushi just refers to the type of vinegar rice used in the traditional Japanese cuisine. The great thing about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed.\"\n        },\n        {\n            id: 6,\n            title: \"How do I choose the most reliable service professional?\",\n            content: \"Our search feature is equipped with options for better decision-making when choosing a service provider. The most reliable service provider is selected based on the following criteria: ratings, level, reviews, and how long they have been a member of Loggworks. /n  Recommendations are given based on our transparent monitoring system and the KPIs used in rating the service providers. These KPIs are points that are earned by the service providers to level up, the unbiased reviews, and the ratings that were given by the consumers. With these KPIs, you are now in a position to select the most reliable service provider for the job.\"\n        },\n        {\n            id: 7,\n            title: \"How many service professionals can I contact before I book one?\",\n            content: \"With loggworks you can contact as many service professionals as you want, depending on your preferences and needs.\"\n        },\n        {\n            id: 8,\n            title: \"Can I make changes or update the service I have booked??\",\n            content: \"Bookings can only be updated or changed 24 hours before the appointment date with the service provider. To cancel a booking, click on booking> upcoming, then reschedule or cancel\"\n        },\n        {\n            id: 9,\n            title: \"Should I rate the service professional after the job is completed?\",\n            content: \"Yes, it is important that you leave a rating after the job has been completed. This helps us recommend reliable service providers to existing and prospective customers. Additionally, it helps other consumers make informed decisions while searching for a reliable search provider. To leave a rating, click on booking > past booking, then click rate the job of the service provider. /n NOTE: Once you click on completed, a prompt page pops up for ratings, reviews, and a survey.It is important that you complete it so as to serve you better.\"\n        },\n        {\n            id: 10,\n            title: \"How do I share a service professional profile that I like with others?\",\n            content: \"You can share the profile of your preferred service providers with anyone by viewing their profile, then clicking the share button to share on any platform.\"\n        },\n        {\n            id: 11,\n            title: \"Is my payment protected?\",\n            content: \"Yes, payments are protected via the MangoPay escrow infrastructure.\"\n        },\n        {\n            id: 12,\n            title: \"What if there’s a dispute?\",\n            content: \"Dispute resolution is completed after 14 days of investigation.\"\n        },\n        {\n            id: 13,\n            title: \"What if I have a dispute with a service provider after completing a job?\",\n            content: \"We would advise appropriately upon the completion of our investigation.\"\n        }\n    ];\n    const [openDetail, setOpenDetail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Array(faq.length).fill(false));\n    const handleClick = (index)=>{\n        const newArr = [\n            ...openDetail\n        ];\n        newArr[index] = !newArr[index];\n        setOpenDetail(newArr);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[221px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_general_sideBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/faq/index.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/faq/index.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow overflow-x-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"post-job bg-white relative \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_postJobComponents_navHead__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            activeStep: activeStep,\n                            setActiveStep: setActiveStep,\n                            title: \"Frequently Asked Questions\",\n                            type: \"notab\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/faq/index.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-6 md:px-9 pt-10 md:flex text-pTagGrey \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:w-6/12 max-w-[650px] mx-auto\",\n                                children: faq.map((x, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex w-full items-center py-4 justify-between border-b border-grey md:px-5 cursor-pointer max-sm:text-[14px]\",\n                                                onClick: ()=>handleClick(index),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"font-bold\",\n                                                        children: x.title\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/faq/index.tsx\",\n                                                        lineNumber: 126,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"toggle ml-5\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                            width: 20,\n                                                            height: 20\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/faq/index.tsx\",\n                                                            lineNumber: 129,\n                                                            columnNumber: 23\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/faq/index.tsx\",\n                                                        lineNumber: 128,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/faq/index.tsx\",\n                                                lineNumber: 122,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            openDetail[index] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-pTagGrey md:px-5 py-3 pb-8 \",\n                                                children: x.content\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/faq/index.tsx\",\n                                                lineNumber: 134,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/faq/index.tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/faq/index.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/faq/index.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/faq/index.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/faq/index.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/pages/faq/index.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FAQ, \"s2q86xXzf8ocMRErIz87XRd2mDY=\");\n_c = FAQ;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FAQ);\nvar _c;\n$RefreshReg$(_c, \"FAQ\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mYXEvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDdUQ7QUFFVTtBQUNoQztBQUM2QjtBQUU5RCxNQUFNSSxNQUFNOztJQUNWLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNSyxNQUFNO1FBQ1Y7WUFDRUMsSUFBSTtZQUNKQyxPQUFPO1lBQ1BDLFNBQ0U7UUFDSjtRQUNBO1lBQ0VGLElBQUk7WUFDSkMsT0FBTztZQUNQQyxTQUNFO1FBQ0o7UUFDQTtZQUNFRixJQUFJO1lBQ0pDLE9BQU87WUFDUEMsU0FDRTtRQUNKO1FBQ0E7WUFDRUYsSUFBSTtZQUNKQyxPQUFPO1lBQ1BDLFNBQ0U7UUFDSjtRQUNBO1lBQ0VGLElBQUk7WUFDSkMsT0FBTztZQUNQQyxTQUNFO1FBQ0o7UUFDQTtZQUNFRixJQUFJO1lBQ0pDLE9BQU87WUFDUEMsU0FDRTtRQUNKO1FBQ0E7WUFDRUYsSUFBSTtZQUNKQyxPQUFPO1lBQ1BDLFNBQ0U7UUFDSjtRQUNBO1lBQ0VGLElBQUk7WUFDSkMsT0FBTztZQUNQQyxTQUNFO1FBQ0o7UUFDQTtZQUNFRixJQUFJO1lBQ0pDLE9BQU87WUFDUEMsU0FDRTtRQUNKO1FBQ0E7WUFDRUYsSUFBSTtZQUNKQyxPQUFPO1lBQ1BDLFNBQ0U7UUFDSjtRQUNBO1lBQ0VGLElBQUk7WUFDSkMsT0FBTztZQUNQQyxTQUNFO1FBQ0o7UUFDQTtZQUNFRixJQUFJO1lBQ0pDLE9BQU87WUFDUEMsU0FDRTtRQUNKO1FBQ0E7WUFDRUYsSUFBSTtZQUNKQyxPQUFPO1lBQ1BDLFNBQ0U7UUFDSjtRQUNBO1lBQ0VGLElBQUk7WUFDSkMsT0FBTztZQUNQQyxTQUNFO1FBQ0o7S0FFRDtJQUNELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQ1csTUFBTU4sSUFBSU8sTUFBTSxFQUFFQyxJQUFJLENBQUM7SUFDcEUsTUFBTUMsY0FBYyxDQUFDQztRQUNuQixNQUFNQyxTQUFTO2VBQUlQO1NBQVc7UUFDOUJPLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHLENBQUNDLE1BQU0sQ0FBQ0QsTUFBTTtRQUM5QkwsY0FBY007SUFDaEI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDcEIsbUVBQU9BOzs7Ozs7Ozs7OzBCQUVWLDhEQUFDbUI7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ25CLDZFQUFPQTs0QkFDTkksWUFBWUE7NEJBQ1pDLGVBQWVBOzRCQUNmRyxPQUFNOzRCQUNOWSxNQUFLOzs7Ozs7c0NBRVAsOERBQUNGOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWmIsSUFBSWUsR0FBRyxDQUFDLENBQUNDLEdBQUdOLHNCQUNYLDhEQUFDRTt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNEO2dEQUNDQyxXQUFVO2dEQUNWSSxTQUFTLElBQU1SLFlBQVlDOztrRUFFM0IsOERBQUNRO3dEQUFFTCxXQUFVO2tFQUFhRyxFQUFFZCxLQUFLOzs7Ozs7a0VBRWpDLDhEQUFDVTt3REFBSUMsV0FBVTtrRUFDYiw0RUFBQ2pCLHVGQUFlQTs0REFBQ3VCLE9BQU87NERBQUlDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OzRDQUl2Q2hCLFVBQVUsQ0FBQ00sTUFBTSxrQkFDaEIsOERBQUNRO2dEQUFFTCxXQUFVOzBEQUNWRyxFQUFFYixPQUFPOzs7Ozs7O3VDQWRPTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QnZDO0dBMUlNYjtLQUFBQTtBQTRJTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mYXEvaW5kZXgudHN4Pzk2NzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsL3NpZGVCYXJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbC9uYXYvaGVhZGVyXCI7XG5pbXBvcnQgTmF2SGVhZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0Sm9iQ29tcG9uZW50cy9uYXZIZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hldnJvbkRvd25JY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZVwiO1xuXG5jb25zdCBGQVEgPSAoKSA9PiB7XG4gIGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGZhcSA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHRpdGxlOiBcIldoYXQgaXMgTG9nZ3dvcmtzP1wiLFxuICAgICAgY29udGVudDpcbiAgICAgICAgXCJMb2dnd29ya3MgaXMgYSBwbGF0Zm9ybSBjb25uZWN0aW5nIEhvbWUgc2VydmljZSBjb25zdW1lcnMgKEhvbWVvd25lcnMsIFRlbmFudHMgYW5kIFByb3BlcnR5IG1hbmFnZXJzKSB0byBTZXJ2aWNlIFByb2Zlc3Npb25hbHMuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIHRpdGxlOiBcIkhvdyBkb2VzIExvZ2d3b3JrcyB3b3JrP1wiLFxuICAgICAgY29udGVudDpcbiAgICAgICAgXCJTdXNoaSEhIE1vc3QgV2VzdGVybmVycyBpbW1lZGlhdGVseSBoZWFyIHRoYXQgd29yZCBhbmQgdGhpbmsgb2YgcmF3IGZpc2ggKHdoYXQgeW91IGFyZSByZWFsbHkgdGFsa2luZyBhYm91dCBpcyBzYXNoaW1pKSwgYnV0IGFjdHVhbGx5IHRoZSB0ZXJtIHN1c2hpIGp1c3QgcmVmZXJzIHRvIHRoZSB0eXBlIG9mIHZpbmVnYXIgcmljZSB1c2VkIGluIHRoZSB0cmFkaXRpb25hbCBKYXBhbmVzZSBjdWlzaW5lLiBUaGUgZ3JlYXQgdGhpbmcgYWJvdXQgc3VzaGkgaXMgdGhhdCBJIGNhbiBlYXNpbHkgZmlsbCB1cCBhbmQgc2F0aWF0ZSBteSBodW5nZXIsIGJ1dCBJIG5ldmVyIGZlZWwgb3ZlcnN0dWZmZWQuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIHRpdGxlOiBcIldoeSBzaG91bGQgSSB1c2UgTG9nZ3dvcmtzP1wiLFxuICAgICAgY29udGVudDpcbiAgICAgICAgXCJMb2dnd29ya3MgcHJvdGVjdHMgYm90aCBwYXltZW50IGFuZCBwcml2YWN5LiBZb3VyIGZ1bmRzIGFyZSBoZWxkIGluIG91ciBlc2Nyb3cgaW5mYXN0cnVjdHVyZSBwb3dlcmVkIGJ5IE1hbmdvUGF5IHdoZW4geW91IHVzZSBvdXIgcGF5bWVudCBwcm90ZWN0aW9uLiBXaGVuIHRoZSBqb2IgaXMgZmluaXNoZWQgdG8geW91ciBsaWtpbmcsIHlvdSBjYW4gcmVsZWFzZSBwYXltZW50cyB3aXRoaW4gdGhyZWUgd29ya2luZyBkYXlzIGJ5IGNsaWNraW5nIHRoZSBjb21wbGV0ZSBidXR0b24gaW4geW91ciBib29raW5nIHNlY3Rpb24uIFdpdGggb3VyIHByaXZhY3kgcHJvdGVjdGlvbiwgeW91IGNhbiBjb21tdW5pY2F0ZSBpbiB0aGUgYXBwIG9yIHNoYXJlIHlvdXIgY29udGFjdCBpbmZvcm1hdGlvbi4gTG9nZ3dvcmtzIGRvZXMgbm90IGd1YXJhbnRlZSBhbnkgam9icyBib29rZWQgb3V0c2lkZSBvZiB0aGUgcGxhdGZvcm0uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIHRpdGxlOiBcIkRvIHlvdSB2ZXQgc2VydmljZSBwcm9mZXNzaW9uYWxzIHdobyBzaWduLXVwIHRvIGxvZ2d3b3Jrcz9cIixcbiAgICAgIGNvbnRlbnQ6XG4gICAgICAgIFwiRG8geW91IHZldCBzZXJ2aWNlIHByb3ZpZGVycyB3aG8gc2lnbiB1cCB0byBMb2dnd29ya3M/IFNlcnZpY2UgcHJvdmlkZXJzIHdobyBzaWduIHVwIHRvIExvZ2d3b3JrcyBhcmUgdmV0dGVkIHRocm91Z2ggYSBzY2hlbWUgY2FsbGVkIHRoZSBTZWxmLSBFbXBsb3llZCBRdWFsaXR5IENvbnRyb2wgU2NoZW1lKFNFUUNTKS4gTG9nZ3dvcmtzIFNFUUNTIGlzIGEgc2NoZW1lIHRoYXQgaW52b2x2ZXMgdGhlIHVzZSBvZiBpbmZvcm1hdGlvbiBzZXJ2aWNlIGNvbXBhbmllcywgdHJhZGUgc3RhbmRhcmQgb3JnYW5pc2F0aW9ucywgYW5kIHJlbGV2YW50IHJlZ3VsYXRvcnkgYm9kaWVzIGluIHRoZSBzZXJ2aWNlIGluZHVzdHJ5IHRvIHZldCBzZXJ2aWNlIHByb2Zlc3Npb25hbHMgd2hvIGFyZSBzZWxmIC0gZW1wbG95ZWQgaW5kaXZpZHVhbHMgb24gb3VyIHBsYXRmb3JtLlRoZXNlIG9yZ2FuaXNhdGlvbnMgd29yayB3aXRoIG90aGVyIHRlY2hub2xvZ2llcyBpbiBvcmRlciB0byBtaW5pbWlzZSB0aGUgcmlzayBwb3NlZCBieSByb2d1ZSBzZXJ2aWNlIHByb3ZpZGVycyB0byBwcm9wZXJ0eSBvd25lcnMsIHByb3BlcnR5IG1hbmFnZXJzLCBhbmQgdGVuYW50cy5UaGlzIHNjaGVtZSBlbnN1cmVzIHRoYXQgdGhlc2Ugc2VsZiAtIGVtcGxveWVkIGluZGl2aWR1YWxzIG9yIGJ1c2luZXNzZXMgaGF2ZSB0aGUgcmlnaHQgbGljZW5jZXMgYW5kIGNlcnRpZmljYXRpb25zIHRvIG9wZXJhdGUgaW4gdGhlaXIgcmVzcGVjdGl2ZSBmaWVsZHMgb2Ygc2VydmljZSBiZWZvcmUgdGhleSBjYW4gdXNlIG91ciBwbGF0Zm9ybS4gVGhpcyBzY2hlbWUsIGFtb25nIG90aGVyIHRoaW5ncywgcHJldmVudHMgZnJhdWQsIGhlbHBzIGluIGlkZW50aWZ5aW5nIHF1YWxpdHkgc2VydmljZSBwcm92aWRlcnMsIGFuZCBlbnN1cmVzIHRoYXQgc2VsZiAtIGVtcGxveWVkIGluZGl2aWR1YWxzIG9yIGJ1c2luZXNzZXMgYXJlIHJlY29nbmlzZWQgZm9yIHRoZWlyIHF1YWxpdHkgd29yay5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA1LFxuICAgICAgdGl0bGU6IFwiSG93IGNhbiB5b3UgZ3VhcmFudGVlIHRoZSBxdWFsaXR5IG9mIGEgc2VydmljZSBwcm9mZXNzaW9uJ3Mgd29yaz9cIixcbiAgICAgIGNvbnRlbnQ6XG4gICAgICAgIFwiVGhlIHNlcnZpY2UgcHJvdmlkZXJzIG9uIExvZ2d3b3JrcyBvcGVyYXRlIGFzIGluZGVwZW5kZW50IGJ1c2luZXNzZXMgYW5kIGRvIG5vdCB3b3JrIGZvciBMb2dnd29ya3MsIHNvIHRoZSBxdWFsaXR5IG9mIHRoZWlyIHdvcmsgY2Fubm90IGJlIGd1YXJhbnRlZWQuIFdlIGNhbiBvbmx5IGNlcnRpZnkgdGhhdCBldmVyeSBzZXJ2aWNlIHByb2Zlc3Npb25hbHMgaXMgdmV0dGVkIHRocm91Z2ggb3VyIHNlbGYtZW1wbG95ZWQgcXVhbGl0eSBjb250cm9sIHNjaGVtZSAoU0VRQ1MpIGFuZCBhZ3JlZXMgdG8gYWJpZGUgYnkgb3VyIGNvZGUgb2YgY29uZHVjdCAoSHJlZikgYmVmb3JlIHRoZXkgYXJlIGFsbG93ZWQgb24gb3VyIGFwcCBvciB3ZWJzaXRlLiBJdCBpcyBhZHZpc2FibGUgdG8gcmVhZCB0aGUgcmV2aWV3cywgY29tbWVudHMsIGFuZCByYXRpbmdzIGxlZnQgYnkgcHJldmlvdXMgY3VzdG9tZXJzIGFib3V0IHRoZSBzZXJ2aWNlIHByb3ZpZGVyJ3MgcXVhbGl0eSBvZiB3b3JrLCByZWxpYWJpbGl0eSwgYW5kIHZhbHVlIGZvciBtb25leS4gQnkgZG9pbmcgc28sIHlvdSB3aWxsIGJlIGFibGUgdG8gbWFrZSBhbiBpbmZvcm1lZCBkZWNpc2lvbi5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA1LFxuICAgICAgdGl0bGU6IFwiRG8geW91IGRpc2FibGUgc2VydmljZSBwcm9mZXNzaW9uYWxzJyBhY2NvdW50cz9cIixcbiAgICAgIGNvbnRlbnQ6XG4gICAgICAgIFwiU3VzaGkhISBNb3N0IFdlc3Rlcm5lcnMgaW1tZWRpYXRlbHkgaGVhciB0aGF0IHdvcmQgYW5kIHRoaW5rIG9mIHJhdyBmaXNoICh3aGF0IHlvdSBhcmUgcmVhbGx5IHRhbGtpbmcgYWJvdXQgaXMgc2FzaGltaSksIGJ1dCBhY3R1YWxseSB0aGUgdGVybSBzdXNoaSBqdXN0IHJlZmVycyB0byB0aGUgdHlwZSBvZiB2aW5lZ2FyIHJpY2UgdXNlZCBpbiB0aGUgdHJhZGl0aW9uYWwgSmFwYW5lc2UgY3Vpc2luZS4gVGhlIGdyZWF0IHRoaW5nIGFib3V0IHN1c2hpIGlzIHRoYXQgSSBjYW4gZWFzaWx5IGZpbGwgdXAgYW5kIHNhdGlhdGUgbXkgaHVuZ2VyLCBidXQgSSBuZXZlciBmZWVsIG92ZXJzdHVmZmVkLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDYsXG4gICAgICB0aXRsZTogXCJIb3cgZG8gSSBjaG9vc2UgdGhlIG1vc3QgcmVsaWFibGUgc2VydmljZSBwcm9mZXNzaW9uYWw/XCIsXG4gICAgICBjb250ZW50OlxuICAgICAgICBcIk91ciBzZWFyY2ggZmVhdHVyZSBpcyBlcXVpcHBlZCB3aXRoIG9wdGlvbnMgZm9yIGJldHRlciBkZWNpc2lvbi1tYWtpbmcgd2hlbiBjaG9vc2luZyBhIHNlcnZpY2UgcHJvdmlkZXIuIFRoZSBtb3N0IHJlbGlhYmxlIHNlcnZpY2UgcHJvdmlkZXIgaXMgc2VsZWN0ZWQgYmFzZWQgb24gdGhlIGZvbGxvd2luZyBjcml0ZXJpYTogcmF0aW5ncywgbGV2ZWwsIHJldmlld3MsIGFuZCBob3cgbG9uZyB0aGV5IGhhdmUgYmVlbiBhIG1lbWJlciBvZiBMb2dnd29ya3MuIC9uICBSZWNvbW1lbmRhdGlvbnMgYXJlIGdpdmVuIGJhc2VkIG9uIG91ciB0cmFuc3BhcmVudCBtb25pdG9yaW5nIHN5c3RlbSBhbmQgdGhlIEtQSXMgdXNlZCBpbiByYXRpbmcgdGhlIHNlcnZpY2UgcHJvdmlkZXJzLiBUaGVzZSBLUElzIGFyZSBwb2ludHMgdGhhdCBhcmUgZWFybmVkIGJ5IHRoZSBzZXJ2aWNlIHByb3ZpZGVycyB0byBsZXZlbCB1cCwgdGhlIHVuYmlhc2VkIHJldmlld3MsIGFuZCB0aGUgcmF0aW5ncyB0aGF0IHdlcmUgZ2l2ZW4gYnkgdGhlIGNvbnN1bWVycy4gV2l0aCB0aGVzZSBLUElzLCB5b3UgYXJlIG5vdyBpbiBhIHBvc2l0aW9uIHRvIHNlbGVjdCB0aGUgbW9zdCByZWxpYWJsZSBzZXJ2aWNlIHByb3ZpZGVyIGZvciB0aGUgam9iLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDcsXG4gICAgICB0aXRsZTogXCJIb3cgbWFueSBzZXJ2aWNlIHByb2Zlc3Npb25hbHMgY2FuIEkgY29udGFjdCBiZWZvcmUgSSBib29rIG9uZT9cIixcbiAgICAgIGNvbnRlbnQ6XG4gICAgICAgIFwiV2l0aCBsb2dnd29ya3MgeW91IGNhbiBjb250YWN0IGFzIG1hbnkgc2VydmljZSBwcm9mZXNzaW9uYWxzIGFzIHlvdSB3YW50LCBkZXBlbmRpbmcgb24geW91ciBwcmVmZXJlbmNlcyBhbmQgbmVlZHMuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogOCxcbiAgICAgIHRpdGxlOiBcIkNhbiBJIG1ha2UgY2hhbmdlcyBvciB1cGRhdGUgdGhlIHNlcnZpY2UgSSBoYXZlIGJvb2tlZD8/XCIsXG4gICAgICBjb250ZW50OlxuICAgICAgICBcIkJvb2tpbmdzIGNhbiBvbmx5IGJlIHVwZGF0ZWQgb3IgY2hhbmdlZCAyNCBob3VycyBiZWZvcmUgdGhlIGFwcG9pbnRtZW50IGRhdGUgd2l0aCB0aGUgc2VydmljZSBwcm92aWRlci4gVG8gY2FuY2VsIGEgYm9va2luZywgY2xpY2sgb24gYm9va2luZz4gdXBjb21pbmcsIHRoZW4gcmVzY2hlZHVsZSBvciBjYW5jZWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA5LFxuICAgICAgdGl0bGU6IFwiU2hvdWxkIEkgcmF0ZSB0aGUgc2VydmljZSBwcm9mZXNzaW9uYWwgYWZ0ZXIgdGhlIGpvYiBpcyBjb21wbGV0ZWQ/XCIsXG4gICAgICBjb250ZW50OlxuICAgICAgICBcIlllcywgaXQgaXMgaW1wb3J0YW50IHRoYXQgeW91IGxlYXZlIGEgcmF0aW5nIGFmdGVyIHRoZSBqb2IgaGFzIGJlZW4gY29tcGxldGVkLiBUaGlzIGhlbHBzIHVzIHJlY29tbWVuZCByZWxpYWJsZSBzZXJ2aWNlIHByb3ZpZGVycyB0byBleGlzdGluZyBhbmQgcHJvc3BlY3RpdmUgY3VzdG9tZXJzLiBBZGRpdGlvbmFsbHksIGl0IGhlbHBzIG90aGVyIGNvbnN1bWVycyBtYWtlIGluZm9ybWVkIGRlY2lzaW9ucyB3aGlsZSBzZWFyY2hpbmcgZm9yIGEgcmVsaWFibGUgc2VhcmNoIHByb3ZpZGVyLiBUbyBsZWF2ZSBhIHJhdGluZywgY2xpY2sgb24gYm9va2luZyA+IHBhc3QgYm9va2luZywgdGhlbiBjbGljayByYXRlIHRoZSBqb2Igb2YgdGhlIHNlcnZpY2UgcHJvdmlkZXIuIC9uIE5PVEU6IE9uY2UgeW91IGNsaWNrIG9uIGNvbXBsZXRlZCwgYSBwcm9tcHQgcGFnZSBwb3BzIHVwIGZvciByYXRpbmdzLCByZXZpZXdzLCBhbmQgYSBzdXJ2ZXkuSXQgaXMgaW1wb3J0YW50IHRoYXQgeW91IGNvbXBsZXRlIGl0IHNvIGFzIHRvIHNlcnZlIHlvdSBiZXR0ZXIuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTAsXG4gICAgICB0aXRsZTogXCJIb3cgZG8gSSBzaGFyZSBhIHNlcnZpY2UgcHJvZmVzc2lvbmFsIHByb2ZpbGUgdGhhdCBJIGxpa2Ugd2l0aCBvdGhlcnM/XCIsXG4gICAgICBjb250ZW50OlxuICAgICAgICBcIllvdSBjYW4gc2hhcmUgdGhlIHByb2ZpbGUgb2YgeW91ciBwcmVmZXJyZWQgc2VydmljZSBwcm92aWRlcnMgd2l0aCBhbnlvbmUgYnkgdmlld2luZyB0aGVpciBwcm9maWxlLCB0aGVuIGNsaWNraW5nIHRoZSBzaGFyZSBidXR0b24gdG8gc2hhcmUgb24gYW55IHBsYXRmb3JtLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDExLFxuICAgICAgdGl0bGU6IFwiSXMgbXkgcGF5bWVudCBwcm90ZWN0ZWQ/XCIsXG4gICAgICBjb250ZW50OlxuICAgICAgICBcIlllcywgcGF5bWVudHMgYXJlIHByb3RlY3RlZCB2aWEgdGhlIE1hbmdvUGF5IGVzY3JvdyBpbmZyYXN0cnVjdHVyZS5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxMixcbiAgICAgIHRpdGxlOiBcIldoYXQgaWYgdGhlcmXigJlzIGEgZGlzcHV0ZT9cIixcbiAgICAgIGNvbnRlbnQ6XG4gICAgICAgIFwiRGlzcHV0ZSByZXNvbHV0aW9uIGlzIGNvbXBsZXRlZCBhZnRlciAxNCBkYXlzIG9mIGludmVzdGlnYXRpb24uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTMsXG4gICAgICB0aXRsZTogXCJXaGF0IGlmIEkgaGF2ZSBhIGRpc3B1dGUgd2l0aCBhIHNlcnZpY2UgcHJvdmlkZXIgYWZ0ZXIgY29tcGxldGluZyBhIGpvYj9cIixcbiAgICAgIGNvbnRlbnQ6XG4gICAgICAgIFwiV2Ugd291bGQgYWR2aXNlIGFwcHJvcHJpYXRlbHkgdXBvbiB0aGUgY29tcGxldGlvbiBvZiBvdXIgaW52ZXN0aWdhdGlvbi5cIixcbiAgICB9LFxuXG4gIF07XG4gIGNvbnN0IFtvcGVuRGV0YWlsLCBzZXRPcGVuRGV0YWlsXSA9IHVzZVN0YXRlKEFycmF5KGZhcS5sZW5ndGgpLmZpbGwoZmFsc2UpKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG5ld0FyciA9IFsuLi5vcGVuRGV0YWlsXTtcbiAgICBuZXdBcnJbaW5kZXhdID0gIW5ld0FycltpbmRleF07XG4gICAgc2V0T3BlbkRldGFpbChuZXdBcnIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmbGV4XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzIyMXB4XVwiPlxuICAgICAgICA8U2lkZUJhciAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBvdmVyZmxvdy14LWhpZGRlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3Qtam9iIGJnLXdoaXRlIHJlbGF0aXZlIFwiPlxuICAgICAgICAgIDxOYXZIZWFkXG4gICAgICAgICAgICBhY3RpdmVTdGVwPXthY3RpdmVTdGVwfVxuICAgICAgICAgICAgc2V0QWN0aXZlU3RlcD17c2V0QWN0aXZlU3RlcH1cbiAgICAgICAgICAgIHRpdGxlPVwiRnJlcXVlbnRseSBBc2tlZCBRdWVzdGlvbnNcIlxuICAgICAgICAgICAgdHlwZT1cIm5vdGFiXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBtZDpweC05IHB0LTEwIG1kOmZsZXggdGV4dC1wVGFnR3JleSBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy02LzEyIG1heC13LVs2NTBweF0gbXgtYXV0b1wiPlxuICAgICAgICAgICAgICB7ZmFxLm1hcCgoeCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIgcHktNCBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWIgYm9yZGVyLWdyZXkgbWQ6cHgtNSBjdXJzb3ItcG9pbnRlciBtYXgtc206dGV4dC1bMTRweF1cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpbmRleCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPnt4LnRpdGxlfTwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZSBtbC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duSWNvbiB3aWR0aD17MjB9IGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHtvcGVuRGV0YWlsW2luZGV4XSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcFRhZ0dyZXkgbWQ6cHgtNSBweS0zIHBiLTggXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3guY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZBUTtcbiJdLCJuYW1lcyI6WyJTaWRlQmFyIiwiTmF2SGVhZCIsInVzZVN0YXRlIiwiQ2hldnJvbkRvd25JY29uIiwiRkFRIiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJmYXEiLCJpZCIsInRpdGxlIiwiY29udGVudCIsIm9wZW5EZXRhaWwiLCJzZXRPcGVuRGV0YWlsIiwiQXJyYXkiLCJsZW5ndGgiLCJmaWxsIiwiaGFuZGxlQ2xpY2siLCJpbmRleCIsIm5ld0FyciIsImRpdiIsImNsYXNzTmFtZSIsInR5cGUiLCJtYXAiLCJ4Iiwib25DbGljayIsInAiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/faq/index.tsx\n"));

/***/ })

});