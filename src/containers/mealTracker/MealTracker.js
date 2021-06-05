import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import ErrorMsg from "../../components/errorMsg/ErrorMsg";
import { ReactComponent as User } from '../../icons/user-solid.svg';
import "react-datepicker/dist/react-datepicker.css";
import './MealTracker.sass';
import DateAccordion from '../../components/dateAccordion/DateAccordion';

const MealTracker = () => {
    const token = useSelector(state => state.loginState.token);
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!token) history.push('/');
    }, [token]);

    return (
        <div className='meal-tracker-view'>
            <div className='meal-tracker-container'>
                <h1 className='tracker-title'>Meal Tracker</h1>

                {error && <ErrorMsg>{error}</ErrorMsg>}

                <div className='user-tracker-info'>
                    <div className='tracker-username'><User />User</div>
                    <div className='calories-goal'>
                        <div>Calories Goal</div>
                        <div>1500</div>
                    </div>
                </div>

                <div className='tracker-date-picker'>
                    <div className='tracker-calendar-text'>Select the month you want to track</div>
                    <DatePicker
                        selected={startDate}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        onChange={(date) => {
                            setStartDate(date);
                            /*fetchMonth*/
                        }}
                    />
                </div>

                {/* <totalMonth /> */}

                <DateAccordion />

            </div>
        </div>
    );
}

export default MealTracker;
