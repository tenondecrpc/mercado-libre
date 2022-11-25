import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios, { AxiosError, AxiosResponse } from 'axios';
import Header from "../../components/Header";
import Container from "../../components/Container";
import Discover from "../../components/Discover";

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState<AxiosResponse | {} | void>({});
  
  type ServerError = { errorMessage: string };

  useEffect(() => {
    const execute = async () => {
      try {
        const {data: {item}} = await axios.get(`http://localhost:3000/api/items/${id}`);
        setItem(item);
        console.info('item from api', item); // TODO: remove
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
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        <Discover item={item} />
      </Container>
    </>
  );
};

export default ItemDetail; 