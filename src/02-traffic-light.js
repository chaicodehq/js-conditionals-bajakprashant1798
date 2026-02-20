/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {
  // Convert to lowercase for case-insensitive comparison
  const signal = color.toLowerCase();
  
  switch (signal) {
    case "green":
      console.log("Go");
      return "GO";
    case "yellow":
      console.log("Slow down");
      return "SLOW DOWN";
    case "red":
      console.log("Stop");
      return "STOP";
    case "flashing red":
      console.log("Stop And Proceed With Caution");
      return "STOP AND PROCEED WITH CAUTION";
    default:
      console.log("Invalid Signal");  
      return "INVALID SIGNAL";
  }
}
getTrafficAction("Green")
getTrafficAction("yellow")
getTrafficAction("red")
getTrafficAction("flashing red")
getTrafficAction("black")
