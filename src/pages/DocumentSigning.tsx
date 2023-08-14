import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import SignatureCapture from "../components/SignatureCapture";

interface DocumentSigningProps {
  documentUrl: string;
}

const DocumentSigning = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [signatures, setSignatures] = useState<string[]>([]);
  const documentUrl = "";
  const handleToolSelect = (tool: string) => {
    setSelectedTool(tool);
  };

  const handleSignatureCapture = (signature: string) => {
    // Logic to handle placing signature on the document
  };

  return (
    <div>
      <div>
        <button onClick={() => handleToolSelect("signature")}>Signature</button>
        {/* Other tools */}
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
