import './RecipeDetail.sass'

export const RecipeDetail = (props) => {
    return (
        <div className='recipe-container'>
            <div className='recipe-cover'>
                <img src={process.env.PUBLIC_URL + "/img/" + props.title} ></img>
                <h1 className='recipe-title'>{props.title}</h1>
                <span className='recipe-likes'>{props.like}</span>
                <span className='recipe-likes'>{props.calification}</span>
            </div>
            <div className='recipe-summary'>
                <span className='summary-element'>{props.serves}</span>
                <span className='summary-element'>{props.calories}</span>
                <span className='summary-element'>{props.prepTime}</span>
                <span className='summary-element'>{props.cookTime}</span>
                <span className='summary-element'>{props.TotalTime}</span>
                <span className='summary-element'>{props.category}</span>
                <span className='summary-element'>{props.method}</span>
                <span className='summary-element'>{props.cuisine}</span>
            </div>
            <div className='recipe-description'>{props.description}</div>
            <div className='recipe-ingredients'>
                <div className='ingredient-elements'>{props.ingredients}</div>
            </div>
            <div className='recipe-notes'>
                <div className='note-elements'>{props.notes}</div>
            </div>
            <div className='nutritional-info'>
                <div className='recipe-fat'>{props.fat}</div>
                <div className='recipe-saturated-fat'>{props.saturatedFat}</div>
                <div className='recipe-sodium'>{props.sodium}</div>
                <div className='recipe-carbs'>{props.carbs}</div>
                <div className='recipe-fiber'>{props.fiber}</div>
                <div className='recipe-sugar'>{props.sugar}</div>
                <div className='recipe-protein'>{props.protein}</div>
            </div>
        </div>
    );
}

export default RecipeDetail;