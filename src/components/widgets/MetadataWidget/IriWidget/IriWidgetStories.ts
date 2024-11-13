import {
    colorArgType,
    colorSecondArgType, copyButtonArgType,
    externalIconArgType,
    iriArgType,
    iriTextArgType, urlPrefixArgType
} from "../../../../stories/storyArgs";

export const IriWidgetStoryArgTypes = {
    ...colorArgType,
    ...iriArgType,
    ...iriTextArgType,
    ...externalIconArgType,
    ...urlPrefixArgType,
    ...copyButtonArgType
}

export const IriWidgetStoryArgs = {
    iri: "",
    color: "",
    iriText: "",
    urlPrefix: "",
    externalIcon: true,
}

export const IriWidget1 = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    }
};


export const withoutExternalIcon = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
        externalIcon: false,
    }
};


export const withCopyButton = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
        copyButton: 'left',
    }
};


export const withUrlPrefix = {
    args: {
        iri: "http://purl.obolibrary.org/obo/OBI_0000070",
        urlPrefix: "https://terminology.nfdi4chem.de/ts/ontologies/vibso/terms?iri=",
    }
};