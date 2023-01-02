// const { By, Key, Builder } = require("selenium-webdriver");
// const chrome = require('selenium-webdriver/chrome');

// async function test_case(){
//   //create driverü
//   const service = new chrome.ServiceBuilder('/path/to/chromedriver');
//   const driver = new Builder().forBrowser('chrome').setChromeService(service).build();

//   //send driver to website
//   await driver.get("http://localhost:3000/");

//   //grab an element from the page
//   await driver.findElement(By.partialLinkText("Notifications")).click()

// }
// Import the necessary libraries
const { Builder, By, Key } = require("selenium-webdriver");
require("chromedriver");

async function faqSuccess() {
    // Login Phase
    let driver = new Builder().forBrowser("chrome").build();

    // Open the login page
    await driver.get("http://localhost:3000/profile");

    await driver.findElement(By.id("logintoggle")).click();

    // Find the username and password input fields
    await driver.findElement(By.id("Email")).sendKeys("tff1@gmail.com");
    await driver.findElement(By.id("Password")).sendKeys("123123123");

    await driver.findElement(By.id("login_button")).click();

    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Match Adding Phase
    await driver.get(
        "http://localhost:3000/notification-add"
    );

    await driver
        .findElement(By.id("Notification Header"))
        .sendKeys("Notification Test");

    await driver
        .findElement(By.id("Notification Content"))
        .sendKeys("Content of Notification Test");

    await driver.findElement(By.id("notification_add_button")).click();
}

faqSuccess();