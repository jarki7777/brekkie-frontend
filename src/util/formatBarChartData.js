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
            fat: element.totalNutrients.totalFat,
            saturatedFat: element.totalNutrients.totalSaturatedFat,
            sodium: element.totalNutrients.totalSodium / 1000,
            carbs: element.totalNutrients.totalCarbs,
            fiber: element.totalNutrients.totalFiber,
            sugar: element.totalNutrients.totalSugar,
            protein: element.totalNutrients.totalProteins
        });
    });

    for (let i = 0; i < totalGrams.length; i++) {
        formattedData[i].fat = Math.round(formattedData[i].fat * 100 / totalGrams[i]) * 10 / 10;
        formattedData[i].saturatedFat = Math.round(formattedData[i].saturatedFat * 100 / totalGrams[i]) * 10 / 10;
        formattedData[i].sodium = Math.round(formattedData[i].sodium * 100 / totalGrams[i]) * 10 / 10;
        formattedData[i].carbs = Math.round(formattedData[i].carbs * 100 / totalGrams[i]) * 10 / 10;
        formattedData[i].fiber = Math.round(formattedData[i].fiber * 100 / totalGrams[i]) * 10 / 10;
        formattedData[i].sugar = Math.round(formattedData[i].sugar * 100 / totalGrams[i]) * 10 / 10;
        formattedData[i].protein = Math.round(formattedData[i].protein * 100 / totalGrams[i]) * 10 / 10;
    }


    console.log(formattedData);
    return formattedData;
}