"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Loading from "./Loading";
interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}
const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
});
export const useLoading = () => useContext(LoadingContext);
export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const startTime = Date.now();
    const minLoadingTime = 300;
    let isPageLoaded = false;
    const handleLoadComplete = () => {
      if (isPageLoaded) return;
      isPageLoaded = true;
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setShowContent(true), 100);
      }, remainingTime);
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
