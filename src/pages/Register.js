import React from 'react'
import styled from 'styled-components';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

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
    flex-wrap:wrap;
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

function Register(){
    return(
        <div>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Title>
                        CREATE AN ACCOUNT
                    </Title>
                    <Form>
                        <Input placeholder="Name"/>
                        <Input placeholder="last name"/>
                        <Input placeholder="username"/>
                        <Input placeholder="Email"/>
                        <Input placeholder="password"/>
                        <Input placeholder="confirm password"/>
                        <Button>CREATE</Button>
                    </Form>
                </Wrapper>
            </Container>
            <Footer/>
        </div>
    );
}

export default Register;