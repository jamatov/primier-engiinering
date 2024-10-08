import React from 'react'
import img1 from '../../Images/ventilatsiya1.jpg'
import img2 from '../../Images/ventilatsiya2.jpg'
import img3 from '../../Images/ventilatsiya3.jpg'
import { Fade } from 'react-reveal'

export default function AboutBlock2() {
  return (
    <section className='AboutBlock'>
      <div className="container">
        <h2>Замер, проектирование, изготовление, установка вентиляционных систем от частных домов до промышленных</h2>
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
