import React, { useState, useEffect } from 'react';
import "../../styles/sesi-left-konseling.css"
import imagedashboard from "../../assets/icon/shadow.png"
import PageOptions from '../Molekul/PageOption';
import ModalEditAcara from '../Molekul/Modal/modalEditAcara';
import { useAuth } from '../Layout/AuthContext'
import axios from 'axios'


const SesiRightContainer = () => {
    const { token, logout } = useAuth();
    const [events, setEvents] = useState([]);
    const [pagination, setPagination] = useState({
      page: 1,
      totalPage: 1,
      nextPage: null,
      prevPage: null,
    });
  
    const goToPage = (page) => {
      fetchData(page);
    };
  
    const fetchData = async (page = 1, filter = '') => {
      try {
        if (token) {
          const response = await axios.get(
            'https://api-ferminacare.tech/api/v1/admin/events',
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                page,
                filter,
              },
            }
          );
  
          const data = response.data;
  
          setEvents(data.data);
  
          setPagination({
            page: data.meta.page,
            totalPage: data.meta.total_page,
            nextPage: data.meta.next_page,
            prevPage: data.meta.previous_page,
          });
        } else {
          console.error('Token not available.');
          logout();
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [token]); // Fetch data when the component mounts or when the token changes
  
        return (
            <div className="Sesi-acara">
                <div className="all-sesi-konseling">
                    <div className="head-dashboard-sesi-konseling">
                        <h6 className="txt-dashboard-sesi-konseling">Acara</h6>
                    </div>
                    <div className="head-dashboard-sesi-konseling">
                        <h10 className="txt-dashboard2-sesi-konseling">4 Acara Minggu Ini</h10>
                    </div>
                    <hr className="garis" />
                    <div className="showall-sesi-konseling">
        {events.map((event) => (
          <div className="show-sesi-konseling" key={event.id}>
            <div className="img-sesi-konseling">
              <img src={imagedashboard} alt="img-sesi-konseling" />
            </div>
            <div className="content-sesi-konseling">
              <h5 className="title-sesi-konseling" style={{ display: 'flex' }}>
                {event.title}
                <ModalEditAcara />
              </h5>
              <div style={{ marginTop: '-120px' }}>
                <h5 className="sub-title-sesi-konseling2">{event.locations}<br /></h5>
                <p className="subtitle-sesi-konseling">Tanggal         : {event.date}</p>
                <p className="subtitle-sesi-konseling2">Jam             : {event.time_start} - {event.time_finish}</p>
              </div>
            </div>
          </div>
        ))}
        <PageOptions onPageChange={goToPage} totalPages={pagination.totalPage || 1} />
      </div>
                </div>
            </div>
        )
    };

    export default SesiRightContainer;