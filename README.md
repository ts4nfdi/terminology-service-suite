# widgets-semlookp

## About The Project

This project includes a widget component library. The widgets are built with React and TypeScript.
The components can be viewed, built and tested with the included Storybook. After editing a component or adding new ones
the CI/CD pipeline will publish a new package release depending on the analysis of semantic release.
The built registry module can then be integrated into existing projects.

## Documentation

[![Latest Release](https://gitlab.zbmed.de/km/semlookp/widgets-semlookp/-/badges/release.svg)](https://gitlab.zbmed.de/km/semlookp/widgets-semlookp/-/releases)
[Documentation](http://km.pages.gitlab.zbmed.de/semlookp/widgets-semlookp)

# Built With

- [ReactJS 17](https://reactjs.org/blog/2020/10/20/react-v17.html)
- [TypeScript 4.5](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html)
- [Rollup](https://rollupjs.org)
- [Semantic Release](https://github.com/semantic-release/semantic-release)
- [Elastic UI](https://elastic.github.io/eui/#/)
- [Storybook](https://storybook.js.org/)

## Run Storybook

Start storybook on port 6006

```
npm run storybook
```

## Publish Components

To publish a new release, add to the commit message the semantic release trigger.

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

[Source](https://docs.gitlab.com/ee/ci/examples/semantic-release.html)

## Use Components

To use the module, create a `.npmrc` file in your projects root folder.
Paste your authentication token with read and/or write access to the registry and the registry link.

```
npm config set @km:registry https://gitlab.zbmed.de/api/v4/projects/550/packages/npm/

npm config set -- '//gitlab.zbmed.de/api/v4/projects/<project_id>/packages/npm/:_authToken' "<your_token>"
```

Then run

```
npm i @km/widgets-semlookp
```

[Source](https://gitlab.zbmed.de/help/user/packages/npm_registry/index)

Note:

- The widgets are based on Elastic UI components. To load the correct appearance of the widgets, wrap them inside the
  `<EuiProvider>` component. Elastic UI needs following peer dependencies as well to work correctly:

```
npm install @elastic/eui @elastic/datemath @emotion/react moment prop-types
```

[Source](https://elastic.github.io/eui/#/utilities/provider)

- If this repository changes its location, you have to make sure that the project ID in the config:

```
npm config set @km:registry https://gitlab.zbmed.de/api/v4/projects/<project_id>/packages/npm/
```

matches the new project ID of this repository.
