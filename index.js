/* Copyright 2016, Wang Wenlin */
"use strict";

exports.then = then;

/**
 * Combine stand-alone error and success continuation into node.js style callback.
 * @param {Function(e)} err - error continuation
 * @param {Function(v)} cb - success continuation
 * @returns {Function(e, v)} - node.js style callback
 */
function then(err, cb) {
  return function (err_, arg, arg2) {
    if (err_) {
      err(err_);
    } else if (arguments.length <= 2) {
      cb(arg);
    } else if (arguments.length <= 3) {
      cb(arg, arg2);
    } else {
      var l = arguments.length;
      var args = new Array(l-1);
      for (var i = 1; i < l; i++) args[i-1] = arguments[i];
      cb.apply(null, args);
    }
  };
}
