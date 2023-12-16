import React from 'react';
import "../../styles/KalenderContainer.css"
import imagedashboard from "../../assets/icon/shadow.png"
import ModalNote from '../Molekul/Modal/modalTambahAcara'


const NoteKalender = () => {

    return (
    <div className="sub-Note-kalender">
    <div className="all-Note-kalender">
    <div className="head-Note-kalender">
        <h6 className="txt-Note-kalender">9 November 2023 <ModalNote/>
        </h6>
    </div>
    </div>
    <div className="all-Note-kalender2" style={{ display: 'flex' }}>
    <div className="head-Note-kalender2" style={{ 
      width: '100%', 
      background: '#FFF', 
      padding:'24px',
      borderRadius: '-20px',
      height: '300px',
      display: 'flex',
      flexDirection: 'column',
      color: 'white',
    }}>
        <div className="little-Note-kalender1" style={{ width: '95%', background: 'rgba(255, 212, 39, 1)', height: '20px', marginLeft: '3px', marginTop: '-100px', color: 'white', font: 'Raleway', fontSize: '14px'}}>13:00 Sesi Leslie Alexander, S.Psi</div>
        <div className="little-Note-kalender2" style={{ width: '95%', background: 'rgba(61, 211, 244, 1)', height: '20px', marginLeft: '3px', marginTop: '10px',  color: 'white', font: 'Raleway', fontSize: '14px'}}>13:00 Improve Your Life with Minimalism</div>
        
    </div>
    </div>
    </div>
      
    )
}

export default NoteKalender;