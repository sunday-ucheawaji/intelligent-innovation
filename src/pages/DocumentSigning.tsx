import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import SignatureCapture from "../components/SignatureCapture";

const DocumentSigning = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const documentUrl = "";
  const handleToolSelect = (tool: string) => {
    setSelectedTool(tool);
  };

  const handleSignatureCapture = (signature: string) => {};

  return (
    <div>
      <div>
        <button onClick={() => handleToolSelect("signature")}>Signature</button>
      </div>
      {selectedTool === "signature" && (
        <SignatureCapture onEnd={handleSignatureCapture} />
      )}
      <Document file="/sample.pdf">
        <Page pageNumber={1} />
        {/* Render signatures and other overlays */}
      </Document>
    </div>
  );
};

export default DocumentSigning;
