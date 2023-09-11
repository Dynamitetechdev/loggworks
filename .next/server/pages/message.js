"use strict";
(() => {
var exports = {};
exports.id = 2728;
exports.ids = [2728,660];
exports.modules = {

/***/ 1400:
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
/* harmony import */ var private_next_pages_message_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1007);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_message_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);
private_next_pages_message_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_message_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_message_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_message_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_message_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_message_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_message_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_message_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_message_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_message_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_message_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_message_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/message",
        pathname: "/message",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_message_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const AllChatList = ({ data, onChat, setActive, setShowChatList })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "all_chat max-md:mt-24 md:overflow-y-scroll md:h-[calc(90vh-4rem)] ",
        children: data.map((x, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `chat flex items-center p-2 rounded mb-2 cursor-pointer ${onChat(i) && "bg-[#f6f6f6]"}`,
                onClick: ()=>{
                    setActive(i);
                    setShowChatList(false);
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "profile mr-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: "/assets/images/client_test.png",
                            width: 40,
                            height: 40,
                            alt: "profile"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between w-full ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-[18px] font-bold",
                                        children: x.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-[14px] text-[#2E2E2E]",
                                        children: x.message[x.message.length - 1]?.text ? x.message[x.message.length - 1]?.text : x.message[x.message.length - 1]?.quote ? "A quote was sent" : ""
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col items-end text-[12px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "my-1",
                                        children: "Yesterday"
                                    }),
                                    x.unread?.status && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "px-2 text-white rounded-lg bg-green mt-1",
                                        children: [
                                            x.unread.length,
                                            "+"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }, i))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllChatList);


/***/ }),

/***/ 419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const AttachmentMenu = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "attachmentMenu max-md:bg-white fixed md:absolute py-7 px-2 z-50 md:right-8 md:bottom-16 bottom-[120px] w-[414px] h-[185px] md:shadow-lg rounded-t-lg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "flex items-center justify-around",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "rounded-full w-[56px] h-[56px] focus:outline-none bg-[#2D9CDB]  md:mb-0 relative  text-gray-700 flex items-center justify-center",
                            id: "grid-first-name",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: "/assets/icons/document.svg",
                                        width: 20,
                                        height: 20,
                                        alt: "profile "
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    id: "grid-first-name",
                                    type: "file",
                                    name: "title",
                                    // onChange={(e) => handleImageChange(e, i)}
                                    hidden: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-[14px]",
                            children: "Document"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "rounded-full w-[56px] h-[56px] focus:outline-none bg-[#EB5757]  md:mb-0 relative  text-gray-700 flex items-center justify-center",
                            id: "grid-first-name",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: "/assets/icons/camera_white.svg",
                                        width: 20,
                                        height: 20,
                                        alt: "profile "
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    id: "grid-first-name",
                                    type: "file",
                                    name: "title",
                                    // onChange={(e) => handleImageChange(e, i)}
                                    hidden: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-[14px]",
                            children: "Camera"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "rounded-full w-[56px] h-[56px] focus:outline-none bg-[#9B51E0]  md:mb-0 relative  text-gray-700 flex items-center justify-center",
                            id: "grid-first-name",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: "/assets/icons/gallery.svg",
                                        width: 20,
                                        height: 20,
                                        alt: "profile "
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    id: "grid-first-name",
                                    type: "file",
                                    name: "title",
                                    // onChange={(e) => handleImageChange(e, i)}
                                    hidden: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-[14px]",
                            children: "Gallery"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "rounded-full w-[56px] h-[56px] focus:outline-none bg-[#C4C4C4]  md:mb-0 relative  text-gray-700 flex items-center justify-center",
                            id: "grid-first-name",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: "/assets/icons/location_white.svg",
                                        width: 20,
                                        height: 20,
                                        alt: "profile "
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    id: "grid-first-name",
                                    type: "file",
                                    name: "title",
                                    // onChange={(e) => handleImageChange(e, i)}
                                    hidden: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-[14px]",
                            children: "Location"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttachmentMenu);


