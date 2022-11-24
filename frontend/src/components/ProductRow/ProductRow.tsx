/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useNavigate } from 'react-router-dom';
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

const ProductRow = () => {
  const navigate = useNavigate();

  const handleGoDetail = (itemId: string) => {
    navigate(`/items/${itemId}`);
  }

  return (
    <$ProductRow>
      <Slider {...settings}>
        <ProductCard onClick={() => handleGoDetail("1")} />
        <ProductCard onClick={() => handleGoDetail("2")} />
        <ProductCard onClick={() => handleGoDetail("3")} />
        <ProductCard onClick={() => handleGoDetail("4")} />
      </Slider>
    </$ProductRow>
  );
};

export default ProductRow;
