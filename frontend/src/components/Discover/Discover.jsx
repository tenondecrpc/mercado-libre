/* eslint-disable react/jsx-pascal-case */
import React from "react";
import FlexWrapper from "./../FlexWrapper";
import DiscoverItem from "./../DiscoverItem";
import Right from "./../../assets/img/discoveryRight.webp";
import $ from "styled-components";
const $Discover = $.div`
   margin: 30px 0;
`;

const Discover = () => {
  return (
    <$Discover>
      <FlexWrapper>
        <DiscoverItem img={Right} />
      </FlexWrapper>
    </$Discover>
  );
};

export default Discover;
