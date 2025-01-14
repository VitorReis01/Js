const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const dolarToday = 5.2;
    const EuroToday = 6.2;

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency" , 
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency" ,
            currency: "EUR"
        }).format(inputCurrencyValue / EuroToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
}

function changeCurrency()  {
    const currencyName = document.getElementById ("currency-name")
    const currencyImg = document.querySelector("currency-img")

  if  (currencySelect.value == "dolar"){
    currencyName.innerHTML = "dólar americano"
    currencyImg.src = "./assets/dolar.png "

  }

  if  (currencySelect.value == "Euro"){
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./assets/euro.png"

  }
   
}

currencySelect.addEventListener("chenge", changeCurrency)
convertButton.addEventListener("click", convertValues)