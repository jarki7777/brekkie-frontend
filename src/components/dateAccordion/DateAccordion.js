import { useEffect, useState } from 'react';
import DateDropdown from '../dateDropdown/DateDropdown';
import './DateAccordion.sass';

const DateAccordion = (props) => {
    const [dropDownElement, setDropDownElement] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        toggle();
    }, [dropDownElement]);

    const toggle = () => {
        switch (dropDownElement) {
            case 1:
                if (open !== 'Sunday') setOpen('Sunday');
                if (open === 'Sunday') setOpen(false);
                else if (!open) setOpen('Sunday');
                break;
            case 2:
                if (open !== 'Monday') setOpen('Monday');
                if (open === 'Monday') setOpen(false);
                else if (!open) setOpen('Monday');
                break;
            case 3:
                if (open !== 'Tuesday') setOpen('Tuesday');
                if (open === 'Tuesday') setOpen(false);
                else if (!open) setOpen('Tuesday');
                break;
            case 4:
                if (open !== 'Wednesday') setOpen('Wednesday');
                if (open === 'Wednesday') setOpen(false);
                else if (!open) setOpen('Wednesday');
                break;
            case 5:
                if (open !== 'Thursday') setOpen('Thursday');
                if (open === 'Thursday') setOpen(false);
                else if (!open) setOpen('Thursday');
                break;
            case 6:
                if (open !== 'Friday') setOpen('Friday');
                if (open === 'Friday') setOpen(false);
                else if (!open) setOpen('Friday');
                break;
            case 7:
                if (open !== 'Saturday') setOpen('Saturday');
                if (open === 'Saturday') setOpen(false);
                else if (!open) setOpen('Saturday');
                break;
            default:
                break;

        }
        setDropDownElement(null);
    }

    return (
        <>
            {props.weekStart <= 0 && <div>
                <DateDropdown
                    weekDay={'Sunday'}
                    open={open}
                    toggle={() => setDropDownElement(1)}
                />
            </div>}
            {props.weekStart <= 1 && <div>
                <DateDropdown
                    weekDay={'Monday'}
                    open={open}
                    toggle={() => setDropDownElement(2)}
                />
            </div>}
            {props.weekStart <= 2 && <div>
                <DateDropdown
                    weekDay={'Tuesday'}
                    open={open}
                    toggle={() => setDropDownElement(3)}
                />
            </div>}
            {props.weekStart <= 3 && <div>
                <DateDropdown
                    weekDay={'Wednesday'}
                    open={open}
                    toggle={() => setDropDownElement(4)}
                />
            </div>}
            {props.weekStart <= 4 && <div>
                <DateDropdown
                    weekDay={'Thursday'}
                    open={open}
                    toggle={() => setDropDownElement(5)}
                />
            </div>}
            {props.weekStart <= 5 && <div>
                <DateDropdown
                    weekDay={'Friday'}
                    open={open}
                    toggle={() => setDropDownElement(6)}
                />
            </div>}
            {props.weekStart <= 6 && <div>
                <DateDropdown
                    weekDay={'Saturday'}
                    open={open}
                    toggle={() => setDropDownElement(7)}
                />
            </div>}
        </>
    )
}

export default DateAccordion;