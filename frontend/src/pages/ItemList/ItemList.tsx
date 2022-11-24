import React from 'react';
import Header from "../../components/Header";
import Container from "../../components/Container";
import ProductRow from "../../components/ProductRow";

const ItemList = () => {
  return (
    <>
      <Header />
      <Container>
        <ProductRow/>
      </Container>
    </>
  );
};

export default ItemList; 