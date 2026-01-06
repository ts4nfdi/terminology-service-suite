export interface LinkedEntity {
  definedBy?: string[];
  iri?: string;
  url?: string;
  numAppearsIn: string;
  hasLocalDefinition: boolean;
  label: string | string[];
  type: string[];
}
