import React from 'react'
import {auth,provider} from './Firebase'
import styled from 'styled-components'

//  http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG

const Login = ({setuser}) => {

    const signIn = () => {
        auth.signInWithPopup(provider).then((result)=>{
            let user = result.user;
            let newuser={
                name : user.displayName,
                email : user.email,
                photo : user.photoURL,
            }
            localStorage.setItem('user', JSON.stringify(newuser))
            setuser(newuser)
        }).catch((error)=>{
            alert(error.message);
        })
    }

    return (
        <Container>
            <Content>
                <Amazonlogo src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" />
                    <h2> Amazon Login </h2>
                <Signinbutton  onClick={signIn} >  Sign in with Google </Signinbutton>
            </Content>
        </Container>

    )
}

export default Login

const Container= styled.div`
width : 100%;
height : 100vh;
display : grid;
place-items : center;
background-color : #f8f8f8;
`
const Content= styled.div`
background-color : white;
padding : 100px;
border-radius : 5px;
text-align : center;
box-shadow: 0 1px 3px gray;

`
const Amazonlogo= styled.img`
height : 100px;
margin-bottom : 40px;
`
const Signinbutton= styled.button`
margin-top : 50px;
height : 40px;
cursor: pointer;
padding : 4px 8px;
border-radius : 4px;
background-color : #f0c14b;

`
