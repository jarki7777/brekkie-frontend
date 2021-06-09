import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import ErrorMsg from "../../components/errorMsg/ErrorMsg";
import RecipeCard from '../../components/recipeCard/RecipeCard'
import { fetchFoodLogByDay, fetchFoodLogAddServing, fetchByRange } from '../../services/fetchFoodLog';
import { ReactComponent as User } from '../../icons/user-solid.svg';
import "react-datepicker/dist/react-datepicker.css";
import './MealTracker.sass';
import NutritionalInfo from "../../components/nutritionalInfo/NutritionalInfo";
import { Link } from "react-router-dom";
import { SET_RECIPE_ID } from "../../store/actions/actionTypes";
import SetCaloriesModal from "../../components/setCaloriesModal/SetCaloriesModal";
import { fetchUserProfile } from "../../services/fetchUser";
import { formarChartInfo } from '../../util/formatChartInfo';
import NutrientsPieChart from "../../components/nutrientsPieChart/NutrientsPieChart";
import { formatBarChartData } from "../../util/formatBarChartData";
import { CaloriesChart, MacrosChart, MicrosChart } from "../../components/rangeBarChart/RangeBarChart";


const MealTracker = () => {
    const token = useSelector(state => state.loginState.token);
    const userId = useSelector(state => state.loginState.id);
    const history = useHistory();
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const [startRange, setStartRange] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [error, setError] = useState();
    const [logs, setLogs] = useState(null);
    const [openCalories, setOpenCalories] = useState(false);
    const [caloriesGoal, setCaloriesGoal] = useState(null);
    const [userName, setuserName] = useState(null);
    const [caloriesColor, setCaloriesColor] = useState('tracker-total-calories-green');
    const [chartInfo, setChartInfo] = useState([]);
    const [dailyTracker, setDailyTracker] = useState('active-tracker');
    const [rangeTracker, setRangeTracker] = useState('inactive-tracker');
    const [barChartData, setBarChartData] = useState([]);


    useEffect(() => {
        getLogsByDay(startDate);
        getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [openCalories]);

    useEffect(() => {
        if (!token) history.push('/');
    }, [token, history]);

    useEffect(() => {
        if (logs && logs.totalCalories > caloriesGoal) setCaloriesColor('tracker-total-calories-red');
        if (logs && logs.totalCalories <= caloriesGoal) setCaloriesColor('tracker-total-calories-green');
    }, [logs, caloriesGoal])

    useEffect(() => {
        const getRange = async () => {
            try {
                let res = await fetchByRange(startRange, endDate, token);
                setBarChartData(formatBarChartData(res));
            } catch (e) {
                setError('Service is currently unavailable, please try again later');
            }
        }
        getRange();
    }, [startRange, endDate, token]);

    const getLogsByDay = async (date) => {
        try {
            let res = await fetchFoodLogByDay(date, token);
            if (res) {
                setLogs(res);
                setError(null);
                setChartInfo(formarChartInfo(res));
            }
            if (!res) {
                setError('There are no records for this day');
                setLogs(null)
            }
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const addServing = async (recipe) => {
        try {
            await fetchFoodLogAddServing(recipe._id, startDate, token);
            getLogsByDay(startDate);
            window.scrollTo(0, 0);
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
    }

    const goToRecipe = (id) => {
        dispatch(
            {
                type: SET_RECIPE_ID,
                payload: id
            }
        );
    }

    const getUser = async () => {
        try {
            const res = await fetchUserProfile(token);
            setuserName(res.username);
            if (res.caloriesGoal) setCaloriesGoal(res.caloriesGoal);
            setError(null);
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
            console.log(e);
        }
    }


    const onChange = (dates) => {
        const [start, end] = dates;
        setStartRange(start);
        setEndDate(end);
    };

    return (
        <div className='meal-tracker-view'>
            <h1 className='tracker-title'>Meal Tracker</h1>

            <div className='tracker-instructions'>
                <span>
                    Click on the "Calories Goal" to select your own personal daily goal
                    </span>
                <span>
                    Keep the track of your meals consumption, use the daily tracker tab to select a specific
                    day. Use the "Add a serving" button below each recipe to increase by one the portions consumed
                    in a given day.
                    </span>
                <span>
                    Use the Range tracker tab to watch the stats of a given period of time
                    </span>
            </div>

            {error && <ErrorMsg>{error}</ErrorMsg>}

            <div className='user-tracker-info'>
                <div className='tracker-username'><User />{userName && userName}</div>
                <div className='calories-goal' onClick={() => setOpenCalories(true)}>
                    <div>Calories Goal</div>
                    <div>{caloriesGoal && caloriesGoal}</div>
                </div>
            </div>

            {openCalories &&
                <SetCaloriesModal setOpenCalories={setOpenCalories}
                    open={openCalories}
                    onClose={() => setOpenCalories(false)}
                    id={userId}
                    getUser={() => getUser()}
                />
            }

            <div className='toggle-tracker'>
                <div
                    className={dailyTracker}
                    onClick={() => {
                        setDailyTracker('active-tracker');
                        setRangeTracker('inactive-tracker');
                    }}
                >Daily tracker</div>
                <div
                    className={rangeTracker}
                    onClick={() => {
                        setRangeTracker('active-tracker');
                        setDailyTracker('inactive-tracker');
                    }}

                >Range tracker</div>
                <div className='inactive-tracker-border'></div>
            </div>

            {dailyTracker === 'active-tracker' &&
                <div className='tracker-date-picker'>
                    <div className='tracker-calendar-text'>Select a day:</div>
                    <DatePicker
                        selected={startDate}
                        dateFormat='MM/dd/yyyy'
                        popperPlacement='bottom-end'
                        maxDate={Date.now()}
                        onChange={(date) => {
                            setStartDate(date);
                            getLogsByDay(date);
                        }}
                        withPortal
                    />
                </div>}

            {rangeTracker === 'active-tracker' &&
                <div className='tracker-date-picker'>
                    <div className='tracker-calendar-text'>Select a range of dates:</div>
                    <DatePicker
                        className='range-input'
                        selected={endDate}
                        onChange={onChange}
                        startDate={startRange}
                        endDate={endDate}
                        selectsRange
                        withPortal
                        shouldCloseOnSelect={false}
                    />
                </div>}

            {rangeTracker === 'active-tracker' &&
                <>
                    <div className='chart-title'>Calories vs Goal:</div>
                    <div>
                        <CaloriesChart data={barChartData} goal={caloriesGoal} />
                    </div>
                    <div className='chart-title'>Macro nutrients rate in grams:</div>
                    <div>
                        <MacrosChart data={barChartData} />
                    </div>
                    <div className='chart-title'>Micro nutrients rate in grams:</div>
                    <div>
                        <MicrosChart data={barChartData} />
                    </div>
                </>
            }

            {dailyTracker === 'active-tracker' &&
                <div className='tracker-log'>

                    {logs && logs.totalCalories &&
                        <div className={caloriesColor}>
                            Total calories in the day: {logs && logs.totalCalories}
                        </div>}

                    <div className='tracker-nutritional-table'>
                        {logs &&
                            < NutritionalInfo
                                fat={logs.totalNutrients.totalFat}
                                saturatedFat={logs.totalNutrients.totalSaturatedFat}
                                sodium={logs.totalNutrients.totalSodium}
                                carbs={logs.totalNutrients.totalCarbs}
                                fiber={logs.totalNutrients.totalFiber}
                                sugar={logs.totalNutrients.totalSugar}
                                protein={logs.totalNutrients.totalProteins}
                            />}
                    </div>

                    <div className='tracker-pie-graph'>
                        <NutrientsPieChart data={chartInfo} />
                    </div>

                    {logs && logs.recipes.map(recipe =>
                        <div className='results-container' key={logs.recipes.indexOf(recipe)}>
                            <Link to='/recipe' className='recipe-card-link'>
                                <RecipeCard
                                    goToRecipe={goToRecipe(recipe._id)}
                                    img={recipe.img}
                                    title={recipe.title}
                                    likes={recipe.timesFavorite}
                                    calification={recipe.calification}
                                    totalVotes={recipe.totalVotes}
                                    calories={recipe.caloriesPerServe}
                                />
                            </Link>
                            <div className='add-serving-btn' onClick={() => addServing(recipe)}>Add a serving to the day</div>
                        </div>
                    )}
                </div>}
        </div>
    );
}

export default MealTracker;