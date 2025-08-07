# Usage

### Demo projects:
[A minimal JavaScript app using the NPM JavaScript package](https://github.com/ts4nfdi/javascript-npm-widgets-demo-project)  
[A minimal HTML app using the IIFE](https://github.com/ts4nfdi/JS-Widgets-Demo-Project)

### Projects, which use the widgets in production:
[TS4NFDI Service Portal](https://github.com/ts4nfdi/service-portal)

## Usage of the NPM package

1. Install the package
```
npm install @ts4nfdi/terminology-service-suite
```
2. Include the code in your app.js
```
import * as ts4nfdiWidgets from '@ts4nfdi/terminology-service-suite';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('autocomplete-widget-container');

    if (container) {
        ts4nfdiWidgets.createAutocomplete(
            {
                api: "https://semanticlookup.zbmed.de/api/",
                selectionChangedEvent:(() => {
                    console.log("selectionChangedEvent")
                }),
            },
            container
        );
        console.log("TS4NFDI AutocompleteWidget rendered.");
    } else {
        console.error("Autocomplete widget container not found!");
    }
});
```
3. Add to your index.html body:
```
<div id="autocomplete-widget-container" style="width: 500px; margin: 20px;"></div>
<script src="../dist/bundle.js"></script>
```
4. Add to your index.html head:
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ts4nfdi/terminology-service-suite@1.0.34/dist/terminology-service-suite-js.css">
```
5. Build and open in browser

## Usage of the IIFE in a plain HTML without any bundler

1. Include in your .html (use the latest version):
```
<div id="autocomplete" class="module-output-container">
        <p>Loading module content...</p>
    </div>
    
<script src="https://cdn.jsdelivr.net/npm/@ts4nfdi/terminology-service-suite@1.0.15/dist/index.iife.js"></script>

<script type="text/javascript">
    const autocomplete = document.getElementById('autocomplete');

    if (typeof ts4nfdiWidgets !== 'undefined' && typeof ts4nfdiWidgets.createAutocomplete === 'function') {
        ts4nfdiWidgets.createAutocomplete(
            {
                api: "https://semanticlookup.zbmed.de/api/",
                selectionChangedEvent:((props) => {
                    console.log("autocomplete")
                }),
                allowCustomTerms:true,
                singleSelection: true,

            },
            autocomplete
        );
        console.log("createAutocomplete function called successfully.");
    } else {
        // Display an error if the module or function is not found
        console.error("Error: ts4nfdiWidgets module or createAutocomplete function not found.");
        if (autocomplete) {
            autocomplete.innerHTML = '<p>Error: Module not loaded or createAutocomplete function missing. Check console for details.</p>';
        }
    }
</script>
```
code snippets are provided in the `Show code` drop-down in the Storybook.

## Usage of older versions
Versions older than 5.0 are published at GitHub.

To use the widgets in an HTML file, you can either download the modules or use links and embed them in the appropriate tags in the head of the file. You can also include a link to an Elastic UI stylesheet.
The plainJS module and CSS files can be found [here](https://github.com/ts4nfdi/terminology-service-suite/tree/gh-pages/js-modules/).
```
<head>
    <link rel="stylesheet" href="./css/terminology-service-suite.css/">
    <script type="text/javascript" src="./js/terminology-service-suite.js"></script>
</head>
```
OR link files directly from GitHub:
```
<head>
    <link rel="stylesheet" href="https://ts4nfdi.github.io/terminology-service-suite/js-modules/2.0.1/terminology-service-suite.min.css">
    <script type="text/javascript" src="https://ts4nfdi.github.io/terminology-service-suite/js-modules/2.0.1/terminology-service-suite.min.js"></script>
</head>
```
An empty container with an id must be created. This container can then be referenced in a script tag where the widget can now be rendered using the appropriate function. Here's a sample snippet:
```
<body>
    <div id="datacontent_widget"></div>
    <script>
        let widgetContainer = document.getElementById('datacontent_widget');
        window['ts4nfdiWidgets'].createDataContent(
            {
                api: "https://www.ebi.ac.uk/ols4/api/",
            },
            widgetContainer
        );
    </script>
</body>
```

# Development instructions

https://github.com/ts4nfdi/terminology-service-suite/wiki/Development-instructions