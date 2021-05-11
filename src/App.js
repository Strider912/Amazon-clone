import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";
import {db,auth} from "./Firebase"
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {

  const [cartitem,setcartitem ] = useState([])
  const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')));


  const fetchcart=()=>{
    db.collection('cartitems').onSnapshot((snapshot)=>{

      let temp=[]
      temp=snapshot.docs.map((doc)=>  (
        {
          id : doc.id,
          product : doc.data()
        }
      ))
        setcartitem(temp)
    })
  }

const signout=()=>{
  auth.signOut().then(()=>{
    localStorage.removeItem('user')
    setuser(null)
  })
}

  useEffect(() => {

    fetchcart()

  }, [])
  console.log(cartitem)
  return (
    <>
      <Router>  
      {
        !user ? ( <Login setuser={setuser} /> ) : (
          <Container>
        <Header signout={signout} user={user} cartitem={cartitem} />
        <Switch>
        <Route path="/login">
            <Login setuser={setuser} />
          </Route>
          <Route path="/cart">
            <Cart cartitem={cartitem} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Container>
        )
        }
      </Router>
    </>
  );
};

export default App;

const Container=styled.div`
background-color: #EAEDED;
`