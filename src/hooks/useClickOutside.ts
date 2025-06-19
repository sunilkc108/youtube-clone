import { useEffect, type RefObject } from "react";

const useClickOutside = (
  ref: RefObject<HTMLDivElement | null>,
  setshowNoti: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: globalThis.MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setshowNoti();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setshowNoti]);
};

export default useClickOutside;
