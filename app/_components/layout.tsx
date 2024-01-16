"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Preloader from "./_animation/Preloader";

function Masterlayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {!isLoading ? (
        <>
          <Header />
          {children}
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default Masterlayout;
