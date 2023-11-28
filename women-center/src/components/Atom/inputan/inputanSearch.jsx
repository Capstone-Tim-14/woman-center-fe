import {FiSearch} from 'react-icons/fi'
const Searching = ({value, onChange}) => {

    return (
        <>
        <div className="d-flex align-items-center py-2 px-3 border rounded-2">
            <FiSearch className='me-3'/>
            <input
                type="text"
                placeholder="Search"
                value={value}
                onChange={onChange}
                style={{border: 'none', outline: 'none', backgroundColor: 'white'}} />
        </div>
        </>
    )
}
export default Searching