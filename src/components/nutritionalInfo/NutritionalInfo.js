import './NutritionalInfo.sass'

const NutritionalInfo = (props) => {
    return (
        <div className='nutritional-info'>
            <ul>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Fat:</span>
                        <span>{props.fat}</span>
                    </div>
                </li>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Saturated fat:</span>
                        <span>{props.saturatedFat}</span>
                    </div>
                </li>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Sodium:</span>
                        <span>{props.sodium}</span>
                    </div>
                </li>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Carbs:</span>
                        <span>{props.carbs}</span>
                    </div>
                </li>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Fiber:</span>
                        <span>{props.fiber}</span>
                    </div>
                </li>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Sugar:</span>
                        <span>{props.sugar}</span>
                    </div>
                </li>
                <li className='nutrient-list'>
                    <div className='recipe-nutrient'>
                        <span>Protein:</span>
                        <span>{props.protein}</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default NutritionalInfo;