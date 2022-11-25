/* eslint-disable react/jsx-pascal-case */
import React from "react";
import $ from "styled-components";
import Button from "./../Button";
const $Item = $.div`
    background-color: white;
    width: 100%;
    height: 800px;
    display: flex;
    padding: 5px 0 5px 30px;
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    :hover{
        transition: box-shadow .1s ease-out;
        box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);
    }
`;
const $Image = $.img`
    max-width: 800px;
    height: 500px;
    resizeMode: cover;
`;
const $ProductInfo = $.span`
    max-width: 30%;
`;
const $ProductDescription = $.span`
    max-width: 70%;
`;
const $Title = $.h3`
    color:#4b4b4b;
    font-size: 18px;
    margin-bottom: 20px;
`;
const $Subtitle = $.span`
    color:#4b4b4b;
    font-size: 11px;
`;
const $Price = $.span`
    margin-top: 5px;
    margin-right: 20x;
    margin-bottom: 20x;
    font-size: 40px;
`;

const DiscoverItem = ({ item }) => {
  return (
    <$Item className="discover__item">
      <$ProductDescription>
        <$Image src={item.picture} />
        <$Title>Descripción del producto</$Title>
        <$Subtitle>{item.description}</$Subtitle>
      </$ProductDescription>
      <$ProductInfo>
        <$Subtitle>{item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity} vendidos!</$Subtitle>
        <$Title>{item.title}</$Title>
        <$Price>$ {item.price?.amount?.toLocaleString()}</$Price>
        <Button text={"Comprar"} margin={"40px 0 0 0"} />
      </$ProductInfo>
    </$Item>
  );
};

export default DiscoverItem;
