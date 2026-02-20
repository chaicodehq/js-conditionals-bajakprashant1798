/**
 * 🌤️ TrailBuddy - The Hiking Weather App
 *
 * You're building a weather advisory feature for TrailBuddy, a popular
 * hiking app used by thousands of outdoor enthusiasts. Based on the
 * temperature (in Celsius) and whether it's raining, the app should
 * display helpful advice to hikers.
 *
 * Advisory Rules (check in this exact order):
 *   - temp >= 35              → "Too hot for hiking - stay indoors and hydrate"
 *   - temp >= 25 and no rain  → "Great weather for hiking - don't forget sunscreen"
 *   - temp >= 25 and raining  → "Warm but rainy - consider indoor activities"
 *   - temp >= 15 and no rain  → "Perfect hiking weather - enjoy the trails"
 *   - temp >= 15 and raining  → "Cool and rainy - bring waterproof gear if hiking"
 *   - temp >= 5 and no rain   → "Chilly - wear layers for your hike"
 *   - temp >= 5 and raining   → "Cold and wet - best to stay indoors"
 *   - temp < 5                → "Too cold - stay warm indoors"
 *
 * @param {number} temperature - Temperature in Celsius
 * @param {boolean} isRaining - Whether it's currently raining
 * @returns {string} The weather advisory message
 */
export function getWeatherAdvice(temperature, isRaining) {
  if (typeof temperature !== "number") {
    console.log("Invalid temperature input. Temperature must be a number.");
    return "INVALID TEMPERATURE";
  } else if (temperature >= 35) {
    console.log("Too hot for hiking - stay indoors and hydrate");
    return "Too hot for hiking - stay indoors and hydrate";
  } else if (temperature >= 25 && !isRaining) {
    console.log("Great weather for hiking - don't forget sunscreen");
    return "Great weather for hiking - don't forget sunscreen";
  } else if (temperature >= 25 && isRaining) {
    console.log("Warm but rainy - consider indoor activities");
    return "Warm but rainy - consider indoor activities";
  } else if (temperature >= 15 && !isRaining) {
    console.log("Perfect hiking weather - enjoy the trails");
    return "Perfect hiking weather - enjoy the trails";
  } else if (temperature >= 15 && isRaining) {
    console.log("Cool and rainy - bring waterproof gear if hiking");
    return "Cool and rainy - bring waterproof gear if hiking";
  } else if (temperature >= 5 && !isRaining) {
    console.log("Chilly - wear layers for your hike");
    return "Chilly - wear layers for your hike";
  } else if (temperature >= 5 && isRaining) {
    console.log("Cold and wet - best to stay indoors");
    return "Cold and wet - best to stay indoors";
  } else {
    console.log("Too cold - stay warm indoors");
    return "Too cold - stay warm indoors";
  }
}

getWeatherAdvice(36, false); // "Too hot for hiking - stay indoors and hydrate"
getWeatherAdvice("36", false); //Invalid temperature input. Temperature must be a number.
getWeatherAdvice(28, false); // "Great weather for hiking - don't forget sunscreen"
getWeatherAdvice(28, true);  // "Warm but rainy - consider indoor activities"
getWeatherAdvice(20, false); // "Perfect hiking weather - enjoy the trails"
getWeatherAdvice(20, true);  // "Cool and rainy - bring waterproof gear if hiking"
getWeatherAdvice(10, false); // "Chilly - wear layers for your hike"
getWeatherAdvice(10, true);  // "Cold and wet - best to stay indoors"
getWeatherAdvice(0, false);  // "Too cold - stay warm indoors"
getWeatherAdvice(0, true);   // "Too cold - stay warm indoors"