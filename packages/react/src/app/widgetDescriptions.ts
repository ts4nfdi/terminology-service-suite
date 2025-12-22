export const AutocompleteDescription = `
The AutocompleteWidget is a component designed to provide autosuggestions for semantic concepts. 
It allows users to search for and select ontology-based terms with enhanced context, metadata, and visual cues. 
It offers seamless interaction with any OLS-based ([Ontology Lookup Service](https://github.com/EBISPOT/OLS)) API.
This widget is a powerful addition to any application requiring ontology search and selection of structured terms, making ontology-based data more accessible and usable for end-users.

#### Key Features:

- **Intuitive search interface with dynamic, responsive search experience**:
Provides real-time autosuggestions as users type and highlights matching portions of suggestions for better usability.  

- **Seamless ontology integration**:
Fetches data directly from OLS-based APIs and displays rich ontology-specific metadata, such as label, term type, description and short form.
The default search is across all text fields in the terminologies, but results are ranked (regardless of their terminology) 
by hits in labels, then synonyms, then definitions, then annotations. 
The OLS system does not provide a feature to change search rankings. 
See the underlying [Lucene Scoring algorithm documentation](https://www.lucenetutorial.com/advanced-topics/scoring.html) for more information.

- **Customizability through a flexible design to adapt to various use cases**:
Supports custom term sets and preselected concepts and is configurable for single or multiple selections depending on user needs.  

- **Rich visualization, clear and meaningful representations of ontology data**:
Displays ontology badges and colored markers to differentiate term types and includes tooltips for detailed term information, enhancing user understanding.  
`.trim();

export const DataContentDescription = `
The DataContentWidget is a dynamic display component designed to provide up-to-date information about the dataset being used in an application. It highlights key statistics and metrics, ensuring users can easily understand the scope and structure of the data at a glance.
This widget is an essential tool for providing users with a snapshot of their dataset, enabling quick assessments and enhancing transparency about the data's content and structure.

#### Key Features:

- **Real-time updates**: 
Displays the last update timestamp to inform users about the freshness of the data and automatically updates as data changes.

- **Comprehensive metrics, summarizes essential dataset statistics**: 
Ontologies and terminologies (the total number of included ontologies or terminologies or vocabularies), 
terms (the count of individual terms or concepts available for use),
properties (number of metadata fields or attributes defined within the dataset) 
and individuals (the total count of specific entities or instances included).  

- **User-friendly presentation**: 
Displays information in a concise, well-organized format with bullet points for easy readability and is designed to complement a dashboard or data overview section.
`.trim();

export const EntityInfoDescription = `
The EntityInfoWidget is a versatile component designed to display detailed information about a specific entity within an ontology or dataset. It provides structured, context-rich insights, enabling users to explore the characteristics, metadata, and relationships of the entity at a glance. 
The widget operates on API responses in the OLS API format (OLS3 or OLS4), and the OLS4 version provides more information, better structure and more possibilities for navigation.

#### Key Features:

- **Rich entity details/metadata**: Including 
labels (the primary name of the entity), synonyms (alternative names or terms associated with the entity),
subsets (groups or categories the entity belongs to),
alternate definitions (additional descriptions or interpretations of the entity's meaning or usage) and
mappings (relationships or equivalencies with other entities or terms).

- **Contributing aource attribution**: Highlights the sources that provide or maintain the entity information, ensuring transparency.

- **Visualization of Relationships**: Displays hierarchical relationships, such as parent-child mappings, and connections within the ontology.

- **Semantic Annotations**: Includes key metadata such as display dame (how the entity is labeled in the UI), 
legacy concept names (previous or deprecated identifiers), 
and hierarchy terms (placement of the entity within the ontology's structure).
`.trim();

