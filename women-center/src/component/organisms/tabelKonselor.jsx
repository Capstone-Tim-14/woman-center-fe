import "./tabelKonselor.css";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import SearchKonselor from "../atom/SearchKonselor";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IconCalendar from "../atom/iconCalendar";
import IconExport from "../atom/iconExport";
import IconEdit from "../atom/iconEdit";
import IconDelete from "../atom/iconDelete";
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';


const TabelKonselor = () => {
    return (
        <div className="mt-5 p-4">
            <div className="d-flex justify-content-end mb-3">
                <Button href="#" className="custom-btn-account">+Buat Akun Konselor</Button>
            </div>
            <div className="mb-3 ">
                <Row>
                    <Col>
                        <h5>Konselor</h5>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <SearchKonselor />
                        <IconCalendar />
                        <IconExport />
                    </Col>
                </Row>
            </div>
            <Table hover borderless>
                <thead className="table-header">
                    <tr>
                        <th>ID User</th>
                        <th>Username</th>
                        <th>Alamat Email</th>
                        <th>Tipe User</th>
                        <th>Jadwal</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>
                            <Button className="custom-button" >Jadwal</Button>
                        </td>
                        <td>
                            <div className="d-flex">
                                <IconEdit />
                                <IconDelete />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td><Button className="custom-button" >Jadwal</Button></td>
                        <td>
                            <div className="d-flex">
                                <IconEdit />
                                <IconDelete />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td><Button className="custom-button" >Jadwal</Button></td>
                        <td>
                            <div className="d-flex">
                                <IconEdit />
                                <IconDelete />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div className="mb-3 ">
                <Row>
                    <Col>
                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" className="btn custom-btn-dropdown">10</button>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn custom-btn-dropdown dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                                    <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                                </ul>
                                <div className="d-flex align-items-center gap-3">
                                    <p className="m-0 mx-2" style={{ color: '#A6A8B1' }}>items per page</p>
                                    <p className="m-0">1-10 of 200 items</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" className="btn custom-btn-dropdown">1</button>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn custom-btn-dropdown dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                                    <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                                </ul>
                                <div className="d-flex align-items-center">
                                    <p className="m-0 mx-2">of 44 pages</p>
                                    <IoIosArrowBack />
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default TabelKonselor;
