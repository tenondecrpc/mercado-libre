/* eslint-disable react/jsx-pascal-case */
import React from "react";
import $ from "styled-components";
const $Product = $.div`
    background-color:white;
    box-shadow: var(--shadow);
    display: flex;
    align-items: center;
    justify_content: center;
`;
const $Price = $.span`
    font-size: 22px;
    margin-top: 5px;
`;
const $ProductInfo = $.div`
    padding:  20px;
    border-top: 1px solid rgba(51,51,51,.1);
    border-radius: 0px 0px var(--radius) var(--radius);
`;
const $Title = $.span`
    font-size: 13px;
    margin-top: 5px;
    display:block;
`;
const $Img = $.img`
    width: 128px;
`;
const $ImageWrapper = $.div`
  border-radius: var(--radius) var(--radius)  0px 0px ;
`
const ProductCard = ({onClick}) => {
  return (
    <$Product className="product" onClick={onClick}>
      <$ImageWrapper className="product__image">
        <$Img src="https://http2.mlstatic.com/D_Q_NP_834027-MLA45450444551_042021-AB.webp" />
      </$ImageWrapper>
      <$ProductInfo className="product__info">
        <$Price className="product__price">$160.000</$Price>
        <$Title className="product__title">Apple iphone 11 pro 256GB Apple iphone 11 pro 256GB</$Title>
      </$ProductInfo>
    </$Product>
  );
};

export default ProductCard;
