import { Button } from "react-bootstrap"
const Buttonn = ({className, type, label, onClick}) => {
    return(
        <Button
            type={type}
            className={className}
            onClick={onClick}>
            {label}
        </Button>
    )
}
export default Buttonn