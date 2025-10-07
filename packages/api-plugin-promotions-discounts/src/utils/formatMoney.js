import accounting from "accounting-js";

/**
 * Formats a number as money with 2 decimal places, with comma separators.
 * In cases of invalid input, returns `"0.00"`.
 *
 * @param {number|string} amount - The amount to format (can be number or numeric string)
 * @param {object} [options] - Optional accounting.js formatting options
 * @returns {string} The formatted money string, e.g. "1,234.56"
 */
export default function formatMoney(amount, options = {}) {
  // Convert to number, fallback to 0
  const num = Number(amount);
  if (isNaN(num)) {
    return "0.00";
  }

  // Use accounting.formatMoney for better formatting (commas, decimals)
  // You can pass options object to tweak format (symbol, precision, etc.)
  return accounting.formatMoney(num, {
    symbol: "",        // no currency symbol by default — or set default if you want
    precision: 2,      // two decimal places
    thousand: ",",
    decimal: ".",
    ...options
  });
}
