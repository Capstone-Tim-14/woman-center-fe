import React from 'react'
import Forms from '../molekul/form'
import Profil from '../molekul/profil'
import Artikel from '../molekul/artikel'

const KontenEditUser = (props) => {

  const {titleForms, children, profil} = props
    return (
        <>
        <div className="container-xxl mt-4">
          <div className="row mx-2">
            <div className="d-flex gap-3">
                <Forms titleForms={titleForms}/>
                {profil}
            </div>
          </div>
        </div>

        <div className="container-xxl mt-4">
          <div className="row mx-2">
            <div className="d-flex justify-content-between">
                {children}
            </div>
          </div>
        </div>
        </>
    )
}
export default KontenEditUser