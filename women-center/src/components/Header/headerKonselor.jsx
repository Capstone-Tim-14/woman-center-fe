import React from 'react'
import '../../styles/headerKonselor.css'

function HeaderKonselor() {
  return (
    <section>
        <header>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12 d-flex align-items-center position-relative mb-3'>
                        <div className='col justify-content-start'>
                            <img 
                                src="src/assets/gambar4.png" 
                                alt="" 
                                id='gambar_1'/>
                            <img 
                                src="src/assets/gambar1.png" 
                                alt="" 
                                id='gambar_2'/>
                        </div>
                        <div className='col-6 justify-content-center d-flex flex-column m-5 pt-2' id='text_konselor'>
                            <div 
                                className='text-center mb-3' 
                                id='title_konselor'>
                                <p 
                                    className='m-0 lh-base'>
                                    Berkonsultasi Dengan Profesional
                                    <br/>yang Berpengalaman
                                </p>
                            </div>
                            <div 
                                className='text-center mb-3'
                                id='p1_konselor'>
                                <p className='m-0 lh-lg'>Memungkinkan Anda berinteraksi dengan konselor berpengalaman dan
                                <br/>profesional, memberikan layanan yang penuh perhatian untuk membantu
                                <br/> Anda mengatasi berbagai aspek kehidupan.</p>
                            </div>
                            <div className='text-center' 
                                id='p2_konselor'>
                                <p className='m-0'>35+ Konselor</p>
                            </div>
                        </div>
                        <div 
                            className='col justify-content-end'>
                            <img 
                                src="src/assets/gambar3.png" 
                                alt="" 
                                id='gambar_3'/>
                            <img 
                                src="src/assets/gambar2.png" 
                                alt="" 
                                id='gambar_4'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-xxl'>
                <div className='row position-relative mt-4'>
                    <div className='mt-2' id='back_start'>
                        .
                    </div>
                    <div className='mt-4 mb-3' id='back_mid'>
                        <div className='d-flex flex-column align-items-center gap-3'>
                            <p className='m-0 text-white lh-lg'>Para Mentor Women Center telah meraih gelar sarjana Psikologi (S.Psi) dari berbagai universitas terkemuka di Indonesia. Sebelum mendapatkan pengakuan resmi, mereka menjalani proses pelatihan khusus yang diselenggarakan oleh Founder dan Psikolog Women Center, memastikan bahwa mereka memiliki pemahaman mendalam tentang berbagai masalah psikologis. Fokus penanganan mereka terutama pada masalah non-klinis seperti overthinking, stres sehari-hari, dan produktivitas.</p>
                            <p className='m-0 text-white lh-lg'> Seluruh Mentor Women Center beroperasi di bawah pengawasan ketat Psikolog Women Center, memastikan keberlanjutan dan kualitas layanan. Mereka siap membantu untuk memahami diri dan mengatasi berbagai masalah yang mungkin dihadapi pengguna, dengan pelayanan yang berfokus pada kehidupan wanita.</p>
                        </div>
                    </div>
                    <div className='' id='back_end'>
                        .
                    </div>
                </div>
            </div>
        </header>
    </section>
  )
}

export default HeaderKonselor