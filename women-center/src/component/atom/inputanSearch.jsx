import {FiSearch} from 'react-icons/fi'
const Searching = ({type, placeholder, value, onChange}) => {
    return (
        <>
        <div className="d-flex align-items-center py-2 px-3 border rounded-2">
            <FiSearch className='me-3'/>
            <input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{border: 'none', outline: 'none'}} />
        </div>
        </>
    )
}
export default Searching