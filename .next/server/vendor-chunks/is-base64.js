/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-base64";
exports.ids = ["vendor-chunks/is-base64"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-base64/is-base64.js":
/*!*********************************************!*\
  !*** ./node_modules/is-base64/is-base64.js ***!
  \*********************************************/
/***/ (function(module, exports) {

eval("(function(root) {\n  'use strict';\n\n  function isBase64(v, opts) {\n    if (v instanceof Boolean || typeof v === 'boolean') {\n      return false\n    }\n    if (!(opts instanceof Object)) {\n      opts = {}\n    }\n    if (opts.hasOwnProperty('allowBlank') && !opts.allowBlank && v === '') {\n      return false\n    }\n\n    var regex = '(?:[A-Za-z0-9+\\\\/]{4})*(?:[A-Za-z0-9+\\\\/]{2}==|[A-Za-z0-9+\\/]{3}=)?';\n\n    if (opts.mime) {\n      regex = '(data:\\\\w+\\\\/[a-zA-Z\\\\+\\\\-\\\\.]+;base64,)?' + regex\n    }\n\n    if (opts.paddingRequired === false) {\n      regex = '(?:[A-Za-z0-9+\\\\/]{4})*(?:[A-Za-z0-9+\\\\/]{2}(==)?|[A-Za-z0-9+\\\\/]{3}=?)?'\n    }\n\n    return (new RegExp('^' + regex + '$', 'gi')).test(v);\n  }\n\n  if (true) {\n    if ( true && module.exports) {\n      exports = module.exports = isBase64;\n    }\n    exports.isBase64 = isBase64;\n  } else {}\n})(this);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtYmFzZTY0L2lzLWJhc2U2NC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxFQUFFLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFOztBQUVqRjtBQUNBLCtDQUErQztBQUMvQzs7QUFFQTtBQUNBLGtDQUFrQyxFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFO0FBQ25GOztBQUVBO0FBQ0E7O0FBRUEsTUFBTSxJQUE4QjtBQUNwQyxRQUFRLEtBQTZCO0FBQ3JDO0FBQ0E7QUFDQSxJQUFJLGdCQUFnQjtBQUNwQixJQUFJLEtBQUssRUFNTjtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL25vZGVfbW9kdWxlcy9pcy1iYXNlNjQvaXMtYmFzZTY0LmpzPzY2NmEiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKHJvb3QpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIGlzQmFzZTY0KHYsIG9wdHMpIHtcbiAgICBpZiAodiBpbnN0YW5jZW9mIEJvb2xlYW4gfHwgdHlwZW9mIHYgPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmICghKG9wdHMgaW5zdGFuY2VvZiBPYmplY3QpKSB7XG4gICAgICBvcHRzID0ge31cbiAgICB9XG4gICAgaWYgKG9wdHMuaGFzT3duUHJvcGVydHkoJ2FsbG93QmxhbmsnKSAmJiAhb3B0cy5hbGxvd0JsYW5rICYmIHYgPT09ICcnKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB2YXIgcmVnZXggPSAnKD86W0EtWmEtejAtOStcXFxcL117NH0pKig/OltBLVphLXowLTkrXFxcXC9dezJ9PT18W0EtWmEtejAtOStcXC9dezN9PSk/JztcblxuICAgIGlmIChvcHRzLm1pbWUpIHtcbiAgICAgIHJlZ2V4ID0gJyhkYXRhOlxcXFx3K1xcXFwvW2EtekEtWlxcXFwrXFxcXC1cXFxcLl0rO2Jhc2U2NCwpPycgKyByZWdleFxuICAgIH1cblxuICAgIGlmIChvcHRzLnBhZGRpbmdSZXF1aXJlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHJlZ2V4ID0gJyg/OltBLVphLXowLTkrXFxcXC9dezR9KSooPzpbQS1aYS16MC05K1xcXFwvXXsyfSg9PSk/fFtBLVphLXowLTkrXFxcXC9dezN9PT8pPydcbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBSZWdFeHAoJ14nICsgcmVnZXggKyAnJCcsICdnaScpKS50ZXN0KHYpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gaXNCYXNlNjQ7XG4gICAgfVxuICAgIGV4cG9ydHMuaXNCYXNlNjQgPSBpc0Jhc2U2NDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGlzQmFzZTY0O1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuaXNCYXNlNjQgPSBpc0Jhc2U2NDtcbiAgfVxufSkodGhpcyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-base64/is-base64.js\n");

/***/ })

};
;