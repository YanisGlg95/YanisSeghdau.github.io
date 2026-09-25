import { useEffect, useRef, useState } from "react";

export function useReveal() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
}

export default function Reveal({ children, as: Tag = "div", className = "", style }) {
  const [ref, inView] = useReveal();
  return (
    <Tag ref={ref} style={style} className={`${className} reveal${inView ? " in" : ""}`}>
      {children}
    </Tag>
  );
}
