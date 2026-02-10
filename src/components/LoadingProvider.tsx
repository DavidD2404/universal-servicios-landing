"use client";
import { createContext, useEffect, useState } from "react";
import Loading from "./Loading";
interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}
const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
});
export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    let isPageLoaded = false;
    const handleLoadComplete = () => {
      if (isPageLoaded) return;
      isPageLoaded = true;
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 50);
    };
    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        handleLoadComplete();
      } else {
        window.addEventListener("load", handleLoadComplete);
      }
    }
    const maxTimer = setTimeout(() => {
      handleLoadComplete();
    }, 3000);
    return () => {
      clearTimeout(maxTimer);
      if (typeof window !== "undefined") {
        window.removeEventListener("load", handleLoadComplete);
      }
    };
  }, []);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <Loading />}
      <div
        className={`transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </LoadingContext.Provider>
  );
}
