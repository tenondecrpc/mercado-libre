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

const DiscoverItem = ({ title, condition, sold_number, img, price }) => {
  return (
    <$Item className="discover__item">
      <$ProductDescription>
        <$Image src={img} />
        <$Title>Descripción del producto</$Title>
        <$Subtitle>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</$Subtitle>
      </$ProductDescription>
      <$ProductInfo>
        <$Subtitle>Nuevo - 234 vendidos!</$Subtitle>
        <$Title>Deco Reverse Sombrero Oxford</$Title>
        <$Price>$ 160.000</$Price>
        <Button text={"Comprar"} margin={"40px 0 0 0"} />
      </$ProductInfo>
    </$Item>
  );
};

export default DiscoverItem;
