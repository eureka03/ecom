import React from 'react'
import styled from 'styled-components';
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer' 
import Basket from '../Components/Basket'

const Container = styled.div`
    color:black;
`;
const Wrapper = styled.div`
    padding:20px;

`;
const Title = styled.h1`
    font-weight:300;
    text-align:center;
`;
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;
const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
`;

const TopText= styled.span`
    text-decoration: underline;
    cursor:pointer;
`;

function Cart(){ 
    const [cartItems, setCartItems] = useState([]);
    const {products} = data;
    const onAdd = (product)=>{
        const exist = cartItems.find((x)=> x.id === product.id);
        if(exist){
            const newCartItems = cartItems.map((x) =>
                x.id === product.id?{...exist,qty: exist.qty +1}: x
            );
            setCartItems(newCartItems);
        } else {
            const newCartItems = [...cartItems,{...product,qty:1}];
            setCartItems(newCartItems);
        }
    };
    const onRemove = (product)=>{
        const exist = cartItems.find((x) => x.id === product.id);
    }
    return(
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Basket/>
                </Bottom>
            </Wrapper>
            <Footer/>

        </Container>

    );
}

export default Cart;
