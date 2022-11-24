import React from "react";
import logoDesktop from "./../../assets/img/logoDesktop.png";
import logoMobile from "./../../assets/img/logoMobile.png";
import MediaQuery from "react-responsive";
const Logo = () => {
  return (
    <>
      <MediaQuery maxWidth={991}>
        <img src={logoMobile} alt="Logo" />
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <img src={logoDesktop} alt="Logo" />
      </MediaQuery>
    </>
  );
};

export default Logo;
