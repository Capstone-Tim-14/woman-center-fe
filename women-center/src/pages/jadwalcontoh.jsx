import React from "react";
import HeaderJadwal from "../components/Organism/HeaderJadwal";
import KalenderContainers from "../components/Organism/KalenderContainer";
import SesiContainers from "../components/Organism/SesiContainer";
import KalenderLeft from '../components/Organism/KalenderLeft';
import NoteKalender from '../components/Organism/NoteKalender';
import ModalEditKonseling from '../components/Molekul/Modal/modalEditKonseling.jsx';
import "../styles/Jadwal.css";



const JadwalContoh = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDatabaseOpen, setIsDatabaseOpen] = useState(false);
  const [newEditKonseling, setNewEditKonseling] = useState({
    name_paket: "",
    name_konselor: "",
    name_user: "",
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDatabaseOpen(false);
  };

  const toggleDatabase = () => {
    setIsDatabaseOpen(!isDatabaseOpen);
    setIsMenuOpen(false);
  };

  const handleEditKonseling = async () => {
    try {
      console.log('Data to be sent to API:', newEditKonseling);

      const response = await axios.post('https://656dc86abcc5618d3c23f082.mockapi.io/api/v1/konseling', newEditKonseling);

      console.log('API Response:', response.data); // Log the API response

      if (response.status === 201) {
        console.log('User berhasil ditambahkan');
        setNewEditKonseling({
          name_paket: "",
          name_konselor: "",
          name_user: "",
        });
        // Tutup modal atau lakukan yang sesuai
      } else {
        // Tangani kesalahan jika diperlukan
        console.error('Gagal menambahkan User');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const storedIsMenuOpen = localStorage.getItem('isMenuOpen');
    setIsMenuOpen(storedIsMenuOpen === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('isMenuOpen', isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => () => setIsDatabaseOpen(false), []);



  
    return (
        <div className="main-container">
        {/* Gunakan komponen Header */}
        <HeaderJadwal />

        <div className="mt-5 p-4">
          <div className="d-flex justify-content-end" >
          <ModalEditKonseling 
            onEditKonseling={handleEditKonseling}
            newEditKonseling={newEditKonseling}
            setNewEditKonseling={setNewEditKonseling}
            />
          </div>
        </div>

        <div className="sub-jadwal-kalender">
        <KalenderLeft />
        <NoteKalender />
        </div>
        

        <div className="sub-content-jadwal-sesi">
        <SesiContainers />
        </div>

      </div>
    );
}

export default JadwalContoh;