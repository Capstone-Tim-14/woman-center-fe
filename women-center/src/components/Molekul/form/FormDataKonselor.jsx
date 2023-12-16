import { Form } from "react-bootstrap"
import InputanDataKonselor from "../../Atom/inputan/InputanDataKonselor"
import '../../../styles/FormDataKonselor.css'

const FormDataKonselor = (props) => {
  const {
    first_name,
    last_name,
    username,
    education,
    birthday,
    email,
    password,
    description,
    onInputChange,
  } = props

    return(
        <div id="formDataKonselor">
            <p className="m-0">Informasi Konselor</p>
            <Form id="form-Konselor">
                <Form.Group
                    id="form-left-dataKonselor"
                    className="col-6">

                    <InputanDataKonselor 
                      type="text"
                      name="first_name"
                      placeholder="Nama Depan"
                      value={first_name}
                      onChange={(e) => onInputChange("first_name", e.target.value)}
                      autoFocus={true}
                    />

                    <InputanDataKonselor 
                      type="text" 
                      name="last_name"
                      placeholder="Nama Belakang"
                      value={last_name}
                      onChange={(e) => onInputChange("last_name", e.target.value)}
                    />

                    <InputanDataKonselor 
                      type="text" 
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => onInputChange("username", e.target.value)}
                    />
                    
                    <InputanDataKonselor 
                      type="text" 
                      placeholder="Pendidikan Terakhir"
                      value={education}
                      onChange={(e) => onInputChange("education", e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group
                    id="form-right-dataKonselor"
                    className="col-6">

                    <InputanDataKonselor 
                      type="date"
                      value={birthday}
                      onChange={(e) => onInputChange("birthday", e.target.value)}
                    />
                    <InputanDataKonselor 
                      type="email"
                      placeholder="Alamat Email"
                      value={email}
                      onChange={(e) => onInputChange("email", e.target.value)}
                    />
                    <InputanDataKonselor 
                      type="password" 
                      placeholder="Password"
                      value={password}
                      onChange={(e) => onInputChange("password", e.target.value)}
                    />
                    <Form.Control 
                      id="form-psikologi"
                      as="textarea"
                      placeholder="Deskripsi Psikologi"
                      value={description}
                      onChange={(e) => onInputChange("description", e.target.value)}
                      rows={5}
                      style={{ backgroundColor: "var(--third-color)", resize: "none" }} />
                  </Form.Group>
            </Form>
        </div>
    )
}
export default FormDataKonselor