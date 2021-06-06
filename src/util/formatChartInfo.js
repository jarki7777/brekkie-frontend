export const formarChartInfo = (info) => {
    let data = info.totalNutrients;
    let dataArr = [];

    for (const key in data) {
        dataArr.push({ name: key, value: Math.round(data[key] * 10) / 10 });
    }
    dataArr[2].value = dataArr[2].value / 1000;

    dataArr[0].name = 'Fats';
    dataArr[1].name = 'Saturated Fats';
    dataArr[2].name = 'Sodium';
    dataArr[3].name = 'Carbs';
    dataArr[4].name = 'Fiber';
    dataArr[5].name = 'Sugrars';
    dataArr[6].name = 'Proteins';

    return dataArr;
}