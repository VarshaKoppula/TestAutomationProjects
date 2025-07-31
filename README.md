# 🚀 Test Automation Projects Portfolio

A comprehensive collection of test automation frameworks showcasing expertise in both **UI Testing** (Playwright) and **API Testing** (RestAssured).

## 📁 Project Structure

```
TestAutomationProjects/
├── EcommercePlayWright/          # 🎭 Playwright UI Testing Framework
│   ├── pages/                   # Page Object Models
│   ├── utils/                   # Utility classes
│   ├── tests/                   # Test specifications
│   ├── .github/workflows/       # CI/CD integration
│   └── README.md               # Framework documentation
├── RestAssuredE2E/              # 🔌 RestAssured API Testing Framework
│   ├── src/                    # Source code
│   ├── target/                 # Build artifacts
│   └── pom.xml                 # Maven configuration
├── README.md                   # This file
└── .gitignore                  # Git ignore rules
```

## 🎭 EcommercePlayWright - UI Testing Framework

### **Features**
- ✅ **Page Object Model (POM)** - Clean separation of concerns
- ✅ **Cross-browser Testing** - Chrome, Firefox, Safari support
- ✅ **Test Data Management** - Centralized and environment-aware
- ✅ **Error Handling** - Robust retry mechanisms and graceful degradation
- ✅ **Performance Testing** - Built-in timing and reporting
- ✅ **CI/CD Integration** - GitHub Actions workflow
- ✅ **Comprehensive Documentation** - Detailed README and code comments

### **Test Coverage**
- **39 tests passing** ✅
- Home page functionality
- Product search and validation
- Cross-browser compatibility
- Performance and reliability testing
- Error handling and data validation

### **Quick Start**
```bash
cd EcommercePlayWright
npm install
npm test
```

### **Framework Demo**
```bash
npm test tests/framework-demo.spec.js
```

## 🔌 RestAssuredE2E - API Testing Framework

### **Features**
- ✅ **REST API Testing** - Comprehensive API test coverage
- ✅ **Maven Project** - Standard Java project structure
- ✅ **RestAssured Library** - Industry-standard API testing
- ✅ **JSON Schema Validation** - Response validation
- ✅ **Test Reports** - Detailed test execution reports

### **Quick Start**
```bash
cd RestAssuredE2E
mvn clean test
```

## 🏗️ Technical Architecture

### **UI Testing (Playwright)**
- **Language**: JavaScript/Node.js
- **Framework**: Playwright
- **Design Pattern**: Page Object Model
- **Test Runner**: Playwright Test
- **Reporting**: HTML reports with screenshots
- **CI/CD**: GitHub Actions

### **API Testing (RestAssured)**
- **Language**: Java
- **Framework**: RestAssured
- **Build Tool**: Maven
- **Test Runner**: TestNG/JUnit
- **Reporting**: Maven Surefire reports

## 🎯 Skills Demonstrated

### **UI Automation**
1. **Framework Design** - Clean, modular architecture
2. **Page Object Model** - Industry-standard implementation
3. **Cross-browser Testing** - Multi-browser compatibility
4. **Error Handling** - Robust error management
5. **Performance Testing** - Built-in performance measurement
6. **CI/CD Integration** - Automated testing pipeline

### **API Automation**
1. **REST API Testing** - Comprehensive API validation
2. **Request/Response Handling** - JSON parsing and validation
3. **Schema Validation** - Response structure verification
4. **Test Data Management** - Dynamic test data generation
5. **Reporting** - Detailed test execution reports

### **General Testing Skills**
1. **Test Strategy** - Comprehensive test coverage
2. **Test Data Management** - Centralized and maintainable
3. **Error Handling** - Graceful error management
4. **Documentation** - Clear, comprehensive documentation
5. **Best Practices** - Industry-standard approaches

## 🚀 Getting Started

### **Prerequisites**
- Node.js (for Playwright)
- Java 8+ (for RestAssured)
- Maven (for RestAssured)

### **Setup Instructions**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TestAutomationProjects
   ```

2. **Setup Playwright Framework**
   ```bash
   cd EcommercePlayWright
   npm install
   npx playwright install
   ```

3. **Setup RestAssured Framework**
   ```bash
   cd RestAssuredE2E
   mvn clean compile
   ```

### **Running Tests**

#### **Playwright Tests**
```bash
cd EcommercePlayWright

# Run all tests
npm test

# Run specific test file
npm test tests/framework-demo.spec.js

# Run with UI mode
npm run test:ui

# Show test report
npm run test:report
```

#### **RestAssured Tests**
```bash
cd RestAssuredE2E

# Run all tests
mvn test

# Run specific test class
mvn test -Dtest=TestClassName

# Generate reports
mvn surefire-report:report
```

## 📊 Test Results

### **Playwright Framework**
```
✅ All 39 tests passing
✅ Page Object Model working correctly
✅ Test data management working correctly
✅ Search functionality working - Found 6 results
✅ Utility functions working correctly
✅ Error handling and retry mechanism working correctly
✅ Cross-browser compatibility working
✅ Test reporting working correctly
```

### **RestAssured Framework**
- API endpoint testing
- Response validation
- Schema verification
- Error handling

## 🔄 CI/CD Integration

### **GitHub Actions Workflow**
- Automated test execution
- Multi-browser testing
- Test reporting
- Artifact upload

### **Maven Integration**
- Automated build and test
- Dependency management
- Test reporting

## 📈 Performance Metrics

### **Playwright Framework**
- Test execution time: ~36 seconds for 39 tests
- Cross-browser compatibility: 100%
- Error handling: Robust retry mechanisms
- Memory usage: Optimized

### **RestAssured Framework**
- API response time monitoring
- Test execution efficiency
- Resource utilization

## 🎯 Interview-Ready Features

### **What Makes This Portfolio Stand Out**
1. **Complete Implementation** - Both UI and API testing frameworks
2. **Professional Structure** - Industry-standard architecture
3. **Comprehensive Testing** - Multiple test scenarios covered
4. **Error Handling** - Robust error management
5. **Documentation** - Clear, comprehensive documentation
6. **CI/CD Ready** - Automated testing pipelines
7. **Cross-browser Support** - Multi-browser testing
8. **Performance Monitoring** - Built-in performance tracking

### **Technical Excellence Demonstrated**
- **Design Patterns** - Page Object Model, Factory Pattern
- **Error Handling** - Try-catch, retry mechanisms, graceful degradation
- **Data Management** - Centralized, environment-aware test data
- **Code Quality** - Clean, maintainable, well-documented code
- **Testing Strategy** - Comprehensive test coverage with different scenarios

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

---

## 🎉 Ready for Your Next Automation Interview!

This portfolio demonstrates:
- ✅ **Technical expertise** in both UI and API automation
- ✅ **Professional approach** to software development
- ✅ **Problem-solving skills** in handling real-world challenges
- ✅ **Best practices** in test automation
- ✅ **Industry knowledge** of testing frameworks and tools

**Go ace that interview! 🚀** 