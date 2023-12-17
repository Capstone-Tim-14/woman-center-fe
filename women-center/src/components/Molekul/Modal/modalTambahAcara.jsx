import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ButtonTambahAcara from '../../Atom/button/buttontambahacara'
import KontenTambahAcara from "../../Organism/konten/kontenTambahAcara";
import Buttonn from "../../Atom/button/button";

const ModalTambahAcara = () => {
    const [showPopup, setShow] = useState(false);


    const openPopup = () => {
        setShow(true);
    };

    const closePopup = () => {
        setShow(false);
    };

    return (
        <section>
            <ButtonTambahAcara onClick={openPopup} variant="link" label="+Tambah Acara">
            </ButtonTambahAcara>

            <div>
                <Modal show={showPopup} onHide={closePopup}>
                    <Modal.Header closeButton>
                        <Modal.Title>Tambah Acara</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <KontenTambahAcara onClose={closePopup} />
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="position-absolute   end-0 p-3" style={{marginRight: '180px', marginBottom: '137px'}}>
                        <Buttonn
                            className={"bg-white text-primary "}
                            label="Batal"
                            // onClick nya diisi sesuai kondisi
                            onClick={closePopup}
                        />
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>

        </section>
    );
};

export default ModalTambahAcara;
