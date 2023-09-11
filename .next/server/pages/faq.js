"use strict";
(() => {
var exports = {};
exports.id = 7746;
exports.ids = [7746,660];
exports.modules = {

/***/ 3233:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2940);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8198);
/* harmony import */ var private_next_pages_faq_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2627);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_faq_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);
private_next_pages_faq_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_faq_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_faq_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_faq_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_faq_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_faq_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_faq_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_faq_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_faq_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_faq_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_faq_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_faq_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/faq",
        pathname: "/faq",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_faq_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2627:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_general_sideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(515);
/* harmony import */ var _components_postJobComponents_navHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3940);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5587);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_general_sideBar__WEBPACK_IMPORTED_MODULE_1__, _components_postJobComponents_navHead__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_4__]);
([_components_general_sideBar__WEBPACK_IMPORTED_MODULE_1__, _components_postJobComponents_navHead__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const FAQ = ()=>{
    const [activeStep, setActiveStep] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const faq = [
        {
            id: 1,
            title: "What is Loggworks?",
            content: "Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking about is sashimi), but actually the term sushi just refers to the type of vinegar rice used in the traditional Japanese cuisine. The great thing about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed."
        },
        {
            id: 2,
            title: "General Terms & Conditions (GTC)",
            content: "Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking about is sashimi), but actually the term sushi just refers to the type of vinegar rice used in the traditional Japanese cuisine. The great thing about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed."
        },
        {
            id: 2,
            title: "Do I have the right to return an item?",
            content: "Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking about is sashimi), but actually the term sushi just refers to the type of vinegar rice used in the traditional Japanese cuisine. The great thing about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed."
        },
        {
            id: 2,
            title: "Can I reserve a magazine via Phone or E-mail?",
            content: "Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking about is sashimi), but actually the term sushi just refers to the type of vinegar rice used in the traditional Japanese cuisine. The great thing about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed."
        },
        {
            id: 2,
            title: "Why do the prices in the shop sometimes change?",
            content: "Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking about is sashimi), but actually the term sushi just refers to the type of vinegar rice used in the traditional Japanese cuisine. The great thing about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed."
        },
        {
            id: 2,
            title: "Can I reserve a magazine via Phone or E-mail?",
            content: "Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking about is sashimi), but actually the term sushi just refers to the type of vinegar rice used in the traditional Japanese cuisine. The great thing about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed."
        },
        {
            id: 2,
            title: "Can I change the displayed currency?",
            content: "Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking about is sashimi), but actually the term sushi just refers to the type of vinegar rice used in the traditional Japanese cuisine. The great thing about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed."
        }
    ];
    const [openDetail, setOpenDetail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Array(faq.length).fill(false));
    const handleClick = (index)=>{
        const newArr = [
            ...openDetail
        ];
        newArr[index] = !newArr[index];
        setOpenDetail(newArr);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "md:grid md:grid-cols-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_sideBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "main md:col-span-10",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "post-job bg-white h-screen relative ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_postJobComponents_navHead__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            activeStep: activeStep,
                            setActiveStep: setActiveStep,
                            title: "Frequently Asked Questions"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "px-6 md:px-9 pt-10 md:flex text-pTagGrey ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "md:w-5/12 mx-auto",
                                children: faq.map((x, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center py-4 justify-between border-b border-grey md:px-5 cursor-pointer max-sm:text-[14px]",
                                                onClick: ()=>handleClick(index),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "font-bold",
                                                        children: x.title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "toggle",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                            width: 20,
                                                            height: 20
                                                        })
                                                    })
                                                ]
                                            }),
                                            openDetail[index] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-pTagGrey md:px-5 py-3 pb-8",
                                                children: x.content
                                            })
                                        ]
                                    }, index))
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FAQ);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 7628:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/CalendarIcon");;

/***/ }),

/***/ 4591:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/ChatBubbleOvalLeftEllipsisIcon");;

/***/ }),

/***/ 5587:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/ChevronDownIcon");;

/***/ }),

/***/ 8923:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/ChevronLeftIcon");;

/***/ }),

/***/ 5647:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/HomeIcon");;

/***/ }),

/***/ 9962:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/ListBulletIcon");;

/***/ }),

/***/ 2243:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/UserCircleIcon");;

/***/ }),

/***/ 9113:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/UserIcon");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2940,9815,2636,3061,8198,515,3940], () => (__webpack_exec__(3233)));
module.exports = __webpack_exports__;

})();