// Import the necessary libraries
const { Builder, By, Key, Select } = require("selenium-webdriver");
require("chromedriver");

async function matchAddSuccess() {
    // Login Phase
    let driver = new Builder().forBrowser("chrome").build();

    // Open the login page
    await driver.get("http://localhost:3000/profile");

    await driver.findElement(By.id("logintoggle")).click();

    // Find the username and password input fields
    await driver.findElement(By.id("Email_login")).sendKeys("tff1@gmail.com");
    await driver.findElement(By.id("Password_login")).sendKeys("123123123");

    await driver.findElement(By.id("loginsubmit")).click();

    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Match Adding Phase
    await driver.get("http://localhost:3000/add-match");

    await driver
        .findElement(By.id("match-add-team1"))
        .selectByVisibleText("Fenerbahçe");
    await driver
        .findElement(By.id("match-add-team2"))
        .selectByVisibleText("Galatasaray");
    await driver
        .findElement(By.id("match-add-referee"))
        .sendKeys("Mete Kalkavan");

    await driver.findElement(By.id("match-add-date")).sendKeys("01/11/2023");
    await driver.findElement(By.id("match-add-time")).sendKeys("05:25 PM");
    await driver.findElement(By.id("match-add-week")).sendKeys("1");
    await driver.findElement(By.id("match-add-submit")).sendKeys("Ülker Stadı");

    setInterval(() => driver.quit(), 8000);
}

matchAddSuccess();
