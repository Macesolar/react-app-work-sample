import React from "react";
import { Container } from "react-bootstrap";
import img from '../assets/img/bg2.jpg'

export const Banner = () => {
  


  return (
    <section  id="home">
      <Container className="banner">
        <div class="text-white d-flex flex-row h-40 w-100 justify-content-start bg-black rounded-5">
          <img src={img} alt="logo" style={{borderTopLeftRadius: 25, borderBottomLeftRadius: 25, width:200, height: 104}}/>
          
          <div className="d-flex flex-column justify-content-end p-2 m-2">
            <h4>NewsFeed</h4>
            <h6 style={{fontWeight: 'lighter', fontSize: 15}}>catch up with daily events</h6>
          </div>
        </div>
      </Container>
    </section>
  )
}