import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;

`;
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;

`;
const Info = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    justify-content:center;
    align-items:center;
    display:flex;
    flex-direction: column;
`;  
const Title = styled.h1`
    color:white;
    margin-bottom:20px;
`;
const Button = styled.button`
    border:none;
    cursor:pointer;
    color:gray;
    background-color:white;
    padding:10px;

`;

function Categoryitem({item}){
    return(
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>
                    {item.title}
                </Title>
                <Button>
                    SHOP NOW
                </Button>
            </Info>
        </Container>

    );
}

export default Categoryitem;