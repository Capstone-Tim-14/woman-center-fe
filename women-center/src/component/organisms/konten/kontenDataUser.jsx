import React, { useState } from 'react'
import FormsDataUser from '../../molekul/form/FormDataUser'
import Profil from '../../molekul/profil'
import Artikel from '../../molekul/list/artikel'

const KontenDataUser = () => {

  const [checkboxItems, setCheckboxItems] = useState([
    { id: 1, label: "Option 1", value: "option1", checked: false },
    { id: 2, label: "Option 2", value: "option2", checked: false },
    { id: 3, label: "Option 3", value: "option3", checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    setCheckboxItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };  

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
              <Artikel checkboxArtikel={checkboxItems} onCheckBoxChange={handleCheckboxChange} />
            </div>
          </div>
        </div>
        </>
    )
}
export default KontenDataUser