"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./src/widget/listProducts/ui/productItem.tsx":
/*!****************************************************!*\
  !*** ./src/widget/listProducts/ui/productItem.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductItem: function() { return /* binding */ ProductItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_TableCell_TableRow_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=TableCell,TableRow,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TableRow/TableRow.js\");\n/* harmony import */ var _barrel_optimize_names_TableCell_TableRow_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=TableCell,TableRow,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TableCell/TableCell.js\");\n/* harmony import */ var _barrel_optimize_names_TableCell_TableRow_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=TableCell,TableRow,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ ProductItem auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ProductItem = (param)=>{\n    let { product, actualRest, accountRest, handleFact } = param;\n    _s();\n    const { register } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({\n        defaultValues: {\n            fact: actualRest\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const finalRest = localStorage.getItem(\"finalRest\");\n        if (finalRest) {\n            const withoutItem = JSON.parse(finalRest).filter((el)=>el.productId !== product.id);\n            localStorage.setItem(\"finalRest\", JSON.stringify([\n                ...withoutItem,\n                {\n                    productId: product.id,\n                    vendorCode: product.vendorCode,\n                    different: actualRest - accountRest\n                }\n            ]));\n        } else {\n            localStorage.setItem(\"finalRest\", JSON.stringify([\n                {\n                    productId: product.id,\n                    vendorCode: product.vendorCode,\n                    different: actualRest - accountRest\n                }\n            ]));\n        }\n    }, [\n        accountRest,\n        actualRest\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TableCell_TableRow_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        sx: {\n            \"&:last-child td, &:last-child th\": {\n                border: 0\n            }\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TableCell_TableRow_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                component: \"th\",\n                scope: \"row\",\n                children: product.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\productItem.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TableCell_TableRow_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                align: \"right\",\n                children: product.vendorCode\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\productItem.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TableCell_TableRow_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                align: \"right\",\n                children: accountRest\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\productItem.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TableCell_TableRow_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                align: \"right\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TableCell_TableRow_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    label: \"Фактический остаток\",\n                    type: \"number\",\n                    variant: \"standard\",\n                    ...register(\"fact\", {\n                        valueAsNumber: true,\n                        validate: (value)=>value > 0\n                    }),\n                    value: actualRest,\n                    onChange: (e)=>handleFact(e, product)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\productItem.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\productItem.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, product.name, true, {\n        fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\productItem.tsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProductItem, \"hSQoJGLbEs2sTJ2bROoL/lRvPDk=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c = ProductItem;\nvar _c;\n$RefreshReg$(_c, \"ProductItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXQvbGlzdFByb2R1Y3RzL3VpL3Byb2R1Y3RJdGVtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRzhEO0FBQ2Y7QUFDTDtBQWFuQyxNQUFNSyxjQUFjO1FBQUMsRUFBQ0MsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRUMsVUFBVSxFQUFTOztJQUM5RSxNQUFNLEVBQUNDLFFBQVEsRUFBQyxHQUFHTix3REFBT0EsQ0FBUztRQUMvQk8sZUFBZTtZQUNYQyxNQUFNTDtRQUNWO0lBQ0o7SUFFQUosZ0RBQVNBLENBQUM7UUFDTixNQUFNVSxZQUFZQyxhQUFhQyxPQUFPLENBQUM7UUFDdkMsSUFBSUYsV0FBVztZQUNYLE1BQU1HLGNBQWNDLEtBQUtDLEtBQUssQ0FBQ0wsV0FBV00sTUFBTSxDQUFDLENBQUNDLEtBQXNCQSxHQUFHQyxTQUFTLEtBQUtmLFFBQVFnQixFQUFFO1lBQ25HUixhQUFhUyxPQUFPLENBQUMsYUFDakJOLEtBQUtPLFNBQVMsQ0FBQzttQkFBSVI7Z0JBQ2Y7b0JBQUNLLFdBQVdmLFFBQVFnQixFQUFFO29CQUFFRyxZQUFZbkIsUUFBUW1CLFVBQVU7b0JBQUVDLFdBQVduQixhQUFhQztnQkFBVzthQUM5RjtRQUVULE9BQU07WUFDRk0sYUFBYVMsT0FBTyxDQUFDLGFBQ2pCTixLQUFLTyxTQUFTLENBQUM7Z0JBQUM7b0JBQUNILFdBQVdmLFFBQVFnQixFQUFFO29CQUFFRyxZQUFZbkIsUUFBUW1CLFVBQVU7b0JBQUVDLFdBQVduQixhQUFhQztnQkFBVzthQUFFO1FBRXJIO0lBQ0osR0FBRTtRQUFDQTtRQUFhRDtLQUFXO0lBRTNCLHFCQUNJLDhEQUFDTix3R0FBUUE7UUFFTDBCLElBQUk7WUFBRSxvQ0FBb0M7Z0JBQUVDLFFBQVE7WUFBRTtRQUFFOzswQkFFeEQsOERBQUM1Qix3R0FBU0E7Z0JBQUM2QixXQUFVO2dCQUFLQyxPQUFNOzBCQUMzQnhCLFFBQVF5QixJQUFJOzs7Ozs7MEJBRWpCLDhEQUFDL0Isd0dBQVNBO2dCQUFDZ0MsT0FBTTswQkFBUzFCLFFBQVFtQixVQUFVOzs7Ozs7MEJBQzVDLDhEQUFDekIsd0dBQVNBO2dCQUFDZ0MsT0FBTTswQkFBU3hCOzs7Ozs7MEJBQzFCLDhEQUFDUix3R0FBU0E7Z0JBQUNnQyxPQUFNOzBCQUNiLDRFQUFDOUIsd0dBQVNBO29CQUNOK0IsT0FBTTtvQkFDTkMsTUFBSztvQkFDTEMsU0FBUTtvQkFDUCxHQUFHekIsU0FBUyxRQUFRO3dCQUNqQjBCLGVBQWU7d0JBQ2ZDLFVBQVUsQ0FBQ0MsUUFBVUEsUUFBUTtvQkFDakMsRUFBRTtvQkFDRkEsT0FBTy9CO29CQUNQZ0MsVUFBVSxDQUFDQyxJQUFxQy9CLFdBQVcrQixHQUFHbEM7Ozs7Ozs7Ozs7OztPQWxCakVBLFFBQVF5QixJQUFJOzs7OztBQXVCN0IsRUFBQztHQWhEWTFCOztRQUNVRCxvREFBT0E7OztLQURqQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3dpZGdldC9saXN0UHJvZHVjdHMvdWkvcHJvZHVjdEl0ZW0udHN4PzM5YTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IElQcm9kdWN0LCBJUHJvZHVjdEZpbmFsfSBmcm9tIFwiQC9zaGFyZWQvYXBpL3R5cGVzL3Byb2R1Y3RcIlxyXG5pbXBvcnQgeyBUYWJsZUNlbGwsIFRhYmxlUm93LCBUZXh0RmllbGQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiXHJcbmltcG9ydCB7IENoYW5nZUV2ZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgcHJvZHVjdDogSVByb2R1Y3Q7XHJcbiAgICBhY3R1YWxSZXN0OiBudW1iZXI7XHJcbiAgICBhY2NvdW50UmVzdDogbnVtYmVyO1xyXG4gICAgaGFuZGxlRmFjdDogKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBwcm9kdWN0OiBJUHJvZHVjdCkgPT4gdm9pZFxyXG59XHJcblxyXG50eXBlIElucHV0cyA9IHtcclxuICAgIGZhY3Q6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdEl0ZW0gPSAoe3Byb2R1Y3QsIGFjdHVhbFJlc3QsIGFjY291bnRSZXN0LCBoYW5kbGVGYWN0fTogSVByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7cmVnaXN0ZXJ9ID0gdXNlRm9ybTxJbnB1dHM+KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWVzOiB7XHJcbiAgICAgICAgICAgIGZhY3Q6IGFjdHVhbFJlc3QsXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAvLyDRgdC+0YXRgNCw0L3QtdC90LjQtSDQtNCw0L3QvdGL0YUg0LTQu9GPINGE0LDQudC70LAg0YEg0YDQsNC30L3QvtGB0YLRjNGOINC+0YHRgtCw0YLQutC+0LJcclxuICAgICAgICBjb25zdCBmaW5hbFJlc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmluYWxSZXN0JylcclxuICAgICAgICBpZiAoZmluYWxSZXN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpdGhvdXRJdGVtID0gSlNPTi5wYXJzZShmaW5hbFJlc3QpLmZpbHRlcigoZWw6IElQcm9kdWN0RmluYWwpID0+IGVsLnByb2R1Y3RJZCAhPT0gcHJvZHVjdC5pZClcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbmFsUmVzdCcsIFxyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoWy4uLndpdGhvdXRJdGVtLCBcclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdElkOiBwcm9kdWN0LmlkLCB2ZW5kb3JDb2RlOiBwcm9kdWN0LnZlbmRvckNvZGUsIGRpZmZlcmVudDogYWN0dWFsUmVzdCAtIGFjY291bnRSZXN0fVxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbmFsUmVzdCcsIFxyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoW3twcm9kdWN0SWQ6IHByb2R1Y3QuaWQsIHZlbmRvckNvZGU6IHByb2R1Y3QudmVuZG9yQ29kZSwgZGlmZmVyZW50OiBhY3R1YWxSZXN0IC0gYWNjb3VudFJlc3R9XSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH0sW2FjY291bnRSZXN0LCBhY3R1YWxSZXN0XSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUYWJsZVJvd1xyXG4gICAgICAgICAgICBrZXk9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgc3g9e3sgJyY6bGFzdC1jaGlsZCB0ZCwgJjpsYXN0LWNoaWxkIHRoJzogeyBib3JkZXI6IDAgfSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Byb2R1Y3QudmVuZG9yQ29kZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e2FjY291bnRSZXN0fTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCk0LDQutGC0LjRh9C10YHQutC40Lkg0L7RgdGC0LDRgtC+0LpcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiZmFjdFwiLCB7IC8vINCy0LDQu9C40LTQsNGG0LjRjyDQsdC10Lcg0YLQuNC/0LAgbnVtYmVyLCDRgNCw0LHQvtGC0LDQtdGCINGB0LvQsNCx0L5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVBc051bWJlcjogdHJ1ZSwgLy8g0LHQuNCx0LvQuNC+0YLQtdC60LAgcmVhY3QtaG9vay1mb3JtINCyINC00LDQvdC90L7QvCDRgdC70YPRh9Cw0LUg0LvQuNGI0L3Rj9GPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAodmFsdWUpID0+IHZhbHVlID4gMCxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWN0dWFsUmVzdH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiBoYW5kbGVGYWN0KGUsIHByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiVGFibGVDZWxsIiwiVGFibGVSb3ciLCJUZXh0RmllbGQiLCJ1c2VFZmZlY3QiLCJ1c2VGb3JtIiwiUHJvZHVjdEl0ZW0iLCJwcm9kdWN0IiwiYWN0dWFsUmVzdCIsImFjY291bnRSZXN0IiwiaGFuZGxlRmFjdCIsInJlZ2lzdGVyIiwiZGVmYXVsdFZhbHVlcyIsImZhY3QiLCJmaW5hbFJlc3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwid2l0aG91dEl0ZW0iLCJKU09OIiwicGFyc2UiLCJmaWx0ZXIiLCJlbCIsInByb2R1Y3RJZCIsImlkIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInZlbmRvckNvZGUiLCJkaWZmZXJlbnQiLCJzeCIsImJvcmRlciIsImNvbXBvbmVudCIsInNjb3BlIiwibmFtZSIsImFsaWduIiwibGFiZWwiLCJ0eXBlIiwidmFyaWFudCIsInZhbHVlQXNOdW1iZXIiLCJ2YWxpZGF0ZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widget/listProducts/ui/productItem.tsx\n"));

/***/ })

});