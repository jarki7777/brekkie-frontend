export const formatBarChartData = (rawData) => {
    let formattedData = []

    rawData.forEach(element => {
        formattedData.push({
            name: element.day,
            fat: element.totalNutrients.totalFat,
            saturatedFat: element.totalNutrients.totalSaturatedFat,
            sodium: element.totalNutrients.totalSodium,
            carbs: element.totalNutrients.totalCarbs,
            fiber: element.totalNutrients.totalFiber,
            sugar: element.totalNutrients.totalSugar,
            protein: element.totalNutrients.totalProteins,
        });
    });

    return formattedData;
}