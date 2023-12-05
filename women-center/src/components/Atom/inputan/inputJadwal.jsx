import { FormControl } from "react-bootstrap"

const InputJadwal = ({type, placeholder, value, onChange, autoFocus, name}) => {
    return (
        <FormControl 
            className="px-3 py-2"
            type={type}
            name={name}
            placeholder={placeholder} 
            value={value} 
            onChange={onChange}
            autoFocus={autoFocus}
            style={{ backgroundColor: "#EFF1F999 " ,width: "330px"}} />
    )
}
export default InputJadwal;