# CodeceptJS Sandbox
This repository is a simple sandbox for an easy automation homework.
The Sandbox is based on [CodeceptJS](https://codecept.io/) framework and uses [Puppeteer](https://codecept.io/helpers/Puppeteer/#puppeteer) as a helper,
so there is no need to download and install anything else.

## How to start
### Prerequisites
You must have `nodejs` isntalled (with `npm`).
Package manager `npm` is already part of `nodejs` installation.
You can download your installation binaries from the [nodejs.org](https://nodejs.org/en/download/) web-pages.

Verify that these commands return your versions of installed `nodeJS` and `npm`.
```
$> node -v
v12.14.0
```
and
```
$> npm -v
6.14.1
```
Note: Most probably you have different version installed, but you shoud be OK.

### Install dependencies
You can install all dependencies by command
```
npm i
```

### Where to place your tests
All tests should be placed in folder `./tests`/ and must end with `*_test.js` sufix.

There is already one file prepared for our homework.
Try to run the project and see what happens.
The first step of your homework is already prepared for you.
Another job well done.
Don't stop now and carry on.

### Run tests
All files matching mask `./tests/*_test.js` are executed by command
```
npm run test
```
