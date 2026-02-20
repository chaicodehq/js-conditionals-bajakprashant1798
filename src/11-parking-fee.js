/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  vehicleType = vehicleType.toLowerCase();
  if (hours <= 0) {
    return -1;
  } else if (vehicleType !== "car" && vehicleType !== "motorcycle" && vehicleType !== "bus") {
    return -1;
  }

  const carMax = 30;
  const motorcycleMax = 18;
  const busMax = 60;
  let parkingFee = 0;

  if (vehicleType === "car") {
    parkingFee = 5 + (Math.ceil(hours) - 1) * 3;
    if (parkingFee > carMax) {
      parkingFee = carMax;
    }
  } else if (vehicleType === "motorcycle") {
    parkingFee = 3 + (Math.ceil(hours) - 1) * 2;
    if (parkingFee > motorcycleMax) {
      parkingFee = motorcycleMax;
    }
  } else if (vehicleType === "bus") {
    parkingFee = 10 + (Math.ceil(hours) - 1) * 7;
    if (parkingFee > busMax) {
      parkingFee = busMax;
    }
  }

  return parkingFee;
}

console.log(calculateParkingFee(1, "car"));
console.log(calculateParkingFee(3, "car"));
console.log(calculateParkingFee(0.5, "car"));
console.log(calculateParkingFee(24, "car"));
console.log(calculateParkingFee(1, "motorcycle"));
console.log(calculateParkingFee(3, "motorcycle"));
console.log(calculateParkingFee(0.5, "motorcycle"));
console.log(calculateParkingFee(24, "motorcycle"));
console.log(calculateParkingFee(1, "bus"));
console.log(calculateParkingFee(3, "bus"));
console.log(calculateParkingFee(0.5, "bus"));
console.log(calculateParkingFee(10, "Bus"));