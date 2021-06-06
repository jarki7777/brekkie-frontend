import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import ErrorMsg from "../../components/errorMsg/ErrorMsg";
import { ReactComponent as User } from '../../icons/user-solid.svg';
import DateAccordion from '../../components/dateAccordion/DateAccordion';
import Pagination from '../../components/pagination/Pagination';
import "react-datepicker/dist/react-datepicker.css";
import './MealTracker.sass';
import dayjs from "dayjs";
import weekOfYear from 'dayjs/plugin/weekOfYear';
import MONTHS from './monthsName';


const MealTracker = () => {
    const token = useSelector(state => state.loginState.token);
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [error, setError] = useState(null);
    const [year, setYear] = useState(null);
    const [month, setMonth] = useState(null);
    const [week, setWeek] = useState(null);
    const [weekStart, setWeekStart] = useState(null);
    const [weekDays, setWeekDays] = useState([]);

    useEffect(() => {
        dayjs.extend(weekOfYear);
        setYear(dayjs(startDate).year());
        setWeek(dayjs(startDate).week());
    }, []);

    useEffect(() => {
        setYear(dayjs(startDate).year());
        setWeek(dayjs(startDate).week());
        setWeekStart(startDate.getDay());
        const monthNUmber = dayjs(startDate).month();
        setMonth(MONTHS[monthNUmber]);
    }, [startDate]);

    useEffect(() => {
        if (!token) history.push('/');
    }, [token]);

    /////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        let currentDate = startDate
        let endOfWeekDate = (dayjs(currentDate).endOf('week')).$d.getDate();
        let endOfWeekDay = (dayjs(currentDate).endOf('week')).$d.getDay();
        let endOfMonthDate = (dayjs(currentDate).endOf('month')).$d.getDate();
        let endOfMonthDay = (dayjs(currentDate).endOf('month')).$d.getDay();
        console.log(`current date: ${currentDate.getDate()}`);
        console.log(`fecha fin semana: ${endOfWeekDate}`);
        console.log(`día fin semana: ${endOfWeekDay}`);
        console.log(`fecha fin de mes: ${endOfMonthDate}`);
        console.log(`día fin de mes: ${endOfMonthDay}`);
        console.log('_____________________');
    }, [startDate, week, month]);
    //////////////////////////////////////////////////////////////////////////

    const goNext = () => {
        let currentDate = startDate
        let dayOfTheWeek = currentDate.getDay();
        let endOfWeekDate = (dayjs(currentDate).endOf('week')).$d.getDate();
        let endOfWeekDay = (dayjs(currentDate).endOf('week')).$d.getDay();
        let endOfMonthDate = (dayjs(currentDate).endOf('month')).$d.getDate();
        let endOfMonthDay = (dayjs(currentDate).endOf('month')).$d.getDay();

        switch (dayOfTheWeek) {
            case 0:
                currentDate.setDate(currentDate.getDate() + 7);
                break;
            case 1:
                currentDate.setDate(currentDate.getDate() + 6);
                break;
            case 2:
                currentDate.setDate(currentDate.getDate() + 5);
                break;
            case 3:
                currentDate.setDate(currentDate.getDate() + 4);
                break;
            case 4:
                currentDate.setDate(currentDate.getDate() + 3);
                break;
            case 5:
                currentDate.setDate(currentDate.getDate() + 2);
                break;
            case 6:
                currentDate.setDate(currentDate.getDate() + 1);
                break;
            default:
                break;
        }

        if (endOfMonthDate - currentDate.getDate() < 7) {
            console.log('ultima semana');
            setWeekStart(endOfMonthDay + 1);
        }
        else setWeekStart(0);


        const monthNumber = dayjs(startDate).month();
        setMonth(MONTHS[monthNumber]);
        setYear(dayjs(currentDate).year());
        setWeek(dayjs(currentDate).week());
        setStartDate(currentDate);
    }

    const goPrevious = () => {

    }


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
                        }}
                    />
                </div>

                <div className='tracker-month'>
                    {year} Week {week}, {month}
                </div>
                {/* <MonthTrack /> */}

                <DateAccordion
                    weekStart={weekStart}
                />

            </div>
            <Pagination goNext={goNext} goPrevious={goPrevious} document={'Week'} />
        </div>
    );
}

export default MealTracker;
