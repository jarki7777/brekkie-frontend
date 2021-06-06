import './NutritionalInfo.sass'

const NutritionalInfo = (props) => {
    return (
        <div className='nutritional-info'>
            <ul>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Fat:</span>
                        <span>{Math.round((props.fat) * 10) / 10}</span>
                    </div>
                </li>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Saturated fat:</span>
                        <span>{Math.round((props.saturatedFat) * 10) / 10}</span>
                    </div>
                </li>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Sodium:</span>
                        <span>{Math.round((props.sodium) * 10) / 10}</span>
                    </div>
                </li>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Carbs:</span>
                        <span>{Math.round((props.carbs) * 10) / 10}</span>
                    </div>
                </li>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Fiber:</span>
                        <span>{Math.round((props.fiber) * 10) / 10}</span>
                    </div>
                </li>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Sugar:</span>
                        <span>{Math.round((props.sugar) * 10) / 10}</span>
                    </div>
                </li>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Protein:</span>
                        <span>{Math.round((props.protein) * 10) / 10}</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default NutritionalInfo;