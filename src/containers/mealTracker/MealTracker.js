import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import ErrorMsg from "../../components/errorMsg/ErrorMsg";
import RecipeCard from '../../components/recipeCard/RecipeCard'
import { fetchFoodLog, fetchFoodLogByDay } from '../../services/fetchFoodLog';
import { ReactComponent as User } from '../../icons/user-solid.svg';
import "react-datepicker/dist/react-datepicker.css";
import './MealTracker.sass';
import NutritionalInfo from "../../components/nutritionalInfo/NutritionalInfo";



const MealTracker = () => {
    const token = useSelector(state => state.loginState.token);
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [error, setError] = useState();
    const [logs, setLogs] = useState(null);
    // const [page, setPage] = useState(1);
    // const [limit, setLimit] = useState(10);

    // const getLogs = async () => {
    //     try {
    //         let res = await fetchFoodLog(page, limit, token);
    //         setLogs(res);
    //     } catch (e) {
    //         setError('Service is currently unavailable, please try again later');
    //     }
    // }

    const getLogsByDay = async (date) => {
        try {
            let res = await fetchFoodLogByDay(date, token);
            if (res) {
                setLogs(res);
                setError(null);
                console.log(res);
            }
            if (!res) {
                setError('There are no records of this day');
                setLogs(null)
            }
        } catch (e) {
            setError('Service is currently unavailable, please try again later');
        }
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
                    <div className='tracker-calendar-text'>Select the day you want to track</div>
                    <DatePicker
                        selected={startDate}
                        dateFormat='MM/dd/yyyy'
                        popperPlacement='bottom-end'
                        onChange={(date) => {
                            setStartDate(date);
                            getLogsByDay(date);
                        }}
                    />
                </div>

                <div className='tracker-log'>
                    <div className='tracker-nutritional-facts'>
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
                        <div className='tracker-pie-graph'>
                            GRAPH
                            </div>
                    </div>
                    {logs && logs.recipes.map(recipe =>
                        <RecipeCard
                            // goToRecipe={ }
                            img={recipe.img}
                            title={recipe.title}
                            likes={recipe.timesFavorite}
                            calification={recipe.calification}
                            totalVotes={recipe.totalVotes}
                            calories={recipe.caloriesPerServe}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default MealTracker;