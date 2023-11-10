import {RiDeleteBinLine} from 'react-icons/ri'

const ButtonHapus = ({onClick}) => {
    return <button 
            onClick={onClick}
            style={{border: 'none', background: 'none'}}>
            <RiDeleteBinLine className="text-danger" />
        </button>
}
export default ButtonHapus