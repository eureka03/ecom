import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    background-color:teal;
`;
const Right = styled.div`
    flex:1;
    padding:20px;
`;
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;`;
const Center = styled.div`
    flex:1;
    padding:20px;
`;
const Logo = styled.h1`

`;
const Desc = styled.p`
    margin:20px 0;
`;
const SocialIcon = styled.div`
    width:40px;
    height: 40px;
    border-radius:40%;
    color:white;
`;
const SocialContainer = styled.div`
    display:flex;

`;
const Title = styled.h3`
`;
function Footer(){
    return (
        <Container>
            <Left>
                <Logo>COVI</Logo>
                <Desc>The best of the best of the best Store you can choose to shop with</Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter/>
                    </SocialIcon>

                </SocialContainer>
            
            </Left>
            <Right></Right>
        </Container>

    );
}

export default Footer;