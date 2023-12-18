import React, { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import ButtonClose from '../../Atom/button/buttonsClosePaket'
import ButtonDownload from '../../Atom/button/buttonsDownload'
import Tabel from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import '../../../styles/invoice.css'
import image1 from "../../../assets/icon/Document.png"

function Invoice() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const pdfRef = useRef();

  // download pdf
  const downloadPdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("invoice.pdf");
    });
  }

  return (
    <>
      <button
        id='invoice'
        onClick={handleShow}>
        <img 
          src="src/assets/icon/Document.png" 
          alt="" 
          style={{width: '16px', height: '18px'}}/>
      </button>

      <div id='modal-Invoice'>
      <Modal show={show} onHide={handleClose} size='lg'>
        <div id='btn-Invoice'>
            <ButtonDownload onClick={downloadPdf}/>
            <ButtonClose onClick={handleClose}/>
        </div>
        <div className='container' ref={pdfRef} id='container-Invoice'>

          <header>
            <div id='header-line'>
                <div id='header-logo'>
                  <img 
                    src={image1}
                    alt=""/>
                  <p>WOMEN<br/>CENTER</p>
                </div>
                <div>
                  <h4>INVOICE</h4>
                </div>
              </div>
          </header>

          <main id='main-Invoice'>

            <div id='info-Invoice'>
              <div id='info-left'>
                <p id='company'>WOMEN CENTER</p>
                <p >REG: 123000123000</p>
                <p >womencenter@wc.com</p>
                <p >+64 123 1234 123</p>
              </div>
              <div id='info-right'>
                <p id='namaweb'>NAMAWEB.COM</p>
                <div id='invoice-number'>
                  <p >INVOICE NUMBER:</p>
                  <p >INV-0002</p>
                </div>
                <div id='invoice-date'>
                  <p >INVOICE DATE:</p>
                  <p >19 SEP 2023</p>
                </div>
              </div>
            </div>
            
            <Tabel responsive id='table-Invoice'>
              <thead id='table-head'>
                <tr>
                  <th id='paket-invoice'>Nama Paket</th>
                  <th id='price-invoice'>Harga</th>
                  <th id='discount-invoice'>Diskon</th>
                </tr>
              </thead>
              <tbody id='table-body'>
                <tr>
                  <td id='paket-invoice'>Paket Voice Call</td>
                  <td id='price-invoice'>
                    IDR 350,000</td>
                  <td id='discount-invoice'>
                    IDR 100,000</td>
                </tr>
              </tbody>
            </Tabel>

            <div id='total-Invoice'>
              <div className='d-flex justify-content-between'>
                <div className='d-flex flex-column gap-1'>
                  <p >Total Harga:</p>
                  <p >Total Diskon:</p>
                  <p style={{fontWeight: '700'}}>Total :</p>
                </div>
                <div className='d-flex flex-column gap-1'>
                  <p >IDR 350,000</p>
                  <p >IDR 100,000</p>
                  <p >IDR 250,000</p>
                </div>
              </div>
            </div>

          </main>

          <footer 
            id='footer-Invoice' 
            className='container-fluid'>
              <div id='footerinfo'>
                <p >www.website.com</p>
                <p >+64 123 1234 123</p>
                <p >womencenter@wc.com</p>
              </div>
          </footer>
        </div>

      </Modal>
      </div>
    </>
  )
}

export default Invoice