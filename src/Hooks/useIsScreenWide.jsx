import { useState, useEffect } from "react";

const useIsScreenWide = () => {
  const [isScreenWide, setIsScreenWide] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1200px)");

    const handleResize = () => setIsScreenWide(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return isScreenWide;
};

export default useIsScreenWide;
