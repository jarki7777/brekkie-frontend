export const dateFormatter = (unformattedDate) => {
    const date = new Date(unformattedDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const dateFormatted = `${month}-${day}-${year}`;

    return dateFormatted
}

export const dateFormatterNoYear = (unformattedDate) => {
    return unformattedDate.toString().slice(5, 10);
}
