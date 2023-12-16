import CheckboxDataKonselor from "../../Atom/checkbox/CheckboxDataKonselor"
import SearchDataKonselor from "../../Atom/inputan/SearchDataKonselor"
import ModalHapus from "../Modal/ModalHapusDataKonselor"
import React, { useState } from "react"
import imagekar from "../../../assets/icon/trash-delete.png"

const Karier = ({checkboxKarier, onCheckBoxChange, karir}) => {

    const id = karir
    const [searchValue, setSearchValue] = useState("");

    const handleDelete = async () => {
        await axios.delete(`http://localhost:3000/Karier/karier/${id}`)
        .then(() => {
            getDataKarier();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchValue(value);
    };

    const filteredCheckboxKarier = checkboxKarier.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    const checkedItemsToDelete = filteredCheckboxKarier.filter(
        (item) => item.checked
    );

    return(
        <>
        <div className="col-4 d-flex flex-column" id="karier">
            <div className="d-flex justify-content-between align-items-center" id="header-karier">
                <p className="m-0">Karier</p>
                <ModalHapus 
                    icons={imagekar} 
                    onClick={() => handleDelete(checkedItemsToDelete[0].id)}/>
            </div>
            <div className="mt-2" id="search-karier">
                <SearchDataKonselor 
                    value={searchValue}
                    onChange={handleSearchChange}
                     />
            </div>
            <div className="mt-2" id="checkbox-karier">
                {filteredCheckboxKarier.map((item) => (
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
export default Karier