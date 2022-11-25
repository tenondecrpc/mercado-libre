/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios, { AxiosError, AxiosResponse } from 'axios';
import Header from "../../components/Header";
import Container from "../../components/Container";
import ProductRow from "../../components/ProductRow";

const ItemList = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<AxiosResponse | [] | void>([]);
  const [searchParams] = useSearchParams({ search: '' })
  const search = searchParams.get("search");

  type ServerError = { errorMessage: string };

  const handleGoDetail = (itemId: string) => {
    navigate(`/items/${itemId}`);
  }

  useEffect(() => {
    const execute = async () => {
      try {
        const {data: {items}} = await axios.get(`http://localhost:3000/api/items?q=${search}`);
        setItems(items);
        console.info('items list from api', items); // TODO: remove
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const serverError = error as AxiosError<ServerError>;
          if (serverError && serverError.response) {
            alert(serverError.message);
            return;
          }
      }
      alert("Ocurrió un error");
      }
    };
    execute();
  }, [search]);

  return (
    <>
      <Header />
      <Container>
        <ProductRow items={items} onClick={handleGoDetail} />
      </Container>
    </>
  );
};

export default ItemList; 