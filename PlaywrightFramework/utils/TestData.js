/**
 * Test Data Management Utility
 * Centralized place for managing test data
 */
class TestData {
  constructor() {
    this.testUsers = {
      validUser: {
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'TestPassword123!',
        firstName: 'Test',
        lastName: 'User',
        address: '123 Test Street',
        city: 'Test City',
        state: 'Test State',
        zipCode: '12345',
        phone: '1234567890'
      },
      invalidUser: {
        email: 'invalid@example.com',
        password: 'wrongpassword'
      }
    };

    this.products = {
      tshirt: 'Tshirt',
      dress: 'Dress',
      jeans: 'Jeans',
      sweater: 'Sweater',
      coat: 'Coat',
      shoes: 'Shoes',
      bag: 'Bag',
      watch: 'Watch'
    };

    this.searchTerms = {
      valid: ['Tshirt', 'Dress', 'Jeans', 'Shoes'],
      invalid: ['NonExistentProduct', 'InvalidSearchTerm'],
      empty: '',
      specialChars: '!@#$%^&*()',
      numbers: '12345',
      longText: 'a'.repeat(1000)
    };

    this.urls = {
      baseUrl: 'https://automationexercise.com',
      homePage: 'https://automationexercise.com/',
      productsPage: 'https://automationexercise.com/products',
      cartPage: 'https://automationexercise.com/view_cart',
      loginPage: 'https://automationexercise.com/login',
      signupPage: 'https://automationexercise.com/signup',
      contactPage: 'https://automationexercise.com/contact_us',
      testCasesPage: 'https://automationexercise.com/test_cases'
    };

    this.timeouts = {
      short: 5000,
      medium: 10000,
      long: 30000,
      veryLong: 60000
    };

    this.browserConfigs = {
      desktop: {
        width: 1920,
        height: 1080
      },
      tablet: {
        width: 768,
        height: 1024
      },
      mobile: {
        width: 375,
        height: 667
      }
    };
  }

  /**
   * Get random email
   * @returns {string} Random email
   */
  getRandomEmail() {
    const timestamp = Date.now();
    return `testuser${timestamp}@example.com`;
  }

  /**
   * Get random user data
   * @returns {Object} Random user data
   */
  getRandomUser() {
    const timestamp = Date.now();
    return {
      name: `Test User ${timestamp}`,
      email: `testuser${timestamp}@example.com`,
      password: 'TestPassword123!',
      firstName: 'Test',
      lastName: `User${timestamp}`,
      address: '123 Test Street',
      city: 'Test City',
      state: 'Test State',
      zipCode: '12345',
      phone: '1234567890'
    };
  }

  /**
   * Get random product from the list
   * @returns {string} Random product name
   */
  getRandomProduct() {
    const products = Object.values(this.products);
    return products[Math.floor(Math.random() * products.length)];
  }

  /**
   * Get test data for specific test scenario
   * @param {string} scenario - Test scenario name
   * @returns {Object} Test data for the scenario
   */
  getTestData(scenario) {
    const testDataMap = {
      'validSearch': {
        searchTerm: this.products.tshirt,
        expectedResults: true
      },
      'invalidSearch': {
        searchTerm: this.searchTerms.invalid[0],
        expectedResults: false
      },
      'emptySearch': {
        searchTerm: this.searchTerms.empty,
        expectedResults: false
      },
      'specialCharSearch': {
        searchTerm: this.searchTerms.specialChars,
        expectedResults: false
      },
      'validSubscription': {
        email: this.getRandomEmail(),
        expectedResult: true
      },
      'invalidSubscription': {
        email: 'invalid-email',
        expectedResult: false
      }
    };

    return testDataMap[scenario] || {};
  }

  /**
   * Get environment-specific configuration
   * @param {string} environment - Environment name (dev, staging, prod)
   * @returns {Object} Environment configuration
   */
  getEnvironmentConfig(environment = 'prod') {
    const configs = {
      dev: {
        baseUrl: 'http://localhost:3000',
        timeout: this.timeouts.short,
        retries: 1
      },
      staging: {
        baseUrl: 'https://staging.automationexercise.com',
        timeout: this.timeouts.medium,
        retries: 2
      },
      prod: {
        baseUrl: this.urls.baseUrl,
        timeout: this.timeouts.long,
        retries: 3
      }
    };

    return configs[environment] || configs.prod;
  }

  /**
   * Get browser-specific test data
   * @param {string} browser - Browser name
   * @returns {Object} Browser-specific data
   */
  getBrowserTestData(browser) {
    const browserData = {
      chromium: {
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        viewport: this.browserConfigs.desktop
      },
      firefox: {
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
        viewport: this.browserConfigs.desktop
      },
      webkit: {
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15',
        viewport: this.browserConfigs.desktop
      }
    };

    return browserData[browser] || browserData.chromium;
  }
}

module.exports = { TestData }; 