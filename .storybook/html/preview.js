export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
    options: {
      storySort: {
       order: [
         "Search",
         "Entity Metadata",
         "Additional Entity Metadata",
         "Ontology Metadata",
         "Hierarchy and Graph",
         "API",
         "Terminology Service"
       ],
        method: "alphabetical"
      }
    }
};
