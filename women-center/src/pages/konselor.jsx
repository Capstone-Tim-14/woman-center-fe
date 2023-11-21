import React from 'react'
import HeaderKonselor from '../components/Header/headerKonselor'
import CardProfil from '../components/card/cardProfil'
import Playgoogle from "../assets/googleplay.png"
import Appstore from "../assets/appstore.png"
import BannerKonselor from '../components/card/BannerKonselor'
import { TbMoodSmileBeam } from "react-icons/tb";
import { Link } from 'react-router-dom';

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

      <section>
        <div className='container-xxl'>
          <div className='row'>
            <div className="Download">
              <h6 className="Title_dwn">Download</h6>
              <h3 className="txt_unduh">Unduh Aplikasi Sekarang!</h3>
              <p className="subt_unduh">Segera unduh dan nikmati fitur-fitur unggulan kami! <br />
                  Tetap bergabung untuk menggali potensi terbaik dalam diri Anda!</p>
              <div className="download_btn">
                  <button className="playgoogle__btn">
                    <Link to='/playgoogle'><img src={Playgoogle} alt="google-img" /></Link> 
                  </button>

                  <button className="apple-btn">
                    <Link to='/appstore'><img src={Appstore} alt="apple-img" /></Link> 
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Konselor