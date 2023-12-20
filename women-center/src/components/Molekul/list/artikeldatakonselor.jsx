import CheckboxDataKonselor from "../../Atom/checkbox/CheckboxDataKonselor"
import SearchDataKonselor from "../../Atom/inputan/SearchDataKonselor"
import ModalHapus from "../Modal/ModalHapusDataKonselor"
import React, {useState} from "react"
import axios from "axios"
import imagedel from "../../../assets/icon/trash-delete.png"

const Artikel = ({checkboxArtikel, onCheckBoxChange, artikel }) => {
    const id = artikel
    const [searchValue, setSearchValue] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleDelete = async () => {
        await axios.delete(`http://localhost:3000/Articles/article/${id}`)
        .then(() => {
            getDataArtikel();
            handleClose();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchValue(value);
    };

    const filteredCheckboxArtikel = checkboxArtikel.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    const checkedItemsToDelete = filteredCheckboxArtikel.filter(
        (item) => item.checked
    );

    return(
        <>
        <div className="col-4 d-flex flex-column" id="artikel">
            <div className="d-flex justify-content-between align-items-center" id="header-artikel">
                <p className="m-0">Artikel</p>
                  <ModalHapus 
                    icons= {imagedel} 
                    onClick={() => handleDelete(checkedItemsToDelete[0].id)}/>
            </div>
            <div className="mt-2" id="search-artikel">
                <SearchDataKonselor 
                    value={searchValue}
                    onChange={handleSearchChange}
                     />
            </div>
            <div className="mt-2" id="checkbox-artikel">
                {filteredCheckboxArtikel.map((item) => (
                <CheckboxDataKonselor
                    key={item.id}
                    id={item.id}
                    label={item.title}
                    checked={item.checked}
                    onChange={() =>  onCheckBoxChange(item.id)}
                />
                ))}
            </div>
        </div>
    </>
    )
}
export default Artikel