export const EntityRelationsDescription = `
The EntityRelationsWidget is a dynamic React component designed to display and explore relationships between ontology entities. It dynamically fetches and presents connections such as types, equivalencies, hierarchies, and other ontology-driven links, offering users an intuitive way to navigate the relationships between entities.
This widget is an essential tool for visualizing ontology structures and understanding the interconnected nature of entities within the dataset.
The widget operates on API responses in the OLS API format (OLS3 or OLS4), and the OLS4 version provides more information, better structure and more possibilities for navigation.

#### Key Features:

- **Entity-specific relation sections**: Automatically organizes entity relations into sections for types like individuals, classes, and properties, including "Type," "Same As," "Disjoint With," "Equivalent To," and "Subentity Of."

- **Dynamic data fetching**: Retrieves and displays entity relation data in real-time, ensuring users always have the latest information.

- **Interactive linked data**: Supports clickable links to navigate related entities, ontologies, or datasets for seamless exploration.
`.trim();

export const GraphViewDescription = `
The GraphViewWidget is an interactive visualization component designed to explore ontology relationships through a graph-based interface. This widget provides users with an intuitive way to examine entities, connections, and hierarchical structures dynamically.
This widget is an essential tool for ontology exploration, enabling users to visually navigate and understand complex relationships between terms and concepts.

#### Key Features:

- **Interactive graph visualization**: 
Displays ontology entities as nodes and their relationships as edges, enabling users to interact by zooming, panning, and dragging elements.

- **Dynamic data updates**: 
Fetches and renders relationship data dynamically to ensure the graph reflects the latest ontology structure.

- **Double-click navigation**: 
Allows users to expand nodes to reveal deeper levels of connections, providing a seamless exploration experience.

- **Root walk mode**: 
Offers an optional "root walk" view, where users can trace paths from root nodes to a selected entity, enhancing contextual understanding.

- **Guided usage and reset functionality**: 
Includes a help popover with usage tips and a reset button to restore the graph to its initial state for ease of navigation.
`.trim();

export const JsonApiDescription = `
The JsonApiWidget is a lightweight and efficient component designed to provide users with direct access to API endpoints through a customizable button interface. 
It simplifies the process of retrieving raw JSON data from an API, making it easy to integrate into dashboards and data exploration tools.

#### Key Features:

- **Direct API access**: 
Allows users to open API endpoints directly in a new browser tab, providing immediate access to raw JSON data for further inspection or use.

- **Customizable button interface**: 
Supports user-defined button text and adjustable button sizes (\`small\`, \`medium\`, or \`large\`), ensuring it can blend seamlessly into various user interfaces.
`.trim();

export const AntelopeApiDescription = `
The AntelopeApiWidget is a lightweight and efficient component designed to provide users with direct access to the Antelope API endpoint through a widget that directly renders the result given a "text" parameter. 

#### Key Features:

- **Direct API access**: 
EDIT EDIT EDIT

- **Customizable inputs**: 
Supports user-defined parameters "text", "threshold" and "language" or the terminology search, ensuring it can be used with the user's own form and integrated into various user interfaces.
`.trim();

export const BreadcrumbDescription = `
The BreadcrumbWidget to display the ontology and CURIE (compact URI) of an entity as badges to indicate the location of an entity within a terminology service. 

#### Key Features:

- **Interactive breadcrumbs**:  
Displays a clickable badge that allows users to navigate back to the parent ontology easily.

- **Customizable color scheme**:  
Supports flexible customization of breadcrumb badge colors (\`colorFirst\` and \`colorSecond\`) to align with application themes.
`.trim();

export const BreadcrumbPresentationDescription = `
The BreadcrumbPresentation is a presentational component for rendering the breadcrumb view.
It is designed to handle display concerns only and does not include any logic for data fetching.
Use this component when you need to separate concerns between presentation and data handling - for example, when fetching the data asynchronously. 
To retrieve the required data, you can use the provided utility function getBreadcrumbData().
This function can be called in your logic or container component, and the resulting data can be passed to BreadcrumbPresentation as props.
`.trim();

export const DescriptionDescription = `
The DescriptionWidget displays the description of an entity retrieved from a terminology service.

#### Key Features:

- **Entity Description Display**: 
Retrieves and displays the description of a specified entity using data from an API response in the OLS API format. 
If no description is available, a default message ("No description available") is shown.

- **Loading and Error Handling**:  
  The widget supports loading states with a spinner and displays appropriate error messages if the description retrieval fails.

- **Customizable Text**: 
The widget allows customization of the displayed description text via the \`descText\` parameter, enabling flexible integration into various contexts.
`.trim();

