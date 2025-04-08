import { ModelViewerElement } from "@google/model-viewer";

export declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<Partial<ModelViewerElement>>;
    }
  }
}
