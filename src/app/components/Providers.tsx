"use client";

import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </>
  );
};

export default Providers;
