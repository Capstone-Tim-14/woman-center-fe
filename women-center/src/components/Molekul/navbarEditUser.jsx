import ButtonClose from "../Atom/button/buttonClose"

const NavbarEditUser = (props) => {

  const {title} = props
    return(
            <div className="d-flex justify-content-between align-items-center">
              <div className="col-2">
                <h5 className="m-0">{title}</h5>
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