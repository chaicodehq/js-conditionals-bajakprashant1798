/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  if (typeof size !== "string" || typeof type !== "string" || typeof extras !== "object") {
    console.log("Invalid input types. Size and type must be strings, extras must be an object.")
    return -1;
  }

  const sizePrices = {
    small: 3.00,
    medium: 4.00,
    large: 5.00
  };

  const typePrices = {
    regular: 0.00,
    latte: 1.00,
    cappuccino: 1.50,
    mocha: 2.00
  };
  
  if (sizePrices[size] === undefined  || typePrices[type] === undefined) {
    console.log("test: ", sizePrices[size], typePrices[type]);
    
    console.log("Invalid size or type input.")
    return -1;
  }

  // if (sizePrices[size] != "small" || sizePrices[size] != "medium" || sizePrices[size] != "large") {
  //   console.log("Invalid size input.")
  //   return -1;
  // }

  // if (typePrices[type] != "regular" || typePrices[type] != "latte" || typePrices[type] != "cappuccino" || typePrices[type] != "mocha") {
  //   console.log("Invalid type input.")
  //   return -1;
  // }

  let basePrice = sizePrices[size];
  let typePrice = typePrices[type];
  let extrasPrice = 0;

  if (typeof extras.whippedCream === "boolean") {
    if (extras.whippedCream) {
      extrasPrice += 0.50;
    }
  } else if (extras.whippedCream !== undefined) {
    console.log("Invalid whippedCream input. whippedCream must be a boolean.");
    return -1;
  }

  if (typeof extras.extraShot === "boolean") {
    if (extras.extraShot) {
      extrasPrice += 0.75;
    }
  } else if (extras.extraShot !== undefined) {
    console.log("Invalid extraShot input. extraShot must be a boolean.");
    return -1;
  }

  console.log("basePrice:", basePrice, "typePrice:", typePrice, "extrasPrice:", extrasPrice);
  
  let finalPrice = basePrice + typePrice + extrasPrice;
  console.log("finalPrice before rounding:", finalPrice);

  return Number(finalPrice.toFixed(2));
}

calculateCoffeePrice("small", "latte", { whippedCream: true, extraShot: false });
