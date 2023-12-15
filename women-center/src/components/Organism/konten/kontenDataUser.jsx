import React, { useState, useEffect } from 'react'
import FormsDataUser from '../../Molekul/form/FormDataUser'
import Profil from '../../Molekul/profil'
import Artikel from '../../Molekul/list/artikel'
import Karier from '../../Molekul/list/karier'
import Konseling from '../../Molekul/list/konseling'
import Buttonn from '../../Atom/button/button'
import { Form } from 'react-bootstrap'
import axios from "axios"
import ImgUrl from "../../../assets/image 36.png"

const KontenDataUser = () => {

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    birthday: '',
    password: '',
  })
  const [checkboxItemsArtikel, setCheckboxItemsArtikel] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [imageUrl, setImageUrl] = useState('');

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi untuk mengambil data profil
  const getProfil = async () => {
    try {
      const userId = '1'; // Gantilah dengan ID pengguna yang sesuai
      const userApiUrl = `http://localhost:3000/users/${userId}`;
  
      // Panggil endpoint untuk mendapatkan data pengguna
      const userResponse = await axios.get(userApiUrl);
  
      // Destructuring data dari respons
      const userData = userResponse.data;
      const imageUrl = userData.picture;
  
      setImageUrl(imageUrl);
  
      // Tampilkan data pengguna jika diperlukan
      console.log('Data pengguna:', userData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Fungsi untuk mengambil data artikel
  const getArtikel = async () => {
    try {
      const userId = '1'; // Gantilah dengan ID pengguna yang sesuai
      const apiUrl = `http://localhost:3000/users/${userId}`;

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
    getProfil();
    getArtikel();
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const isDataValid = Object.values(formData).every((value) => value.trim() !== '');

    if (!isDataValid) {
      setLoading(false);
      alert('Isi data terlebih dahulu.');
      return;
    }

    try {
      const userId = '1'; // Gantilah dengan ID pengguna yang sesuai
      const apiUrl = `http://localhost:3000/users/${userId}`;

      const response = await axios.put(apiUrl, formData);
      
      if (response.status === 200 || response.status === 204) {
        alert('User data updated successfully.');
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
          <Form onSubmit={handleSubmit}>
            <div className="d-flex gap-4 col-12">
                <FormsDataUser 
                    first_name={formData.first_name}
                    last_name={formData.last_name}
                    username={formData.username}
                    email={formData.email}
                    birthday={formData.birthday}
                    password={formData.password}
                    onInputChange={handleInputChange}
                  />
                <Profil 
                  src={ImgUrl}/>
            </div>
            <div className='ms-2 me-5 mt-4'>
              <div className="d-flex justify-content-start col-8 gap-4" style={{marginTop: '-100px'}}>
                <Artikel 
                  checkboxArtikel={checkboxItemsArtikel} 
                  onCheckBoxChange={handleCheckboxChange} />
                <Karier 
                  checkboxKarier={checkboxItemsArtikel} 
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
                  type="submit"
                  disabled={loading} />
            </div>
          </Form>
          </div>
        </div>
        </>
    )
}
export default KontenDataUser