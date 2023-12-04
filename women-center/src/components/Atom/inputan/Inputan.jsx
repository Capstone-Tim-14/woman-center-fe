import { FormControl } from "react-bootstrap"

const Inputan = ({type, placeholder, value, onChange, autoFocus, name}) => {
    return (
        <FormControl 
            className="px-3 py-2"
            type={type}
            name={name}
            placeholder={placeholder} 
            value={value} 
            onChange={onChange}
            autoFocus={autoFocus}
            style={{ backgroundColor: "var(--third-color)" }}/>
    )
}
export default Inputan