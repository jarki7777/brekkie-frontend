import './IngredientsAccordion.sass';
import { useEffect, useState } from 'react';
import INGREDIENTS from './ingredientsList';
import AccordionDropDown from '../accordionDropDown/AccordionDropDown';

const IngredientsAccordion = () => {
    const [dropDownElement, setDropDownElement] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        toggle();
    }, [dropDownElement]);

    const toggle = () => {
        switch (dropDownElement) {
            case 1:
                if (open !== 'Basic Products') setOpen('Basic Products');
                if (open === 'Basic Products') setOpen(false);
                else if (!open) setOpen('Basic Products');
                break;
            case 2:
                if (open !== 'Dairy Products') setOpen('Dairy Products');
                if (open === 'Dairy Products') setOpen(false);
                else if (!open) setOpen('Dairy Products');
                break;
            case 3:
                if (open !== 'Cereals') setOpen('Cereals');
                if (open === 'Cereals') setOpen(false);
                else if (!open) setOpen('Cereals');
                break;
            case 4:
                if (open !== 'Fruits & Vegetables') setOpen('Fruits & Vegetables');
                if (open === 'Fruits & Vegetables') setOpen(false);
                else if (!open) setOpen('Fruits & Vegetables');
                break;
            case 5:
                if (open !== 'Greens') setOpen('Greens');
                if (open === 'Greens') setOpen(false);
                else if (!open) setOpen('Greens');
                break;            
            case 6:
                if (open !== 'Pork Meat') setOpen('Pork Meat');
                if (open === 'Pork Meat') setOpen(false);
                else if (!open) setOpen('Pork Meat');
                break;
            case 7:
                if (open !== 'Cattle Meatt') setOpen('Cattle Meat');
                if (open === 'Cattle Meat') setOpen(false);
                else if (!open) setOpen('Cattle Meat');
                break;
            case 8:
                if (open !== 'Lamb Meat') setOpen('Lamb Meat');
                if (open === 'Lamb Meat') setOpen(false);
                else if (!open) setOpen('Lamb Meat');
                break;
            case 9:
                if (open !== 'Veal Meat') setOpen('Veal Meat');
                if (open === 'Veal Meat') setOpen(false);
                else if (!open) setOpen('Veal Meat');
                break;
            case 10:
                if (open !== 'Nuts') setOpen('Nuts');
                if (open === 'Nuts') setOpen(false);
                else if (!open) setOpen('Nuts');
                break;
            case 1:
                if (open !== 'Seasoning') setOpen('Seasoning');
                if (open === 'Seasoning') setOpen(false);
                else if (!open) setOpen('Seasoning');
                break;
            default:
                break;


        }
        setDropDownElement(null);
    }

    return (
        <>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS['Basic Products']}
                    open={open}
                    toggle={() => setDropDownElement(1)}
                    title={'Basic Products'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS['Dairy Products']}
                    open={open}
                    toggle={() => setDropDownElement(2)}
                    title={'Dairy Products'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS.Cereals}
                    open={open}
                    toggle={() => setDropDownElement(3)}
                    title={'Cereals'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS['Fruits & Vegetables']}
                    open={open}
                    toggle={() => setDropDownElement(4)}
                    title={'Fruits & Vegetables'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS.Greens}
                    open={open}
                    toggle={() => setDropDownElement(5)}
                    title={'Greens'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS['Pork Meat']}
                    open={open}
                    toggle={() => setDropDownElement(6)}
                    title={'Pork Meat'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS['Cattle Meat']}
                    open={open}
                    toggle={() => setDropDownElement(7)}
                    title={'Cattle Meat'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS['Lamb Meat']}
                    open={open}
                    toggle={() => setDropDownElement(8)}
                    title={'Lamb Meat'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS['Veal Meat']}
                    open={open}
                    toggle={() => setDropDownElement(9)}
                    title={'Veal Meat'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS.Nuts}
                    open={open}
                    toggle={() => setDropDownElement(10)}
                    title={'Nuts'}
                />
            </div>
            <div>
                <AccordionDropDown
                    ingredients={INGREDIENTS.Seasoning}
                    open={open}
                    toggle={() => setDropDownElement(11)}
                    title={'Seasoning'}
                />
            </div>
        </>
    )
}

export default IngredientsAccordion;