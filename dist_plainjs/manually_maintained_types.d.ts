
declare global {
  interface SemLookPWidgets {
    createAutocomplete:(props:{
      api: string;
      parameter?: string;
      selectionChangedEvent: (selectedOption: {
        label: string;
        iri?: string;
        ontology_name?: string;
        type?: string;
      }) => void;
      selectOption?: { label?: string; iri?: string };
      placeholder?: string;
      hasShortSelectedLabel?: boolean;
      allowCustomTerms: boolean;
    })=>void
  }
}

