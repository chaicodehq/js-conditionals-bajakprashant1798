/**
 * 📦 ShopSwift Shipping Calculator
 *
 * ShopSwift is a growing online store. They've hired you to build their
 * shipping cost calculator. The cost depends on the package weight,
 * where it's going, and the order total.
 *
 * Domestic Shipping (country === "US"):
 *   - Weight up to 1 kg:   $5
 *   - Weight up to 5 kg:   $10
 *   - Weight over 5 kg:    $15
 *
 * International Shipping (any other country):
 *   - Weight up to 1 kg:   $15
 *   - Weight up to 5 kg:   $25
 *   - Weight over 5 kg:    $40
 *
 * Free Shipping:
 *   - Domestic orders over $50 get FREE shipping (return 0)
 *   - International orders over $100 get FREE shipping (return 0)
 *
 * Rules:
 *   - If weight is 0 or negative, return -1
 *   - If orderTotal is negative, return -1
 *
 * @param {number} weight - Package weight in kilograms
 * @param {string} country - Destination country code (e.g., "US", "UK", "IN")
 * @param {number} orderTotal - Total order amount in dollars
 * @returns {number} Shipping cost, 0 for free shipping, or -1 for invalid input
 */
export function calculateShipping(weight, country, orderTotal) {
  if (typeof weight !== "number" || weight <= 0) {
    console.log("Invalid weight, weight should be a greater than zero number");
    return -1;
  }
  if (typeof orderTotal !== "number" || orderTotal < 0) {
    console.log("Invalid order total, order total should be a non-negative number");
    return -1;
  }
  if (country === "US") {
    if (orderTotal > 50) {
      console.log("Free shipping for domestic orders over $50");
      return 0;
    } else if (weight <= 1) {
      console.log("Domestic shipping cost: $5");
      return 5;
    } else if (weight <= 5) {
      console.log("Domestic shipping cost: $10");
      return 10;
    } else {
      console.log("Domestic shipping cost: $15");
      return 15;
    }
  } else {
    if (orderTotal > 100) {
      console.log("Free shipping for international orders over $100");
      return 0;
    } else if (weight <= 1) {
      console.log("International shipping cost: $15");
      return 15;
    } else if (weight <= 5) {
      console.log("International shipping cost: $25");
      return 25;
    } else {
      console.log("International shipping cost: $40");
      return 40;
    }
  }
}

calculateShipping(0.5, "US", 30);   // 5
calculateShipping(3, "US", 30);     // 10
calculateShipping(6, "US", 30);     // 15
calculateShipping(0.5, "US", 60);   // 0 (free shipping)
calculateShipping(0.5, "UK", 80);   // 15
calculateShipping(3, "UK", 80);     // 25
calculateShipping(6, "UK", 80);     // 40
calculateShipping(0.5, "UK", 120);  // 0 (free shipping)
calculateShipping(-1, "US", 30);    // -1 (invalid weight)
calculateShipping(2, "US", -10);    // -1 (invalid order total)