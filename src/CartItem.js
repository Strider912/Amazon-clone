import React from 'react'
import styled from 'styled-components'
import {db} from './Firebase'


// https://images-na.ssl-images-amazon.com/images/I/71SAHzzQqkL._SL1500_.jpg

const CartItem = ({item, id}) => {

    let options=[]
    for(let i=1;i<Math.max(item.quantity + 1 ,20); i++ ){
        options.push(<option value={i}>  Qty : {i} </option>)
    }

    const deletes=(e)=>{
        e.preventDefault()
        db.collection('cartitems').doc(id).delete();
    }

    const quantity=(target)=>{
        db.collection('cartitems').doc(id).update({
            quantity : parseInt(target)
        })
    }

    return (

        <Container>
            <Imagecontainer>
                <img src={item.image} />
            </Imagecontainer>
            <Cartinfo>
                <Cartitemtop>
                    <h2> {item.name} </h2>
                </Cartitemtop>
                <Cartitembottom>
                    <Cartquantitycontainer>
                    <select value={item.quantity} 
                     onChange={(e)=>quantity(e.target.value)}
                    >
                        {options}
                    </select>
                    </Cartquantitycontainer>
                    <Cartdeletecontainer onClick={deletes} >
                        Delete
                    </Cartdeletecontainer>
                </Cartitembottom>
            </Cartinfo>
            <Cartprice>
                ${item.price} 
            </Cartprice>

        </Container>

    )
}

export default CartItem

const Container = styled.div`
display: flex;
`
const  Imagecontainer= styled.div`
width : 180px;
height : 180px;
flex-shrink : 0;
flex-grow : 0;
margin-right : 19px;
img{
    width : 100%;
    height : 180px;
}
`
const  Cartinfo= styled.div`
flex-grow : 1;

`

const  Cartitemtop= styled.div`
color  : #007148;
font-size : 18px;
flex-grow : 1;

`
const  Cartitembottom= styled.div`
display : flex;
align-items : center;
`
const  Cartquantitycontainer= styled.div`
select{
    padding : 8px;
    border-radius : 7px;
    background-color : #f0f2f2;
    box-shadow : 0px 2px 5px rgba(15,17,17,.15)
    :focus{
        outline:none;
    }
}
`
const  Cartdeletecontainer= styled.div`
color : #007148;
margin-left : 14px;
cursor: pointer;
`
const  Cartprice= styled.div`
font-weight : 800;
font-size : 1.4rem;
margin-left : 19px;
margin-top: 23px;
`


