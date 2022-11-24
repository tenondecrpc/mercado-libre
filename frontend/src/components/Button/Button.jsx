/* eslint-disable react/jsx-pascal-case */
import React from "react";
import $ from "styled-components";
const $Button = $.button`
  background-color: #3483fa;
  color: white;
  border: 0;
  padding: 10px 27px;
  border-radius: var(--radius);
  margin: ${(props) => props.margin || "0"};
  transition: .15s background-color ease-in-out;
  :hover{
    background-color: #2968c8;
  }
  width: 90%;
`;

const Button = ({ text, margin }) => {
  return <$Button margin={margin}>{text}</$Button>;
};

export default Button;
