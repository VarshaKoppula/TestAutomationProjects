/**
 * Test Utilities
 * Common helper functions for test automation
 */
class TestUtils {
  /**
   * Generate random string
   * @param {number} length - Length of the string
   * @returns {string} Random string
   */
  static generateRandomString(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  /**
   * Generate random number
   * @param {number} min - Minimum value
   * @param {number} max - Maximum value
   * @returns {number} Random number
   */
  static generateRandomNumber(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Generate random email
   * @returns {string} Random email
   */
  static generateRandomEmail() {
    const timestamp = Date.now();
    const randomString = this.generateRandomString(5);
    return `testuser${timestamp}${randomString}@example.com`;
  }

  /**
   * Wait for a specific time
   * @param {number} milliseconds - Time to wait in milliseconds
   */
  static async wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  /**
   * Format date for test data
   * @param {Date} date - Date to format
   * @returns {string} Formatted date string
   */
  static formatDate(date = new Date()) {
    return date.toISOString().split('T')[0];
  }

  /**
   * Validate email format
   * @param {string} email - Email to validate
   * @returns {boolean} Validation result
   */
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate URL format
   * @param {string} url - URL to validate
   * @returns {boolean} Validation result
   */
  static isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Compare arrays
   * @param {Array} array1 - First array
   * @param {Array} array2 - Second array
   * @returns {boolean} Comparison result
   */
  static arraysEqual(array1, array2) {
    if (array1.length !== array2.length) return false;
    return array1.every((value, index) => value === array2[index]);
  }

  /**
   * Deep clone object
   * @param {Object} obj - Object to clone
   * @returns {Object} Cloned object
   */
  static deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  /**
   * Get current timestamp
   * @returns {number} Current timestamp
   */
  static getTimestamp() {
    return Date.now();
  }

  /**
   * Get formatted timestamp
   * @returns {string} Formatted timestamp
   */
  static getFormattedTimestamp() {
    return new Date().toISOString().replace(/[:.]/g, '-');
  }

  /**
   * Retry function with exponential backoff
   * @param {Function} fn - Function to retry
   * @param {number} maxRetries - Maximum number of retries
   * @param {number} baseDelay - Base delay in milliseconds
   * @returns {Promise<any>} Function result
   */
  static async retryWithBackoff(fn, maxRetries = 3, baseDelay = 1000) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await fn();
      } catch (error) {
        if (attempt === maxRetries) {
          throw error;
        }
        const delay = baseDelay * Math.pow(2, attempt - 1);
        await this.wait(delay);
      }
    }
  }

  /**
   * Validate test data structure
   * @param {Object} data - Data to validate
   * @param {Object} schema - Expected schema
   * @returns {boolean} Validation result
   */
  static validateTestData(data, schema) {
    for (const [key, type] of Object.entries(schema)) {
      if (!(key in data)) {
        console.error(`Missing required field: ${key}`);
        return false;
      }
      if (typeof data[key] !== type) {
        console.error(`Invalid type for ${key}: expected ${type}, got ${typeof data[key]}`);
        return false;
      }
    }
    return true;
  }

  /**
   * Generate test report data
   * @param {string} testName - Name of the test
   * @param {string} status - Test status (passed/failed)
   * @param {number} duration - Test duration in milliseconds
   * @param {string} error - Error message if failed
   * @returns {Object} Test report data
   */
  static generateTestReport(testName, status, duration, error = null) {
    return {
      testName,
      status,
      duration,
      timestamp: this.getFormattedTimestamp(),
      error: error?.message || null,
      browser: process.env.BROWSER || 'chromium'
    };
  }

  /**
   * Sanitize string for file naming
   * @param {string} str - String to sanitize
   * @returns {string} Sanitized string
   */
  static sanitizeForFileName(str) {
    return str.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  }

  /**
   * Check if running in CI environment
   * @returns {boolean} CI environment status
   */
  static isCI() {
    return process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true';
  }

  /**
   * Get environment variable with fallback
   * @param {string} key - Environment variable key
   * @param {any} fallback - Fallback value
   * @returns {any} Environment variable value or fallback
   */
  static getEnvVar(key, fallback = null) {
    return process.env[key] || fallback;
  }
}

module.exports = { TestUtils }; 