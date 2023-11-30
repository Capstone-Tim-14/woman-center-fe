import { Form } from "react-bootstrap"
import Inputan from "../../Atom/inputan/Inputan"

const FormsDataKonselor = (props) => {

  const {
    first_name,
    last_name,
    username,
    pendidikan,
    birthday,
    email,
    password,
    psikologi,
    onInputChange,
  } = props

    return(
        <div className="col-8 flex-column">
            <p className="m-0">Informasi Konselor</p>
            <Form className="mt-3 d-flex justify-content-between gap-2">
                <Form.Group
                    className="mb-3 d-flex flex-column col-6 gap-3">

                    <Inputan 
                      type="text"
                      name="first_name"
                      placeholder="Nama Depan"
                      value={first_name}
                      onChange={(e) => onInputChange("first_name", e.target.value)}
                      autoFocus={true}
                    />

                    <Inputan 
                      type="text" 
                      name="last_name"
                      placeholder="Nama Belakang"
                      value={last_name}
                      onChange={(e) => onInputChange("last_name", e.target.value)}
                    />

                    <Inputan 
                      type="text" 
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => onInputChange("username", e.target.value)}
                    />
                    
                    <Inputan 
                      type="text" 
                      placeholder="Pendidikan Terakhir"
                      value={pendidikan}
                      onChange={(e) => onInputChange("pendidikan", e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 d-flex flex-column col-6 gap-3">

                    <Inputan 
                      type="date"
                      value={birthday}
                      onChange={(e) => onInputChange("birthday", e.target.value)}
                    />
                    <Inputan 
                      type="email"
                      placeholder="Alamat Email"
                      value={email}
                      onChange={(e) => onInputChange("email", e.target.value)}
                    />
                    <Inputan 
                      type="password" 
                      placeholder="Password"
                      value={password}
                      onChange={(e) => onInputChange("password", e.target.value)}
                    />
                    <Form.Control 
                      as="textarea"
                      placeholder="Deskripsi Psikologi"
                      value={psikologi}
                      onChange={(e) => onInputChange("psikologi", e.target.value)}
                      rows={5}
                      style={{ backgroundColor: "var(--third-color)", resize: "none" }} />
                    </Form.Group>
            </Form>
        </div>
    )
}
export default FormsDataKonselor