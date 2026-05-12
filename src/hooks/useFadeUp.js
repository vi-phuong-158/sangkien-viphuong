import { useEffect } from "react";

export function useFadeUp(ref) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const elements = root.querySelectorAll(".fu");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("vis"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vis");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ref]);
}
