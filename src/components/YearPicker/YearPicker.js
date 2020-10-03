import React, { useState } from 'react';
import './YearPicker.styles.scss';
import { useDispatch, useSelector } from 'react-redux';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import CalendarIcon from '../../assets/images/calendar.svg';

import { setYear } from '../../redux/building/building.actions';

const YearPicker = props => {
  const [startDate, setStartDate] = useState();

  const year = useSelector(state => state.building.year);
  const dispatch = useDispatch();

  const handleChange = date => {
    setStartDate(date);
    dispatch(setYear(date));
  };

  return (
    <div className="date-picker-container">
      <div className="date-picker-label">{props.text}</div>
      <DatePicker
        selected={year ? year : startDate}
        onChange={handleChange}
        showYearPicker
        dateFormat="yyyy"
        className="year-picker"
      />
      <div className="calendar-icon">
        <img src={CalendarIcon} alt="calendar" />
      </div>
    </div>
  );
};

export default YearPicker;
