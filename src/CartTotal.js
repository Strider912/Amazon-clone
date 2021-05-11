import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';


const CartTotal = ({cartTotal,cartcount}) => {

    return (

        <Container>
            <Subtotal> Subtotal : ({cartcount()} Items ) : <NumberFormat value={cartTotal()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
             </Subtotal>
            <Cartbutton>Proceed to Checkout</Cartbutton>
        </Container>


    )
}

export default CartTotal

const Container = styled.div`
background-color : white;
height : 200px;
flex-grow : 0.2;
padding : 20px;
`

const Subtotal = styled.div`
margin-bottom : 18px;
/* margin-top : 18px; */
font-size : 22px;
font-weight : 800;
`
const Cartbutton = styled.button`
background-color : #f0c14b;
padding : 4px 8px;
font-size : 16px;
border-radius : 4px;
cursor: pointer;
width : 100%;
font-weight : 500;
border: 2px solid #a88734;
:hover{
    background:  #ddb347;
}
`
