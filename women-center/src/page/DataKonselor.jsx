import React from "react"
import Header from "../component/organisms/header/Headers"
import KontenDataKonselor from "../component/organisms/konten/kontenDataKonselor"
import Footer from "../component/organisms/footer/Footers"

const DataKonselor = () => {
    return (
        <section>
        <Header title="Data Konselor"/>
        <KontenDataKonselor />
        <Footer />
  </section>
    )
}

export default DataKonselor;