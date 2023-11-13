import React from "react"
import HeaderEditUser from "../component/organisms/headerEditUser"
import KontenEditUser from "../component/organisms/kontenEditUser"
import FooterEditUser from "../component/organisms/footerEditUser"
import ArtikelKonselor from "../component/molekul/artikelKonselor"
import ProfilKonselor from "../component/molekul/profilKonselor"

const DataKonselor = () => {
    return (
        <section>
        <HeaderEditUser title="Edit Konselor"/>
        <KontenEditUser titleForms="Informasi Konselor" profil={<ProfilKonselor />}>  <ArtikelKonselor /> </KontenEditUser>
        <FooterEditUser />
  </section>
    )
}

export default DataKonselor;