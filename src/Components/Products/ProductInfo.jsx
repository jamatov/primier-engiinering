import React from 'react'

export default function ProductInfo() {
  return (
    <header className='ProductInfo'>
      <div className="container">
        <h2>Продукция</h2>
        <p>В своренном быстро меняющемся хлебном рынке, ценится <br /> традиционность, как в технологии производства, так и в <br /> технологии выпечки</p>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <rect width="60" height="60" fill="#0032A0"/>
                  <mask id="mask0_1_273"  maskUnits="userSpaceOnUse" x="18" y="18" width="24" height="24">
                  <rect x="18" y="18" width="24" height="24" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_1_273)">
                  <path d="M22 40V38H38V40H22ZM30 36L23 27H27V20H33V27H37L30 36ZM30 32.75L32.9 29H31V22H29V29H27.1L30 32.75Z" fill="white"/>
                  </g>
                </svg>
                <h5>Мы производим только современные линии раздачи питания, простые в установке, эксплуатации и уходе</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
