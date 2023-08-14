# SemLookP Widgets

## About The Project

This project includes a widget component library derived from the semantic lookup service 
[SemLookP](https://semanticlookup.zbmed.de/ols/index). The Terminology Service is a repository for biomedical resources 
that aims to provide a single point of access to the latest ontology and terminology versions. User interface (UI) 
functionalities were extracted and implemented as separate widgets to allow integration into other 3rd party services, 
thus simplifying the development of user interfaces and the visualization of semantic information. 

The widgets are built with React and TypeScript and can be used in React applications. SemLookP and the widgets are 
based on the [Ontology Lookup Service (OLS)](https://www.ebi.ac.uk/ols/index), software developed by EBI.
  

## Using this package

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
The library depends on some peer dependencies that must be provided. The dependencies are explained below:

- The widgets are based on Elastic UI components. To load the correct appearance of the widgets, wrap them inside the
  `<EuiProvider>` component. Elastic UI needs following peer dependencies as well to work correctly:

```
npm install @elastic/eui @elastic/datemath @emotion/react moment prop-types
```

For help see [ElasticUI Provider](https://elastic.github.io/eui/#/utilities/provider)

- The HierarchyWidget uses react-query to fetch data. To make the widget work properly, you have to wrap the component inside a `QueryClientProvider`.

```
npm install react-query
```

For help see [QueryClient](https://tanstack.com/query/v4/docs/reference/QueryClient?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/QueryClient)

### Documentation

As documentation we provide a so-called [Storybook](https://nfdi4health.github.io/semlookp-widgets/)  where you can view, build and test all widgets. When you select a widget, you can click on the 'Docs' tab in the top bar to get more information. In the right corner of the displayed widget, you can then click on "Show code" to see a sample code snippet, as shown below:  

<img src="img/example_widget.png"  width="600" height="300">




## Development

### Run Storybook

This project uses [Storybook](https://storybook.js.org/) to develop independent React components. To start the development server, install the dependencies with `npm install` and start Storybook with this command `npm run storybook:react`. The interactive documentation is available via `http://localhost:6006`. For more information, please visit https://storybook.js.org/docs/react/get-started/install/

The project also features a Storybook for HTML versions of the components. To start this Storybook, you have to install the HTML widgets as a local module in the project (see [Build widgets for non-React projects](#build-widgets-for-non-react-projects)). After that, run `npm install` and start the Storybook with `npm run storybook:html`. 

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

If the environment features `npm`, a local module can be created from the output file. To do this, place the adapted version of [esbuild-dynamic-import](https://github.com/RTVision/esbuild-dynamic-import) in `local_modules/dyn-import-plugin/` and all the files generated inside `dist_plainjs/` in `local_modules/semlookp-widgets/` in your project. Now add `"semlookp-widgets": "file:local_modules/semlookp-widgets"` as a dependency in `package.json` and run `npm install`.

### Commit Message Formating 

This project uses [Semantic Release](https://semantic-release.gitbook.io/semantic-release/), i.e. the CI/CD pipeline analyzes the commit messages and automatically performs a release depending on the format. Therefore, please format your commit messages according to https://www.conventionalcommits.org/en/v1.0.0/

## Funding

This work was done as part of the NFDI4Health Consortium and is published on behalf of this Consortium (www.nfdi4health.de). 
It is funded by the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) – project number 442326535.

This work was done at [ZB MED - Information Centre for Life Sciences](https://www.zbmed.de/en/)