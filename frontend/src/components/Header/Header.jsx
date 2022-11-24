/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Logo from "../Logo";
import Container from "./../Container";
import $ from "styled-components";
import SearchBar from "./../SearchBar";
import FlexWrapper from "./../FlexWrapper";
const $Header = $.header`
  background-color: #fff159;
  margin: 0;
  padding: 7px;
  color: #8f8f8f !important;
  box-shadow: var(--shadow);
`;

const Header = () => {
  return (
    <$Header>
      <Container>
        <FlexWrapper>
          <Logo />
          <SearchBar />
        </FlexWrapper>
      </Container>
    </$Header>
  );
};

export default Header;
