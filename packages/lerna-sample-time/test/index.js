'use strict';

require('run-with-mocha');

const time = require('../');
const assert = require('assert');

describe('time', () => {
  it('time(2, 3) == 6', () => {
    assert.equal(time(2, 3), 6);
  });
});
