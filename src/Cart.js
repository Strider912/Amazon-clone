import React from 'react'
import CartItems from './CartItems'
import CartTotal from './CartTotal'
import styled from 'styled-components'

function Cart({cartitem}) {

    const cartTotal=()=>{

        let total=0
        cartitem.forEach((item)=>{
            total = total + item.product.price * item.product.quantity;
        })
        return total;
    }

    const cartcount=()=>{
        let count=0;
        cartitem.forEach((item)=>{
            count = count + item.product.quantity;
        })
        return count;
    }

    return (
        <Container>
            <CartItems cartitem={cartitem} />
            <CartTotal cartcount={cartcount} cartTotal={cartTotal} />
        </Container>

     )
}

export default Cart

const Container  = styled.div`
background-color : white;
display : flex;
padding-left : 18px;
padding-right : 18px;
padding-top : 18px;
align-items : flex-start;
`