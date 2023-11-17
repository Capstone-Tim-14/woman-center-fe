import { Form } from "react-bootstrap"
import Inputan from "../../atom/inputan/Inputan"

const FormsDataKonselor = () => {

    return(
        <div className="col-8 flex-column">
            <p className="m-0">Informasi Konselor</p>
            <Form className="mt-3 d-flex justify-content-between gap-2">
                <Form.Group
                    className="mb-3 d-flex flex-column col-6 gap-3"
                    controlId="inputan1"
                  >
                    <Inputan 
                      type="text" 
                      placeholder="Nama Depan"
                      onChange={""}
                      autoFocus={true}
                    />
                    <Inputan 
                      type="text" 
                      placeholder="Nama Belakang"
                      onChange={""}
                    />
                     <Inputan 
                      type="email"
                      placeholder="Alamat Email"
                      onChange={""}
                    />
                    
                  </Form.Group>

                  <Form.Group
                    className="mb-3 d-flex flex-column col-6 gap-3"
                    controlId="inputan2"
                  >
                    <Inputan 
                      type="date"
                      onChange={""}
                    />
                    <Inputan 
                      type="password" 
                      placeholder="Password"
                      onChange={""}
                    />
                </Form.Group>
            </Form>
        </div>
    )
}
export default FormsDataKonselor