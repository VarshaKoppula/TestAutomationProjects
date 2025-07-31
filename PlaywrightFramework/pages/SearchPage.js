const { BasePage } = require('./BasePage');

class SearchPage extends BasePage {
  constructor(page) {
    super(page);
    // Locators
    this.searchBox = '#search_product';
    this.searchButton = '#submit_search';
    this.productTitles = '.productinfo p';
    this.allProductsHeader = 'h2:has-text("All Products")';
    this.productGrid = '.features_items';
    this.productCards = '.single-products';
    this.addToCartButtons = '.add-to-cart';
    this.viewCartButton = 'a:has-text("View Cart")';
    this.cartIcon = '.fa-shopping-cart';
    this.productPrices = '.productinfo h2';
    this.noResultsMessage = '.features_items p';
  }

  /**
   * Navigate to products page
   */
  async goto() {
    await super.goto('https://automationexercise.com/products');
    await this.waitForPageLoad();
  }

  /**
   * Search for products
   * @param {string} term - Search term
   */
  async searchFor(term) {
    await this.waitForElement(this.searchBox);
    await this.fillWithRetry(this.searchBox, term);
    await this.clickWithRetry(this.searchButton);
    await this.waitForNavigation();
  }

  /**
   * Get search results
   * @returns {Promise<import('@playwright/test').Locator>} Product results locator
   */
  async getSearchResults() {
    return this.page.locator(this.productTitles);
  }

  /**
   * Check if header is visible
   * @returns {Promise<boolean>} Header visibility
   */
  async isHeaderVisible() {
    return this.isVisible(this.allProductsHeader);
  }

  /**
   * Get product count
   * @returns {Promise<number>} Number of products
   */
  async getProductCount() {
    const products = this.page.locator(this.productCards);
    return await products.count();
  }

  /**
   * Add first product to cart
   */
  async addFirstProductToCart() {
    await this.waitForElement(this.addToCartButtons);
    await this.clickWithRetry(this.addToCartButtons);
    await this.waitForElement(this.viewCartButton);
  }

  /**
   * Get product prices
   * @returns {Promise<string[]>} Array of product prices
   */
  async getProductPrices() {
    const prices = this.page.locator(this.productPrices);
    const count = await prices.count();
    const priceList = [];
    
    for (let i = 0; i < count; i++) {
      const price = await prices.nth(i).textContent();
      priceList.push(price);
    }
    
    return priceList;
  }

  /**
   * Check if no results message is displayed
   * @returns {Promise<boolean>} No results message visibility
   */
  async hasNoResults() {
    return this.isVisible(this.noResultsMessage);
  }

  /**
   * Sort products by price (low to high)
   */
  async sortByPriceLowToHigh() {
    // Implementation would depend on the actual sorting functionality
    // This is a placeholder for demonstration
    await this.page.selectOption('select[name="sort"]', 'price_asc');
    await this.waitForNavigation();
  }

  /**
   * Filter products by category
   * @param {string} category - Category name
   */
  async filterByCategory(category) {
    const categoryLink = `a:has-text("${category}")`;
    await this.clickWithRetry(categoryLink);
    await this.waitForNavigation();
  }

  /**
   * Get product details for a specific product
   * @param {number} index - Product index (0-based)
   * @returns {Promise<Object>} Product details
   */
  async getProductDetails(index) {
    const products = this.page.locator(this.productCards);
    const product = products.nth(index);
    
    const name = await product.locator(this.productTitles).textContent();
    const price = await product.locator(this.productPrices).textContent();
    
    return {
      name: name?.trim(),
      price: price?.trim()
    };
  }
}

module.exports = { SearchPage };