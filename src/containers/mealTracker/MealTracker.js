import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import ErrorMsg from "../../components/errorMsg/ErrorMsg";
import './MealTracker.sass';


const MealTracker = () => {
    const token = useSelector(state => state.loginState.token);
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!token) history.push('/');
    }, [token]);

    return (
        <div className='meal-tracker-container'>
            <h2 className='tracker-title'>Meal Tracker</h2>

            {error && <ErrorMsg>{error}</ErrorMsg>}

            <div className='user-tracker-info'>
                <div className='tracker-username'>
                    User
                </div>
                <div className='calories-goal'>
                    1500
                </div>
            </div>

            <div className='tracker-date-picker'>
                <DatePicker
                    selected={startDate}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    showFullMonthYearPicker
                    onChange={(date) => {
                        setStartDate(date);
                        /*fetchMonth*/
                    }}
                />
            </div>

            {/* <trackerAccordion /> */}

        </div>
    );
}

export default MealTracker;
