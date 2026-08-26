import { useEffect, useRef, useState } from "react";

/**
 * Tracks scroll position to toggle the "scrolled" (blur/shadow) state
 * and the "hidden" (auto-hide on scroll-down) state for the navbar.
 */
export const useNavbarScroll = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      setScrolled(currentScrollPosition > 20);

      if (
        currentScrollPosition > lastScrollPosition.current &&
        currentScrollPosition > 100
      ) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollPosition.current = currentScrollPosition;
    };

    handleScroll(); // check initial position
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrolled, hidden };
};
