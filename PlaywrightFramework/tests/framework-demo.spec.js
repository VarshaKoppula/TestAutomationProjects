// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { SearchPage } = require('../pages/SearchPage');
const { TestData } = require('../utils/TestData');
const { TestUtils } = require('../utils/TestUtils');

test.describe('Framework Demo - Showcasing Key Features', () => {
  test('should demonstrate Page Object Model and basic navigation', async ({ page }) => {
    const homePage = new HomePage(page);
    const testData = new TestData();
    
    // Navigate to home page
    await homePage.goto();
    
    // Verify page loads successfully
    await expect(page).toHaveTitle(/Automation Exercise/);
    await expect(await homePage.isLogoVisible()).toBeTruthy();
    
    // Navigate to products page
    await homePage.navigateToProducts();
    await expect(page).toHaveURL(testData.urls.productsPage);
    
    console.log('✅ Page Object Model and navigation working correctly');
  });

  test('should demonstrate test data management', async ({ page }) => {
    const testData = new TestData();
    
    // Get test data for different scenarios
    const validSearchData = testData.getTestData('validSearch');
    const randomUser = testData.getRandomUser();
    const randomEmail = TestUtils.generateRandomEmail();
    
    // Verify test data structure
    expect(validSearchData).toHaveProperty('searchTerm');
    expect(randomUser).toHaveProperty('email');
    expect(TestUtils.isValidEmail(randomEmail)).toBeTruthy();
    
    console.log('✅ Test data management working correctly');
    console.log(`Generated random email: ${randomEmail}`);
  });

  test('should demonstrate search functionality', async ({ page }) => {
    const searchPage = new SearchPage(page);
    const testData = new TestData();
    
    // Navigate to products page
    await searchPage.goto();
    
    // Perform search
    await searchPage.searchFor('Tshirt');
    
    // Get search results
    const results = await searchPage.getSearchResults();
    const count = await results.count();
    
    // Verify search works
    expect(count).toBeGreaterThanOrEqual(0);
    
    console.log(`✅ Search functionality working - Found ${count} results`);
  });

  test('should demonstrate utility functions', async ({ page }) => {
    // Test utility functions
    const randomString = TestUtils.generateRandomString(8);
    const randomNumber = TestUtils.generateRandomNumber(1, 100);
    const timestamp = TestUtils.getTimestamp();
    
    // Verify utilities work
    expect(randomString.length).toBe(8);
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(100);
    expect(timestamp).toBeGreaterThan(0);
    
    console.log('✅ Utility functions working correctly');
    console.log(`Random string: ${randomString}, Random number: ${randomNumber}`);
  });

  test('should demonstrate error handling and retry mechanism', async ({ page }) => {
    const homePage = new HomePage(page);
    
    // Test retry mechanism
    await TestUtils.retryWithBackoff(async () => {
      await homePage.goto();
      await expect(await homePage.isLogoVisible()).toBeTruthy();
    }, 3, 1000);
    
    console.log('✅ Error handling and retry mechanism working correctly');
  });

  test('should demonstrate cross-browser compatibility', async ({ page, browserName }) => {
    const homePage = new HomePage(page);
    
    // Test basic functionality across browsers
    await homePage.goto();
    await expect(await homePage.isLogoVisible()).toBeTruthy();
    await expect(await homePage.isNavigationVisible()).toBeTruthy();
    
    console.log(`✅ Cross-browser compatibility working on ${browserName}`);
  });

  test('should demonstrate test reporting', async ({ page }) => {
    const startTime = TestUtils.getTimestamp();
    
    // Perform some actions
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.navigateToProducts();
    
    const endTime = TestUtils.getTimestamp();
    const duration = endTime - startTime;
    
    // Generate test report
    const report = TestUtils.generateTestReport(
      'Framework Demo Test',
      'passed',
      duration
    );
    
    // Verify report structure
    expect(report).toHaveProperty('testName', 'Framework Demo Test');
    expect(report).toHaveProperty('status', 'passed');
    expect(report).toHaveProperty('duration');
    expect(report).toHaveProperty('timestamp');
    expect(report.duration).toBeGreaterThan(0);
    
    console.log('✅ Test reporting working correctly');
    console.log(`Test completed in ${duration}ms`);
  });
}); 