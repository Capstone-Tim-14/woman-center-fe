import CheckBox from "../../atom/checkbox/checkBox"
import Searching from "../../atom/inputan/inputanSearch"
import ModalHapus from "../modal/modalHapus"
const Karier = ({optionKarier, selectedOptionsKarier, onChange}) => {
    return(
        <>
        <div className="col-4 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
                <p className="m-0">Karier</p>
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
                {optionKarier.map((optionKarier) => (
                <CheckBox
                    key={optionKarier.value}
                    label={optionKarier.label}
                    checked={selectedOptionsKarier.includes(optionKarier)}
                    onChange={() => onChange(optionKarier.value)}
                />
                ))}
            </div>
        </div>
    </>
    )
}
export default Karier