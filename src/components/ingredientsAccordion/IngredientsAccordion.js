import './IngredientsAccordion.sass';
import { useState } from 'react';
import INGREDIENTS from './ingredientsList';
import AccordionDropDown from '../accordionDropDown/AccordionDropDown';

const IngredientsAccordion = () => {
    const [deploy, setDeploy] = useState(false);

    const toggle = (bool) => {
        if (deploy === true) setDeploy(false);
        else setDeploy(bool);
    }

    return (
        <>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS['Basic Products']}
                    deploy={deploy}
                    toggle={() => toggle(true)}
                    title={'Basic Products'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS['Dairy Products']}
                    deploy={deploy}
                    toggle={() => toggle(true)}
                    title={'Dairy Products'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS.Cereals}
                    deploy={deploy}
                    toggle={() => toggle(true)}
                    title={'Cereals'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS['Fruits & Vegetables']}
                    deploy={deploy}
                    toggle={() => toggle(true)}
                    title={'Fruits & Vegetables'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS.Greens}
                    deploy={deploy}
                    toggle={() => toggle(true)}
                    title={'Greens'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS['Pork Meat']}
                    deploy={deploy}
                    toggle={() => toggle(true)}
                    title={'Pork Meat'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS['Cattle Meat']}
                    deploy={deploy}
                    toggle={() => toggle(true)}
                    title={'Cattle Meat'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS['Lamb Meat']}
                    deploy={deploy}
                    toggle={() => toggle(true)}
                    title={'Lamb Meat'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS['Veal Meat']}
                    deploy={deploy}
                    toggle={() => toggle(true)}
                    title={'Veal Meat'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS.Nuts}
                    deploy={deploy}
                    toggle={() => toggle(true)}
                    title={'Nuts'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS.Seasoning}
                    deploy={deploy}
                    toggle={() => toggle(true)}
                    title={'Seasoning'}
                />
            </div>
        </>
    )
}

export default IngredientsAccordion;