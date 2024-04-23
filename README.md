# SemLookP Widgets

[Latest documentation (Storybook)](https://nfdi4health.github.io/semlookp-widgets/latest/)

[Documentation of all versions](https://nfdi4health.github.io/semlookp-widgets/)

If you are missing a version of the documentation, please open an issue.

## About The Project

The SemLookP Widgets project, derived from the [SemLookP](https://semanticlookup.zbmed.de/) project and now hosted on
GitHub under the [TS4NFDI](https://github.com/ts4nfdi) repository, is a collection of interactive widgets designed to
ease the integration of terminology service functions into third-party applications.

In [this Storybook](https://nfdi4health.github.io/semlookp-widgets/), you will find an interactive documentation of the
widget component library.

The widgets are built using React and TypeScript and can be used in both React and plain HTML applications. The
functionality and arguments are the same for the React and plain HTML versions. Only the code snippet you get when you
click "Show code" in the Storybook is different.

## Using this package and further documentation

Click [here](https://nfdi4health.github.io/semlookp-widgets/latest/) for detailed instructions on how to use the
package.

## Development

### Development requirements

- Node v16.13.1
- NPM v8.19.2
- ElasticUI <88.0.0

To install the package for development, it may be necessary to move the `peerDependencies` in the `package.json` to
the `devDependencies` section, if the corresponding modules are not present on your machine.

IMPORTANT NOTE:  To build the package, they must be defined as peerDependencies to avoid dependency conflicts in the
consumer projects.

You will need access to a sub-widget repository to run the HierarchyWidget (and the entire project) in development mode.
Please contact the SemLookP or TS4NFDI teams. We are working on avoiding this hurdle in the future.

### Authenticate

Add the following two lines to your local npm configuraiton `~/.npmrc`. Replace `TOKEN` with your personal access
token (classic). You need to have access to a ZB MED project for developing the widgets - please contact the development
team.

```
@zbmed:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TOKEN
```

### Run Storybook

This project uses [Storybook](https://storybook.js.org/) to develop independent React components. To start the
development server, install the dependencies with `npm install` and start Storybook with this
command `npm run storybook:react`. The interactive documentation is available via `http://localhost:6006`. For more
information, please visit https://storybook.js.org/docs/react/get-started/install/

The project also features a Storybook for HTML versions of the components. To start this Storybook, you have to install
the HTML widgets as a local module in the project (
see [Build widgets for non-React projects](#build-widgets-for-non-react-projects)). After that, run `npm install` and
start the Storybook with `npm run storybook:html`. The interactive documentation is available
via `http://localhost:6007`.

The React and HTML components can be combined in one Storybook using `npm run storybook`. Notice that, for this to work,
the React Storybook has to be running at `http://localhost:6006` and the HTML Storybook at `http://localhost:6007`.

### Build widgets for React projects

`npm run build` builds the standard React widgets. It uses rollup and the output can be found in `dist/esm/`.

### Build widgets for non-React projects

`npm run build:plainJS` (WIP) builds the widgets for non-React projects. It uses esbuild and the output can be found
in `dist_plainjs/`. This process uses a forked and adapted version of the community
plugin [esbuild-dynamic-import](https://github.com/zbmed/esbuild-dynamic-import).

For further information on the usage of the HTML widgets, please visit the interactive documentation in
the [HTML Storybook](#run-storybook).

If the environment features `npm`, a local module can be created from the output file. To do this, place all the files
generated inside `dist_plainjs/`
in `local_modules/semlookp-widgets/` in your project. Now
add `"semlookp-widgets": "file:local_modules/semlookp-widgets"` as a dependency in `package.json` and run `npm install`.

### Commit Message Formatting

This project uses [Semantic Release](https://semantic-release.gitbook.io/semantic-release/), i.e. the CI/CD pipeline
analyzes the commit messages and automatically performs a release depending on the format. Therefore, please format your
commit messages according to https://www.conventionalcommits.org/en/v1.0.0/

### Test the package locally

When developing a new version of widgets, it might be helpful to include the current locally developed version in
another consumer project. Changes in the widgets can be tested before publishing a new release. Two methods are
described in the following.

#### Publish package locally for testing

Build the package locally in the widgets project and install it in the consumer project for testing:

To prevent unexpected behaviour remove the `node_modules` folder and `package-lock.json` file in the widgets project
before using

```npm install```

```npm run build```

```npm pack```

A `.tgz` folder will be created with the bundled module.
Add `"@nfdi4health/semlookp-widgets": "file:../path/to/nfdi4health-semlookp-widgets-1.17.4.tgz",` (adapt path and file
name) to your package.json
of the consumer project and do `npm install`.

#### Link the widgets locally for testing

Link the widgets project to the consumer project for testing/development:

Run the following commands in the widgets project:

Build the widgets: ```npm run build --if-present```

Link the peer dependencies from the consumer
project: ```npm link path/to/consumer/node_modules/react path/to/consumer/node_modules/react-query path/to/consumer/node_modules/@emotion/react path/to/consumer/node_modules/axios```

Run the following command in the consumer project: ```npm link path/to/widgets-project-root```

Start the application: ```npm start```

## Funding

This project is hosted and developed by Terminology Services for NFDI (TS4NFDI). It is part of the [Base4NFDI
consortium](https://base4nfdi.de/).

The project is derived from the Semantic Lookup Platform SemLookP which was developed in part by the [NFDI4Health
Consortium](www.nfdi4health.de) and the [ZB MED - Information Centre for Life Sciences](https://www.zbmed.de/en/).
