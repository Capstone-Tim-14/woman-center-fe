import { CiSearch } from 'react-icons/ci';
import Form from 'react-bootstrap/Form';

const SearchKonselor = () => {
    return (
        <Form style={{ width: 250 }}>
            <div style={{ position: 'relative' }}>
                <CiSearch size={20} style={{ position: 'absolute', left: 10, top: 10 }} />
                <Form.Control type="text" placeholder="Search" style={{ paddingLeft: 30, height: 40 }} />
            </div>
        </Form>

    );
};

export default SearchKonselor;
