export const formatNutririonalInfo = (nutrient) => {
    if (isNaN(nutrient)) {
        let nutrientValue = Number(nutrient.replace(/g|mg/g, ''));
        nutrientValue = Math.round(nutrientValue * 10) / 10;
        return nutrientValue;
    }
    if (!isNaN(nutrient)) return Math.round(nutrient * 10) / 10;
}