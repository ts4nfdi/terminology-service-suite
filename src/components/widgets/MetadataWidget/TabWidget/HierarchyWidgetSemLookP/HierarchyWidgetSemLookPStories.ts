export const ClassHierarchy = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backend_type: "ols",
        iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
        entityType: "class",
        ontologyId: "efo",
    }
};

export const IndividualHierarchy = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backend_type: "ols",
        iri: "http://purl.obolibrary.org/obo/IAO_0000120",
        entityType: "individual",
        ontologyId: "bco",
    }
};

export const PreferredRoots = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backend_type: "ols",
        iri: "",
        entityType: "class",
        ontologyId: "uberon",
        preferredRoots: true
    }
};

export const IncludeObsoleteEntities = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backend_type: "ols",
        iri: "",
        entityType: "class",
        ontologyId: "uberon",
        includeObsoleteEntities: true
    }
};

export const PropertyRoots = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backend_type: "ols",
        iri: "",
        entityType: "property",
        ontologyId: "bco",
    }
};

export const IndividualRoots = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backend_type: "ols",
        iri: "",
        entityType: "individual",
        ontologyId: "bco",
    }
};

export const LargeHierarchy = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backend_type: "ols",
        iri: "http://purl.obolibrary.org/obo/UBERON_2001747",
        entityType: "class",
        ontologyId: "uberon",
    }
};

export const SkosHierarchy = {
    args: {
        apiUrl: "https://api.finto.fi/rest/v1",
        backend_type: "skos",
        iri: "http://www.yso.fi/onto/yso/p864",
        ontologyId: "yso",
    }
};

export const OntoportalHierarchy = {
    args: {
        apiUrl: "https://data.biodivportal.gfbio.org",
        backend_type: "ontoportal",
        iri: "http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",
        ontologyId: "IOC",
        entityType: "class",
        apikey: ""
    }
}