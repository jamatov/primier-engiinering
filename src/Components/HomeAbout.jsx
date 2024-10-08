import React from 'react'
import img from '../Images/home-about.jpg'
import { Link } from 'react-router-dom'

export default function HomeAbout() {
  return (
    <section className='HomeAbout'>
      <div className="container">
        <img src={img} alt="" />

        <div className='about-body'>
          <h2>Мы производим только современные линии раздачи питания, простые в установке, эксплуатации и уходе. Все поверхности корпусов и детали выполняются из шлифованной нержавеющей стали.</h2>
          <Link to="/онас">Узнайте больше о нас</Link>

        </div>
      </div>
    </section>
  )
}
