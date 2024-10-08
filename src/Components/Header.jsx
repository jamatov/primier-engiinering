import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img from '../Images/header-carusel.jpg'
import img2 from '../Images/header-carusel2.jpeg'
import img3 from '../Images/header-carusel3.jpeg'
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className='Header'>
      <div className="header-info">
        <h4>Premier Engineering</h4>
        <p>В своренном быстро меняющемся хлебном рынке, ценится традиционность, как в технологии производства, так и в технологии выпечки. Подовая печь наиболее эффективно повторяет традиционную технологию приготовления хлеба и хлебобулочных изделий.</p>
        <Link to="/онас">Узнайте больше о нас</Link>

      </div>
      <Carousel className='carusel' slide={false}>
        <Carousel.Item className='carusel-item'>
          <img className='carusel-img' src={img3} alt="header-img" />
          {/* <Carousel.Caption className='carusel-caption'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className='carusel-item'>
          <img className='carusel-img' src={img2} alt="header-img" />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className='carusel-item'>
          <img className='carusel-img' src={img} alt="carusel-img" />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </header>
  )
}
