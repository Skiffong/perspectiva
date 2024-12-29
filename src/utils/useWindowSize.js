import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth]);

  useEffect(() => {
    const resizeHandler = () => setSize([window.innerWidth]);
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return size;
}
