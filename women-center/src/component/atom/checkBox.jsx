import { Form } from "react-bootstrap"

const CheckBox = ({value, onChange, label}) => {
    return (
        <Form>
            {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                        type={type}
                        label={label}
                        onChange={onChange}
                        checked={value}
                    />
                </div>
            ))}
        </Form>
    )
}
export default CheckBox