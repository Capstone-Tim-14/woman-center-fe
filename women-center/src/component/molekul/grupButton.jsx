import Buttonn from "../atom/button"

const GrupButton = () => {
    return(
        <div className="d-flex justify-content-end gap-3">
            <Buttonn 
                className="bg-white text-primary px-5"
                label="Batal"
                onClick={""}/>
            <Buttonn 
                className="bg-button px-5"
                label="Simpan"
                onClick={""}/>
        </div>
    )
}
export default GrupButton