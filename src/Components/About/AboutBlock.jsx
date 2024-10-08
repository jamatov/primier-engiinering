import React from 'react'
import img1 from '../../Images/lazer1.jpg'
import img2 from '../../Images/lazer2.jpg'
import img3 from '../../Images/lazer3.jpg'
import { Fade } from 'react-reveal'

export default function AboutBlock() {
  return (
    <section className='AboutBlock'>
      <div className="container">
        <h2>УСЛУГИ ЛАЗЕРНОЙ РЕЗКИ И ЛИСТОГИБА ОТ ПРОФЕССИОНАЛОВ</h2>
        <div className="row">
          <div className="col-md-6">
            <Fade left>
              <img src={img1} alt="lazer" />
            </Fade>
          </div>
          <div className="col-md-6">
            <Fade top>
              <img className='mb-4' src={img2} alt="lazer" />
            </Fade>
            <Fade bottom>
              <img src={img3} alt="lazer" />
            </Fade>
          </div>
        </div>
      </div>  
    </section>
  )
}
