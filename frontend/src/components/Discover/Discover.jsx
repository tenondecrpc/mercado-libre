/* eslint-disable react/jsx-pascal-case */
import React from "react";
import FlexWrapper from "./../FlexWrapper";
import DiscoverItem from "./../DiscoverItem";
import $ from "styled-components";
const $Discover = $.div`
   margin: 30px 0;
`;

const Discover = ({ item }) => {
  return (
    <$Discover>
      <FlexWrapper>
        <DiscoverItem item={item} />
      </FlexWrapper>
    </$Discover>
  );
};

export default Discover;
