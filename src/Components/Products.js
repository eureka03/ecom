import React from 'react'
import styled from 'styled-components';
import Product from './Product'
import {stock} from '../data'

const Container = styled.div`
    display:flex;
    padding:20px;
    flex-wrap:wrap;
    justify-content:space-between;
`;


function Products(){
    
  return (
      <Container>
          {stock.map((item)=>(
              <Product item={item} key={item.id}/>
          ))}
      </Container>
  
      );
  }

export default Products;
