'use strict';

const plus = require('@teppeis/lerna-sample-plus');

module.exports = function time(a, b) {
  let result = 0;
  for (let i = 0; i < b; i++) {
    result = plus(result, a);
  }
  return result;
};
