import React from "react";
import artikel01 from "../../assets/image 2.png"
import artikel02 from "../../assets/image 3.png"
import artikel03 from "../../assets/image 4.png"

const Artikel = () => {
    return(
        <section>
            
        <div id="artikel" className="artikel">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card shadow border-0">
                    <img
                      src={artikel01} // Ganti dengan URL gambar artikel Anda
                      alt="Gambar Artikel"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Judul artikel panjang font 20 raleway yang bisa sampek </h5> {/* Ganti dengan judul artikel Anda */}
                      <p className="card-text">
                      Temukan berbagai artikel informatif yang mendukung dan memberikan wawasan untuk kehidupan wanita.
                      </p> {/* Ganti dengan deskripsi artikel Anda */}
                      <a href="/artikel" className="btn-readmore">
                        Read more <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card shadow border-0">
                    <img
                      src={artikel02} // Ganti dengan URL gambar artikel Anda
                      alt="Gambar Artikel"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Judul artikel panjang font 20 raleway yang bisa sampek </h5> {/* Ganti dengan judul artikel Anda */}
                      <p className="card-text">
                      Temukan berbagai artikel informatif yang mendukung dan memberikan wawasan untuk kehidupan wanita.
                      </p> {/* Ganti dengan deskripsi artikel Anda */}
                      <a href="/artikel" className="btn-readmore">
                        Read more <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card shadow border-0">
                    <img
                      src={artikel03} // Ganti dengan URL gambar artikel Anda
                      alt="Gambar Artikel"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Judul artikel panjang font 20 raleway yang bisa sampek </h5> {/* Ganti dengan judul artikel Anda */}
                      <p className="card-text">
                      Temukan berbagai artikel informatif yang mendukung dan memberikan wawasan untuk kehidupan wanita.
                      </p> {/* Ganti dengan deskripsi artikel Anda */}
                      <a href="/artikel" className="btn-readmore"> 
                        Read more <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="/artikel" className="learnmore-btn justify-content-center">Learn more </a>
          </div>
        </section>
    )
}

export default Artikel;