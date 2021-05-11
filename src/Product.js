import React from 'react'
import {db} from './Firebase'
import styled from 'styled-components'
import CartItems from './CartItems'

            {/* ⭐⭐⭐⭐⭐ */}
            // https://images-na.ssl-images-amazon.com/images/I/71SAHzzQqkL._SL1500_.jpg 

// background-color: #f0c14b;
// border: 2px solid #a88734;

const Product = ({title,image,price,rating,id}) => {

    const  addtocart=()=>{
        const temp= db.collection('cartitems').doc(id);
        temp.get().then((doc=>{
            if(doc.exists){
                 temp.update({
                    quantity : doc.data().quantity + 1
                })
            }
            else{
                db.collection('cartitems').doc(id).set({
                    name : title,
                    image : image,
                    price : price,
                    quantity : 1,
                })
            }
        }))
    }

    return (

        <Container>
            <Title>{title}</Title>
            <Price>${price}</Price>
            <Rating>
                {Array(rating).fill().map(rating=> <p>⭐ </p> )}
            </Rating>
            <Image src={image} />
            <Buttonsection>
            <Addtocart 
            onClick={addtocart}
            >Add to Cart</Addtocart>
            </Buttonsection>
        </Container>

    )
}

export default Product

const Container = styled.div`
background-color : white;
z-index : 100;
padding : 20px;
margin : 10px;
flex-grow : 1;
max-height : 400px;
display : flex;
flex-direction  :  column;
`

const Title = styled.span``
const Price = styled.span`
font-weight : 800;
margin-top : 5px;
`
const Rating = styled.div`
display : flex;
`
const Image = styled.img`
max-height : 200px;
object-fit : contain;
`
const Addtocart = styled.button`
height : 30px;
width : 100px;
border-radius : 2px;
cursor: pointer;
background-color : #f0c14b;
border : 2px solid #a88734;
`
const Buttonsection = styled.div`
display : flex;
justify-content : center;
`