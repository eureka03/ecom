import React from 'react'
import styled from 'styled-components';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import {Link} from 'react-router-dom'

const Container = styled.div`
    width:100vw;
    height:100vh;
    background-color: teal;
    display:flex;
    align-items:center;
    justify-content:center;
`;
const Wrapper = styled.div`
    padding:20px;
    width:40%;
    background-color:white;
`;
const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`;
const Form = styled.form`
    display:flex;
    flex-direction:column;

`;
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0 0;
`;
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px ;
    background-color:teal;
    color:white;
    margin:20px auto;

`;

function Login(){
    return(
        <div>
            <Navbar/>
            <Container>   
                <Wrapper>
                    <Title>
                        LOGIN
                    </Title>
                    <Form>
                        <Input placeholder="username"/>
                        <Input placeholder="password"/>
                        <Button>LOGIN</Button>
                        <Link>FORGOT PASSWORD?</Link>
                        <Link to="/Register">CREATE A NEW ACCOUNT</Link>
                    </Form>
                </Wrapper>
            </Container>
            <Footer/>
        </div>
    );
}

export default Login;