export const EntityDefinedByDescription = `
The EntityDefinedByWidget displays a list of badges containing the ontologies in which a given entity is defined, 
excluding the ontology currently being viewed.

#### Key Features:

- **Ontology Badges Display**: 
Shows badges for the ontologies in which the entity is defined, excluding the current ontology. 
If more than 5 badges are available, they are collapsed with an option to expand them.

- **Empty State Handling**: 
The widget is empty if no ontology badges are available, ensuring a clean display when the entity is not defined by any ontology.
`.trim();

export const EntityOntoListDescription = `
The EntityOntoListWidget displays a list of badges containing the ontologies that a given entity appears in but is not defined in, excluding the ontology currently being viewed.

#### Key Features:

- **Ontology Badges Display**: 
Shows badges for the ontologies where the entity appears, excluding the current ontology. 
If there are more than 5 badges, they are collapsed, with an option to expand them.

- **Empty State Handling**: 
The widget remains empty if no ontology badges are available, ensuring a clean display when the entity is not associated with any additional ontologies.
`.trim();

export const IriDescription = `
The IriWidget displays a provided IRI as a clickable link, with customizable features such as text color, 
a custom display text, an external icon, and an optional copy-to-clipboard button.

#### Key Features:

- **Clickable IRI Link**: 
Displays the IRI as a link, with an optional custom text to display (\`iriText\`) and the ability to apply a custom color to the text.

- **External Link Icon**: 
Optionally includes an icon to indicate that the link leads to an external resource (\`externalIcon\`).

- **Copy to Clipboard Button**: 
Includes a button to copy the IRI link to the clipboard, with visual feedback indicating the success of the operation. This feature can be toggled on or off via the \`copyButton\` parameter.

- **URL Prefix**: 
Allows for a custom URL prefix (\`urlPrefix\`) to be applied to the IRI before displaying it as a link.

- **Color Customization**: 
Supports flexible color customization for the IRI link text, using either hex, RGB, or predefined color options.
`.trim();

export const MetadataDescription = `
The MetadataWidget provides detailed metadata for a given entity (such as a class, property, or individual) within an ontology. 
The widget displays the entity's title, breadcrumb, IRI, description, and lists of ontologies where the entity appears 
or is defined. It also includes optional tabs for additional information, such as alternative names, hierarchy, 
cross-references, and terminology details. The widget supports both OLS3 and OLS4 API formats, 
with the OLS4 version offering more comprehensive and structured data, as well as enhanced navigation options.

#### Key Features:

- **Entity Title**: 
 Displays the entity's title as a clickable link, which can optionally navigate to an external term link.

- **Breadcrumb Navigation**: 
Provides a breadcrumb trail that allows users to easily navigate back to the parent ontology.

- **IRI Display**: 
Shows the IRI of the entity as a clickable link, allowing for easy access to the resource.

- **Entity Description**: 
Displays the description of the entity to provide additional context about its meaning and usage.

- **Ontology Lists**: 
Shows lists of ontologies where the entity appears and where it is defined, enabling users to explore its context within multiple ontologies.

- **Customizable Tabs**: 
Supports customizable tabs to display additional information, such as alternative names, entity hierarchy, cross-references, and terminology information.
`.trim();

export const AlternativeNameTabDescription = `
The AlternativeNameTabWidget is designed to display a list of alternative names (synonyms) for a given entity, 
such as a class, property, or individual, within an ontology. This widget fetches and displays synonyms from the provided 
entity's metadata, supporting both OLS3 and OLS4 API formats from the OLS API. 
The widget allows users to view various alternative names associated with the entity, enhancing the searchability and 
discoverability of the entity under different terms.

#### Key Features:

- **Synonym Display**: 
Lists all available alternative names (synonyms) for the specified entity, offering users various ways to identify or 
refer to the entity.

`.trim();

