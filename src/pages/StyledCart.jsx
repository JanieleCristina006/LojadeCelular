import React from 'react';

import styled from 'styled-components';

export const ProductsArea = styled.div`
display:flex;
flex-wrap:wrap;
width:100%;
gap:50px;
justify-content:center;
align-items:center;
background-color:#0A0A0A;
margin-top:10vh;

div{
    height:60vh;
    width:20vw;
    box-shadow: 0px 4px 11px 4px rgba(131, 29, 222, 0.55);

-webkit-box-shadow: 0px 4px 11px 4px rgba(131, 29, 222, 0.55);

-moz-box-shadow: 0px 4px 11px 4px rgba(131, 29, 222, 0.55);
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    align-items:center;
    padding:20px;
    border-radius:8px;
   

    button{
        font-size:35px;
        background:transparent;
        border:none;
        color:#ffffff;
    }

    @media(min-width:320px) and (max-width: 500px)
    {
    height:65vh;
    width:70%;
    padding:15px;
    }
}
`