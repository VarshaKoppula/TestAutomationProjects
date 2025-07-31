# Test Automation Projects Portfolio

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
- **Page Object Model (POM)** - Clean separation of concerns
- **Cross-browser Testing** - Chrome, Firefox, Safari support
- **Test Data Management** - Centralized and environment-aware
- **Error Handling** - Robust retry mechanisms and graceful degradation
- **Performance Testing** - Built-in timing and reporting
- **CI/CD Integration** - GitHub Actions workflow
- **Comprehensive Documentation** - Detailed README and code comments

### **Test Coverage**
- **39 tests passing** 
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
- **REST API Testing** - Comprehensive API test coverage
- **Maven Project** - Standard Java project structure
- **RestAssured Library** - Industry-standard API testing
- **JSON Schema Validation** - Response validation
- **Test Reports** - Detailed test execution reports

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

### **UI Automation**
1. **Framework Design** - Clean, modular architecture
2. **Page Object Model** - Industry-standard implementation
3. **Cross-browser Testing** - Multi-browser compatibility
4. **Error Handling** - Robust error management
5. **Performance Testing** - Built-in performance measurement
6. **CI/CD Integration** - Automated testing pipeline



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
