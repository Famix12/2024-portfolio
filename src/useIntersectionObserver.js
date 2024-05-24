// useIntersectionObserver.js
import { useEffect, useRef } from "react";

const useIntersectionObserver = (callback) => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry.target, entry.isIntersecting);
      });
    });

    observerRef.current = observer;

    return () => {
      observer.disconnect();
    };
  }, [callback]);

  const observe = (element) => {
    if (observerRef.current && element) {
      observerRef.current.observe(element);
    }
  };

  return observe;
};

export default useIntersectionObserver;
