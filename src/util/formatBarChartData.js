import { dateFormatterNoYear } from "./dateFormatter";

export const formatBarChartData = (rawData) => {
    let formattedData = []
    let totalGrams = []

    rawData.forEach(element => {
        totalGrams.push(
            element.totalNutrients.totalFat +
            element.totalNutrients.totalSaturatedFat +
            element.totalNutrients.totalSodium / 1000 +
            element.totalNutrients.totalCarbs +
            element.totalNutrients.totalFiber +
            element.totalNutrients.totalSugar +
            element.totalNutrients.totalProteins
        );
    });

    rawData.forEach(element => {
        formattedData.push({
            name: element.day,
            calories: element.totalCalories,
            fat: element.totalNutrients.totalFat,
            'saturated fat': element.totalNutrients.totalSaturatedFat,
            sodium: element.totalNutrients.totalSodium / 1000,
            carbs: element.totalNutrients.totalCarbs,
            fiber: element.totalNutrients.totalFiber,
            sugar: element.totalNutrients.totalSugar,
            protein: element.totalNutrients.totalProteins
        });
    });
    
    for (let i = 0; i < totalGrams.length; i++) {
        formattedData[i].name = dateFormatterNoYear(formattedData[i].name)
        formattedData[i].fat = Math.round(formattedData[i].fat) * 10 / 10;
        formattedData[i]['saturated fat'] = Math.round(formattedData[i]['saturated fat'] * 100 / totalGrams[i]) * 10 / 10;
        formattedData[i].sodium = Math.round(formattedData[i].sodium) * 10 / 10;
        formattedData[i].carbs = Math.round(formattedData[i].carbs) * 10 / 10;
        formattedData[i].fiber = Math.round(formattedData[i].fiber) * 10 / 10;
        formattedData[i].sugar = Math.round(formattedData[i].sugar) * 10 / 10;
        formattedData[i].protein = Math.round(formattedData[i].protein) * 10 / 10;
    }
    return formattedData;
}