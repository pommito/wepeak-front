import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      type="button"
      className="FilterButton-button"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

  ExampleCustomInput.displayName = 'ExampleCustomInput';

  ExampleCustomInput.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={onChange}
      customInput={<ExampleCustomInput />}
      startDate={startDate}
      endDate={endDate}
      selectsRange
    />
  );
};

// const Calendar = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   return (
//     <>
//       <DatePicker
//         dateFormat="dd/MM/YYYY"
//         selected={startDate}
//         onChange={(date) => setStartDate(date)}
//         selectsStart
//         startDate={startDate}
//         endDate={endDate}
//       />
//       <DatePicker
//         dateFormat="dd/MM/YYYY"
//         selected={endDate}
//         onChange={(date) => setEndDate(date)}
//         selectsEnd
//         startDate={startDate}
//         endDate={endDate}
//         minDate={startDate}
//       />
//     </>
//   );
// };

export default Calendar;
