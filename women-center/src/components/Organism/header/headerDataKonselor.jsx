import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import { IoNotifications } from 'react-icons/io5';
import SummaryContainer from '../../Molekul/summary/SummaryDataKonselor';
import '../../../styles/HeaderDataKonselor.css';
import profile from "../../../assets/profile 1.png"
import ButtonNotif from '../../Atom/button/ButtonNotif';


const HeaderDataKonselor = () => {
  return (
    <>
    <div id='container-headerKonselor'>
    <div id="header-konselor">
        <div id="header-content-konselor">
            <h1>Konselor</h1>
            <div id="subtitle-konselor" >
                <div id="icon-home-konselor">
                    <GoHomeFill id="icon-home-img-konselor" />
                </div>
                <div id="subtitle-text-konselor">/ Konselor</div>
            </div>
        </div>
        <div id="header-icons-konselor" style={{gap: '20px'}}>
            {/* Notification Icon */}
            <ButtonNotif />
            {/* Profile Image */}
            <img id="div-image-konselor" src={profile} alt="Profile Image" />
        </div>
    </div>

        <div>
            <SummaryContainer />
        </div>
    </div>
    </>
  );
};

export default HeaderDataKonselor;