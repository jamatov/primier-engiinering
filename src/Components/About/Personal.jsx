import React from 'react'
import img1 from '../../Images/Personal/1.jpg'
import img2 from '../../Images/Personal/2.jpg'
import img3 from '../../Images/Personal/3.jpg'
import img4 from '../../Images/Personal/4.jpg'
import img5 from '../../Images/Personal/5.jpg'
import img6 from '../../Images/Personal/6.jpg'


export default function Personal() {
  return (
    <section className='Personal'>
      <div className="container">
        <h2>Работадатели</h2>
        <div className="personal-body">
          <div className="card">
            <img src={img1} alt="personal" />
            <div className="card-body">
              <h3>Холмурадов Ж.Х</h3>
              <p>Директор</p>
            </div>
          </div>

          <div className="card">
            <img src={img2} alt="personal" />
            <div className="card-body">
              <h3>Рузибаев Шахбоз</h3>
              <p>Бухгалтер </p>
            </div>
          </div>

          <div className="card">
            <img src={img3} alt="personal" />
            <div className="card-body">
              <h3>Кучаров Феруз</h3>
              <p>Менеджер</p>
            </div>
          </div>

          <div className="card">
            <img src={img4} alt="personal" />
            <div className="card-body">
              <h3>Рузиев Мансур</h3>
              <p>Конструктор </p>
            </div>
          </div>

          <div className="card">
            <img src={img5} alt="personal" />
            <div className="card-body">
              <h3>Муротов Миркодир </h3>
              <p>Отдел закупок </p>
            </div>
          </div>

          <div className="card">
            <img src={img6} alt="personal" />
            <div className="card-body">
              <h3>Усмонова Юлдуз</h3>
              <p>Менеджер </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
