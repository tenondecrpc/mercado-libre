import React from 'react';
import Header from "../Header";
import ProductRow from "../ProductRow";
import Container from "../Container";

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