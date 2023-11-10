import ButtonClose from "../atom/buttonClose"

const NavbarEditUser = () => {
    return(
            <div className="d-flex justify-content-between align-items-center">
              <div className="col-2">
                <h5 className="m-0">Data User</h5>
              </div>
              <div className="col-2 d-flex justify-content-end">
                <ButtonClose
                  onClick={""}
                />
              </div>
            </div>
    )
}
export default NavbarEditUser