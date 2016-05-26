[![Build Status](https://travis-ci.org/tiagolpadua/angular-phonecat-styleguided.svg?branch=master)](https://travis-ci.org/tiagolpadua/angular-phonecat-styleguided)

# angular-phonecat-styleguided
Angular Phonecat project refactored to John Papa's opinionated style guide.

# A(nother) Best Practices Seed for AngularJS Apps 

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app. 

It has been forked from the [angular-phonecat](https://github.com/angular/angular-phonecat) project and refactored to use the best practices/style guide written and maintained by John Papa -- [Style Guide](https://github.com/johnpapa/angular-styleguide). 

This seed wires together a basic app, two components/controllers and one service.  There is intentnially minimal build infrastructure.

## Audience 
This seed is intended for beginning Angular developers who want a simple app wired together that:

* reflects best practices for real angularjs apps
* does not overwhelm with "unecessary" tools and process

## Getting Started

To get you started you can simply clone the angular-phonecat-styleguided repository and install the dependencies:

### Prerequisites

You need git to clone the angular-seed-styleguided repository. You can get git from [http://git-scm.com/](http://git-scm.com/).

You must have node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angular-phonecat-styleguided

Clone the angular-phonecat-styleguided repository using [git]:

```bash
git clone https://github.com/tiagolpadua/angular-phonecat-styleguided.git
cd angular-phonecat-styleguided
```
or

```bash
git clone --depth=1 angular-phonecat-styleguided
```

### Tool Dependencies

* `npm`, the [node package manager][npm] for build deps.
* `bower`, a [client-side code package manager][bower] for app deps.

`npm` will automatically invoke bower for you.

```bash
npm install
```

This will result in the following third-part modules.
* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains the angular framework files

### Run the Application

```bash
npm start
```

Now browse to the app at `http://localhost:8000/client/index.html`.


## Directory Layout

Directory Layout follows the [Style Y140](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#style-y140)

## Testing

There are two kinds of tests in the angular-seed-styleguided application: Unit tests and End to End tests.

### Running Unit Tests

Unit tests are written in [Jasmine][jasmine], and run with [Karma Test Runner][karma]. 

* configuration file: `karma.conf.js`
* test files are next to the code and named: `*.spec.js`.

To run, use the npm script:

```bash
npm test
```

Karma will run and stay running watching files for changes, then rerunning the tests.

If you just want a single run then...

```bash
npm run test-single-run
```

### End to end testing

The angular-seed-styleguided app comes with end-to-end tests written in [Jasmine][jasmine] and run with [Protractor][protractor].
 
* the configuration is found at `protractor-conf.js`
* the end-to-end tests are found alongside the components they are testing.

**NOTE: The webserver must be running to test it start it with:**

```bash
npm start
```
To test, run:

```bash
npm run protractor
```

This will download and install the latest version of the stand-alone WebDriver tool if necessary and run protractor using the configuration file.

## Updating Tools and Packages

You can update the tool dependencies by running:

```bash
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```bash
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


### Running the App during Development

```bash
npm start
```

This will run your app in an http server accessible at [http://localhost:8000](http://localhost:8000)

## Continuous Integration

### Travis CI

[Travis CI][travis] is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. The angular-phonecat-styleguided
project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your
tests when you push to GitHub.

You will need to enable the integration between Travis and GitHub. See the Travis website for more
instruction on how to do this.

## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
