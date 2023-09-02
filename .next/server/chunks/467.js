"use strict";
exports.id = 467;
exports.ids = [467];
exports.modules = {

/***/ 4089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ header)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/general/locationSearch.tsx


const LocationSearch = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "location_search max-md:mt-5 max-md:mb-4  md:w-[416px] h-[44px] ",
        children: /*#__PURE__*/ jsx_runtime.jsx("form", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative grid grid-cols-6 w-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-span-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute inset-y-0 left-0  flex items-center pl-3 pointer-events-none",
                                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                    className: "w-4 h-4 text-gray-500 dark:text-gray-400",
                                    "aria-hidden": "true",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 20 20",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        stroke: "currentColor",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                type: "text",
                                id: "default-search",
                                className: "w-full p-3 pl-10 text-sm text-gray-900 border border-grey max-md:rounded-[0]",
                                placeholder: "Try searching carpenter..."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        type: "submit",
                        className: "text-[#000000] col-span-2 flex pl-3 items-center border border-grey border-l-0 bg-none",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: "/assets/icons/nav_icons/location.svg",
                                width: 24,
                                height: 24,
                                alt: ""
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-searchColor ml-1 text-1xl",
                                children: "Location"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const locationSearch = (LocationSearch);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/general/nav/header.tsx




const Header = ()=>{
    const mobile_icons = [
        {
            icon: "post_mobile",
            route: "/post-job"
        },
        {
            icon: "bookmark_mobile",
            route: "/"
        },
        {
            icon: "wishlist_mobile",
            route: "/"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "header md:bg-white md:z-50 md:fixed md:w-10/12 md:h-[62px] md:flex justify-between md:border-b border-grey items-center md:px-6 px-3 max-sm:pt-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "lg:hidden mobile flex items-center justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mobile_log",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: "/assets/images/logo_mobile.png",
                                width: 40,
                                height: 40,
                                alt: ""
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mobile_nav",
                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            className: "flex items-center",
                            children: mobile_icons.map((x, i)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: x.route,
                                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "mx-2",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: `/assets/images/${x.icon}.svg`,
                                            width: 24,
                                            height: 24,
                                            alt: ""
                                        })
                                    })
                                }, i))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(locationSearch, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "admin max-md:hidden flex justify-between items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/post-job",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "post flex items-center bg-green p-2.5  text-white rounded-md mr-10",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: "/assets/icons/nav_icons/plus.svg",
                                    width: 24,
                                    height: 24,
                                    alt: "",
                                    className: "mr-2"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "Post a job"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "bookmarks flex flex-col items-center mr-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: "/assets/icons/nav_icons/bookmark.svg",
                                width: 24,
                                height: 24,
                                alt: ""
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-14px",
                                children: "Bookmarks"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "adminOption",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "admin_image",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: "/assets/images/client_test.png",
                                    width: 40,
                                    height: 40,
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "admin_nav"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const header = (Header);


/***/ }),

/***/ 515:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_outline_esm_CalendarIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7628);
/* harmony import */ var _heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5647);
/* harmony import */ var _heroicons_react_24_outline_esm_ChatBubbleOvalLeftEllipsisIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4591);
/* harmony import */ var _heroicons_react_24_outline_esm_ListBulletIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9962);
/* harmony import */ var _heroicons_react_24_outline_esm_UserIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9113);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_outline_esm_CalendarIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_outline_esm_ChatBubbleOvalLeftEllipsisIcon__WEBPACK_IMPORTED_MODULE_4__, _heroicons_react_24_outline_esm_ListBulletIcon__WEBPACK_IMPORTED_MODULE_5__, _heroicons_react_24_outline_esm_UserIcon__WEBPACK_IMPORTED_MODULE_6__]);
([_heroicons_react_24_outline_esm_CalendarIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_outline_esm_ChatBubbleOvalLeftEllipsisIcon__WEBPACK_IMPORTED_MODULE_4__, _heroicons_react_24_outline_esm_ListBulletIcon__WEBPACK_IMPORTED_MODULE_5__, _heroicons_react_24_outline_esm_UserIcon__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const SideBar = ()=>{
    const allIcons = {
        CalendarIcon: _heroicons_react_24_outline_esm_CalendarIcon__WEBPACK_IMPORTED_MODULE_2__["default"],
        HomeIcon: _heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_3__["default"],
        ChatBubbleOvalLeftEllipsisIcon: _heroicons_react_24_outline_esm_ChatBubbleOvalLeftEllipsisIcon__WEBPACK_IMPORTED_MODULE_4__["default"],
        ListBulletIcon: _heroicons_react_24_outline_esm_ListBulletIcon__WEBPACK_IMPORTED_MODULE_5__["default"],
        UserIcon: _heroicons_react_24_outline_esm_UserIcon__WEBPACK_IMPORTED_MODULE_6__["default"]
    };
    const sideNav = [
        {
            id: 1,
            title: "home",
            icon: "HomeIcon",
            route: "/"
        },
        {
            id: 2,
            title: "bookings",
            icon: "CalendarIcon",
            route: "/"
        },
        {
            id: 3,
            title: "messages",
            icon: "ChatBubbleOvalLeftEllipsisIcon",
            route: "/"
        },
        {
            id: 4,
            title: "activities",
            icon: "ListBulletIcon",
            route: "/"
        }
    ];
    const mobileNav = [
        {
            id: 1,
            title: "home",
            icon: "HomeIcon",
            route: "/"
        },
        {
            id: 3,
            title: "messages",
            icon: "ChatBubbleOvalLeftEllipsisIcon",
            route: "/"
        },
        {
            id: 4,
            title: "activities",
            icon: "ListBulletIcon",
            route: "/"
        },
        {
            id: 4,
            title: "Account",
            icon: "UserIcon",
            route: "/"
        }
    ];
    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null);
    const handleActive = (index)=>{
        setActiveIndex(index);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative md:col-span-2",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "sidebar max-md:fixed max-md:z-50 w-full max-md:bottom-0 md:fixed  bg-sideBarColor md:h-screen max-md:px-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-md:hidden logo pl-7 pt-7",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: "/assets/images/Logo-green.png",
                            width: 125,
                            height: 20,
                            alt: ""
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mobile_nav md:hidden side_nav md:mt-14 md:w-2/12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "max-md:flex max-sm:justify-between max-md:justify-center  max-sm:mx-0",
                        children: mobileNav.map((nav, index)=>{
                            const Icon = allIcons[nav.icon];
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                href: nav.route,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: `flex max-md:flex-col max-md:mx-4 items-center  md:my-4 py-2  cursor-pointer md:pl-7  ${activeIndex === index && "bg-lightWhite text-green"}`,
                                    onClick: ()=>handleActive(index),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "icon w-[24px] h-[24px] max-md:ml-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "capitalize ml-2 max-md:text-[14px]",
                                            children: nav.title
                                        })
                                    ]
                                })
                            }, `nav--${index}`);
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "side_nav md:mt-14 md:w-2/12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "max-md:hidden max-md:flex max-sm:justify-between max-md:justify-center  max-sm:mx-0",
                        children: sideNav.map((nav, index)=>{
                            const Icon = allIcons[nav.icon];
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                href: nav.route,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: `flex max-md:flex-col max-md:mx-4 items-center  md:my-4 py-2  cursor-pointer md:pl-7  ${activeIndex === index && "bg-lightWhite text-green"}`,
                                    onClick: ()=>handleActive(index),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "icon w-[24px] h-[24px] max-md:ml-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "capitalize ml-2 max-md:text-[14px]",
                                            children: nav.title
                                        })
                                    ]
                                })
                            }, `nav--${index}`);
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;