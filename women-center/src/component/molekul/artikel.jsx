import CheckBox from "../atom/checkBox"
import Searching from "../atom/inputanSearch"
import ModalHapus from "./modalHapus"
const Artikel = () => {
    return(
        <>
        <div className="col-3 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
                <p className="m-0">Artikel</p>
                  <ModalHapus />
            </div>
            <div className="mt-2">
                <Searching 
                    type="text"
                    placeholder="Search"
                    onChange={""}
                     />
            </div>
            <div className="mt-2">
                <CheckBox
                    type="checkbox" 
                    value={true}
                    onChange=""
                    label="Judul Artikel"
                />
            </div>
        </div>
        <div className="col-3 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
                <p className="m-0">Karier</p>
                <ModalHapus />
            </div>
            <div className="mt-2">
                <Searching 
                    type="text"
                    placeholder="Search"
                    onChange={""}
                     />
            </div>
            <div className="mt-2">
                <CheckBox
                    type="checkbox" 
                    value={true}
                    onChange=""
                    label="Riwayat Daftar karier"
                />
            </div>
        </div>
        <div className="col-3 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
                <p className="m-0">Konseling</p>
                <ModalHapus />
            </div>
            <div className="mt-2">
                <Searching 
                    type="text"
                    placeholder="Search"
                    onChange={""}
                      />
            </div>
            <div className="mt-2">
                <CheckBox
                    type="checkbox" 
                    value={true}
                    onChange=""
                    label="Nama Konseling"
                />
            </div>
        </div>
    </>
    )
}
export default Artikel