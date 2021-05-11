import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from "react-router-dom"

// "https://i.imgur.com/7I9Was5.png"

const Header = ({cartitem,user,signout}) => {

    const getCount=()=>{
        let count =0;

        cartitem.forEach((item)=>{
            count = count + item.product.quantity;
        })
            return count;
    }


    return (

        <Container>
            <Headerlogo>
                <Link to="/" >
                <img src={"https://i.imgur.com/7I9Was5.png"} />
                </Link>
            </Headerlogo>

            <Headeroptionaddress>
            <LocationOnIcon/>
                <Headeroption>
                    <Optionlineone>Hello,</Optionlineone>
                    <Optionlinetwo>Select your location</Optionlinetwo>
                </Headeroption>
            </Headeroptionaddress>

            <Headersearch>
                <Headersearchinput input="text" />
                <Headersearchiconcontainer>
                    <SearchIcon/>
                </Headersearchiconcontainer>
            </Headersearch>

            <Headernavitems>

            <Headeroption onClick={signout} >
                    <Optionlineone>Hello,{user.name}</Optionlineone>
                    <Optionlinetwo>Account & List </Optionlinetwo>
                </Headeroption>

                <Headeroption>
                    <Optionlineone>Return,</Optionlineone>
                    <Optionlinetwo>& Orders</Optionlinetwo>
                </Headeroption>

            <Headeroptioncart>
                <Link to="/cart" >
                <ShoppingBasketIcon/>
                <Cartcount> {getCount()} </Cartcount>
                </Link>

            </Headeroptioncart>

            </Headernavitems>

        </Container>


    )
}

export default Header

const Container = styled.div`
background-color : black;
color : white;
display : flex;
align-items : center;
height : 60px;
`
const Headerlogo = styled.div`
img{
    width: 100px;
    margin-left : 9px;
}
`
const Headeroptionaddress = styled.div`
display : flex;
margin-left : 10px;
align-items : center;
justify-content : center;

`
const Headeroption = styled.div`
padding : 10px 9px 10px 9px;
cursor: pointer;
`
const Optionlineone = styled.div``
const Optionlinetwo = styled.div`
font-weight : 800;
`
const Headersearch = styled.div`
border : 3px solid yellow;
display : flex;
flex-grow : 1;
height : 40px;
background-color : white;
border-radius : 4px;
overflow : hidden;
:focus-within {
            box-shadow: 0 0 0 3px #F90;
        }
`
const Headersearchinput = styled.div`
border : none;
flex-grow : 1;
`
const Headersearchiconcontainer = styled.div`
display : flex;
align-items : center;
justify-content : center;
background-color : #febd69;
width : 45px;
color: black;
`

const Headernavitems = styled.div`
display : flex;

`
const Headeroptioncart = styled.div`
display : flex;
a{
display : flex;
align-items : center;
justify-content : center;
padding-right : 9px;
color : white;
text-decoration : none;
}
`
const Cartcount = styled.div`
font-weight : 800;
color : #f08804; 
padding-left : 4px
`