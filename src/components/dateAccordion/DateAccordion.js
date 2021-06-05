import { useEffect, useState } from 'react';
import DateDropdown from '../dateDropdown/DateDropdown';
import './DateAccordion.sass';

const DateAccordion = () => {
    const [dropDownElement, setDropDownElement] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        toggle();
    }, [dropDownElement]);

    const toggle = () => {
        switch (dropDownElement) {
            case 1:
                if (open !== 'Monday') setOpen('Monday');
                if (open === 'Monday') setOpen(false);
                else if (!open) setOpen('Monday');
                break;
            case 2:
                if (open !== 'Tuesday') setOpen('Tuesday');
                if (open === 'Tuesday') setOpen(false);
                else if (!open) setOpen('Tuesday');
                break;
            case 3:
                if (open !== 'Wednesday') setOpen('Wednesday');
                if (open === 'Wednesday') setOpen(false);
                else if (!open) setOpen('Wednesday');
                break;
            case 4:
                if (open !== 'Thursday') setOpen('Thursday');
                if (open === 'Thursday') setOpen(false);
                else if (!open) setOpen('Thursday');
                break;
            case 5:
                if (open !== 'Friday') setOpen('Friday');
                if (open === 'Friday') setOpen(false);
                else if (!open) setOpen('Friday');
                break;
            case 6:
                if (open !== 'Saturday') setOpen('Saturday');
                if (open === 'Saturday') setOpen(false);
                else if (!open) setOpen('Saturday');
                break;
            case 7:
                if (open !== 'Sunday') setOpen('Sunday');
                if (open === 'Sunday') setOpen(false);
                else if (!open) setOpen('Sunday');
                break;
            default:
                break;

        }
        setDropDownElement(null);
    }

    return (
        <>
            <div>
                <DateDropdown
                    weekDay={'Monday'}
                    open={open}
                    toggle={() => setDropDownElement(1)}
                />
            </div>
            <div>
                <DateDropdown
                    weekDay={'Tuesday'}
                    open={open}
                    toggle={() => setDropDownElement(2)}
                />
            </div>
            <div>
                <DateDropdown
                    weekDay={'Wednesday'}
                    open={open}
                    toggle={() => setDropDownElement(3)}
                />
            </div>
            <div>
                <DateDropdown
                    weekDay={'Thursday'}
                    open={open}
                    toggle={() => setDropDownElement(4)}
                />
            </div>
            <div>
                <DateDropdown
                    weekDay={'Friday'}
                    open={open}
                    toggle={() => setDropDownElement(5)}
                />
            </div>
            <div>
                <DateDropdown
                    weekDay={'Saturday'}
                    open={open}
                    toggle={() => setDropDownElement(6)}
                />
            </div>
            <div>
                <DateDropdown
                    weekDay={'Sunday'}
                    open={open}
                    toggle={() => setDropDownElement(7)}
                />
            </div>
        </>
    )
}

export default DateAccordion;