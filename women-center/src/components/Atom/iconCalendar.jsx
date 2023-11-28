import { LuCalendarDays } from 'react-icons/lu';

const IconCalendar = () => {
    return (
        <div className="d-flex justify-content-center align-items-center mx-2" style={{ width: 40, height: 40, borderRadius: 5, border: '1px solid #000' }}>
            <LuCalendarDays size={20} />
        </div>
    );
};

export default IconCalendar;
