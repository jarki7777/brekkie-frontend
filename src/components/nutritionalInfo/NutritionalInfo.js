import { useEffect } from 'react';
import { formatNutririonalInfo } from '../../util/formatNutritionalinfo';
import './NutritionalInfo.sass'

const NutritionalInfo = (props) => {

    return (
        <div className='nutritional-info'>
            <ul>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Fat:</span>
                        <span>{formatNutririonalInfo(props.fat)}g</span>
                    </div>
                </li>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Saturated fat:</span>
                        <span>{formatNutririonalInfo(props.saturatedFat)}g</span>
                    </div>
                </li>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Sodium:</span>
                        <span>{formatNutririonalInfo(props.sodium)}mg</span>
                    </div>
                </li>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Carbs:</span>
                        <span>{formatNutririonalInfo(props.carbs)}g</span>
                    </div>
                </li>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Fiber:</span>
                        <span>{formatNutririonalInfo(props.fiber)}g</span>
                    </div>
                </li>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Sugar:</span>
                        <span>{formatNutririonalInfo(props.sugar)}g</span>
                    </div>
                </li>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Protein:</span>
                        <span>{formatNutririonalInfo(props.protein)}g</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default NutritionalInfo;