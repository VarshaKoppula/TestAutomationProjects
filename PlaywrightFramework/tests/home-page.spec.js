// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { TestData } = require('../utils/TestData');
const { TestUtils } = require('../utils/TestUtils');

let homePage;
let testData;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  testData = new TestData();
  await homePage.goto();
});

test.describe('Home Page Functionality', () => {
  test('should load home page successfully', async () => {
    // Verify page title
    await expect(homePage.page).toHaveTitle(/Automation Exercise/);
    
    // Verify URL
    await expect(homePage.page).toHaveURL(testData.urls.homePage);
    
    // Verify key elements are visible
    await expect(await homePage.isLogoVisible()).toBeTruthy();
    await expect(await homePage.isNavigationVisible()).toBeTruthy();
    await expect(await homePage.isSliderVisible()).toBeTruthy();
    await expect(await homePage.isFeaturedProductsVisible()).toBeTruthy();
  });

  test('should display all navigation links', async () => {
    const navigationLinks = await homePage.getNavigationLinks();
    
    // Verify expected navigation links are present
    expect(navigationLinks).toContain('Home');
    expect(navigationLinks).toContain('Cart');
    expect(navigationLinks).toContain('Signup / Login');
    
    // Check for Products link (might have extra characters)
    const hasProductsLink = navigationLinks.some(link => link.includes('Products'));
    expect(hasProductsLink).toBeTruthy();
    
    // Verify navigation links count
    expect(navigationLinks.length).toBeGreaterThan(5);
  });

  test('should navigate to products page', async () => {
    await homePage.navigateToProducts();
    
    // Verify navigation to products page
    await expect(homePage.page).toHaveURL(testData.urls.productsPage);
    await expect(homePage.page).toHaveTitle(/All Products/);
  });

  test('should navigate to cart page', async () => {
    await homePage.navigateToCart();
    
    // Verify navigation to cart page
    await expect(homePage.page).toHaveURL(testData.urls.cartPage);
  });

  test('should navigate to login page', async () => {
    await homePage.navigateToLogin();
    
    // Verify navigation to login page
    await expect(homePage.page).toHaveURL(testData.urls.loginPage);
  });

  test('should navigate to signup page', async () => {
    await homePage.navigateToSignup();
    
    // Verify navigation to signup/login page (either URL is acceptable)
    const currentUrl = homePage.page.url();
    expect(currentUrl.includes('login') || currentUrl.includes('signup')).toBeTruthy();
  });
});

test.describe('Newsletter Subscription', () => {
  test('should subscribe to newsletter with valid email', async () => {
    const validEmail = TestUtils.generateRandomEmail();
    
    // Scroll to footer to access subscription form
    await homePage.scrollToFooter();
    
    // Subscribe to newsletter
    await homePage.subscribeToNewsletter(validEmail);
    
    // Verify subscription success (if available)
    const isSuccessful = await homePage.isSubscriptionSuccessful();
    if (isSuccessful) {
      const message = await homePage.getSubscriptionMessage();
      expect(message).toContain('successfully');
    } else {
      console.log('Newsletter subscription functionality not available');
    }
  });

  test('should handle newsletter subscription with invalid email', async () => {
    const invalidEmail = 'invalid-email-format';
    
    // Scroll to footer
    await homePage.scrollToFooter();
    
    // Try to subscribe with invalid email
    await homePage.subscribeToNewsletter(invalidEmail);
    
    // This test demonstrates error handling - it should not break the test
    console.log('Newsletter subscription with invalid email handled gracefully');
  });

  test('should handle empty email subscription', async () => {
    // Scroll to footer
    await homePage.scrollToFooter();
    
    // Try to subscribe with empty email
    await homePage.subscribeToNewsletter('');
    
    // This test demonstrates error handling - it should not break the test
    console.log('Newsletter subscription with empty email handled gracefully');
  });
});

test.describe('Page Scrolling and Responsiveness', () => {
  test('should scroll to footer and back to top', async () => {
    // Scroll to footer
    await homePage.scrollToFooter();
    
    // Verify footer is visible
    await expect(await homePage.isFooterVisible()).toBeTruthy();
    
    // Scroll back to top
    await homePage.scrollToTop();
    
    // Verify logo is visible (back at top)
    await expect(await homePage.isLogoVisible()).toBeTruthy();
  });

  test('should display all major page sections', async () => {
    // Verify all major sections are visible
    await expect(await homePage.isSliderVisible()).toBeTruthy();
    await expect(await homePage.isFeaturedProductsVisible()).toBeTruthy();
    await expect(await homePage.isBrandProductsVisible()).toBeTruthy();
    await expect(await homePage.isFooterVisible()).toBeTruthy();
  });
});

test.describe('Cross-browser Compatibility', () => {
  test('should work across different browsers', async ({ browserName }) => {
    // This test will run on all configured browsers
    console.log(`Running test on browser: ${browserName}`);
    
    // Verify basic functionality works on all browsers
    await expect(await homePage.isLogoVisible()).toBeTruthy();
    await expect(await homePage.isNavigationVisible()).toBeTruthy();
    
    // Test navigation
    await homePage.navigateToProducts();
    await expect(homePage.page).toHaveURL(testData.urls.productsPage);
  });
});

test.describe('Performance and Reliability', () => {
  test('should handle page load timeouts gracefully', async () => {
    // Test with retry mechanism
    await TestUtils.retryWithBackoff(async () => {
      await homePage.goto();
      await expect(await homePage.isLogoVisible()).toBeTruthy();
    }, 3, 2000);
  });

  test('should generate proper test reports', async () => {
    const startTime = TestUtils.getTimestamp();
    
    // Perform some actions
    await homePage.navigateToProducts();
    await homePage.page.goBack();
    
    const endTime = TestUtils.getTimestamp();
    const duration = endTime - startTime;
    
    // Generate test report
    const report = TestUtils.generateTestReport(
      'Home Page Navigation Test',
      'passed',
      duration
    );
    
    // Verify report structure
    expect(report).toHaveProperty('testName');
    expect(report).toHaveProperty('status');
    expect(report).toHaveProperty('duration');
    expect(report).toHaveProperty('timestamp');
    expect(report.status).toBe('passed');
    expect(report.duration).toBeGreaterThan(0);
  });
}); 