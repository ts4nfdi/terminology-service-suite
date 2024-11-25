# SemLookP Widgets

Documentation: [Latest](https://ts4nfdi.github.io/terminology-service-suite/comp/latest/), [All Versions](https://ts4nfdi.github.io/terminology-service-suite/)<br>
React package: [Latest](https://github.com/ts4nfdi/terminology-service-suite/pkgs/npm/terminology-service-suite), [All Versions](https://github.com/ts4nfdi/terminology-service-suite/pkgs/npm/terminology-service-suite/versions)<br>
JavaScript modules: [Latest](https://github.com/ts4nfdi/terminology-service-suite/tree/gh-pages/js-modules/latest), [All Versions](https://github.com/ts4nfdi/terminology-service-suite/tree/gh-pages/js-modules)<br>

## About The Project

The SemLookP Widgets project, derived from the [SemLookP](https://semanticlookup.zbmed.de/) project and now hosted on
GitHub under the [TS4NFDI](https://github.com/ts4nfdi) repository, is a collection of interactive widgets designed to
ease the integration of terminology service functions into third-party applications.

In [this Storybook](https://ts4nfdi.github.io/terminology-service-suite/comp/latest/), you will find an interactive documentation of the
widget component library.

The widgets are built using React and TypeScript and can be used in both React and plain HTML applications. The
functionality and arguments are the same for the React and plain HTML versions. Only the code snippet you get when you
click "Show code" in the Storybook is different.

## Using this package and further documentation

Click [here](https://ts4nfdi.github.io/terminology-service-suite/comp/latest/) for detailed instructions on how to use the
package.

## Development

### Development requirements

- Node v16.13.1
- NPM v8.19.2
- ElasticUI ^97.3.1

To install the package for development, it's necessary to additionally install following peer dependencies:

- @elastic/eui@97.3.1 
- @emotion/react@11.13.5 
- react@17.0.2 
- react-dom@17.0.2 
- react-query@3.39.2

```
npm install @elastic/eui@97.3.1 @emotion/react@11.13.5 react@17.0.2 react-dom@17.0.2 react-query@3.39.2
```

### Authenticate

Add the following two lines to your local npm configuration `~/.npmrc`. Replace `TOKEN` with your personal access
token (classic). You need to have access to a ZB MED project for developing the widgets - please contact the development
team.

```
@ts4nfdi:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TOKEN
```

### Run Storybook

#### Manually

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


#### Docker
Before running the storybook via docker, make sure that you provide the needed authentication file `~/.npmrc`. 

First, build (name is arbitrary)

     docker build --tag 'storybook' .

Then, run

    $ docker run \
        -p 6006:6006 -p 6007:6007 -p 6008:6008 \
        --name story \    
        storybook

**Hint**: if you want to run the docker for development, you can use the docker bind mount to link the scripts inside the container to your local ones to check the changes immediately without re-building. Look at: https://docs.docker.com/storage/bind-mounts/#start-a-container-with-a-bind-mount

     $ docker run \
        -p 6006:6006 -p 6007:6007 -p 6008:6008 \
        --name story \    
        --mount type=bind,source=$(pwd)/src,target=/usr/storybook/src \
        storybook

**Note** that the bind only works for the React version. For the HTML version, you need to re-build the storybook.


### Build widgets for React projects

`npm run build` builds the standard React widgets. It uses rollup and the output can be found in `dist/esm/`.

### Build widgets for non-React projects

`npm run build:plainJS` (WIP) builds the widgets for non-React projects. It uses esbuild and the output can be found
in `dist_plainjs/`. This process uses a forked and adapted version of the community
plugin [esbuild-dynamic-import](https://github.com/zbmed/esbuild-dynamic-import).

For further information on the usage of the HTML widgets, please visit the interactive documentation in
the [HTML Storybook](#run-storybook).

#### Testing the JavaScript package in a consumer project locally 
If the environment features `npm`, a local module can be created from the output file. To do this, place all the files
generated inside `dist_plainjs/`
in `local_modules/terminology-service-suite/` in your consumer project. Now
add `"terminology-service-suite": "file:local_modules/terminology-service-suite"` as a dependency in `package.json` and run `npm install`.

### Developing with Storybook

Structure of the project (Code and stories are in the respective widgets directories):

`Widget.tsx` The widget code.   
`WidgetStories.ts` The configuration file for the stories.  
`WidgetStoriesHTML.ts` The HTML widget stories.  
`Widget.stories.tsx` The React widget stories.  
`index.ts` Exports the widget. When creating a new widget, it needs to be exported in all parent index files.

The story arguments for all widgets are defined in the `src/stories/storyArgs.ts`. 
JSDocs comments in the `src/app/types.ts` are overwritten by these arguments. 
We need this file because HTML stories can't directly access JSDocs comments.

#### Defining new widget property
When defining a new property for a widget, it needs to be added 
- in the widget tsx code as prop, in the Wrapper function at the end of the tsx code file
- in `src/app/types.ts`
- in `dist_plainjs/manually_maintained_types.d.ts`
- in `WidgetStories.ts` 

If the property is a function, the React and HTML Storybook args must be separated (see example below),
because actions are handled differently.
```javascript
export const SearchBarWidgetStoryArgsReact = {
  api: "",
  query: "",
  selectionChangedEvent: action('selectionChangedEvent'),
  parameter: "collection=nfdi4health",
};

export const SearchBarWidgetStoryArgs = {
  api: "",
  query: "",
  selectionChangedEvent: () => {return;},
  parameter: "collection=nfdi4health",
};
```

Hint: For correct execution of the HTML Storybook, build files are needed. 
Do a `npm run build:plainJS` before testing the HTML Storybook.

### Commit Message Formatting

This project uses [Semantic Release](https://semantic-release.gitbook.io/semantic-release/), i.e. the CI/CD pipeline
analyzes the commit messages and automatically performs a release depending on the format. Therefore, please format your
commit messages according to https://www.conventionalcommits.org/en/v1.0.0/

In short:
| Release type  | Commit message |
| ------------- | ------------- |
| Fix release  | fix(autocomplete): fix something   |
| Feature relese  | feat(autocomplet): add suggest function  |
| Breaking change  | BREAKING CHANGE: parameter removed  |

**HINT**: Parameter renaming is a BREAKING CHANGE! Type changes of parameter functions are BREAKING CHANGES!

**HINT 2**: Don't use Emoji in commit messages (e.g. :bug:), because it breaks semantic versioning!

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
Add `"@ts4nfdi/terminology-service-suite": "file:../path/to/ts4nfdi-terminology-service-suite-1.17.4.tgz",` (adapt path and file
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

This project is developed by the Terminology Services for NFDI (TS4NFDI) project (as part of the [Base4NFDI
consortium](https://base4nfdi.de/)), and the [NFDI4Health Consortium](https://www.nfdi4health.de).

The NFDI4Health Consortium gratefully acknowledges the financial support of the Deutsche Forschungsgemeinschaft 
(DFG, German Research Foundation) – project number 442326535.

The project is derived from the Semantic Lookup Platform SemLookP which was also developed in part 
by [ZB MED - Information Centre for Life Sciences](https://www.zbmed.de/en/).
