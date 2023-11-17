import React from "react"
import Footer from "../component/organisms/footer/Footers"
import Header from "../component/organisms/header/Headers"
import KontenDataUser from "../component/organisms/konten/kontenDataUser"
const DataUser = () => {
    return (
        <section>
            <Header title="Data User"/>
            <KontenDataUser />
            <Footer />
      </section>
    )
}
export default DataUser