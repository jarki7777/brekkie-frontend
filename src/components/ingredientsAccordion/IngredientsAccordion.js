import './IngredientsAccordion.sass';
import { ReactComponent as Add } from '../../icons/plus-solid.svg';



const IngredientsAccordion = () => {

    const data = [
        "quinoa",
        "edamame",
        "kidney beans",
        "chickpeas",
        "red onion",
        "yellow bell pepper",
        "red bell pepper",
        "celery",
        "green onions",
        "cilantro",
        "parsley",
        "red wine",
        "olive oil",
        "salt",
        "butter",
        "light brown sugar",
        "granulated sugar",
        "white whole wheat flour",
        "baking soda",
        "cinnamon",
        "vanilla extract",
        "large egg",
        "small apples",
        "kale",
        "blackberries",
        "raspberries",
        "blueberries",
        "strawberries",
        "avocado",
        "feta cheese",
        "balsamic vinaigrette",
        "lime",
        "tomato",
        "coarse sea salt",
        "garlic powder",
        "jalapeño"
    ]

    return (
        <div>
            <div className='category-wrap'>
                <span className='categroy-ingredient category-title'>Dairy products<Add /></span>
            </div>
            {data.map(ingredient =>
                <div className='categroy-ingredient'>
                    <span>{ingredient}</span>
                    <Add />
                </div>
            )}
        </div>
    )
}

export default IngredientsAccordion;