/***/ }),

/***/ 3080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const NoInbox = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "absolute w-full h-[100vh] flex justify-center items-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "text-center text-[24px] font-bold",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: "/assets/images/noMessageInbox.svg",
                    width: 196,
                    height: 174,
                    alt: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Inbox"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoInbox);


/***/ }),

/***/ 1007:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_general_sideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(515);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_messageComponents_allChatList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9786);
/* harmony import */ var _components_messageComponents_attachmentComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(419);
/* harmony import */ var _components_messageComponents_noInbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3080);
/* harmony import */ var _heroicons_react_24_outline_esm_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8923);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_general_sideBar__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline_esm_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_7__]);
([_components_general_sideBar__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline_esm_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Message = ()=>{
    const [chats, setChats] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([
        {
            name: "Dynamite Tech",
            unread: {
                status: true,
                length: 2
            },
            message: [
                {
                    status: "sent",
                    text: "hello",
                    time: "1:20"
                },
                {
                    status: "sent",
                    text: "hello",
                    time: "1:22"
                },
                {
                    status: "recieved",
                    text: "hello",
                    time: "1:23"
                },
                {
                    status: "recieved",
                    text: "hello",
                    time: "1:24"
                },
                {
                    status: "recieved",
                    quote: true,
                    time: "1:25"
                }
            ]
        },
        {
            name: "Capterner Guy",
            unread: {
                status: true,
                length: 2
            },
            message: [
                {
                    status: "recieved",
                    text: "hello, Available for jobs",
                    time: "1:20"
                },
                {
                    status: "sent",
                    text: "yes, thanks for reaching out",
                    time: "1:22"
                },
                {
                    status: "recieved",
                    text: "i have a $3m contract i want to give to you",
                    time: "1:23"
                },
                {
                    status: "sent",
                    text: "Wow\uD83D\uDD25",
                    time: "1:24"
                },
                {
                    status: "recieved",
                    quote: true,
                    time: "1:25"
                },
                {
                    status: "recieved",
                    text: "Accept and let get started",
                    time: "1:25"
                },
                {
                    status: "recieved",
                    text: "hello, Available for jobs",
                    time: "1:20"
                },
                {
                    status: "sent",
                    text: "yes, thanks for reaching out",
                    time: "1:22"
                },
                {
                    status: "recieved",
                    text: "i have a $3m contract i want to give to you",
                    time: "1:23"
                },
                {
                    status: "sent",
                    text: "Wow\uD83D\uDD25",
                    time: "1:24"
                },
                {
                    status: "recieved",
                    quote: true,
                    time: "1:25"
                },
                {
                    status: "recieved",
                    text: "Accept and let get started",
                    time: "1:25"
                }
            ]
        },
        {
            name: "Nano Wandrack",
            unread: {
                status: true,
                length: 2
            },
            message: [
                {
                    status: "sent",
                    text: "Hello Craig, I’m Wandrack",
                    time: "1:22"
                },
                {
                    status: "recieved",
                    text: "Hi Wandrack, Nice to meet you. How can I help you?",
                    time: "1:23"
                },
                {
                    status: "sent",
                    text: "I want to install a new Jacuzzi in my apartment. Can you handle that?",
                    time: "1:24"
                },
                {
                    status: "recieved",
                    text: "Yeah, sure! I’ll send a quote to that effect now.",
                    time: "1:24"
                },
                {
                    status: "recieved",
                    quote: true,
                    time: "1:25"
                },
                {
                    status: "sent",
                    text: "yes, thanks for reaching out",
                    time: "1:22"
                },
                {
                    status: "recieved",
                    text: "i have a $3m contract i want to give to you",
                    time: "1:23"
                },
                {
                    status: "sent",
                    text: "Wow\uD83D\uDD25",
                    time: "1:24"
                }
            ]
        }
    ]);
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(-1);
    const [openAttachment, setOpenAttachment] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [quoteRequest, setQuoteRequest] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const messageContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const [showChatList, setShowChatList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const onChat = (index)=>{
        if (active === index) {
            return true;
        } else {
            return false;
        }
    };
    const handleInputChange = (e)=>{
        setMessage(e.target.value);
    };
    const handleMessage = ()=>{
        console.log("working");
        if (message.trim() === "") {
            return;
        }
        const newMessage = {
            status: "sent",
            text: message,
            time: getCurrentTime()
        };
        const newChatArr = [
            ...chats
        ];
        newChatArr[active].message.push(newMessage);
        setChats(newChatArr);
        setMessage("");
        setTimeout(scrollToNewMessage, 100);
    };
    const getCurrentTime = ()=>{
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        if (parseInt(hours) >= 12) {
            return `${hours}:${minutes} pm`;
        } else {
            return `${hours}:${minutes} am`;
        }
    };
    const handleSendMessage = (e)=>{
        console.log(e);
        if (e.key === "Enter") {
            handleMessage();
        }
    };
    const scrollToNewMessage = ()=>{
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        scrollToNewMessage();
    }, [
        chats,
        active
    ]);
    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const handleSearch = (e)=>{
        setSearchValue(e.target.value);
    };
    console.log(message);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "md:grid md:grid-cols-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_sideBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "main md:col-span-10",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "content_body max-sm:block md:grid md:grid-cols-10 h-screen",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `border-r border-grey80 relative bg-white md:z-20 py-2 px-4 md:px-5 md:col-span-3 relative md:z-50 h-screen ${showChatList ? "" : "max-md:hidden"}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full py-3 ",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "max-md:fixed max-md:w-11/12 max-md:top-0 bg-white",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-[20px] mt-3 font-bold",
                                                children: "Messages"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "search mb-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: "appearance-none w-full text-gray-700 border border-red-500 rounded px-2 py-3 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80",
                                                    id: "grid-first-name",
                                                    type: "text",
                                                    name: "title",
                                                    placeholder: "Search a name",
                                                    onChange: handleSearch
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_messageComponents_allChatList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        setActive: setActive,
                                        onChat: onChat,
                                        data: chats.filter((x)=>x.name.toLowerCase().includes(searchValue.toLowerCase())),
                                        setShowChatList: setShowChatList
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `main col-span-7 bg-white relative ${showChatList ? "max-md:hidden" : ""}`,
                            children: active < 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_messageComponents_noInbox__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "",
                                children: chats[active] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "max-md:fixed max-md:w-full max-md:top-0 z-50 bg-white chat_head flex items-center md:py-3 py-3 md:px-6  border-b  border-grey80",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "",
                                                            onClick: ()=>setShowChatList(true),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                                width: 28,
                                                                height: 28,
                                                                className: "mr-3 ml-2"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            src: "/assets/images/client_test.png",
                                                            width: 32,
                                                            height: 32,
                                                            alt: "profile"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "font-bold capitalize text-[16px] ml-2",
                                                    children: chats[active].name
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full h-[94vh] relative max-md:pt-10",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "day flex justify-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "fixed bg-[#f6f6f6] px-3 py-1 rounded-full text-[12px] top-20 md:mt-3",
                                                        children: "Today"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "md:overflow-y-scroll md:h-[calc(95vh-4rem)]",
                                                    ref: messageContainerRef,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "messages md:px-8 px-4 mt-16 ",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "flex flex-col pb-36",
                                                                ref: messageContainerRef,
                                                                children: chats[active].message.map((x, i)=>x.status === "sent" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "sent flex justify-end mb-2",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "bg-blue-500 p-3 rounded-lg max-w-[325px] bg-[#D2F0C1]",
                                                                            children: [
                                                                                x.quote ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "mb-3",
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "quote",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                className: "img max-w-[288px] min-w-[288px] max-h-[104px] ",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                                    src: "/assets/images/test_quote.png",
                                                                                                    width: 288,
                                                                                                    height: 104,
                                                                                                    alt: "profile",
                                                                                                    className: "object-fit"
                                                                                                })
                                                                                            }),
                                                                                            !quoteRequest && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                className: "button mt-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                        className: "bg-white text-dark w-[140px] text-[14px] py-[8px] px-4 rounded mr-2",
                                                                                                        onClick: ()=>setQuoteRequest("decline"),
                                                                                                        children: "Decline"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                        className: "bg-green text-white w-[140px] text-[14px] py-[8px] px-4 rounded",
                                                                                                        onClick: ()=>setQuoteRequest("paid"),
                                                                                                        children: "Accept"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            quoteRequest && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                className: "acceptRequest",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                    className: "bg-[#FDE8E7] text-dark w-full text-[14px] text-[#F02D16] py-[8px] px-4 rounded mt-2 capitalize",
                                                                                                    children: quoteRequest
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                                    className: "text-[14px] mb-3",
                                                                                    children: x.text
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    className: "text-xs text-right text-[#5E5E5E]",
                                                                                    children: x.time
                                                                                })
                                                                            ]
                                                                        })
                                                                    }, i) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "received flex justify-start mb-2",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "bg-gray-300 p-3 rounded-lg max-w-[325px] bg-[#f6f6f6]",
                                                                            children: [
                                                                                x.quote ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "mb-3",
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "quote",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                className: "img max-w-[288px] min-w-[288px] max-h-[104px] ",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                                    src: "/assets/images/test_quote.png",
                                                                                                    width: 288,
                                                                                                    height: 104,
                                                                                                    alt: "profile",
                                                                                                    className: "object-fit"
                                                                                                })
                                                                                            }),
                                                                                            !quoteRequest && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                className: "button mt-2",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                        className: "bg-white text-dark w-[140px] text-[14px] py-[8px] px-4 rounded mr-2",
                                                                                                        onClick: ()=>setQuoteRequest("decline"),
                                                                                                        children: "Decline"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                        className: "bg-green text-white w-[140px] text-[14px] py-[8px] px-4 rounded",
                                                                                                        onClick: ()=>setQuoteRequest("paid"),
                                                                                                        children: "Accept"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            quoteRequest && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                className: "acceptRequest",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                    className: "bg-[#FDE8E7] text-dark w-full text-[14px] text-[#F02D16] py-[8px] px-4 rounded mt-2 capitalize",
                                                                                                    children: quoteRequest
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                                    className: "text-[14px] mb-3",
                                                                                    children: x.text
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                    className: "text-xs",
                                                                                    children: [
                                                                                        " ",
                                                                                        x.time
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    }, i))
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "typeMessage w-7/12 fixed md:bottom-0 bottom-[55px] max-md:bg-white max-md:w-full",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-center md:px-8 px-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "w-full relative",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                className: "appearance-none w-full text-gray-700 border border-red-500 rounded px-2 pr-16 py-3 my-2 focus:outline-none focus:bg-white bg-[#fafafa]  border border-grey80",
                                                                                id: "grid-first-name",
                                                                                type: "text",
                                                                                name: "title",
                                                                                placeholder: "Type something",
                                                                                value: message,
                                                                                onChange: handleInputChange,
                                                                                onKeyPress: handleSendMessage
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                src: "/assets/icons/attachment.svg",
                                                                                width: 32,
                                                                                height: 32,
                                                                                alt: "profile ",
                                                                                className: "absolute z-50 flex top-[18px] right-2 cursor-pointer",
                                                                                onClick: ()=>setOpenAttachment(!openAttachment)
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "md:p-[7px] ml-2 md:border border-grey80 md:bg-[#fafafa] rounded",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                            src: "/assets/icons/microphone.svg",
                                                                            width: 32,
                                                                            height: 32,
                                                                            alt: "profile"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        openAttachment && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_messageComponents_attachmentComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);

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
var __webpack_exports__ = __webpack_require__.X(0, [2940,9815,2636,3061,8198,515], () => (__webpack_exec__(1400)));
module.exports = __webpack_exports__;

})();