import React from "react";
import Loader from "../components/Loader";

interface Props {
  children: React.ReactNode;
}

const SuspenseContainer = ({ children }: Props) => {
  return <React.Suspense fallback={<Loader />}>{children}</React.Suspense>;
};

export default SuspenseContainer;
