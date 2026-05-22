"use client";

import {
  EuiBadge,
  EuiButton,
  EuiButtonEmpty,
  EuiDescriptionList,
  EuiEmptyPrompt,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiPanel,
  EuiPopover,
  EuiSelectable,
  EuiSelectableOption,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiTreeView,
} from "@elastic/eui";
import { useState } from "react";
import { OntologySelectWidgetProps } from "../../../app/types";

interface HierarchyNode {
  label: string;
  id: string;
  children?: HierarchyNode[];
}

interface TerminologyOption {
  label: string;
  value: string;
  description: string;
  version?: string;
  publisher?: string;
  lastUpdated?: string;
  collection?: string;
  hierarchy?: HierarchyNode[];
}

const terminologies: TerminologyOption[] = [
  {
    label: "SNOMED CT",
    value: "snomed",
    description: "Systematized Nomenclature of Medicine - Clinical Terms",
    version: "US Edition 2024-03-01",
    publisher: "SNOMED International",
    lastUpdated: "2024-03-01",
    collection: "Clinical",
    hierarchy: [
      {
        label: "Clinical finding",
        id: "404684003",
        children: [
          { label: "Disease", id: "64572001" },
          { label: "Sign or symptom", id: "418799008" },
        ],
      },
      {
        label: "Procedure",
        id: "71388002",
        children: [
          { label: "Surgical procedure", id: "387713003" },
          { label: "Diagnostic procedure", id: "103693007" },
        ],
      },
    ],
  },
  {
    label: "ICD-10",
    value: "icd10",
    description: "International Classification of Diseases, 10th Revision",
    version: "10th Revision",
    publisher: "World Health Organization",
    lastUpdated: "2019",
    collection: "Clinical",
    hierarchy: [
      {
        label: "Certain infectious and parasitic diseases",
        id: "A00-B99",
        children: [
          { label: "Intestinal infectious diseases", id: "A00-A09" },
          { label: "Tuberculosis", id: "A15-A19" },
        ],
      },
      {
        label: "Neoplasms",
        id: "C00-D49",
        children: [
          { label: "Malignant neoplasms", id: "C00-C97" },
          { label: "Benign neoplasms", id: "D10-D36" },
        ],
      },
    ],
  },
  {
    label: "ICD-11",
    value: "icd11",
    description: "International Classification of Diseases 11th Revision",
    version: "11th Revision",
    publisher: "WHO",
    lastUpdated: "2022-01-01",
    collection: "Clinical",
  },
  {
    label: "LOINC",
    value: "loinc",
    description: "Logical Observation Identifiers Names and Codes",
    version: "2.77",
    publisher: "Regenstrief Institute",
    lastUpdated: "2024-02-15",
    collection: "Laboratory",
    hierarchy: [
      {
        label: "Laboratory",
        id: "LAB",
        children: [
          { label: "Chemistry", id: "CHEM" },
          { label: "Hematology", id: "HEM" },
        ],
      },
      {
        label: "Clinical",
        id: "CLIN",
        children: [
          { label: "Vital signs", id: "VS" },
          { label: "Physical exam", id: "PE" },
        ],
      },
    ],
  },
  {
    label: "RxNorm",
    value: "rxnorm",
    description: "Normalized naming system for medications",
    version: "2024-03",
    publisher: "U.S. National Library of Medicine",
    lastUpdated: "2024-03-04",
    collection: "Medication",
    hierarchy: [
      {
        label: "Clinical Drug",
        id: "CD",
        children: [
          { label: "Branded Drug", id: "BD" },
          { label: "Generic Drug", id: "GD" },
        ],
      },
    ],
  },
  {
    label: "NDC",
    value: "ndc",
    description: "National Drug Code",
    version: "Current",
    publisher: "FDA",
    lastUpdated: "2024-03-01",
    collection: "Medication",
  },
  {
    label: "ATC",
    value: "atc",
    description: "Anatomical Therapeutic Chemical Classification",
    version: "2024",
    publisher: "WHO",
    lastUpdated: "2024-01-01",
    collection: "Medication",
  },
  {
    label: "CPT",
    value: "cpt",
    description: "Current Procedural Terminology",
    version: "2024",
    publisher: "American Medical Association",
    lastUpdated: "2024-01-01",
    collection: "Billing",
    hierarchy: [
      {
        label: "Evaluation and Management",
        id: "99201-99499",
      },
      {
        label: "Anesthesia",
        id: "00100-01999",
      },
    ],
  },
  {
    label: "HCPCS",
    value: "hcpcs",
    description: "Healthcare Common Procedure Coding System",
    version: "2024",
    publisher: "CMS",
    lastUpdated: "2024-01-01",
    collection: "Billing",
  },
  {
    label: "MeSH",
    value: "mesh",
    description: "Medical Subject Headings",
    version: "2024",
    publisher: "U.S. National Library of Medicine",
    lastUpdated: "2024-01-01",
    collection: "Research",
    hierarchy: [
      {
        label: "Anatomy",
        id: "A",
        children: [
          { label: "Body Regions", id: "A01" },
          { label: "Musculoskeletal System", id: "A02" },
        ],
      },
    ],
  },
  {
    label: "UMLS",
    value: "umls",
    description: "Unified Medical Language System",
    version: "2024AA",
    publisher: "U.S. National Library of Medicine",
    lastUpdated: "2024-02-15",
    collection: "Research",
  },
  {
    label: "HPO",
    value: "hpo",
    description: "Human Phenotype Ontology",
    version: "2024-03-06",
    publisher: "The Monarch Initiative",
    lastUpdated: "2024-03-06",
    collection: "Research",
  },
  {
    label: "FMA",
    value: "fma",
    description: "Foundational Model of Anatomy",
    version: "4.13.0",
    publisher: "University of Washington",
    lastUpdated: "2021-01-01",
    collection: "Anatomy",
  },
  {
    label: "RadLex",
    value: "radlex",
    description: "Radiology Lexicon",
    version: "4.1",
    publisher: "RSNA",
    lastUpdated: "2023-01-01",
    collection: "Imaging",
  },
  {
    label: "NCIT",
    value: "ncit",
    description: "NCI Thesaurus",
    version: "24.03d",
    publisher: "National Cancer Institute",
    lastUpdated: "2024-03-25",
    collection: "Research",
  },
];

