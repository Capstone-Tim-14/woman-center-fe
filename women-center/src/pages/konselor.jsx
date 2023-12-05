/* eslint-disable no-unused-vars */
import React from 'react'
import HeaderKonselor from '../components/Header/headerKonselor'
import CardProfil from '../components/card/cardProfil'
import BannerKonselor from '../components/card/BannerKonselor'
import { TbMoodSmileBeam } from "react-icons/tb";
import vector1 from "../assets/Vector (6).png"


function Konselor() {
  return (
    <>
      <HeaderKonselor />

      <section>
        <div className='container-xxl'>
          <div className='row gap-5'>
            <div className='d-flex justify-content-center'>
                <div className='d-flex flex-column gap-4'>
                  <div className='d-flex align-items-center gap-3'>
                    <CardProfil 
                      src={"src/assets/imgKonselor/Ellipse 101.svg"} 
                      names={"Maron Mango S.Psi"} 
                      session={"432+ Sesi"}/>
                    <CardProfil 
                      src={"src/assets/imgKonselor/Ellipse 101 (1).svg"} 
                      names={"Madelyn Calzoni S.Psi"} 
                      session={"234+ Sesi"}/>
                    <CardProfil 
                      src={"src/assets/imgKonselor/Ellipse 101 (2).svg"} 
                      names={"Jocelyn Westervelt S.Psi"} 
                      session={"221+ Sesi"}/>
                  </div>
                  <div className='d-flex align-items-center gap-3'>
                    <CardProfil 
                      src={"src/assets/imgKonselor/Ellipse 101 (3).svg"} 
                      names={"Mira Bergson S.Psi"} 
                      session={"209+ Sesi"}/>
                    <CardProfil 
                      src={"src/assets/imgKonselor/Ellipse 101 (4).svg"} 
                      names={"Livia Saris S.Psi"} 
                      session={"178+ Sesi"}/>
                    <CardProfil 
                      src={"src/assets/imgKonselor/Ellipse 101 (5).svg"} 
                      names={"Carla Vaccaro S.Psi"} 
                      session={"166+ Sesi"}/>
                  </div>
                  <div className='d-flex align-items-center gap-3'>
                    <CardProfil 
                      src={"src/assets/imgKonselor/Ellipse 101 (6).svg"} 
                      names={"Jordyn Geidt S.Psi"} 
                      session={"129+ Sesi"}/>
                    <CardProfil 
                      src={"src/assets/imgKonselor/Ellipse 101 (7).svg"} 
                      names={"Maria Bergson S.Psi"} 
                      session={"97+ Sesi"}/>
                    <CardProfil 
                      src={"src/assets/imgKonselor/Ellipse 101 (8).svg"} 
                      names={"Ashlynn Culhane S.Psi"} 
                      session={"Baru!"}/>
                  </div>
                </div>
            </div>


            <div className='d-flex justify-content-center'>
              <BannerKonselor 
                icon={<TbMoodSmileBeam size={30} />} 
                text={"Eksplorasi profil konselor kami yang penuh warna, dan temukan keunikan serta keahlian mereka dalam memberikan dukungan"}/>
            </div>
          </div>
        </div>
      </section>
      <img src={vector1} alt="vector1" className="vector-2-footer"/>
    </>
  )
}

export default Konselor