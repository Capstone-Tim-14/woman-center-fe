import CheckBox from "../../Atom/checkbox/checkBox"
import Searching from "../../Atom/inputan/inputanSearch"
import ModalHapus from "../Modal/modalHapus"
import {RiDeleteBinLine} from 'react-icons/ri'
import React, {useState} from "react"
const Artikel = ({checkboxArtikel, onCheckBoxChange }) => {

    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchValue(value);
    };

    const filteredCheckboxArtikel = checkboxArtikel.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return(
        <>
        <div className="col-4 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
                <p className="m-0">Artikel</p>
                  <ModalHapus icons={<RiDeleteBinLine color="red"/>}/>
            </div>
            <div className="mt-2">
                <Searching 
                    value={searchValue}
                    onChange={handleSearchChange}
                     />
            </div>
            <div className="mt-2">
                {filteredCheckboxArtikel.map((item) => (
                <CheckBox
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