import React, { useState } from 'react'
import FormsDataKonselor from '../../molekul/form/FormDataKonselor'
import Profil from '../../molekul/profil'
import TopikKeahlian from '../../molekul/list/topikKeahlian'
import Artikel from '../../molekul/list/artikel'
import Konseling from '../../molekul/list/konseling'
import Buttonn from '../../atom/button/button'
import { Form } from 'react-bootstrap'


const KontenDataProfil = () => {

  const [checkboxItemsArtikel, setCheckboxItemsArtikel] = useState([
    { id: 1, label: "Option 1", value: "option1", checked: false },
    { id: 2, label: "Option 2", value: "option2", checked: false },
    { id: 3, label: "Option 3", value: "option3", checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    setCheckboxItemsArtikel((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };  

    return (
        <>
        <div className="container-xxl mt-4">
          <div className="row mx-2">
            <Form>
              <div className="d-flex gap-4 col-12">
                <FormsDataKonselor />
                <Profil 
                  src='src/assets/img/image36.png'/>
              </div>
              <div className='ms-2 me-5 mt-4'>
                <div className="d-flex justify-content-start col-12 gap-4 mt-4">
                  <TopikKeahlian />
                  <Artikel 
                    checkboxArtikel={checkboxItemsArtikel} 
                    onCheckBoxChange={handleCheckboxChange}/>
                  <Konseling 
                    checkboxKonseling={checkboxItemsArtikel} 
                    onCheckBoxChange={handleCheckboxChange} />
                </div>
              </div>
              <div className='d-flex gap-2 justify-content-end mt-4'>
                <Buttonn 
                  className={"bg-white text-primary"}
                  label="Batal" />
                <Buttonn 
                  className={"bg-button"}
                  label="Simpan" 
                  onClick={""}/>
              </div>
            </Form>
          </div>
        </div>
        </>
    )
}
export default KontenDataProfil