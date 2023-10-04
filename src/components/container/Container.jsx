import Carousel from 'react-bootstrap/Carousel';
import "./container.css";
import test from "./test.jpg";

function Container() {
  return (
    <Carousel data-bs-theme="dark" className='containerPhoto'>
      <Carousel.Item >
        <img
          className="d-block"
          src={test}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            className="d-block"
          src="https://img.freepik.com/vecteurs-libre/fond-maquillage-realiste_23-2149373139.jpg?w=2000"
          alt="Second slide"
          
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8eyl_zPA1a2-_emqkpxTo-3vT6-XQZxqdLCjbCBpvVDxHg0_uFgd_T7gFdGtDgZMwFw&usqp=CAU"
          alt="Third slide"
          
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Container;