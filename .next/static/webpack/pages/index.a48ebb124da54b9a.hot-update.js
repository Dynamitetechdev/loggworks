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

/***/ "./components/general/bannerCarousel.tsx":
/*!***********************************************!*\
  !*** ./components/general/bannerCarousel.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst BannerCarousel = ()=>{\n    _s();\n    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const slideImages = [\n        \"/assets/images/banner/01.png\",\n        \"/assets/images/banner/01.png\"\n    ];\n    const handleSlideChange = (index)=>{\n        setActiveSlide(index);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            const nextSlide = (activeSlide + 1) % slideImages.length;\n            setActiveSlide(nextSlide);\n        }, 3000); // Change slide every 2 seconds\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, [\n        activeSlide,\n        slideImages.length\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"banner md:mx-6 mx-3 my-2 md:mt-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"banner_img md:mt-5 relative flex flex-col items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative w-full max-md:h-[146px] md:h-[292px] overflow-hidden md:rounded-lg rounded-md\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"transition-transform duration-500 ease-in-out transform\",\n                        style: {\n                            transform: \"translateX(-\".concat(activeSlide * 980, \"px)\")\n                        },\n                        children: slideImages.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full max-md:h-[146px] h-[292px] absolute\",\n                                style: {\n                                    left: \"\".concat(index * 980, \"px\")\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: image,\n                                    layout: \"fill\",\n                                    objectFit: \"cover\",\n                                    objectPosition: \"center\",\n                                    alt: \"slide-\".concat(index),\n                                    className: \"object-center object-cover \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/bannerCarousel.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/bannerCarousel.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/bannerCarousel.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/bannerCarousel.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"banner_nav flex items-center my-5\",\n                    children: slideImages.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleSlideChange(index),\n                            className: \"w-2 h-2 md:w-3 md:h-3 mx-1 rounded-full \".concat(activeSlide === index ? \"bg-green\" : \"bg-grey80\")\n                        }, index, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/bannerCarousel.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/bannerCarousel.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/bannerCarousel.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/bannerCarousel.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BannerCarousel, \"V5EKQWlBKDwnjfZ6nxHCaIbX3rk=\");\n_c = BannerCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BannerCarousel);\nvar _c;\n$RefreshReg$(_c, \"BannerCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dlbmVyYWwvYmFubmVyQ2Fyb3VzZWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQUNwQjtBQUUvQixNQUFNSSxpQkFBaUI7O0lBQ3JCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNTSxjQUFjO1FBQ2xCO1FBQ0E7S0FHRDtJQUVELE1BQU1DLG9CQUFvQixDQUFDQztRQUN6QkgsZUFBZUc7SUFDakI7SUFFQVAsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxXQUFXQyxZQUFZO1lBQzNCLE1BQU1DLFlBQVksQ0FBQ1AsY0FBYyxLQUFLRSxZQUFZTSxNQUFNO1lBQ3hEUCxlQUFlTTtRQUNqQixHQUFHLE9BQU8sK0JBQStCO1FBRXpDLE9BQU87WUFDTEUsY0FBY0o7UUFDaEI7SUFDRixHQUFHO1FBQUNMO1FBQWFFLFlBQVlNLE1BQU07S0FBQztJQUVwQyxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFDQ0MsV0FBVTt3QkFDVkMsT0FBTzs0QkFBRUMsV0FBVyxlQUFpQyxPQUFsQmIsY0FBYyxLQUFJO3dCQUFLO2tDQUV6REUsWUFBWVksR0FBRyxDQUFDLENBQUNDLE9BQU9YLHNCQUN2Qiw4REFBQ007Z0NBRUNDLFdBQVU7Z0NBQ1ZDLE9BQU87b0NBQUVJLE1BQU0sR0FBZSxPQUFaWixRQUFRLEtBQUk7Z0NBQUk7MENBRWxDLDRFQUFDTixtREFBS0E7b0NBQ0ptQixLQUFLRjtvQ0FDTEcsUUFBTztvQ0FDUEMsV0FBVTtvQ0FDVkMsZ0JBQWU7b0NBQ2ZDLEtBQUssU0FBZSxPQUFOakI7b0NBQ2RPLFdBQVU7Ozs7OzsrQkFWUFA7Ozs7Ozs7Ozs7Ozs7Ozs4QkFpQmIsOERBQUNNO29CQUFJQyxXQUFVOzhCQUNaVCxZQUFZWSxHQUFHLENBQUMsQ0FBQ1EsR0FBR2xCLHNCQUNuQiw4REFBQ21COzRCQUVDQyxTQUFTLElBQU1yQixrQkFBa0JDOzRCQUNqQ08sV0FBVywyQ0FFVixPQURDWCxnQkFBZ0JJLFFBQVEsYUFBYTsyQkFIbENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXbkI7R0FqRU1MO0tBQUFBO0FBbUVOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2VuZXJhbC9iYW5uZXJDYXJvdXNlbC50c3g/OTcwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IEJhbm5lckNhcm91c2VsID0gKCkgPT4ge1xuICBjb25zdCBbYWN0aXZlU2xpZGUsIHNldEFjdGl2ZVNsaWRlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBzbGlkZUltYWdlcyA9IFtcbiAgICBcIi9hc3NldHMvaW1hZ2VzL2Jhbm5lci8wMS5wbmdcIixcbiAgICBcIi9hc3NldHMvaW1hZ2VzL2Jhbm5lci8wMS5wbmdcIixcbiAgICAvLyBcIi9hc3NldHMvaW1hZ2VzL3Byb21vdGlvbnMvMDEucG5nXCIsXG4gICAgLy8gXCIvYXNzZXRzL2ltYWdlcy9jbGllbnRfdGVzdC5wbmdcIixcbiAgXTtcblxuICBjb25zdCBoYW5kbGVTbGlkZUNoYW5nZSA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgc2V0QWN0aXZlU2xpZGUoaW5kZXgpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBuZXh0U2xpZGUgPSAoYWN0aXZlU2xpZGUgKyAxKSAlIHNsaWRlSW1hZ2VzLmxlbmd0aDtcbiAgICAgIHNldEFjdGl2ZVNsaWRlKG5leHRTbGlkZSk7XG4gICAgfSwgMzAwMCk7IC8vIENoYW5nZSBzbGlkZSBldmVyeSAyIHNlY29uZHNcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9O1xuICB9LCBbYWN0aXZlU2xpZGUsIHNsaWRlSW1hZ2VzLmxlbmd0aF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXIgbWQ6bXgtNiBteC0zIG15LTIgbWQ6bXQtMjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyX2ltZyBtZDptdC01IHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG1heC1tZDpoLVsxNDZweF0gbWQ6aC1bMjkycHhdIG92ZXJmbG93LWhpZGRlbiBtZDpyb3VuZGVkLWxnIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7YWN0aXZlU2xpZGUgKiA5ODB9cHgpYCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzbGlkZUltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LW1kOmgtWzE0NnB4XSBoLVsyOTJweF0gYWJzb2x1dGVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IGAke2luZGV4ICogOTgwfXB4YCB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBhbHQ9e2BzbGlkZS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY2VudGVyIG9iamVjdC1jb3ZlciBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyX25hdiBmbGV4IGl0ZW1zLWNlbnRlciBteS01XCI+XG4gICAgICAgICAge3NsaWRlSW1hZ2VzLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2xpZGVDaGFuZ2UoaW5kZXgpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTIgaC0yIG1kOnctMyBtZDpoLTMgbXgtMSByb3VuZGVkLWZ1bGwgJHtcbiAgICAgICAgICAgICAgICBhY3RpdmVTbGlkZSA9PT0gaW5kZXggPyBcImJnLWdyZWVuXCIgOiBcImJnLWdyZXk4MFwiXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyQ2Fyb3VzZWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiQmFubmVyQ2Fyb3VzZWwiLCJhY3RpdmVTbGlkZSIsInNldEFjdGl2ZVNsaWRlIiwic2xpZGVJbWFnZXMiLCJoYW5kbGVTbGlkZUNoYW5nZSIsImluZGV4IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm5leHRTbGlkZSIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInRyYW5zZm9ybSIsIm1hcCIsImltYWdlIiwibGVmdCIsInNyYyIsImxheW91dCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYWx0IiwiXyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/general/bannerCarousel.tsx\n"));

/***/ })

});