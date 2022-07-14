/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

const GRAMS_PER_NOODLE_LAYER = 50;
const LITERS_PER_SAUCE_LAYER = 0.2;

/**
 * Determines the status of the lasagna.
 *
 * @param {number} remainingTime
 * @returns {String} the status of the lasagna
 */
export function cookingStatus(remainingTime) {
    return remainingTime == 0 ? 'Lasagna is done.'
    : remainingTime ? 'Not done, please wait.'
    : 'You forgot to set the timer.';
}

/**
 * Estimates the preparation time.
 *
 * @param {array} layers
 * @param {number} avgPrepTime
 * @returns {number} estimate for total prep time
 */
 export function preparationTime(layers, avgPrepTime = 2) {
    return layers.length * avgPrepTime;
}

/**
 * Determines the quantity of ingredients needed.
 *
 * @param {array} layers
 * @returns {Object} quantity of noodles and sauce needed
 */
 export function quantities(layers) {
    var qty = { "noodles": 0, "sauce": 0};
    layers.forEach(function (x) { qty[x] = (qty[x] || 0) + 1; });

    return {
        "noodles": GRAMS_PER_NOODLE_LAYER * qty.noodles,
        "sauce": LITERS_PER_SAUCE_LAYER * qty.sauce
    };
}

/**
 * Modifies list of ingredients with the final ingredient from another list.
 *
 * @param {array} friendsList
 * @param {array} myList
 */
 export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList.slice(-1)[0]);
}

/**
 * Scales a recipe for any number of portions.
 *
 * @param {object} recipeForTwoPortions
 * @param {number} numPortionsToCook
 * @returns {object} new recipe with updated portions
 */
 export function scaleRecipe(recipeForTwoPortions, numPortionsToCook) {
    var modifiedRecipe = {};
    for (var key in recipeForTwoPortions) {
        modifiedRecipe[key] = (recipeForTwoPortions[key] / 2) * numPortionsToCook;
    }
    return modifiedRecipe;
}
