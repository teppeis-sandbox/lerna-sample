@teppeis/lerna-sample
====

A sample monorepo project for lerna.

[![npm version][npm-image]][npm-url]
[![npm downloads][npm-downloads-image]][npm-url]
![Node.js Version Support][node-version]
[![build status][travis-image]][travis-url]
[![dependency status][deps-image]][deps-url]

## How to use

See <a href="packages/lerna-sample/README.md">packages/lerna-sample/README.md</a>.

## How to develop

### Setup

```console
$ git clone git@github.com:teppeis-sandbox/lerna-sample.git
$ cd lerna-sample
$ npm install
$ npm run lerna -- bootstrap
```

### Test

```console
## in a package, testing the package
$ npm test

## in root, testing all packages
$ npm test
```

### Publish

```console
$ npm run lerna -- publish
```

## License

MIT License: Teppei Sato &lt;teppeis@gmail.com&gt;

[npm-image]: https://img.shields.io/npm/v/@teppeis/lerna-sample.svg
[npm-url]: https://npmjs.org/package/@teppeis/lerna-sample
[npm-downloads-image]: https://img.shields.io/npm/dm/@teppeis/lerna-sample.svg
[travis-image]: https://img.shields.io/travis/teppeis-sandbox/lerna-sample/master.svg
[travis-url]: https://travis-ci.org/teppeis-sandbox/lerna-sample
[deps-image]: https://img.shields.io/david/teppeis-sandbox/lerna-sample.svg
[deps-url]: https://david-dm.org/teppeis-sandbox/lerna-sample
[node-version]: https://img.shields.io/badge/Node.js%20support-v6-brightgreen.svg
[coverage-image]: https://img.shields.io/coveralls/teppeis-sandbox/lerna-sample/master.svg
[coverage-url]: https://coveralls.io/github/teppeis-sandbox/lerna-sample?branch=master
[license]: https://img.shields.io/npm/l/@teppeis/lerna-sample.svg
