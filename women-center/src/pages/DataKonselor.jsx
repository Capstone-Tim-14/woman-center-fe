import React from "react"
import Header from "../components/Organism/header/Headers.jsx"
import KontenDataKonselor from "../components/Organism/konten/kontenDataKonselor.jsx"


const containerStyle = {
    overflowX: "hidden", // This will hide horizontal overflow
};
const DataKonselor = () => {
    return (
        <div className="container-datakonselor" style={containerStyle}>
            <div className="row">
                <div className="col-lg-12">
                    <Header title="Data Konselor"/>
                </div>
                <div className="col-lg-12">
                    <KontenDataKonselor />
                </div>
            </div>
        </div>
    )
}

export default DataKonselor;