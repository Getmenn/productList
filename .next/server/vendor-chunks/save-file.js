"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/save-file";
exports.ids = ["vendor-chunks/save-file"];
exports.modules = {

/***/ "(ssr)/./node_modules/save-file/index.js":
/*!*****************************************!*\
  !*** ./node_modules/save-file/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\r\n * Save file in node\r\n *\r\n * @module save-file\r\n */\r\n\r\n\r\nvar writeFile = __webpack_require__(/*! write */ \"(ssr)/./node_modules/write/index.js\")\r\nvar ab = __webpack_require__(/*! to-array-buffer */ \"(ssr)/./node_modules/to-array-buffer/index.js\")\r\nvar isBuffer = __webpack_require__(/*! is-buffer */ \"(ssr)/./node_modules/is-buffer/index.js\")\r\n\r\nmodule.exports = save\r\nmodule.exports.save = save\r\n\r\nfunction save (data, filename, write) {\r\n\t// swap data/filename\r\n\tif (typeof data === 'string') {\r\n\t\t// writing string to string - take the lengthier\r\n\t\tif (typeof filename !== 'string' || filename.length > data.length) {\r\n\t\t\tvar x = filename\r\n\t\t\tfilename = data\r\n\t\t\tdata = x\r\n\t\t}\r\n\t}\r\n\r\n\tif (!isBuffer(data)) {\r\n\t\tdata = Buffer.from(ab(data) || data)\r\n\t}\r\n\r\n\tif (!write) write = writeFile\r\n\treturn write(filename, data)\r\n}\r\n\r\nmodule.exports.saveSync = function saveSync (data, filename) {\r\n\treturn save(data, filename, writeFile.sync)\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2F2ZS1maWxlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDWTtBQUNaO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsa0RBQU87QUFDL0IsU0FBUyxtQkFBTyxDQUFDLHNFQUFpQjtBQUNsQyxlQUFlLG1CQUFPLENBQUMsMERBQVc7QUFDbEM7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL25vZGVfbW9kdWxlcy9zYXZlLWZpbGUvaW5kZXguanM/NjIxMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogU2F2ZSBmaWxlIGluIG5vZGVcclxuICpcclxuICogQG1vZHVsZSBzYXZlLWZpbGVcclxuICovXHJcbid1c2Ugc3RyaWN0J1xyXG5cclxudmFyIHdyaXRlRmlsZSA9IHJlcXVpcmUoJ3dyaXRlJylcclxudmFyIGFiID0gcmVxdWlyZSgndG8tYXJyYXktYnVmZmVyJylcclxudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2F2ZVxyXG5tb2R1bGUuZXhwb3J0cy5zYXZlID0gc2F2ZVxyXG5cclxuZnVuY3Rpb24gc2F2ZSAoZGF0YSwgZmlsZW5hbWUsIHdyaXRlKSB7XHJcblx0Ly8gc3dhcCBkYXRhL2ZpbGVuYW1lXHJcblx0aWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xyXG5cdFx0Ly8gd3JpdGluZyBzdHJpbmcgdG8gc3RyaW5nIC0gdGFrZSB0aGUgbGVuZ3RoaWVyXHJcblx0XHRpZiAodHlwZW9mIGZpbGVuYW1lICE9PSAnc3RyaW5nJyB8fCBmaWxlbmFtZS5sZW5ndGggPiBkYXRhLmxlbmd0aCkge1xyXG5cdFx0XHR2YXIgeCA9IGZpbGVuYW1lXHJcblx0XHRcdGZpbGVuYW1lID0gZGF0YVxyXG5cdFx0XHRkYXRhID0geFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKCFpc0J1ZmZlcihkYXRhKSkge1xyXG5cdFx0ZGF0YSA9IEJ1ZmZlci5mcm9tKGFiKGRhdGEpIHx8IGRhdGEpXHJcblx0fVxyXG5cclxuXHRpZiAoIXdyaXRlKSB3cml0ZSA9IHdyaXRlRmlsZVxyXG5cdHJldHVybiB3cml0ZShmaWxlbmFtZSwgZGF0YSlcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuc2F2ZVN5bmMgPSBmdW5jdGlvbiBzYXZlU3luYyAoZGF0YSwgZmlsZW5hbWUpIHtcclxuXHRyZXR1cm4gc2F2ZShkYXRhLCBmaWxlbmFtZSwgd3JpdGVGaWxlLnN5bmMpXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/save-file/index.js\n");

/***/ })

};
;