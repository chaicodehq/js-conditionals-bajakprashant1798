/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  var price = 0;
  const weekendSurcharge = 3;
  const childPrice = 8;
  const teenPrice = 12;
  const adultPrice = 15;
  const seniorPrice = 10;

  if (typeof age !== 'number' || age < 0) {
    console.log("Invalid age input. Age must be a non-negative number.");
    return -1;
  } else if (age <= 12) {
    if (isWeekend) {
      price = childPrice + weekendSurcharge;
      console.log("Child ticket price on weekend:", price);
      return price;
    }
    console.log("Child ticket price:", childPrice);
    return childPrice;
  } else if (age <= 17) {
    if (isWeekend) {
      price = teenPrice + weekendSurcharge;
      console.log("Teen ticket price on weekend:", price);
      return price;
    }
    console.log("Teen ticket price:", teenPrice);
    return teenPrice;
  } else if (age <= 59) {
    if (isWeekend) {
      price = adultPrice + weekendSurcharge;
      console.log("Adult ticket price on weekend:", price);
      return price;
    }
    console.log("Adult ticket price:", adultPrice);
    return adultPrice;
  } else {
    if (isWeekend) {
      price = seniorPrice + weekendSurcharge;
      console.log("Senior ticket price on weekend:", price);
      return price;
    }
    console.log("Senior ticket price:", seniorPrice);
    return seniorPrice;
  }
}

getTicketPrice(10, false); // 8
getTicketPrice(15, true);  // 15
getTicketPrice(30, false); // 15
getTicketPrice(65, true);  // 13
getTicketPrice(-5, false); // -1
getTicketPrice("twenty", true); // -1