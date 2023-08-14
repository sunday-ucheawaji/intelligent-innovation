import React, { RefObject } from "react";
import SignatureCanvas from "react-signature-canvas";

interface SignatureCaptureProps {
  onEnd: (signature: string) => void;
}

const SignatureCapture: React.FC<SignatureCaptureProps> = ({ onEnd }) => {
  let sigCanvas: RefObject<SignatureCanvas> = React.useRef(null);

  const clear = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
    }
  };

  const saveSignature = () => {
    if (sigCanvas.current) {
      onEnd(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
    }
  };

  return (
    <div>
      <SignatureCanvas ref={sigCanvas} penColor="black" onEnd={saveSignature} />
      <button onClick={clear}>Clear</button>
    </div>
  );
};

export default SignatureCapture;
