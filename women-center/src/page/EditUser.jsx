import React from "react"
import HeaderEditUser from "../component/organisms/headerEditUser"
import KontenEditUser from "../component/organisms/kontenEditUser"
import FooterEditUser from "../component/organisms/footerEditUser"
import Artikel from "../component/molekul/artikel"
import Profil from "../component/molekul/profil"
const EditUser = () => {
    return (
        <section>
            <HeaderEditUser title="Edit User"/>
            <KontenEditUser titleForms="Informasi User" profil={<Profil />}>  <Artikel /> </KontenEditUser>
            <FooterEditUser />
      </section>
    )
}
export default EditUser