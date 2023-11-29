import React, { useEffect, useState } from 'react'
import FormsDataKonselor from '../../molekul/form/FormDataKonselor'
import Profil from '../../molekul/profil'
import TopikKeahlian from '../../molekul/list/topikKeahlian'
import Artikel from '../../molekul/list/artikel'
import Konseling from '../../molekul/list/konseling'
import Buttonn from '../../atom/button/button'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import ModalSucces from '../../molekul/modal/successModal'
import FailedModal from '../../molekul/modal/failedModal'

const KontenDataProfil = ({onClose}) => {

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    pendidikan: '',
    birthday: '',
    email: '',
    password: '',
    psikologi: '',
  })

  const [checkboxItemsArtikel, setCheckboxItemsArtikel] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi untuk mengambil data profil
  const getProfil = async () => {
    
  }

  // Fungsi untuk mengambil data artikel
  const getArtikel = async () => {
    try {
      const apiUrl = `http://localhost:3000/users/1`;

      const response = await axios.get(apiUrl);
      const user = response.data;

      // Extract articles from the user data
      const articles = user.articles || [];

      // Convert data structure to match the state requirements
      const checkboxItemsData = articles.map((article) => ({
        id: article.id,
        title: article.title,
        checked: false,
      }));

      setCheckboxItemsArtikel(checkboxItemsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getArtikel();
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const isDataValid = Object.values(formData).every((value) => value.trim() !== '');

    if (!isDataValid) {
      setLoading(false);
      setShowFailedModal(true);
      return;
    }

    try {
      const userId = '1'; // Gantilah dengan ID pengguna yang sesuai
      const apiUrl = `http://localhost:3000/users/${userId}`;

      const response = await axios.put(apiUrl, formData);
      
      if (response.status === 200 || response.status === 204) {
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while updating user data.');
    } finally {
      setLoading(false);
    }
  };

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
                <FormsDataKonselor 
                  first_name={formData.first_name}
                  last_name={formData.last_name}
                  username={formData.username}
                  pendidikan={formData.pendidikan}
                  birthday={formData.birthday}
                  email={formData.email}
                  password={formData.password}
                  psikologi={formData.psikologi}
                  onInputChange={handleInputChange}/>

                <Profil 
                  src=""/>
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
                  label="Batal" 
                  onClick={onClose}/>
                <Buttonn 
                  className={"bg-button"}
                  label="Simpan" 
                  disabled={loading}
                  onClick={handleSubmit}/>
              </div>
            </Form>
          </div>
        </div>

        <div>
              <ModalSucces
                  isOpen={showSuccessModal}
                  onClose={() => setShowSuccessModal(false)} />
              <FailedModal
                  isOpen={showFailedModal} 
                  onClose={() => setShowFailedModal (false)} />
        </div>
        </>
    )
}
export default KontenDataProfil