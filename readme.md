# Pizza Picker 🍕

Looking for inspiration on what pizza to order or make today? "Pizza Picker" provides randomized pizza recommendations to help you decide. Whether you're in the mood for something classic, vegetarian, or vegan, we've got you covered. 🍴🍕

## Installation

Before using the "Pizza Picker" package, you need to install it. As it seems to be a local package in your example, let's adjust the instructions for a scenario where the package is available on npm. If the package is not published to npm yet, you can refer to the instructions for local setup.

### For an npm package:

```bash
npm install pizza-picker
```

### For local setup:

Ensure you have PizzaSelector.js and pizzas.js in your project, then:

```javascript
const pizzaSelector = require('./path/to/PizzaSelector');
```

## Usage

After installation, you can easily get pizza recommendations:


```javascript
// Get any random pizza
console.log(pizzaSelector.getRandomPizza());

// Get a random vegetarian pizza
console.log(pizzaSelector.getRandomPizzaByCategory('vegetarian'));

// Get a random vegan pizza
console.log(pizzaSelector.getRandomPizzaByCategory('vegan'));
```

That's it! Enjoy exploring diverse and delicious pizza options. ✔

## Contributing

Contributions are welcome! If you have ideas for new features, improvements, or bug fixes, feel free to fork the repository, make your changes, and submit a pull request. Please adhere to the existing coding style and add unit tests for any new or changed functionality. 🍕🎉

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Maintainer

This project is maintained by [George Vasilakis](https://github.com/gvasilakiss). If you have any questions or feedback, please don't hesitate to reach out.