export const CrossRefTabDescription = `
The CrossRefTabWidget is a component designed to list cross-references for a given entity, such as a class, property, 
or individual, within an ontology. The widget fetches and displays cross-references associated with the entity, 
leveraging data from both OLS3 and OLS4 API formats. It helps users explore entities that are related or referenced 
across different ontologies, enhancing the entity's context and connection to other terms or concepts.

#### Key Features:

- **Cross-Reference Listing**: 
Displays a list of cross-references for the given entity, showing entities from other ontologies or different contexts that are related to the specified entity.

`.trim();

export const HierarchyDescription = `
The HierarchyWidget is a component designed to display the hierarchical structure of a given entity, especially for classes, 
within an ontology. The widget visualizes the entity's position within the hierarchy, starting from the terminology roots 
and expanding down to the specified entity. Users can interact with the hierarchy, expanding or collapsing nodes to navigate 
through related classes or entities.

This widget is particularly useful for exploring entity hierarchies and understanding the classification of concepts, 
offering a flexible and customizable way to visualize ontology structures.

#### Key Features:

- **Dynamic Hierarchy Display**: 
Displays the hierarchical structure of an entity, showing its position within the overall classification from the terminology roots down to the entity.

- **Expandable Nodes**: 
Users can expand and collapse hierarchy nodes by clicking on the arrow next to each label, making it easy to navigate through different levels of the hierarchy.

- **User-Friendly Interface**: 
The widget is interactive, offering a clear and intuitive way to explore the hierarchical structure of entities. 
It enables users to efficiently navigate and understand relationships between entities.
`.trim();

export const TabDescription = `
The TabWidget is a component to gather AlternativeNames, CrossRefs, Hierarchy and Ontology details. 
`.trim();

export const TitleDescription = `
The TitleDescriptionWidget is a component designed to display the title of an entity, which can represent an ontology, 
class, property, or individual. This widget allows customization in how the title is displayed, offering flexibility 
for different use cases.

#### Key Features:

- **Manual Title Specification**: 
The title text can be manually provided through the \`titleText\` parameter, enabling precise control over the content 
displayed.

- **Dynamic Title Retrieval**: 
If no \`titleText\` is provided, the widget will retrieve and display the title of the entity from the OLS API. 

- **Default Title and Styles**: 
A default title value can be set via the \`defaultValue\` parameter, which will be displayed when the title data is
 unavailable. The widget also supports custom CSS styles, allowing you to define a \`className\` for further styling.
`.trim();

export const OntologyInfoDescription = `
The OntologyInfoWidget is a component designed to display detailed information about an ontology. 
The widget retrieves and presents key metadata related to an ontology, such as its IRI, version IRI, ontology ID, 
version, and number of classes. It also includes additional annotations and creators, offering a comprehensive view 
of the ontology's structure and metadata.

#### Key Features:

- **Ontology Metadata**: 
 Displays critical information such as the ontology's IRI, version IRI, the date it was last loaded, ontology ID, 
 version, and number of classes.

- **Dynamic Data Retrieval**: 
The widget fetches the ontology data via API responses from the OLS API. 
The OLS4 API version provides enhanced data structure, more information, and greater navigation capabilities.

- **Annotations and Creators**: 
Includes a list of annotations and creators related to the ontology, allowing users to view and interact with additional 
details about the ontology.

- **Interactive Links**: 
The widget provides clickable links for the ontology's IRI, version IRI, and creators, allowing users to easily navigate 
to related entities or resources.
`.trim();

