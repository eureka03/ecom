import React from 'react'
import styled from 'styled-components'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top: 0;
    left:0;
    background-color:rgb(0,0,0,0.2);
    z-index:3;
    align-items:center;
    justify-content:center;


`;
const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#f5fbfd;
    position:relative;
    &:hover ${Info}{
        opacity:1;
    }

`;

const Image = styled.img`
    height:75%;
    object-fit:cover;

`;
const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    margin:10px;
`;
const Price = styled.p`
    color:black;
    font-size:20px;
    font-weight:bold;
    text-align:center;
    margin-bottom:10px;
`;


function Product({item}) {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Price>R{item.price}</Price>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}
export default Product;
