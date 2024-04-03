# SemLookP Widgets
[Latest demo and documentation](https://nfdi4health.github.io/semlookp-widgets/latest/)

[All versions](https://nfdi4health.github.io/semlookp-widgets/)

If you are missing a version of the documentation, please open an issue.

## About The Project

This project includes a widget component library derived from the semantic lookup service 
[SemLookP](https://semanticlookup.zbmed.de/ols/index). The Terminology Service is a repository for biomedical resources 
that aims to provide a single point of access to the latest ontology and terminology versions. User interface (UI) 
functionalities were extracted and implemented as separate reusable components (widgets) to allow integration into other 3rd party services, 
thus simplifying the development of user interfaces and the visualization of semantic information. 

The widgets are built with React and TypeScript and can be used in React applications as well as plain JavaScript projects. SemLookP and the widgets are 
based on the [Ontology Lookup Service (OLS)](https://www.ebi.ac.uk/ols/index), software developed by EBI.
  

## Using this package

A demo project and step by step instruction on how to integrate a widget in a React app can be found here: https://github.com/nfdi4health/semlookp-widgets-demo

This package is published as source code and compiled as an npm package on [GitHub.com](https://github.com/nfdi4health/semlookp-widgets/). To install the package, you need to authenticate to GitHub.com. Detailed documentation on this topic can be found [here](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token).

In short: add the following two lines to your local npm configuraiton `~/.npmrc`. Replace `TOKEN` with your personal access token (classic).
```
//npm.pkg.github.com/:_authToken=TOKEN
@nfdi4health:registry=https://npm.pkg.github.com
```

Once npm is configured you can install the library using:
```
npm install @nfdi4health/semlookp-widgets
```

For a list of available versions, see our [release page](https://github.com/nfdi4health/semlookp-widgets/releases) or the [npm repository](https://github.com/nfdi4health/semlookp-widgets/pkgs/npm/semlookp-widgets)

### Peer dependencies
The library depends on some peer dependencies that must be provided.

```
npm install @elastic/eui @elastic/datemath @emotion/react moment prop-types react-query react-query axios@1.1.2
```

- The widgets are based on Elastic UI components. To load the correct appearance of the widgets, wrap them inside the
  `<EuiProvider>` component. For help see [ElasticUI Provider](https://elastic.github.io/eui/#/utilities/provider)

- The HierarchyWidget uses react-query to fetch data. To make the widget work properly, you have to wrap the component inside a `QueryClientProvider`.
For help see [QueryClient](https://tanstack.com/query/v4/docs/reference/QueryClient?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/QueryClient)

### Documentation

As documentation we provide a so-called [Storybook](https://nfdi4health.github.io/semlookp-widgets/)  where you can view, build and test all widgets. When you select a widget, you can click on the 'Docs' tab in the top bar to get more information. In the right corner of the displayed widget, you can then click on "Show code" to see a sample code snippet, as shown below:  

<img alt="autocomplete-sample-code" src="img/example_widget.png"  width="600" height="300">




## Development

### Development requirements

- Node v16.13.1
- NPM v8.19.2

To install the package for development, it may be necessary to move the `peerDependencies` in the `package.json` to the `devDependencies` section, if the corresponding modules are not present on your machine.

IMPORTANT NOTE:  To build the package, they must be defined as peerDependencies to avoid dependency conflicts in the consumer projects.

### Authenticate
[
]()Add the following two lines to your local npm configuraiton `~/.npmrc`. Replace `TOKEN` with your personal access token (classic). You need to have access to a ZB MED project for developing the widgets - please contact the development team.

```
@zbmed:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TOKEN
```

### Run Storybook

This project uses [Storybook](https://storybook.js.org/) to develop independent React components. To start the development server, install the dependencies with `npm install` and start Storybook with this command `npm run storybook:react`. The interactive documentation is available via `http://localhost:6006`. For more information, please visit https://storybook.js.org/docs/react/get-started/install/

The project also features a Storybook for HTML versions of the components. To start this Storybook, you have to install the HTML widgets as a local module in the project (see [Build widgets for non-React projects](#build-widgets-for-non-react-projects)). After that, run `npm install` and start the Storybook with `npm run storybook:html`.  The interactive documentation is available via `http://localhost:6007`.

The React and HTML components can be combined in one Storybook using `npm run storybook`. Notice that, for this to work, the React Storybook has to be running at `http://localhost:6006` and the HTML Storybook at `http://localhost:6007`.

### Build widgets for React projects

`npm run build` builds the standard React widgets. It uses rollup and the output can be found in `dist/esm/`.

### Build widgets for non-React projects

`npm run build:plainJS` (WIP) builds the widgets for non-React projects. It uses esbuild and the output can be found in `dist_plainjs/`. This process uses an adapted version of the community plugin [esbuild-dynamic-import](https://github.com/RTVision/esbuild-dynamic-import). The required adaptations can be found in PRs [#9](https://github.com/RTVision/esbuild-dynamic-import/pull/9) and [#10](https://github.com/RTVision/esbuild-dynamic-import/pull/10). The adapted version needs to be built and placed in `local_modules/dyn-import-plugin/`. 

To use the widgets in a plain javascript environment, embed the output file in a script tag in the head of an `html` file and include a link to a stylesheet for Elastic UI:

```html
<script type="text/javascript" src="path/to/semlookp_widgets.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@elastic/eui@62.2.4/dist/eui_theme_light.css">
```

A DataContentWidget, for example, is then created as follows:

```html
<div id="datacontentwidget"></div>

<script>
  let container = document.getElementById('datacontentwidget');
  window['SemLookPWidgets'].createDataContent(
      {api:"https://semanticlookup.zbmed.de/api/",}, container);
</script>
```

For further information on the usage of the HTML widgets, please visit the interactive documentation in the [HTML Storybook](#run-storybook).

If the environment features `npm`, a local module can be created from the output file. To do this, place the adapted version of [esbuild-dynamic-import](https://github.com/RTVision/esbuild-dynamic-import) in `local_modules/dyn-import-plugin/` and all the files generated inside `dist_plainjs/` in `local_modules/semlookp-widgets/` in your project. Now add `"semlookp-widgets": "file:local_modules/semlookp-widgets"` as a dependency in `package.json` and run `npm install`.

### Commit Message Formating 

This project uses [Semantic Release](https://semantic-release.gitbook.io/semantic-release/), i.e. the CI/CD pipeline analyzes the commit messages and automatically performs a release depending on the format. Therefore, please format your commit messages according to https://www.conventionalcommits.org/en/v1.0.0/

### Test the package locally

When developing a new version of widgets, it might be helpful to include the current locally developed version in another consumer project. Changes in the widgets can be tested before publishing a new release. Two methods are described in the following.

#### Publish package locally for testing
Build the package locally in the widgets project and install it in the consumer project for testing:

To prevent unexpected behaviour remove the `node_modules` folder and `package-lock.json` file in the widgets project before using 

```npm install```

```npm run build```

```npm pack```

A `.tgz` folder will be created with the bundled module. Add `"@nfdi4health/semlookp-widgets": "file:../path/to/nfdi4health-semlookp-widgets-1.17.4.tgz",` to your package.json of the consumer project and do `npm install`. 

#### Link the widgets locally for testing
Link the widgets project to the consumer project for testing/development:

Run the following commands in the widgets project:

Build the widgets: ```npm run build --if-present```

Link the peer dependencies from the consumer project: ```npm link path/to/consumer/node_modules/react path/to/consumer/node_modules/react-query path/to/consumer/node_modules/@emotion/react path/to/consumer/node_modules/axios```

Run the following command in the consumer project: ```npm link path/to/widgets-project-root```

Start the application: ```npm start```

## Funding

This work was done as part of the NFDI4Health Consortium and is published on behalf of this Consortium (www.nfdi4health.de). 
It is funded by the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) – project number 442326535.

This work was done at [ZB MED - Information Centre for Life Sciences](https://www.zbmed.de/en/)
