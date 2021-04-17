import React, {useState} from 'react';
import {PageLayout, Input, PasswordInput, Button} from 'components/common';
import styled from 'styled-components';

const Form = styled.form`
    width: 100%;
    max-width: 400px;
    background: white;
    border: 1px solid #eee;
    padding: 16px;
    box-sizing: border-box;
    color: black;
    border-radius: 4px;

`;


export default function Login() {
    const [formFields, setFormFields] = useState({username: '', password: ''});

    const handleInputChange = (e) => {
        e.persist();
        setFormFields(currentState => ({
            ...currentState,
            [e.target.name]: e.target.value
        }))
        console.log("name \n", e.target.name);
        console.log("\n value", e.target.value);
    }

    return(
        <PageLayout>
            <h1> Login </h1> 
            <Form>
                <Input 
                    value={formFields.username}
                    name="username" 
                    placeholder="Username"
                    onChange={handleInputChange}
                    type="text"    
                />
                <PasswordInput 
                    value={formFields.password}
                    name="password"         
                    onChange={handleInputChange}                
                />
                <Button large>
                    Login
                </Button>
                <Button secondary>
                    Register
                </Button>
            </Form>          
        </PageLayout>
    );
}