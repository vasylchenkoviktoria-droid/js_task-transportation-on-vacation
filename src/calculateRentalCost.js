/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPerDay = 40 * days;

  const totalRentCosts =
    days >= 7 ? rentPerDay - 50 : days >= 3 ? rentPerDay - 20 : rentPerDay;

  return totalRentCosts;
}

module.exports = calculateRentalCost;
