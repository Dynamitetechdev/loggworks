"use strict";
exports.id = 515;
exports.ids = [515];
exports.modules = {

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
/* harmony import */ var _heroicons_react_24_outline_esm_UserCircleIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2243);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_outline_esm_CalendarIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_outline_esm_ChatBubbleOvalLeftEllipsisIcon__WEBPACK_IMPORTED_MODULE_4__, _heroicons_react_24_outline_esm_ListBulletIcon__WEBPACK_IMPORTED_MODULE_5__, _heroicons_react_24_outline_esm_UserIcon__WEBPACK_IMPORTED_MODULE_6__, _heroicons_react_24_outline_esm_UserCircleIcon__WEBPACK_IMPORTED_MODULE_7__]);
([_heroicons_react_24_outline_esm_CalendarIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_outline_esm_ChatBubbleOvalLeftEllipsisIcon__WEBPACK_IMPORTED_MODULE_4__, _heroicons_react_24_outline_esm_ListBulletIcon__WEBPACK_IMPORTED_MODULE_5__, _heroicons_react_24_outline_esm_UserIcon__WEBPACK_IMPORTED_MODULE_6__, _heroicons_react_24_outline_esm_UserCircleIcon__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const SideBar = ()=>{
    const allIcons = {
        CalendarIcon: _heroicons_react_24_outline_esm_CalendarIcon__WEBPACK_IMPORTED_MODULE_2__["default"],
        HomeIcon: _heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_3__["default"],
        ChatBubbleOvalLeftEllipsisIcon: _heroicons_react_24_outline_esm_ChatBubbleOvalLeftEllipsisIcon__WEBPACK_IMPORTED_MODULE_4__["default"],
        ListBulletIcon: _heroicons_react_24_outline_esm_ListBulletIcon__WEBPACK_IMPORTED_MODULE_5__["default"],
        UserIcon: _heroicons_react_24_outline_esm_UserIcon__WEBPACK_IMPORTED_MODULE_6__["default"],
        UserCircleIcon: _heroicons_react_24_outline_esm_UserCircleIcon__WEBPACK_IMPORTED_MODULE_7__["default"]
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
            route: "/bookings"
        },
        {
            id: 3,
            title: "messages",
            icon: "ChatBubbleOvalLeftEllipsisIcon",
            route: "/message"
        },
        {
            id: 4,
            title: "activities",
            icon: "ListBulletIcon",
            route: "/activity"
        },
        {
            id: 4,
            title: "account",
            icon: "UserCircleIcon",
            route: "/account"
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
            id: 1,
            title: "booking",
            icon: "CalendarIcon",
            route: "/bookings"
        },
        {
            id: 3,
            title: "messages",
            icon: "ChatBubbleOvalLeftEllipsisIcon",
            route: "/message"
        },
        {
            id: 4,
            title: "activities",
            icon: "ListBulletIcon",
            route: "/activity"
        },
        {
            id: 4,
            title: "Account",
            icon: "UserIcon",
            route: "/account"
        }
    ];
    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(null);
    const handleActive = (index)=>{
        setActiveIndex(index);
        setActiveIndexInLocalStorage(index);
    };
    const [openAdminNav, setOpenAdminNav] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    const setActiveIndexInLocalStorage = (index)=>{
        if (index !== null) {
            localStorage.setItem("activeIndex", index.toString());
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        const storedIndex = localStorage.getItem("activeIndex");
        if (storedIndex !== null) {
            const parsedIndex = parseInt(storedIndex, 10);
            if (!isNaN(parsedIndex)) {
                setActiveIndex(parsedIndex);
            }
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "relative md:col-span-2",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "sidebar max-md:fixed max-md:z-50 w-full max-md:bottom-0 md:fixed  bg-sideBarColor md:h-screen max-md:px-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
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
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    href: nav.route,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: `flex max-md:flex-col items-center md:my-4 py-2  cursor-pointer md:pl-7  ${activeIndex === index && "md:bg-lightWhite text-green"}`,
                                        onClick: ()=>handleActive(index),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "icon w-[20px] h-[20px] max-md:ml-2",
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
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
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
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;