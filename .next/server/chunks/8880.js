"use strict";
exports.id = 8880;
exports.ids = [8880];
exports.modules = {

/***/ 4826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const SwitchMiniNav = ({ switchOptions, activeSwitchIndex, handleSelectSwitch })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "max-sm:text-[16px]",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "flex items-center justify-between text-center px-3 rounded border-b border-grey cursor-pointer",
            children: switchOptions.map((x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: ` py-3 capitalize  ${activeSwitchIndex === i && "border-b-2 border-green text-green font-bold"} `,
                    onClick: ()=>handleSelectSwitch(i, x),
                    children: x
                }, i))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitchMiniNav);


/***/ }),

/***/ 8420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const TabNav = ({ options, activeTab, handleActive, setSelectedOptions })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "tab",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "flex items-center text-center bg-lightWhite  p-1 rounded cursor-pointer text-[15px]",
            children: options.map((x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: `w-1/2 rounded  py-[7px] capitalize ${activeTab === x && "bg-white text-green font-bold"} `,
                    onClick: ()=>{
                        handleActive(x);
                        setSelectedOptions(x.toLowerCase() === "bookings" ? "current" : x.toLowerCase() === "review" && "reviews");
                    },
                    children: x
                }, i))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabNav);


/***/ })

};
;