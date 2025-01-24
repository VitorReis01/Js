const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySection = document.querySelector(".currency-section")
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const dolarToday = 5.2;
    const EuroToday = 6.2;
    const libraToday = 7.3;
    const BitcoinToday =  608.468; 
    const RealToday = 0.16829;



    if (currencySection.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySection.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / EuroToday);
    }

    if (currencySection.value == "Libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
    }

    if (currencySection.value == "Bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / BitcoinToday);
    }

    if (currencySection.value == "Real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / RealToday);
    }

}

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / EuroToday);
    }

    if (currencySelect.value == "Libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
    }

    if (currencySelect.value == "Bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / BitcoinToday);
    }

    if (currencySelect.value == "Real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / RealToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);


function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".currency-img");

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "dólar americano";
        currencyImg.src = "./assets/dolar.png";
    }

    if (currencySelect.value == "Euro") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./assets/euro.png";
    }

    if (currencySelect.value == "Libra") {
        currencyName.innerHTML = "libra britanica";
        currencyImg.src = "./assets/libra 1.png";
    }

    if (currencySelect.value == "Bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImg.src = "./assets/bitcoin 1.png";
    }

    if (currencySelect.value == "Real") {
        currencyName.innerHTML = "Real";
        currencyImg.src = "./assets/real.png";
    }


    convertValues( )
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);