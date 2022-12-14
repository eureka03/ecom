import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import {sliderItems} from "../data"
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  position:relative;
`;
const Arrow = styled.div`
  width:50px;
  height:50px;
  background-color: #fff7f7;
  position: absolute;
  justify-content: center;
  margin:auto;
  top:0;
  bottom:0;
  left:${props=> props.direction === "left" && "10px"};
  right:${props=> props.direction === "right" && "10px"};
  cursor:pointer;
  z-index:2;
`;

const Wrapper = styled.div`
  height: 100%;
  display:flex;
  transform:translateX(${props=>props.slideIndex *-100}vw);

`;

const Slide = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items: center;
  background-color: #${props=>props.bg};


`;
const ImgContainer = styled.div`
  flex:1;
  height:100%;
`;

const Img = styled.img`
    height:80%;
`;

const InfoContainer = styled.div`
  flex:1;
  padding:50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin:50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  background-color:transparent;
  font-size: 20px;
  padding:10px;
  cursor:pointer;

`;
const NavLink = styled(Link)`
  text-decoration:none;
  color:black;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction)=>{
    if(direction === "left"){
      setSlideIndex(slideIndex> 0 ? slideIndex-1:2)
    }else{
      setSlideIndex(slideIndex < 2?slideIndex +1:0)
    }

  };
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper slideIndex ={slideIndex}>
        {sliderItems.map((item) =>(
            <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Img src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button><NavLink to="/ProductList">SHOP NOW</NavLink></Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slider
