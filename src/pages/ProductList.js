import React from 'react'
import styled from 'styled-components';
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Products from '../Components/Products.js'
import Newsletter from '../Components/Newsletter.js'
import Footer from '../Components/Footer'

const Container = styled.div`
`;
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;
const Filter = styled.div`
    margin:20px;
`;
const Title = styled.h1`
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight:600;
    margin-right:20px;
`;
const Select = styled.select`
    padding:10px;
    margin-right:20px;

`;
const Option = styled.option`

`;


function ProductList(){
    return(
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>DRESSES</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                    <Select>
                        <Option disabled select>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Pink</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled select>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Black (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>

    );
}

export default  ProductList;