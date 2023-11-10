import React from "react"
import NavbarEditUser from "../molekul/navbarEditUser"

const HeaderEditUser = (props) => {

  const {title} = props
    return(
        <header>
          <div className="container-xxl max-width-xxl">
            <div className="row m-2">
              <NavbarEditUser title={title} />
            </div>
          </div>
        </header>
    )
}
export default HeaderEditUser