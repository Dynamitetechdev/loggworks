"use strict";
(() => {
var exports = {};
exports.id = 1681;
exports.ids = [1681,660];
exports.modules = {

/***/ 3825:
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
/* harmony import */ var private_next_pages_bookings_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7600);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_bookings_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);
private_next_pages_bookings_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_bookings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_bookings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_bookings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_bookings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_bookings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_bookings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_bookings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_bookings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_bookings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_bookings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_bookings_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/bookings",
        pathname: "/bookings",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_bookings_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6161:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_outline_esm_CalendarIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7628);
/* harmony import */ var _heroicons_react_24_outline_esm_ClockIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7636);
/* harmony import */ var _heroicons_react_24_outline_esm_MapPinIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9641);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _activitiesComponents_markAsComplete_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8949);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_outline_esm_CalendarIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline_esm_ClockIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_outline_esm_MapPinIcon__WEBPACK_IMPORTED_MODULE_4__, _activitiesComponents_markAsComplete_modal__WEBPACK_IMPORTED_MODULE_6__]);
([_heroicons_react_24_outline_esm_CalendarIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline_esm_ClockIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_outline_esm_MapPinIcon__WEBPACK_IMPORTED_MODULE_4__, _activitiesComponents_markAsComplete_modal__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const BookingTabData = ({ data, selectedOption })=>{
    const [modalPop, setModalPopUp] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [star, setStar] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(Array(4).fill(""));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-4",
        children: [
            data.filter((x)=>x.status.toLowerCase() === selectedOption.toLowerCase()).map((x, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card_content px-2 py-1 my-3 shadow",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "title flex items-center justify-between",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center mb-2 md:mb-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: "/assets/images/client_test.png",
                                        width: 40,
                                        height: 40,
                                        alt: "brand_logo",
                                        className: "mr-2"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: "font-bold text-[18px]",
                                                children: x.title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "dateTime text-[14px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "26/06/2021"
                                                    }),
                                                    " | ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "6:32AM"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            children: "Electrician required to fix a spoilt vaccum cleaner. Please treat as urgent."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center w-11/12 md:w-7/12 justify-between min-md:text-[14px] my-3 font-light ",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_CalendarIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            width: 24,
                                            height: 24
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "ml-1",
                                            children: "09/06/2021"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_ClockIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            width: 24,
                                            height: 24
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "ml-1",
                                            children: "9:00AM"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " flex items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_ClockIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            width: 24,
                                            height: 24
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "ml-1",
                                            children: "5 days"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " flex items-center mb-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_MapPinIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    width: 24,
                                    height: 24
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "ml-1 font-light",
                                    children: "8 High Street, Chase Terrace, WS7 1LP"
                                })
                            ]
                        }),
                        selectedOption === "past" && x.completed && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between mb-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "bg-[#EDF9E6] text-[#2FA500] text-center text-[8px] p-1 rounded-lg uppercase",
                                    children: "completed"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "stars flex items-center",
                                    children: [
                                        star.map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                src: "/assets/icons/filledStar.svg",
                                                height: 16,
                                                width: 16,
                                                alt: "icon",
                                                className: ""
                                            }, i)),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            src: "/assets/icons/emptyStar.svg",
                                            height: 16,
                                            width: 16,
                                            alt: "icon"
                                        })
                                    ]
                                })
                            ]
                        }),
                        selectedOption === "past" && !x.completed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "w-full h-[48px] text-green font-bold py-2 px-4 border-2 border-green rounded mb-4",
                            children: "Leave a Review"
                        }),
                        selectedOption === "current" && x.completed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "w-full h-[48px] text-green font-bold py-2 px-4 border-2 border-green rounded mb-4",
                            onClick: ()=>setModalPopUp(!modalPop),
                            children: "Mark Job as Completed"
                        })
                    ]
                }, i)),
            modalPop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_activitiesComponents_markAsComplete_modal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    setModalPopUp: setModalPopUp,
                    modalPop: modalPop
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookingTabData);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const ReviewTabData = ({ data, selectedOption })=>{
    const [star, setStar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Array(4).fill(""));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "my-4",
        children: data.filter((x)=>x.category.toLowerCase() === selectedOption.toLowerCase()).map((x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "card_content px-2 py-1 my-3 border-b border-grey80",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "title flex items-start justify-between",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center mb-2 md:mb-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            src: "/assets/images/client_test.png",
                                            width: 40,
                                            height: 40,
                                            alt: "brand_logo",
                                            className: "mr-2"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                x.category === "reviews" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "font-bold text-[18px]",
                                                    children: x.title
                                                }),
                                                x.category === "question & answers" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "font-bold text-[18px]",
                                                    children: x.name
                                                }),
                                                x.category === "comments" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                    className: "font-normal text-[18px]",
                                                    children: [
                                                        "Replying",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-bold text-green ml-1",
                                                            children: x.repliedTo
                                                        })
                                                    ]
                                                }),
                                                x.category === "reviews" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-[14px]",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "stars flex items-center",
                                                        children: [
                                                            star.map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                    src: "/assets/icons/filledStar.svg",
                                                                    height: 16,
                                                                    width: 16,
                                                                    alt: "icon",
                                                                    className: ""
                                                                }, i)),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                src: "/assets/icons/emptyStar.svg",
                                                                height: 16,
                                                                width: 16,
                                                                alt: "icon"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "",
                                    children: [
                                        x.category === "reviews" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: "1d"
                                        }),
                                        (x.category === "question & answers" || x.category === "comments") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: "3 mins ago"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                            className: "font-light pb-3",
                            children: [
                                x.category === "reviews" && x.reviewText,
                                x.category === "question & answers" && x.question,
                                x.category === "comments" && x.reply
                            ]
                        }),
                        x.category === "question & answers" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            className: "p-2 border border-grey80 rounded my-2",
                            children: x.answer
                        })
                    ]
                })
            }, i))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewTabData);


