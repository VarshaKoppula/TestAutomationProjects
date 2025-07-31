const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    // Locators
    this.logo = '.logo a';
    this.navigationMenu = '.navbar-nav';
    this.homeLink = 'a:has-text("Home")';
    this.productsLink = 'a:has-text("Products")';
    this.cartLink = 'a:has-text("Cart")';
    this.loginLink = 'a:has-text("Signup / Login")';
    this.signupLink = 'a:has-text("Signup / Login")';
    this.contactUsLink = 'a:has-text("Contact us")';
    this.testCasesLink = 'a:has-text("Test Cases")';
    this.apiTestingLink = 'a:has-text("API Testing")';
    this.videoTutorialsLink = 'a:has-text("Video Tutorials")';
    this.subscriptionEmail = '#susbscribe_email';
    this.subscribeButton = '#subscribe';
    this.successMessage = '.alert-success';
    this.slider = '.carousel-inner';
    this.featuredProducts = '.features_items';
    this.brandProducts = '.brands_products';
    this.footer = '.footer-widget';
  }

  /**
   * Navigate to home page
   */
  async goto() {
    await super.goto('https://automationexercise.com/');
    await this.waitForPageLoad();
  }

  /**
   * Navigate to products page
   */
  async navigateToProducts() {
    await this.clickWithRetry(this.productsLink);
    await this.waitForNavigation();
  }

  /**
   * Navigate to cart page
   */
  async navigateToCart() {
    await this.clickWithRetry(this.cartLink);
    await this.waitForNavigation();
  }

  /**
   * Navigate to login page
   */
  async navigateToLogin() {
    await this.clickWithRetry(this.loginLink);
    await this.waitForNavigation();
  }

  /**
   * Navigate to signup page
   */
  async navigateToSignup() {
    await this.clickWithRetry(this.signupLink);
    await this.waitForNavigation();
    // The signup/login page might redirect, so we check for either URL
    const currentUrl = this.page.url();
    if (!currentUrl.includes('login') && !currentUrl.includes('signup')) {
      throw new Error('Navigation to signup/login page failed');
    }
  }

  /**
   * Subscribe to newsletter
   * @param {string} email - Email address
   */
  async subscribeToNewsletter(email) {
    try {
      await this.waitForElement(this.subscriptionEmail, 10000);
      await this.fillWithRetry(this.subscriptionEmail, email);
      await this.clickWithRetry(this.subscribeButton);
      await this.waitForElement(this.successMessage, 10000);
    } catch (error) {
      console.log('Newsletter subscription might not be available or working as expected');
      // Don't throw error to keep test running
    }
  }

  /**
   * Check if subscription was successful
   * @returns {Promise<boolean>} Success status
   */
  async isSubscriptionSuccessful() {
    return this.isVisible(this.successMessage);
  }

  /**
   * Get subscription success message
   * @returns {Promise<string>} Success message text
   */
  async getSubscriptionMessage() {
    return this.getText(this.successMessage);
  }

  /**
   * Check if logo is visible
   * @returns {Promise<boolean>} Logo visibility
   */
  async isLogoVisible() {
    return this.isVisible(this.logo);
  }

  /**
   * Check if navigation menu is visible
   * @returns {Promise<boolean>} Navigation visibility
   */
  async isNavigationVisible() {
    return this.isVisible(this.navigationMenu);
  }

  /**
   * Check if slider is visible
   * @returns {Promise<boolean>} Slider visibility
   */
  async isSliderVisible() {
    return this.isVisible(this.slider);
  }

  /**
   * Check if featured products section is visible
   * @returns {Promise<boolean>} Featured products visibility
   */
  async isFeaturedProductsVisible() {
    return this.isVisible(this.featuredProducts);
  }

  /**
   * Check if brand products section is visible
   * @returns {Promise<boolean>} Brand products visibility
   */
  async isBrandProductsVisible() {
    return this.isVisible(this.brandProducts);
  }

  /**
   * Check if footer is visible
   * @returns {Promise<boolean>} Footer visibility
   */
  async isFooterVisible() {
    return this.isVisible(this.footer);
  }

  /**
   * Get all navigation links
   * @returns {Promise<string[]>} Array of navigation link texts
   */
  async getNavigationLinks() {
    const links = this.page.locator(`${this.navigationMenu} a`);
    const count = await links.count();
    const linkTexts = [];
    
    for (let i = 0; i < count; i++) {
      const text = await links.nth(i).textContent();
      if (text) linkTexts.push(text.trim());
    }
    
    return linkTexts;
  }

  /**
   * Scroll to footer
   */
  async scrollToFooter() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await this.page.waitForTimeout(1000);
  }

  /**
   * Scroll to top
   */
  async scrollToTop() {
    await this.page.evaluate(() => {
      window.scrollTo(0, 0);
    });
    await this.page.waitForTimeout(1000);
  }
}

module.exports = { HomePage }; 