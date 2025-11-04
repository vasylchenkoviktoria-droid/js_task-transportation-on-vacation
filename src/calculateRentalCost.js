/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const daysNumber = Number(days);
  const rentPerDay = 40 * daysNumber;

  if (daysNumber >= 7) {
    return rentPerDay - 50;
  }

  if (daysNumber >= 3) {
    return rentPerDay - 20;
  }

  return rentPerDay;
}

module.exports = calculateRentalCost;
