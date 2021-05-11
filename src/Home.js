import React, { useEffect, useState } from 'react'
import Product from './Product'
import styled from 'styled-components'
import {db} from './Firebase'

//  'https://i.imgur.com/SYHeuYM.jpg'
//      mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

function Home() {

    const [products, setproducts] = useState([])
          
    const fetchdata=()=>{

        db.collection('products').onSnapshot((snapshot) => {

            let temp = []
            temp = snapshot.docs.map((doc)=> (
                {
                    id : doc.id,
                    product : doc.data()
                }
            ));
            setproducts(temp)
        } )
    }

    useEffect(() => {

        fetchdata();

    }, [])

    fetchdata();

    return (

        <Container>

            <Banner>

            </Banner>
            <Content>
            {products.map((data)=>(
                <Product
                    id={data.id}
                    title={data.product.name}
                    price={data.product.price}
                    rating={data.product.rating}
                    image={data.product.image}
                />
            ))}
            </Content>

        </Container>

    )
}
export default Home

const Container = styled.div`
max-width : 1500px;
margin : 0 auto;
`
const Banner = styled.div`
background-image : url('https://i.imgur.com/SYHeuYM.jpg');
min-height : 600px;
background-position : center;
background-size : cover;

mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

`
const Content = styled.div`
padding-left : 10px;
padding-right : 10px;
margin-top : -360px;
display : flex;
`
