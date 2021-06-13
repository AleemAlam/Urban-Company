import React, { useEffect, useRef, useState } from "react";
import { StyledCarousel } from "../StyledComponents/HomePageStyledComponents";
import SearchBar from "./SearchBar";

export default function MyCarousel() {
  const [imgNum, setImgNum] = useState(1);
  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef.current != null) {
      return;
    }
    imgRef.current = setInterval(() => {
      setImgNum((state) => {
        if (state === 2) {
          return 1;
        }
        return state + 1;
      });
    }, 3000);
    return () => {
      clearInterval(imgRef.current);
      imgRef.current = null;
    };
  }, []);
  return (
    <StyledCarousel imgNum={1}>
      <div className="shadow">
        <h1>Home services, on demand.</h1>
        <SearchBar />
      </div>
    </StyledCarousel>
  );
}