/***/ }),

/***/ 7600:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_general_sideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(515);
/* harmony import */ var _components_postJobComponents_navHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3940);
/* harmony import */ var _components_general_tabSwitchCategory_tabNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8420);
/* harmony import */ var _components_general_tabSwitchCategory_switchMiniNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4826);
/* harmony import */ var _components_general_tabSwitchCategory_bookingTabData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6161);
/* harmony import */ var _components_general_tabSwitchCategory_reviewTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5868);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_general_sideBar__WEBPACK_IMPORTED_MODULE_2__, _components_postJobComponents_navHead__WEBPACK_IMPORTED_MODULE_3__, _components_general_tabSwitchCategory_bookingTabData__WEBPACK_IMPORTED_MODULE_6__]);
([_components_general_sideBar__WEBPACK_IMPORTED_MODULE_2__, _components_postJobComponents_navHead__WEBPACK_IMPORTED_MODULE_3__, _components_general_tabSwitchCategory_bookingTabData__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Bookings = ()=>{
    const bookingData = [
        {
            title: "RNS products",
            status: "current",
            completed: false
        },
        {
            title: "Daya & Sons",
            status: "upcoming"
        },
        {
            title: "Dyson Electricals",
            status: "past",
            completed: true,
            review: ""
        },
        {
            title: "Dyson Electricals",
            status: "past",
            completed: false,
            review: ""
        },
        {
            title: "RNS products",
            status: "current",
            completed: true
        },
        {
            title: "RNS products",
            status: "current",
            completed: true
        }
    ];
    const reviewData = [
        {
            title: "Dyson Electricals",
            category: "reviews",
            reviewText: "You've heard this before — the rate of technological change is accelerating. It's unpredictable and unprecedented. As the World Economic Forum acknowledged in its Future of Jobs report, we’re entering a fourth industrial revolution",
            image: [
                ""
            ]
        },
        {
            title: "Dyson Electrica",
            category: "reviews",
            reviewText: "You've heard this before — the rate of technological change is accelerating. It's unpredictable and unprecedented. As the World Economic Forum acknowledged in its Future of Jobs report, we’re entering a fourth industrial revolution:",
            image: [
                ""
            ]
        },
        {
            name: "Theresa Webb",
            category: "question & answers",
            question: "How do you handle the buying of spare electrical parts for work?",
            answer: "You either provide the money or you get it your self. Either way works"
        },
        {
            name: "Theresa Webb",
            category: "question & answers",
            question: "How do you handle the buying of spare electrical parts for work?",
            answer: "You either provide the money or you get it your self. Either way works"
        },
        {
            name: "Dyson Electricals",
            category: "comments",
            repliedTo: "Devon Lane",
            reply: "You either provide the money or you get it your self. Either way works"
        }
    ];
    const [activeStep, setActiveStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [activeTab, setTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("bookings");
    const [activeSwitchIndex, setActiveSwitchIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [selectedOption, setSelectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const handleActive = (tab)=>{
        setTab(tab);
    };
    const handleSelectSwitch = (index, option)=>{
        setActiveSwitchIndex(index);
        setSelectedOptions(option);
    };
    const bookingSectionData = {
        tabSwitch: [
            "bookings",
            "review"
        ],
        booking: {
            options: [
                "current",
                "upcoming",
                "past"
            ],
            bookingData
        },
        review: {
            options: [
                "Reviews",
                "Question & Answers",
                "Comments"
            ],
            reviewData
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "md:grid md:grid-cols-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_sideBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "main md:col-span-10",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "post-job bg-white min-h-screen relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_postJobComponents_navHead__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            activeStep: activeStep,
                            setActiveStep: setActiveStep,
                            title: "Bookings"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "px-6 md:px-9 pt-5 md:flex text-pTagGrey ",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "md:w-5/12 mx-auto",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_tabSwitchCategory_tabNav__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        options: bookingSectionData.tabSwitch,
                                        activeTab: activeTab,
                                        handleActive: handleActive,
                                        setSelectedOptions: setSelectedOptions
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_tabSwitchCategory_switchMiniNav__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            switchOptions: activeTab === "bookings" ? bookingSectionData.booking.options : bookingSectionData.review.options,
                                            activeSwitchIndex: activeSwitchIndex,
                                            handleSelectSwitch: handleSelectSwitch
                                        })
                                    }),
                                    activeTab === "bookings" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_tabSwitchCategory_bookingTabData__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        data: bookingSectionData.booking.bookingData,
                                        selectedOption: selectedOption || "current"
                                    }),
                                    activeTab === "review" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_tabSwitchCategory_reviewTab__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        data: bookingSectionData.review.reviewData,
                                        selectedOption: selectedOption || "reviews"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bookings);

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

/***/ 8923:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/ChevronLeftIcon");;

/***/ }),

/***/ 7636:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/ClockIcon");;

/***/ }),

/***/ 5647:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/HomeIcon");;

/***/ }),

/***/ 9962:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/ListBulletIcon");;

/***/ }),

/***/ 9641:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/MapPinIcon");;

/***/ }),

/***/ 5642:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/PlusIcon");;

/***/ }),

/***/ 347:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/StarIcon");;

/***/ }),

/***/ 2243:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/UserCircleIcon");;

/***/ }),

/***/ 9113:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/UserIcon");;

/***/ }),

/***/ 7663:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/XMarkIcon");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2940,9815,2636,3061,8198,515,3940,1766], () => (__webpack_exec__(3825)));
module.exports = __webpack_exports__;

})();