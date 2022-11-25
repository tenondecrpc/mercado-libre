/* eslint-disable react/jsx-pascal-case */
import React from "react";
import $ from "styled-components";
import ProductCard from "./../ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  vertical: true
};
const $ProductRow = $.div`
    margin-top: 30px;
`;

const ProductRow = ({ items, onClick }) => {
  
  const renderItem = (item) => {
    return (
      <ProductCard key={item.id} item={item} onClick={() => onClick(item.id)} />
    );
  }

  return (
    <$ProductRow>
      <Slider {...settings}>
        {items.map(renderItem)}
      </Slider>
    </$ProductRow>
  );
};

export default ProductRow;
