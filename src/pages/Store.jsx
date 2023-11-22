import React, { useEffect, useState } from 'react';
import { FaCartPlus } from "react-icons/fa6";
import { BsCartCheckFill } from "react-icons/bs";
import { Header } from '../components/Header';
import styled from 'styled-components';

const H4 = styled.h4`
color:#ffffff;
font-family: 'Poppins', sans-serif;
    font-weight:400;

`
const Div = styled.div`
margin-top:50px;
`

const Img = styled.img`
  filter: invert(100%);
  width:120px;
  height:120px;
`

import { getItem, setItem } from '../services/LocalStorageFuncs';
import { ProductsArea } from './StyledCart';

export const Store = () => {
    const [data, setData] = useState([]);
    const [cart,setCart] = useState(getItem('carrinhoYT') || [])

    useEffect(() => {
        const fetchApi = async () => {
            const url = 'https://api.mercadolibre.com/sites/MLB/search?q=celular';
            const response = await fetch(url);
            const objJson = await response.json();
            setData(objJson.results);
        };
        fetchApi();
    }, []);

    const handleClick = (obj) => {
        const element = cart.find((e) => e.id === obj.id);
        if (element) {
            const arrFilter = cart.filter((e) => e.id !== obj.id);
            setCart(arrFilter);
            setItem('carrinhoYT',arrFilter)
        } else {
            setCart([...cart, obj]);
            setItem('carrinhoYT',[...cart,obj])
        }
    };

    return (
        <>
            <div>
               <Header />
                <ProductsArea>
                    {data.map((e) => (
                        
                        <Div key={e.id}>
                            <H4>{e.title}</H4>
                            <Img src={e.thumbnail} />
                            <H4>{`R$ ${e.price}`}</H4>
                <button onClick={()=>handleClick(e)}>
                {
                  cart.some((itemCart) => itemCart.id === e.id) ? (
                     <BsCartCheckFill />
                   ) : (
                        <FaCartPlus />
                       )
        }
                </button>

                        </Div>
                    
                    ))}
                </ProductsArea>
            </div>
        </>
    );
};