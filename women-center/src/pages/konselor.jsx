import React from 'react'
import HeaderKonselor from '../components/Header/headerKonselor'
import CardProfil from '../components/card/cardProfil'
function Konselor() {
  return (
    <>
      <HeaderKonselor />
      <section>
        <div className='container-xxl'>
          <div className='row'>
            <div 
              className='col d-flex justify-content-center gap-3' 
              style={{ marginLeft: '209px', marginRight: '209px' }}>
              <div className='col-4 d-flex flex-column align-items-center'>
                <CardProfil />
              </div>
              <div className='col-4 d-flex flex-column align-items-center'>
                <CardProfil />
              </div>
              <div className='col-4 d-flex flex-column align-items-center'>
                <CardProfil />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Konselor