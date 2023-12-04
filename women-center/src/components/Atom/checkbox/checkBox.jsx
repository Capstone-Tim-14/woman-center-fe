import { Form } from "react-bootstrap"

const CheckBox = ({ onChange, label, checked, key, id, value}) => {
    return (
        <Form.Check
            type="checkbox"
            key={key}
            id={id}
            value={value}
            label={label}
            checked={checked}
            onChange={onChange}
        />
    )
}
export default CheckBox