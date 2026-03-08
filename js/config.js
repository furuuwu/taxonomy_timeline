// Configuration
export const CONFIG = {
    minYear: -450,
    maxYear: 2050,
    pixelsPerYear: 1.5,
    trackHeight: 140,
    barHeight: 36,
    systemsOffset: 60,
    scientistsOffset: 50
};

// Calculate timeline total width
export const totalWidth = (CONFIG.maxYear - CONFIG.minYear) * CONFIG.pixelsPerYear;

/**
 * Converts a given year to an X coordinate in pixels
 * @param {number} year 
 * @returns {number}
 */
export function yearToX(year) {
    return (year - CONFIG.minYear) * CONFIG.pixelsPerYear;
}

/**
 * Formats a raw year integer into a human readable display string.
 * @param {number} year 
 * @returns {string}
 */
export function formatYear(year) {
    if (year < 0) return `${Math.abs(year)} BC`;
    if (year === 2040) return `Present`; // Synthetic "present" marker
    return year.toString();
}
