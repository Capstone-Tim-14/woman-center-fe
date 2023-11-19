import { Form } from "react-bootstrap"
import Inputan from "../../atom/inputan/Inputan"

const FormsDataUser = (props) => {
  const {
    first_name,
    last_name,
    username,
    email,
    birthday,
    password,
    onInputChange,
  } = props
  
    return(
        <div className="col-8 flex-column">
            <p className="m-0">Informasi User</p>
            <Form className="mt-3 d-flex justify-content-between gap-2">
                <Form.Group
                    className="mb-3 d-flex flex-column col-6 gap-3"
                  >
                    <Inputan 
                      type="text"
                      name="first_name"
                      value={first_name}
                      autoFocus={true}
                      onChange={(e) => onInputChange("first_name", e.target.value)}
                      placeholder="Nama Depan"
                    />
                    <Inputan 
                      type="text" 
                      name="last_name"
                      value={last_name}
                      onChange={(e) => onInputChange("last_name", e.target.value)}
                      placeholder="Nama Belakang"
                    />
                    <Inputan 
                      type="text" 
                      name="username"
                      onChange={(e) => onInputChange("username", e.target.value)}
                      value={username}
                      placeholder="Username"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 d-flex flex-column col-6 gap-3"
                  >
                    <Inputan 
                      type="date"
                      name="birthday"
                      value={birthday}
                      onChange={(e) => onInputChange("birthday", e.target.value)}
                    />
                    <Inputan 
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => onInputChange("email", e.target.value)}
                      placeholder="Alamat Email"
                    />
                    <Inputan 
                      type="password" 
                      name="password"
                      value={password}
                      onChange={(e) => onInputChange("password", e.target.value)}
                      placeholder="Password"
                    />
                </Form.Group>
            </Form>
        </div>
    )
}
export default FormsDataUser