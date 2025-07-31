/**
 * Base Page Object Model class
 * Contains common methods and utilities for all page objects
 */
class BasePage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to a specific URL
   * @param {string} url - The URL to navigate to
   */
  async goto(url) {
    await this.page.goto(url);
  }

  /**
   * Wait for page to load completely
   */
  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Take a screenshot
   * @param {string} name - Screenshot name
   */
  async takeScreenshot(name) {
    await this.page.screenshot({ path: `screenshots/${name}-${Date.now()}.png` });
  }

  /**
   * Wait for element to be visible
   * @param {string} selector - Element selector
   * @param {number} timeout - Timeout in milliseconds
   */
  async waitForElement(selector, timeout = 30000) {
    await this.page.waitForSelector(selector, { state: 'visible', timeout });
  }

  /**
   * Click element with retry mechanism
   * @param {string} selector - Element selector
   * @param {number} retries - Number of retries
   */
  async clickWithRetry(selector, retries = 3) {
    for (let i = 0; i < retries; i++) {
      try {
        await this.page.click(selector);
        break;
      } catch (error) {
        if (i === retries - 1) throw error;
        await this.page.waitForTimeout(1000);
      }
    }
  }

  /**
   * Fill input field with retry mechanism
   * @param {string} selector - Element selector
   * @param {string} value - Value to fill
   * @param {number} retries - Number of retries
   */
  async fillWithRetry(selector, value, retries = 3) {
    for (let i = 0; i < retries; i++) {
      try {
        await this.page.fill(selector, value);
        break;
      } catch (error) {
        if (i === retries - 1) throw error;
        await this.page.waitForTimeout(1000);
      }
    }
  }

  /**
   * Get text content of element
   * @param {string} selector - Element selector
   * @returns {Promise<string>} Text content
   */
  async getText(selector) {
    return await this.page.locator(selector).textContent();
  }

  /**
   * Check if element is visible
   * @param {string} selector - Element selector
   * @returns {Promise<boolean>} Visibility status
   */
  async isVisible(selector) {
    return await this.page.locator(selector).first().isVisible();
  }

  /**
   * Wait for navigation to complete
   */
  async waitForNavigation() {
    await this.page.waitForLoadState('domcontentloaded');
  }
}

module.exports = { BasePage }; 