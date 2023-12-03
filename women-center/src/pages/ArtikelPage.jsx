import React from "react";
import Image1 from "../assets/heroartikel-page.png"
import {Row, Col} from "reactstrap";
import Artikel from "../components/Artikel/Artikel";
import image2 from "../assets/profilepageartikel.png"
import { FaRegEye, FaRegBookmark, FaRegComment } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "../styles/artikelpage.css"
import vector1 from "../assets/Ellipse 23.png"
import vector2 from "../assets/Vector (3).png"

const ArtikelPage = () => {
    return (
        <section id="hero-artikel-page">
            <Row>
                <Col lg='12' style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <div className="img-artikel">
                        <img src={Image1} alt="img-hero-artikel" style={{ width: '50%', height: 'auto' }} />
                    </div>
                    <div className="baca-artikel">
                        <div className="informasi-artikel">
                            <h1 className="judul-artikel"> Wanita dan Teknologi: Menaklukkan Dunia Digital</h1>
                            <div className="biodata-artikel">
                                <img src={image2} alt="profile-artikel" />
                                <div className="text-biodata">
                                    <h6 className="nama-author">Putri Abigail</h6>
                                    <p className="publish-artikel">29 September 2023</p>
                                </div>
                            </div>
                            <hr />
                            <div className="insight-topartikel">
                                <p className="icon-dashboard-top"> <FaRegEye/> 207</p>
                                <p className="icon-dashboard-top"> <FaRegComment/> 30 </p>
                                <p className="icon-dashboard-top"> <FaRegBookmark/> 10 </p>
                            </div>
                            <hr />
                            <p className="content-artikel-page">Teknologi telah menjadi pendorong utama dalam mengubah dinamika kehidupan manusia. Di <br />
                            tengah era digital ini, wanita tidak hanya menjadi pengguna teknologi, tetapi juga pionir dan <br />
                            inovator yang memberikan kontribusi penting terhadap kemajuan di berbagai bidang. Dalam <br />
                            artikel ini, kita akan menjelajahi peran penting wanita dalam dunia teknologi, cara mereka <br /> 
                            telah menaklukkan tantangan, dan dampak positif yang telah mereka hasilkan.</p>
                            <p className="sub-content-artikel-page"> 1. Sejarah Wanita dalam Teknologi: Jejak Peninggalan yang Luar Biasa</p>
                            <p className="content-artikel-page">Sejarah teknologi penuh dengan jejak wanita yang brilian namun sering kali terlupakan. Dari Ada <br /> Lovelace, yang dianggap sebagai programmer komputer pertama, hingga Grace Hopper yang <br /> berkontribusi pada pengembangan bahasa pemrograman COBOL, wanita telah memainkan <br /> peran kunci dalam fondasi teknologi informasi modern. Meskipun jarang mendapat pengakuan <br /> yang setara, kontribusi mereka telah membuka jalan untuk generasi wanita selanjutnya.</p>
                             <a href="/halaman-selengkapnya" className="bacaselengkapnya">Baca Selengkapnya <MdKeyboardDoubleArrowRight/>  </a>
                        </div>
                        <img src={vector1} alt="vector2" className="vector1"/>
                    </div>
                </Col>
                <Artikel />
                <div>
                    <img src={vector2} alt="vector2" className="vector2"/>
                </div>
                <div id="artikel-page">
                <Col lg='6'>
                <div className="artikel-page-content">
                    <h6 className="head-artikelpage">Artikel</h6>
                    <h1 className="body-artikelpage">Menggali Kecantikan dan Kekuatan Wanita Melalui Artikel Inspiratif</h1>
                    <p className="txt-artikelpage">"Sudut Wanita" di Feminacare menjadi tujuan utama untuk menemukan koleksi artikel yang dirancang khusus untuk wanita. Temukan berbagai topik yang mencakup berbagai aspek kehidupan wanita, memberikan informasi yang mendalam, solusi untuk tantangan umum, dan momen hiburan. Ini bukan sekadar artikel, ini adalah ruang yang dirancang untuk memberikan informasi, memberdayakan, dan menghibur, disesuaikan dengan pengalaman wanita yang beragam dan dinamis.</p>
                    <a href="/#"><button className="artikelpage-button">Learn more</button></a>
                </div>
                </Col>
                {/* <Col lg='6' style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <div id="konseling" className="img-konselingone">
                    <img src={Image} alt="img-konselingone" style={{ width: '70%', height: 'auto' }} />
                    </div>
                </Col>   */}


                </div>
            </Row>
        </section>
    );
}

export default ArtikelPage;
