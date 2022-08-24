import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import {Link} from 'react-router-dom'


const Container = styled.div`
    height:60px;
    margin-bottom:10px;

`;

const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    padding:5px 20px;
    align-items: center;
`;

const Left = styled.div`
    flex:1;
    display:flex;
    align-items: center;
`;

const Language = styled.div`

`;
const Searchcontainer = styled.div`
    border: 1px solid lightgray;
    display:flex;
    align-items: center;
    margin-left: 25px;
    padding:5px;
`;
const Center = styled.div`
    flex:1;
    text-align:center;
`;
const Right = styled.div`
    flex:1;
    justify-content:flex-end;
    display:flex;
`;
const Menuitem = styled.div`
    margin-left:25px;
    font-size:14px;
    cursor:pointer;
    text-decoration:none;
    color:black;
`;
const Input = styled.input`
    border:none;
`;

const   NavLink = styled(Link)`
    text-decoration:none;
    color:black;
`;


function Navbar(){
    return (
        <Container>
            <Wrapper> 
                <Left>
                    <Language>EN</Language>
                    <Searchcontainer>
                        <Input></Input>
                        <SearchIcon style={{color:"gray", fontSize:16}}/>
                    </Searchcontainer>
                </Left>
                <Center>
                    <h1 class="logo">COVI</h1>
                </Center>
                <Right>
                    <Menuitem><NavLink to="/Register">REGISTER</NavLink></Menuitem>
                    <Menuitem><NavLink to="/Login">SIGNIN</NavLink></Menuitem>
                    <Menuitem>
                        <Badge badgeContent={0} color="primary">
                            <NavLink to="/Cart">
                            <ShoppingCartOutlined/>
                            </NavLink>
                        </Badge>
                    </Menuitem>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;