# widgets-semlookp

## About The Project

This project includes a widget component library derived from the semantic lookup service 
[SemLookP](https://semanticlookup.zbmed.de/ols/index). The Terminology Service is a repository for biomedical resources 
that aims to provide a single point of access to the latest ontology and terminology versions. User interface (UI) 
functionalities were extracted and implemented as separate widgets to allow integration into other 3rd party services, 
thus simplifying the development of user interfaces and the visualization of semantic information. 

The widgets are built with React and TypeScript and can be used in React applications. SemLookP and the widgets are 
based on the [Ontology Lookup Service (OLS)](https://www.ebi.ac.uk/ols/index), software developed by EBI.
The components can be viewed, built and tested with the included Storybook.

## Documentation

[Documentation](http://km.pages.gitlab.zbmed.de/semlookp/widgets-semlookp)

[![Latest Release](https://gitlab.zbmed.de/km/semlookp/widgets-semlookp/-/badges/release.svg)](https://gitlab.zbmed.de/km/semlookp/widgets-semlookp/-/releases)  


## Built With

- [ReactJS 17](https://reactjs.org/blog/2020/10/20/react-v17.html)
- [TypeScript 4.5](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html)
- [Rollup](https://rollupjs.org)
- [Semantic Release](https://github.com/semantic-release/semantic-release)
- [Elastic UI](https://elastic.github.io/eui/#/)
- [Storybook](https://storybook.js.org/)

## Requirements

- [Node.js 16](https://joshtronic.com/2021/05/09/how-to-install-nodejs-16-on-ubuntu-2004-lts/)

## Setup

### Run Storybook

Before starting the storybook for the first time you must run the following command:
```
npm install
```

To start the storybook use the following command:

```
npm run storybook
```
Note: The Storybook uses per default port 6006.


### Install package

To use the module, you have to [authenticate](https://docs.gitlab.com/ee/user/packages/npm_registry/) with a [personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) or deploy token.

Create a `.npmrc` file in your projects root folder.
Paste your authentication token with read and/or write access and the registry link to the file.

```
@km:registry https://gitlab.zbmed.de/api/v4/projects/<project_id>/packages/npm/
//gitlab.zbmed.de/api/v4/projects/<project_id>/packages/npm/:_authToken=<your_token>
```

Install from the command line:
```
 npm install @km/widgets-semlookp
```
Install via package.json:
```
 "@nfdi4health/semlookp-widgets": <version>
```

For help see [NPM registry](https://gitlab.zbmed.de/help/user/packages/npm_registry/index)

#### Other dependencies

- The widgets are based on Elastic UI components. To load the correct appearance of the widgets, wrap them inside the
  `<EuiProvider>` component. Elastic UI needs following peer dependencies as well to work correctly:

```
npm install @elastic/eui @elastic/datemath @emotion/react moment prop-types
```

For help see [ElasticUI Provider](https://elastic.github.io/eui/#/utilities/provider)

- The HierarchyWidget uses react-query to fetch data. To make the widget work properly, you have to wrap the component inside a `QueryClientProvider`.

For help see [QueryClient](https://tanstack.com/query/v4/docs/reference/QueryClient?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/QueryClient)

### Development

#### Publish components

After editing a component the CI/CD pipeline will publish a new package release 
depending on the analysis of [Semantic Release](https://docs.gitlab.com/ee/ci/examples/semantic-release.html). 
The built registry module can then be integrated 
into existing projects. To publish a new release, add the semantic release trigger to the commit message.

Start the commit with:

```
fix: for new patch release
```

```
feat: for new minor release
```

```
feat: for new major release
BREAKING CHANGE: The new breaking change is...
```

The GitLab CI/CD pipeline will then start semantic release,
publish a new package and increase the version number depending on the commit message.


## Funding

This work was done as part of the NFDI4Health Consortium and is published on behalf of this Consortium (www.nfdi4health.de). 
It is funded by the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) – project number 442326535.