import React, { useState } from 'react'
import ButtonClose from '../../atom/button/buttonsClose'
import Tabel from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'

function Invoice() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        style={{border: 'none', background: 'none'}}
        onClick={handleShow}>
        <img 
          src="src/assets/icons/Document.png" 
          alt="" 
          style={{width: '16px', height: '18px'}}/>
      </button>

      <Modal show={show} onHide={handleClose} size='lg'>
        <div className='container my-3'>

          <header className='d-flex flex-column gap-2'>
            <div className='d-flex justify-content-end gap-2'>
                <ButtonClose onClick={handleClose}/>
                <ButtonClose onClick={handleClose}/>
            </div>
            <div className='d-flex justify-content-between mx-3'>
                <div className='d-flex align-items-center gap-2'>
                  <img 
                    src="src/assets/image/MAIN LOGO PINK.png" 
                    alt=""/>
                  <p 
                    className='m-0'
                    style={{fontSize: '15px', fontWeight: '700'}}>
                    WOMEN<br/>CENTER</p>
                </div>
                <div>
                  <h4 
                    style={{fontWeight: '700'}}>
                    INVOICE</h4>
                </div>
              </div>
          </header>

          <main className='d-flex flex-column gap-4 my-4 mx-3'>

            <div className='d-flex justify-content-between' id=''>
              <div className='d-flex flex-column col-4'>
                <p className='m-0' style={{fontWeight: '700'}}>WOMEN CENTER</p>
                <p className='m-0'>REG: 123000123000</p>
                <p className='m-0'>womencenter@wc.com</p>
                <p className='m-0'>+64 123 1234 123</p>
              </div>
              <div className='d-flex flex-column col-4'>
                <p className='m-0 text-end' style={{fontWeight: '700'}}>NAMAWEB.COM</p>
                <div className='d-flex justify-content-between'>
                  <p className='m-0'>INVOICE NUMBER:</p>
                  <p className='m-0'>INV-0002</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='m-0'>INVOICE DATE:</p>
                  <p className='m-0'>19 SEP 2023</p>
                </div>
              </div>
            </div>
            
            <Tabel responsive>
              <thead>
                <tr style={{fontSize: '14px', border: '1px solid #C4C4C4'}}>
                  <th style={{width: '60%'}}>Nama Paket</th>
                  <th 
                    className='text-center'
                    style={{width: '20%'}}>
                    Harga</th>
                  <th 
                    className='text-center'
                    style={{width: '20%'}}>
                    Diskon</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{fontSize:'14px', border: '1px solid #C4C4C4'}}>
                  <td style={{width: '60%'}}>Paket Voice Call</td>
                  <td
                    className='text-center'
                    style={{width: '20%'}}>
                    IDR 350,000</td>
                  <td 
                    className='text-center'
                    style={{width: '20%'}}>
                    IDR 100,000</td>
                </tr>
              </tbody>
            </Tabel>

            <div 
              className='col-5 rounded-2 ms-auto py-2 px-4' 
              style={{border: '1px solid #C4C4C4', backgroundColor: '#F5F5F5'}}>
              <div className='d-flex justify-content-between'>
                <div className='d-flex flex-column gap-1'>
                  <p className='m-0'>Total Harga:</p>
                  <p className='m-0'>Total Diskon:</p>
                  <p className='m-0' style={{fontWeight: '700'}}>Total :</p>
                </div>
                <div className='d-flex flex-column gap-1'>
                  <p className='m-0'>IDR 350,000</p>
                  <p className='m-0'>IDR 100,000</p>
                  <p className='m-0'>IDR 250,000</p>
                </div>
              </div>
            </div>

          </main>

        </div>

          <footer className='container-fluid' style={{borderTop: '1px solid #C4C4C4'}}>
              <div className='d-flex justify-content-between mx-3 py-5'>
                <p className='m-0'>www.website.com</p>
                <p className='m-0'>+64 123 1234 123</p>
                <p className='m-0'>womencenter@wc.com</p>
              </div>
          </footer>
      </Modal>
    </>
  )
}

export default Invoice