const collections = Array.from(
  new Set(terminologies.map((t) => t.collection).filter(Boolean)),
) as string[];

function OntologySelectWidget(props: OntologySelectWidgetProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTerminologies, setSelectedTerminologies] = useState<string[]>(
    [],
  );
  const [selectedTerminologyValue, setSelectedTerminologyValue] = useState<
    string | null
  >(null);
  const [isFilterPopoverOpen, setIsFilterPopoverOpen] = useState(false);
  const [collectionOptions, setCollectionOptions] = useState<
    EuiSelectableOption[]
  >(collections.map((col) => ({ label: col, checked: undefined })));

  const selectedCollections = collectionOptions
    .filter((opt) => opt.checked === "on")
    .map((opt) => opt.label);

  const filteredTerminologies = terminologies.filter((term) => {
    const matchesSearch =
      term.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCollection =
      selectedCollections.length === 0 ||
      (term.collection && selectedCollections.includes(term.collection));

    return matchesSearch && matchesCollection;
  });

  const toggleTerminology = (value: string) => {
    setSelectedTerminologies((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value],
    );
  };

  const removeTerminology = (value: string) => {
    setSelectedTerminologies((prev) => prev.filter((t) => t !== value));
    if (selectedTerminologyValue === value) {
      setSelectedTerminologyValue(null);
    }
  };

  const handleSubmit = () => {
    console.log("Selected terminologies:", selectedTerminologies);
  };

  const getTerminology = (value: string) => {
    return terminologies.find((t) => t.value === value);
  };

  const selectedTerminology = selectedTerminologyValue
    ? getTerminology(selectedTerminologyValue)
    : null;

  const convertToTreeItems = (nodes?: HierarchyNode[]) => {
    if (!nodes) return [];
    return nodes.map((node) => ({
      label: node.label,
      id: node.id,
      icon: <EuiIcon type="folderClosed" size="s" />,
      children: node.children ? convertToTreeItems(node.children) : undefined,
    }));
  };

  const filterButton = (
    <EuiButton
      size="s"
      iconType="filter"
      onClick={() => setIsFilterPopoverOpen(!isFilterPopoverOpen)}
      iconSide="left"
    >
      Filter
      {selectedCollections.length > 0 && ` (${selectedCollections.length})`}
    </EuiButton>
  );

  return (
    <div style={{ maxWidth: "1400px", width: "100%" }}>
      <EuiTitle size="m">
        <h2>Select Terminologies</h2>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiText size="s" color="subdued">
        <p>Choose the medical terminologies you want to work with</p>
      </EuiText>

      <EuiSpacer size="m" />

      {selectedTerminologies.length > 0 && (
        <>
          <EuiFlexGroup
            wrap
            responsive={false}
            gutterSize="s"
            alignItems="center"
          >
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty
                size="xs"
                iconType="cross"
                onClick={() => setSelectedTerminologies([])}
                color="danger"
              >
                Clear all
              </EuiButtonEmpty>
            </EuiFlexItem>
            {selectedTerminologies.map((value) => {
              const term = getTerminology(value);
              return (
                <EuiFlexItem key={value} grow={false}>
                  <EuiBadge
                    color="primary"
                    iconType="cross"
                    iconSide="right"
                    iconOnClick={() => removeTerminology(value)}
                    iconOnClickAriaLabel={`Remove ${term?.label}`}
                  >
                    {term?.label}
                  </EuiBadge>
                </EuiFlexItem>
              );
            })}
          </EuiFlexGroup>
          <EuiSpacer size="m" />
        </>
      )}

      <EuiFlexGroup gutterSize="s">
        <EuiFlexItem>
          <EuiFieldSearch
            placeholder="Search terminologies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            isClearable
            fullWidth
            compressed
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiPopover
            button={filterButton}
            isOpen={isFilterPopoverOpen}
            closePopover={() => setIsFilterPopoverOpen(false)}
            panelPaddingSize="s"
          >
            <div style={{ width: "250px" }}>
              <EuiSelectable
                options={collectionOptions}
                onChange={(newOptions) => setCollectionOptions(newOptions)}
                aria-label="Filter by collection"
              >
                {(list) => (
                  <>
                    <EuiText size="xs">
                      <strong>Filter by Collection</strong>
                    </EuiText>
                    <EuiSpacer size="xs" />
                    {list}
                  </>
                )}
              </EuiSelectable>
              <EuiSpacer size="xs" />
              <EuiButtonEmpty
                size="xs"
                onClick={() =>
                  setCollectionOptions(
                    collectionOptions.map((opt) => ({
                      ...opt,
                      checked: undefined,
                    })),
                  )
                }
              >
                Clear filters
              </EuiButtonEmpty>
            </div>
          </EuiPopover>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="m" />

      <EuiFlexGroup alignItems="flexStart" gutterSize="m">
        <EuiFlexItem grow={4}>
          <EuiPanel paddingSize="m">
            <EuiFlexGroup
              justifyContent="spaceBetween"
              alignItems="center"
              gutterSize="s"
            >
              <EuiFlexItem grow={false}>
                <EuiTitle size="xs">
                  <h3>Ontologies</h3>
                </EuiTitle>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButtonEmpty
                  size="xs"
                  iconType="plusInCircle"
                  onClick={() => {
                    const allFilteredValues = filteredTerminologies.map(
                      (t) => t.value,
                    );
                    setSelectedTerminologies((prev) => {
                      const newSet = new Set([...prev, ...allFilteredValues]);
                      return Array.from(newSet);
                    });
                  }}
                  disabled={filteredTerminologies.length === 0}
                >
                  Add all
                </EuiButtonEmpty>
              </EuiFlexItem>
            </EuiFlexGroup>

            <EuiSpacer size="s" />

            <div style={{ maxHeight: "500px", overflowY: "auto" }}>
              {filteredTerminologies.length > 0 ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  {filteredTerminologies.map((terminology) => (
                    <div
                      key={terminology.value}
                      onClick={() =>
                        setSelectedTerminologyValue(terminology.value)
                      }
                      style={{
                        padding: "8px",
                        borderLeft:
                          selectedTerminologyValue === terminology.value
                            ? "3px solid #07C"
                            : "3px solid transparent",
                        backgroundColor:
                          selectedTerminologyValue === terminology.value
                            ? "#f5f7fa"
                            : "transparent",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        if (selectedTerminologyValue !== terminology.value) {
                          e.currentTarget.style.backgroundColor = "#fafbfd";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedTerminologyValue !== terminology.value) {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }
                      }}
                    >
                      <EuiFlexGroup
                        justifyContent="spaceBetween"
                        alignItems="center"
                        gutterSize="s"
                      >
                        <EuiFlexItem>
                          <EuiText size="s">
                            <strong>{terminology.label}</strong>
                          </EuiText>
                          {terminology.collection && (
                            <EuiText size="xs" color="subdued">
                              <span>{terminology.collection}</span>
                            </EuiText>
                          )}
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                          <input
                            type="checkbox"
                            checked={selectedTerminologies.includes(
                              terminology.value,
                            )}
                            onChange={(e) => {
                              e.stopPropagation();
                              toggleTerminology(terminology.value);
                            }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                              cursor: "pointer",
                              width: "16px",
                              height: "16px",
                            }}
                          />
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </div>
                  ))}
                </div>
              ) : (
                <EuiText size="s" color="subdued" textAlign="center">
                  <p>No ontologies found</p>
                </EuiText>
              )}
            </div>
          </EuiPanel>
        </EuiFlexItem>

        <EuiFlexItem grow={6}>
          <EuiPanel paddingSize="m" style={{ minHeight: "500px" }}>
            {selectedTerminology ? (
              <>
                <EuiTitle size="s">
                  <h3>{selectedTerminology.label}</h3>
                </EuiTitle>
                <EuiSpacer size="m" />

                <EuiDescriptionList
                  compressed
                  type="column"
                  listItems={[
                    {
                      title: "Description",
                      description: selectedTerminology.description,
                    },
                    {
                      title: "Collection",
                      description: selectedTerminology.collection || "N/A",
                    },
                    {
                      title: "Version",
                      description: selectedTerminology.version || "N/A",
                    },
                    {
                      title: "Publisher",
                      description: selectedTerminology.publisher || "N/A",
                    },
                    {
                      title: "Last Updated",
                      description: selectedTerminology.lastUpdated || "N/A",
                    },
                  ]}
                />

                {selectedTerminology.hierarchy &&
                  selectedTerminology.hierarchy.length > 0 && (
                    <>
                      <EuiSpacer size="m" />
                      <EuiTitle size="xs">
                        <h4>Hierarchy</h4>
                      </EuiTitle>
                      <EuiSpacer size="s" />
                      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                        <EuiTreeView
                          items={convertToTreeItems(
                            selectedTerminology.hierarchy,
                          )}
                          display="compressed"
                          aria-label="Ontology hierarchy"
                        />
                      </div>
                    </>
                  )}
              </>
            ) : (
              <EuiEmptyPrompt
                icon={<EuiIcon type="list" size="xl" />}
                title={<h3>Select an ontology</h3>}
                body={
                  <p>
                    Choose an ontology from the list to view its details and
                    hierarchy
                  </p>
                }
              />
            )}
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
}

// function WrappedOntologySelectWidget(props: OntologySelectWidgetProps) {
//   const queryClient = new QueryClient();
//   return (
//     <EuiProvider colorMode="light">
//       <QueryClientProvider client={queryClient}>
//         <OntologySelectWidget api={props.api} parameter={props.parameter} />
//       </QueryClientProvider>
//     </EuiProvider>
//   );
// }

// export { OntologySelectWidget, WrappedOntologySelectWidget };
export { OntologySelectWidget };
