'use strict';

const assert = require('assert');
const sut = require('../');

describe('lerna-sample', () => {
  it('plus', () => {
    assert(sut.plus(1, 2) === 3);
  });

  it('time', () => {
    assert(sut.time(2, 3) === 6);
  });
});
