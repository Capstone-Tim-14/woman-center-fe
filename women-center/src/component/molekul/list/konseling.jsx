import CheckBox from "../../atom/checkbox/checkBox"
import Searching from "../../atom/inputan/inputanSearch"
import ModalHapus from "../modal/modalHapus"
const Konseling = ({optionKonseling, selectedOptionsKonseling, onChange}) => {
    return(
        <>
        <div className="col-4 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
                <p className="m-0">Konseling</p>
                  <ModalHapus
                    onClick={""} />
            </div>
            <div className="mt-2">
                <Searching 
                    type="text"
                    placeholder="Search"
                    onChange={""}
                     />
            </div>
            <div className="mt-2">
                {optionKonseling.map((optionKonseling) => (
                <CheckBox
                    key={optionKonseling.value}
                    label={optionKonseling.label}
                    checked={selectedOptionsKonseling.includes(optionKonseling)}
                    onChange={() => onChange(optionKonseling.value)}
                />
                ))}
            </div>
        </div>
    </>
    )
}
export default Konseling