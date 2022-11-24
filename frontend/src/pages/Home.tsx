import React from "react";
import Header from "./../components/Header";
import ProductRow from "./../components/ProductRow";
import Container from "./../components/Container";
import Discover from "./../components/Discover";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <ProductRow/>
        <Discover />
      </Container>
    </>
  );
};

export default Home;
