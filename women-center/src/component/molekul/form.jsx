import { Form } from "react-bootstrap"
import Inputan from "../atom/inputan"

const Forms = () => {
    return(
        <div className="col-8 flex-column">
            <p className="fw-semibold m-0">Informasi User</p>
            <Form className="mt-3">
                <Form.Group
                    className="mb-3 d-flex gap-3"
                    controlId="inputan1"
                  >
                    <Inputan 
                      type="text" 
                      placeholder="Nama"
                      onChange={""}
                      autoFocus={true}
                    />
                    <Inputan 
                      type="password"
                      placeholder="Password"
                      onChange={""}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 d-flex gap-3"
                    controlId="inputan2"
                  >
                    <Inputan 
                      type="email"
                      placeholder="Email"
                      onChange={""}
                    />
                    <Inputan 
                      type="date"
                      onChange={""}
                    />
                </Form.Group>
            </Form>
        </div>
    )
}
export default Forms