import React from 'react'
import FormsDataUser from '../../molekul/form/FormDataUser'
import Profil from '../../molekul/profil'

const KontenDataUser = () => {

    return (
        <>
        <div className="container-xxl mt-4">
          <div className="row mx-2">
            <div className="d-flex gap-4 col-12">
                <FormsDataUser />
                <Profil 
                  src='src/assets/img/profil2.png'/>
            </div>
          </div>
        </div>

        <div className="container-xxl mt-4">
          <div className="row ms-2 me-5">
            <div className="d-flex justify-content-start col-12 gap-4">

            </div>
          </div>
        </div>
        </>
    )
}
export default KontenDataUser