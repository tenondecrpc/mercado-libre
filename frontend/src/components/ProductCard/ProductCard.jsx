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
    border-radius: 0px 0px var(--radius) var(--radius);
`;
const $Title = $.span`
    font-size: 13px;
    margin-top: 5px;
    display:block;
`;
const $Img = $.img`
    width: 128px;
    height: 128px;
`;
const $ImageWrapper = $.div`
  border-radius: var(--radius) var(--radius)  0px 0px ;
`
const ProductCard = ({item, onClick}) => {
  return (
    <$Product className="product" onClick={onClick}>
      <$ImageWrapper className="product__image">
        <$Img src={item.picture} />
      </$ImageWrapper>
      <$ProductInfo className="product__info">
        <$Price className="product__price">$ {item.price?.amount?.toLocaleString()}</$Price>
        <$Title className="product__title">{item.title}</$Title>
      </$ProductInfo>
    </$Product>
  );
};

export default ProductCard;
