import React, { useState } from 'react';
import { getItem, setItem } from '../services/LocalStorageFuncs';
import { BsFillCartXFill } from 'react-icons/bs';
import { ProductsArea } from './StyledCart';
import { Header } from '../components/Header';
import styled from 'styled-components';


const H1 = styled.h1`
color:#ffffff;
font-family: 'Poppins', sans-serif;
  font-weight:400;
  padding-bottom:20px;
 position: relative;
 top:10vh;
  
`

const H4 = styled.h4`
color:#ffffff;
font-family: 'Poppins', sans-serif;
    font-weight:400;
`

const Img = styled.img`
  filter: invert(100%);
  width:120px;
  height:120px;
`

const H3 = styled.h3`
   color:#ffffff;
   font-family: 'Poppins', sans-serif;
   font-weight:400;
   text-align:center;
  
`

const Container = styled.div`

width:100%;
padding-bottom:30px;
display:flex;
align-items:center;
flex-direction:column;
`

export const Cart = () => {
  const [data, setData] = useState(getItem('carrinhoYT') || []);

  const removeItem = (itemId) => {
    const updatedCart = data.filter((item) => item.id !== itemId);
    setData(updatedCart);
    setItem('carrinhoYT', updatedCart);
  };

  const subTotal = data.reduce((acc,cur)=>acc + cur.price,0)

  return (
    
    <div>
    <Header />
    <Container>
      <H1>{`SubTotal: R$${subTotal}`}</H1>
      <ProductsArea>
        {data.map((item) => (
          <div key={item.id}>
            <H4>{item.title}</H4>
            <Img src={item.thumbnail} alt={item.title} />
            <H3>{`R$ ${item.price}`}</H3>
            <button onClick={() => removeItem(item.id)}>
              <BsFillCartXFill />
            </button>
          </div>
        ))}
      </ProductsArea>
    </Container>
  </div>
);
};