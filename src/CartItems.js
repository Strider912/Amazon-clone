import React from 'react'
import CartItem from './CartItem'
import styled from 'styled-components'

const CartItems = ({cartitem}) => {

    return (

        <Container>
            <Title>Shopping Cart</Title>
            <hr/>
            <Cartitem>
            {
                cartitem.map((item)=>(
                    <CartItem  
                        id={item.id}
                        item={item.product}
                     />
                ))
            }

            </Cartitem>
        </Container>

    )
}

export default CartItems
 
const Container = styled.div`
width : 70%;
background-color : white;
flex-grow : 0.8;
margin-right : 18px;
padding : 20px;

`
const Title = styled.div`
font-size : 28px;
font-weight : 800;
margin-bottom : 18px;

`
const  Cartitem= styled.div``