export const ResourcesDescription = `
The ResourcesWidget is a versatile component designed to display and manage a list of resources, such as ontologies, 
from a specified terminology or collection. The widget supports paging, sorting, and dynamic actions for each resource, 
making it highly customizable for various use cases. 

#### Key Features:

- **Resource Listing**: 
Displays a list of resources, such as ontologies, in a structured table format, with configurable columns such as 
"Resource Name", "Short Name", "Description", "Version", "Loaded On", and more.

- **Paging and Sorting**: 
The widget allows for pagination and sorting of the displayed resources. 
The number of items per page, page size options, and the default sorting field and direction can be configured through 
widget parameters.

- **Customizable Actions**: 
The last column of the table is dedicated to actions that can be defined for each resource. 
Custom actions, such as download buttons or hyperlinks, can be provided to fit specific use case requirements.

- **Hyperlink Support**: 
Each resource's "Short Name" can be linked to a target URL, allowing users to easily navigate to related pages, 
such as ontology details, with configurable links.
`.trim();

export const SearchBarDescription = `
The SearchBarWidget is a powerful and flexible component that enables users to search for terms within a specific 
terminology or collection. It provides dynamic suggestions based on a query string, enhancing the search experience and 
improving data discoverability.

#### Key Features:

- **Dynamic Search Suggestions**: 
As the user types in the search bar, the widget fetches and displays relevant suggestions from the backend, 
providing real-time feedback based on the entered query string. The suggestions can be customized and fetched from a 
specified terminology or collection.

- **Selection Change Event**: 
The widget allows users to select a term from the provided suggestions. When the selection changes, the widget triggers 
a custom event handler, which can be used to define actions or respond to the selected terms.

- **Search Term Creation**: 
The widget supports the ability to create new search terms on the fly. If the user enters a search term that isn't already 
in the suggestion list, it will be added as a new option, enabling flexibility for diverse search needs.

- **Customizable Placeholder and Query**: 
The widget accepts a \`query\` parameter to initialize the search input and provides an optional \`placeholder\` for 
guidance on what the user should search for, making it adaptable to various use cases.

- **Clearable Search**: 
The widget supports clearing the search input, allowing users to easily reset the search and start a new query.
`.trim();

export const SearchResultsListDescription = `
The SearchResultsListWidget is a versatile and powerful component that displays search results based on the user's query 
and available filters. It integrates with the OLS API to fetch results from the "suggest" endpoint, with enhanced 
functionality when using the OLS4 version of the API. This widget is ideal for displaying large sets of results with 
support for paging, filtering, and navigation.

#### Key Features:

- **Search Results Display**: 
The widget dynamically fetches and displays search results from the OLS API based on the query entered by the user. 
It supports both OLS3 and OLS4 API versions, with the non-legacy version offering more detailed results.

- **Paging & Pagination**: 
Results are displayed with pagination controls, allowing users to navigate through large sets of data easily. 
The number of items per page is configurable, and users can switch between different page sizes 
(10, 25, 50, 100 results per page).

- **Filtering Options**: 
Users can filter search results based on multiple criteria, including type and ontology. 
Filters are updated dynamically based on available facets from the API response. 
The widget supports clearing individual filters or all filters at once.

- **Exact Match & Obsolete Terms**: 
The widget allows toggling options to refine the search, including "exact match" (to match only exact terms) and 
"show only obsolete terms" for filtering deprecated or outdated results.

- **Customizable Hyperlinks**: 
Each result can be linked to a specific URL, allowing users to access detailed information associated with each search result. 
This is configurable through the \`targetLink\` property.

- **Search Bar Integration**: 
The widget integrates with the SearchBarWidget, allowing users to adjust the search term dynamically. 
The selected term from the search bar automatically triggers a new search, and the results are updated accordingly.
`.trim();

export const TermDepictionDescription = `
The TermDepictionWidget is a component designed to display the visual representation (depiction) of a class term referenced 
by its depiction URL. The widget is intended to work with API responses in the OLS (Ontology Lookup Service) API format, 
supporting both OLS3 and OLS4 versions of the API. It is ideal for applications that need to visually represent concepts 
or terms from an ontology.

#### Key Features:

- **Depiction Display**: 
The widget fetches and displays the depiction (image) associated with a specific term, provided via a URL from the OLS API. 

- **Interactive Image Display**: 
Once the image is successfully fetched, it is displayed with a medium size and shadow for enhanced aesthetics. 
The image is clickable, allowing users to expand it and view it in full-screen mode for better clarity.
`.trim();
