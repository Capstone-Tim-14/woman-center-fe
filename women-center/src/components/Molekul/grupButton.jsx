import Buttonn from "../Atom/button/button"

const GrupButton = () => {
    return(
        <div className="d-flex justify-content-end gap-3">
            <Buttonn 
                className="bg-white text-primary"
                label="Batal"
                onClick={""}/>
            <Buttonn 
                className="bg-button"
                label="Simpan"
                onClick={""}/>
        </div>
    )
}
export default GrupButton