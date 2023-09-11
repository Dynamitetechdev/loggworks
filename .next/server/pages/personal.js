"use strict";
(() => {
var exports = {};
exports.id = 4122;
exports.ids = [4122,660];
exports.modules = {

/***/ 3032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fpersonal_preferredRegion_absolutePagePath_private_next_pages_2Fpersonal_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/personal/index.tsx
var personal_namespaceObject = {};
__webpack_require__.r(personal_namespaceObject);
__webpack_require__.d(personal_namespaceObject, {
  "default": () => (personal)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(2940);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./pages/_app.tsx + 1 modules
var _app = __webpack_require__(8198);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-phone-input-2"
var external_react_phone_input_2_ = __webpack_require__(5452);
var external_react_phone_input_2_default = /*#__PURE__*/__webpack_require__.n(external_react_phone_input_2_);
// EXTERNAL MODULE: ./node_modules/react-phone-input-2/lib/style.css
var style = __webpack_require__(4463);
// EXTERNAL MODULE: ./components/auth/testimonial.tsx
var testimonial = __webpack_require__(7556);
// EXTERNAL MODULE: ./components/general/uploadPicture.tsx
var uploadPicture = __webpack_require__(8428);
;// CONCATENATED MODULE: ./components/auth/personalInfo/index.tsx







const PersonalInfoForm = ({ title, login })=>{
    const [numberReactInput, setNumberReactInput] = (0,external_react_.useState)(null);
    const [star, setStar] = (0,external_react_.useState)(Array(4).fill(""));
    const [inputOption, setInputOption] = (0,external_react_.useState)("phone");
    const [formData, setFormData] = (0,external_react_.useState)({
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        address: ""
    });
    const formValidate = ()=>{
        const { firstname, lastname, email, phoneNumber, address } = formData;
        if (firstname && lastname && email || phoneNumber && address) {
            return true;
        } else {
            return false;
        }
    };
    const handleOnChange = (event)=>{
        setFormData((prevData)=>({
                ...prevData,
                [event.target.name]: event.target.value,
                ["phoneNumber"]: numberReactInput
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
    };
    console.log(numberReactInput);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "authForm text-center md:grid grid-cols-7 gap-8 items-center",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(testimonial/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "right max-sm:flex max-sm:flex-col max-sm:justify-between formInput col-span-4 px-5 md:w-6/12 md:mx-auto md:my-auto ",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: "max-sm:mt-12 form_header max-sm:font-bold text-2xl md:font-bold text-greyDark md:mt-5 max-sm:text-center",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-center mb-5",
                        children: "We would love to know you"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime.jsx("form", {
                            action: "",
                            onSubmit: handleSubmit,
                            className: "personalForm",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "md:mb-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "upload",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(uploadPicture/* default */.Z, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "firstname mb-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                className: "block text-gray-700 text-sm font-bold mb-1 text-left",
                                                id: "firstname",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Firstname"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "relative",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    className: "border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]",
                                                    id: "firstname",
                                                    type: "text",
                                                    name: "firstname",
                                                    value: formData.firstname,
                                                    onChange: handleOnChange,
                                                    required: true
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "lastname mb-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                className: "block text-gray-700 text-sm font-bold mb-1 text-left",
                                                id: "lastname",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Lastname"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "relative",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    className: "border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]",
                                                    id: "lastname",
                                                    type: "text",
                                                    name: "lastname",
                                                    value: formData.lastname,
                                                    onChange: handleOnChange,
                                                    required: true
                                                })
                                            })
                                        ]
                                    }),
                                    inputOption == "phone" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "emailaddress mb-4 text-left",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                className: "block text-gray-700 text-sm font-bold mb-1",
                                                id: "email",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Phone Number"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((external_react_phone_input_2_default()), {
                                                country: "gb",
                                                value: numberReactInput,
                                                onChange: (e)=>setNumberReactInput(e),
                                                inputStyle: {
                                                    width: "100%",
                                                    height: "48px",
                                                    border: "1px solid var(--grey-70, #DFDFDF)"
                                                },
                                                inputProps: {
                                                    name: "phoneNumber"
                                                }
                                            })
                                        ]
                                    }),
                                    inputOption == "email" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "emailaddress mb-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                className: "block text-gray-700 text-sm font-bold mb-1 text-left",
                                                id: "email",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Email address"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "relative",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    className: "border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]",
                                                    id: "email",
                                                    type: "email",
                                                    name: "email",
                                                    value: formData.email,
                                                    onChange: handleOnChange,
                                                    required: true
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "address mb-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                className: "block text-gray-700 text-sm font-bold mb-1 text-left",
                                                id: "address",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Address"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "relative",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    className: "border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]",
                                                    id: "address",
                                                    type: "text",
                                                    name: "address",
                                                    value: formData.address,
                                                    onChange: handleOnChange,
                                                    required: true
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "relative mt-10",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                            className: "leading-8 mb-6",
                                            children: [
                                                'By clicking "Continue", you agree to our',
                                                " ",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-green ml-1 underline",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/signup",
                                                        children: "Terms"
                                                    })
                                                }),
                                                " ",
                                                "and acknowledge our",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-green ml-1 underline",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/signup",
                                                        children: "Privacy policy"
                                                    })
                                                }),
                                                " "
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        className: `${formValidate() ? "bg-green " : "bg-grey text-pColor"} w-full h-[48px] font-bold py-2 px-4 rounded`,
                                        children: "Sign Up"
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const personalInfo = (PersonalInfoForm);

;// CONCATENATED MODULE: ./pages/personal/index.tsx


const Person = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "",
        children: /*#__PURE__*/ jsx_runtime.jsx(personalInfo, {
            title: "Personal Information"
        })
    });
};
/* harmony default export */ const personal = (Person);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fpersonal&preferredRegion=&absolutePagePath=private-next-pages%2Fpersonal%2Findex.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fpersonal_preferredRegion_absolutePagePath_private_next_pages_2Fpersonal_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(personal_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(personal_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(personal_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(personal_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(personal_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(personal_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(personal_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(personal_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(personal_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(personal_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(personal_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/personal",
        pathname: "/personal",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: (_document_default())
    },
    userland: personal_namespaceObject
});

//# sourceMappingURL=pages.js.map

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

/***/ 5452:
/***/ ((module) => {

module.exports = require("react-phone-input-2");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2940,9815,2636,3061,8198,8394,8428], () => (__webpack_exec__(3032)));
module.exports = __webpack_exports__;

})();