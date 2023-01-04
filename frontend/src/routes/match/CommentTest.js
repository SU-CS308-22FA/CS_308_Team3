// Import the necessary libraries
const { Builder, By, Key } = require("selenium-webdriver");
require("chromedriver");

async function commentSuccess() {
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
    await driver.get(
        "http://localhost:3000/match-details/63b1f04a35d6399ff68f0238"
    );

    await driver
        .findElement(By.id("match-details-comment"))
        .sendKeys("Ne maç olacak var ya");

    await driver.findElement(By.id("match-details-commentbtn")).click();
}

commentSuccess();
