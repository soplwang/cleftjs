/* Copyright 2016, Wang Wenlin */
"use strict";

const assert = require('assert');
const util = require('util');
const then = require('../').then;

describe('cleft.js', function () {
  describe('then()', function () {
    it('split err from callbacks', function () {
      then(null, function (res) {
        assert.equal(res, 1);
      })(null, 1);

      then(function (e) {
        assert.equal(e.message, 'err');
      })(Error('err'));
    });

    it('support multiple params', function () {
      then(null, function (res, r2, r3) {
        assert.equal(res, 1);
        assert.equal(r2, 2);
        assert.equal(r3, 3);
      })(null, 1, 2, 3);
    });
  });
});
