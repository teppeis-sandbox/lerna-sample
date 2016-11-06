'use strict';

require('run-with-mocha');

const plus = require('../');
const assert = require('assert');

describe('plus', () => {
  it('plus(1, 2) == 3', () => {
    assert(plus(1, 2) === 3);
  });
});
