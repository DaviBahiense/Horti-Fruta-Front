import React, { useState } from "react";
import styled from "styled-components";

import { CaretUpOutline } from "react-ionicons";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled < 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <CaretUpOutline
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        color={"#DE4E4E"}
        height="50px"
        width="50px"
      />
    </Button>
  );
};

export const Button = styled.div`
  width: 100%;
  position: fixed;
  bottom: 120px;
  left: 97%;
  margin-bottom: 20px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
`;

export default ScrollButton;
