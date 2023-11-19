import CheckBox from "../../atom/checkbox/checkBox"
import Searching from "../../atom/inputan/inputanSearch"
import ModalHapus from "../modal/modalHapus"
const Konseling = ({checkboxKonseling, onCheckBoxChange}) => {
    return(
        <>
        <div className="col-4 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
                <p className="m-0">Konseling</p>
                  <ModalHapus />
            </div>
            <div className="mt-2">
                <Searching 
                    type="text"
                    placeholder="Search"
                     />
            </div>
            <div className="mt-2">
                {checkboxKonseling.map((item) => (
                <CheckBox
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    value={item.value}
                    checked={item.checked}
                    onChange={() =>  onCheckBoxChange(item.id)}
                />
                ))}
            </div>
        </div>
    </>
    )
}
export default Konseling