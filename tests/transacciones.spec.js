const { Builder, By } = require("selenium-webdriver")

describe('transacciones', () => {
    it('debitando dinero de la cuenta de caja de ahorro', async () =>{
        let driver = new Builder().forBrowser('chrome').build();
        await driver.get('https://finovate-bank.onrender.com/index.html')
        //Loguearse en la página web.
        await driver.findElement(By.className('d-flex flex-column align-items-center pt-2 flex-md-row gap-md-3 justify-content-center')).click()
        await driver.findElement(By.id('emailLogin')).sendKeys('agustinsabando18@gmail.com')
        await driver.sleep(3000)
        await driver.findElement(By.id('passwordLogin')).sendKeys('Aguspro345')
        await driver.sleep(3000)
        //Verificar las transacciones que se realizaron.
        await driver.findElement(By.className('btn--login mt-4')).click()
        await driver.sleep(5000)
        await driver.get('https://finovate-bank.onrender.com/web/pages/account.html?id=271')
    })
})