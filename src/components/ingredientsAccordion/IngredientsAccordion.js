import './IngredientsAccordion.sass';
import { ReactComponent as Plus } from '../../icons/plus-solid.svg';
import { ReactComponent as Minus } from '../../icons/minus-solid.svg';
import { useState } from 'react';



const IngredientsAccordion = () => {
    const [deploy, setDeploy] = useState(false);

    const toggle = (bool) => {
        if (deploy === true) setDeploy(false);
        else setDeploy(bool);
    }

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
            <div className='category-wrap' onClick={() => toggle(true)}>
                <span className='categroy-ingredient category-title'>Dairy products
                <span>{deploy ? <Minus /> : <Plus />}</span>
                </span>
            </div>
            {data.map((ingredient) =>
                <>
                    {deploy ? (
                        <div className='ingredient-category-drowdown' key={data.indexOf(ingredient)}>
                            <div className='categroy-ingredient'>
                                <span>{ingredient}</span>
                                <Plus />
                            </div>
                        </div>
                    ) : null}

                </>
            )}
        </div>
    )
}

export default IngredientsAccordion;
