const { Builder, By } = require("selenium-webdriver")

describe('debito', () => {
    it('debitando dinero de la cuenta de caja de ahorro', async () =>{
        let driver = new Builder().forBrowser('chrome').build();
        await driver.get('https://finovate-bank.onrender.com/index.html')
        //Loguearse en la página web.
        await driver.findElement(By.className('d-flex flex-column align-items-center pt-2 flex-md-row gap-md-3 justify-content-center')).click()
        await driver.findElement(By.id('emailLogin')).sendKeys('agustinsabando18@gmail.com')
        await driver.sleep(3000)
        await driver.findElement(By.id('passwordLogin')).sendKeys('Aguspro345')
        await driver.sleep(3000)
        await driver.findElement(By.className('btn--login mt-4')).click()
        await driver.sleep(3000)
        //realizando una transferencia de dinero de una cuenta a otra.
        await driver.get('https://finovate-bank.onrender.com/web/pages/transfers.html')
        await driver.sleep(3000)
        await driver.findElement(By.className('radio-button__label')).click()
        await driver.sleep(3000)
        await driver.findElement(By.id('amount')).sendKeys('1000')
        await driver.sleep(3000)
        await driver.findElement(By.id('description')).sendKeys('Esto es una prueba de débito de dinero.')
        await driver.sleep(3000)
        await driver.findElement(By.className('btn btn-primary mt-4')).click()
        await driver.sleep(5000)
        await driver.findElement(By.className('swal2-confirm swal2-styled swal2-default-outline')).click()
        await driver.sleep(5000)
        await driver.findElement(By.className('swal2-confirm swal2-styled')).click()
        await driver.sleep(5000)
        //Comprobar que la debitación de dinero esté correcta.
        await driver.get('https://finovate-bank.onrender.com/web/pages/accounts.html')
        await driver.sleep(3000)
        await driver.findElement(By.className('bi bi-box-arrow-in-up-right btn-details')).click()
    })
})