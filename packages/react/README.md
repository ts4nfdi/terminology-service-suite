# Usage

### Demo projects:

[A minimal Next.js React app using the NPM React package](https://github.com/ts4nfdi/react-widgets-demo-project)

### Projects, which use the widgets in production:

[TS4NFDI Service Portal](https://github.com/ts4nfdi/service-portal)

## Usage of the NPM package

1. Install the package

```
npm install @ts4nfdi/terminology-service-suite
```

2. Install peer dependencies

```
npm install @elastic/eui@102.1 @emotion/react@11.13.5 react@19.0 react-dom@19.0 react-query@3.39.2 axios@1.1.2
```

3. In the 'Docs' tab of the widgets in the React Storybook, a code snippet is provided in the `Show code` drop-down below the sample widget. Copy the snippet, add into your app and replace with your parameters. See example below:

```
<AutocompleteWidget
  api="https://semanticlookup.zbmed.de/ols/api/"
  placeholder="Search for a Concept"
  selectionChangedEvent={() => {console.log("selectionChangedEvent")}}
/>
```

4. Wrap inside QueryClientProvider  
   The widgets use react-query to fetch data. To make the widgets work properly, you have to wrap the component inside a `QueryClientProvider`. For help see [QueryClient](https://tanstack.com/query/v4/docs/reference/QueryClient?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/QueryClient).

```
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
    <AutocompleteWidget
        ...
    />
</QueryClientProvider>
```

## Hints:

- The TSS is a client library - in a Next.js app, the 'use client'-directive is needed
- We can provide server functions at user request, e.g. `getBreadcrumbData()` to allow server side data fetching. [Pull request](https://github.com/ts4nfdi/terminology-service-suite/pull/269)

# Usage of older versions

Versions older than 5.0 are published at GitHub.

To install the GitHub package, you need to authenticate to GitHub.com. Detailed documentation on this topic can be found [here](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token).

1. Create a Personal Access Token (PAT), see [Creating a personal access token (classic)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic). To download and install packages from a repository, your personal access token must have the `read:packages` [scope](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries), and your user account must have read permission.
2. Create a local `~/.npmrc` file add the following two lines to it. Replace `TOKEN` with your personal access token

```
//npm.pkg.github.com/:_authToken=TOKEN
@ts4nfdi:registry=https://npm.pkg.github.com
```

3. Install the package

```
npm install @ts4nfdi/terminology-service-suite
```

4. Install peer dependencies

```
npm install @elastic/eui@102.1 @emotion/react@11.13.5 @emotion/css@11.13.5 react@19.0 react-dom@19.0 react-query@3.39.2 axios@1.1.2 moment@2.30.1 @elastic/datemath@5.0.3
```

5. Implement as described above.

# Development instructions

https://github.com/ts4nfdi/terminology-service-suite/wiki/Development-instructions
