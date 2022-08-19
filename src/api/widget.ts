export function getClassName(classid: string) {
  return fetch(
    "https://semanticlookup.zbmed.de/ols/api/ontologies/" +
      encodeURIComponent(classid),
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((s) => s.json())
    .then((s) => {
      return { classID: classid, prefLabel: s.config?.title };
    })
    .catch((s) => {
      return { classID: classid, prefLabel: undefined };
    });
}

export function fetchConceptById(id: string) {
  return fetch(
    "https://semanticlookup.zbmed.de/ols/api/terms/" +
      encodeURIComponent(encodeURIComponent(id)),
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((s) => s.json())
    .then((s) => {
      return { conceptId: id, concept: s?._embedded?.terms[0] };
    });
}

export function autocompleteConcept(
  text: string,
  ontology: string | undefined
) {
  let quert = "";
  if (ontology !== undefined) {
    quert = "&ontology=" + ontology;
  }
  return fetch(
    "https://semanticlookup.zbmed.de/ols/api/select?queryFields=label,synonym,short_form,obo_id&groupField=true&type=class&q=" +
      text +
      quert,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((s) => s.json())
    .then((s) => {
      return s?.response?.docs.map((p: any) => mapOlsToIriAndNameTuple(p));
    });
}

function mapOlsToIriAndNameTuple(item: any) {
  return { iri: item?.iri, label: item?.label };
}

export const fetch_data = (url: string) => {
  return (
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      // eslint-disable-next-line node/handle-callback-err
      .catch((err) => {
        return [];
      })
  );
};

/**
 *
 * @param url Get url with http or https protocol
 * @returns concatinate s to http
 */
export const fix_url = (url: string) => {
  if (url.substr(0, 5) === "http:") {
    return url.replace("http", "https");
  } else {
    return url;
  }
};

/**
 *
 * @param url
 * @returns return url from https to /terms
 */
export const get_url_prefix = (url: string | undefined) => {
  if (url === undefined) return "";
  return fix_url(url.substring(0, url.search("/terms") + 7));
};
