import React from 'react'
import icon1 from '../Images/Icons/primushestva1.svg'
import icon2 from '../Images/Icons/primushestva2.svg'
import icon3 from '../Images/Icons/primushestva3.svg'
import icon4 from '../Images/Icons/primushestva4.svg'
import { Fade } from 'react-reveal'

export default function Primushestva() {
  return (
    <section className='Primushestva'>
      <div className="container">
        <h2>ПРЕИМУЩЕСТВА</h2>
        <div className="row">
          <div className="col-md-3 pr-body">
            <img src={icon1} alt="primushestva" />
            <Fade top>
              <p>Накапливайте, принося пользу обществу</p>
            </Fade>
          </div>

          <div className="col-md-3 pr-body">
            <img src={icon2} alt="primushestva" />
            <Fade top>
              <p>Зарабатывайте честно
              и справедливо</p>
            </Fade>
          </div>

          <div className="col-md-3 pr-body">
            <img src={icon3} alt="primushestva" />
            <Fade top>
              <p>Вкладывайте в реальные проверенные сделки</p>
            </Fade>
          </div>

          <div className="col-md-3 pr-body">
            <img src={icon4} alt="primushestva" />
            <Fade top>
              <p>Обеспечьте вложения
              надежными активами</p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}
