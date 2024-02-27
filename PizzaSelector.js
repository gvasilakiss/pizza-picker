// PizzaSelector.js

const pizzas = require('./pizzas');

class PizzaSelector {
    constructor(pizzas) {
        this.pizzas = pizzas;
    }

    /**
     * Gets a random pizza from the entire list.
     * @return {string} The name of a random pizza.
     */
    getRandomPizza() {
        const randomIndex = Math.floor(Math.random() * this.pizzas.length);
        return this.pizzas[randomIndex];
    }

    /**
     * Gets a random pizza based on a category (e.g., vegetarian, vegan, meat).
     * @param {string} category The category to filter by before selecting a random pizza.
     * @return {string} The name of a random pizza filtered by category.
     */
    getRandomPizzaByCategory(category) {
        const filteredPizzas = this.pizzas.filter(pizza => pizza.toLowerCase().includes(category.toLowerCase()));
        if (filteredPizzas.length === 0) {
            return "No pizzas found for this category.";
        }
        const randomIndex = Math.floor(Math.random() * filteredPizzas.length);
        return filteredPizzas[randomIndex];
    }
}

module.exports = new PizzaSelector(pizzas);
