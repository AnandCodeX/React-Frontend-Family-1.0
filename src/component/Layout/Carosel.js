import React from "react";
import "../Css/Home.css";
import {Container} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Carosel = () => {
  return (
    <>


      <Container>
        <Carousel className="w-50% ">
          <Carousel.Item>
            <img
              id="img1"
              className="d-block w-auto"
              src="./image/Family-1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="img1"
              className="d-block w-auto"
              src="./image/Family-3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="img1"
              className="d-block w-auto"
              src="./image/Family-5.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container>
        <h2 style={{ color: "red" }}>
          jhxkzjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
          <br />
          jjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
          <br />
          kkkkkkkkkkkzjxhkzjxzkjxzkjxnzkjn
          <br />
          jhxkzjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
          <br />
          jjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
          <br />
          kkkkkkkkkkkzjxhkzjxzkjxzkjxnzkjn
          <br />
          jhxkzjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
          <br />
          jjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
          <br />
          kkkkkkkkkkkzjxhkzjxzkjxzkjxnzkjn
          <br />
          jhxkzjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
          <br />
          jjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
          <br />
          kkkkkkkkkkkzjxhkzjxzkjxzkjxnzkjn
          <br />
        </h2>
      </Container>
    </>
  );
};

export default Carosel;
