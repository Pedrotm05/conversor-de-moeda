const convertButton = document.querySelector(".convert-button");
const currencySelectConvert = document.querySelector(".currency-select-convert");
const currencySelectConverted = document.querySelector(".currency-select-converted");




function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueConvert = document.querySelector(".currency-value-convert"); /* Valor em Real */
    const currencyValueConverted = document.querySelector(".currency-value-converted"); /* Outras moedas */

    const dolarToday = 5.47;
    const euroToday = 6.04;
    const libraToday = 7.30;
    const bitcoinToday = 369846.93;
    const reaisToday = 0.1746;

    /*Convert*/

    if (currencySelectConvert.value == "dolar-select") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * dolarToday
    }

    if (currencySelectConvert.value == "euro-select") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * euroToday
    }

    if (currencySelectConvert.value == "libra-select") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * libraToday
    }

    if (currencySelectConvert.value == "bitcoin-select") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8,
            maximumFractionDigits: 8,
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * bitcoinToday
    }

    if (currencySelectConvert.value == "reais-select") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * reaisToday
    }

    /*Converted*/

    if (currencySelectConverted.value == "dolar-converted") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelectConverted.value == "euro-converted") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday);
    }

    if (currencySelectConverted.value == "libra-converted") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday);
    }

    if (currencySelectConverted.value == "bitcoin-converted") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8,
            maximumFractionDigits: 8,
        }).format(inputCurrencyValue / bitcoinToday);
    }

    if (currencySelectConverted.value == "reais-converted") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue / reaisToday);
    }
    
        if (currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
        }).format(number));
    
    
        if (currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(number));
    
        if (currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(number));
    
        if (currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(number));
    
        if (currencyValueToConvert.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC",
        }).format(number));
    

}

function changeCurrencyConvert() {
    const currencyConvert = document.querySelector(".currency-convert");
    const CurrencyImageConvert = document.querySelector(".currency-img-convert");

    if (currencySelectConvert.value == "dolar-select") {
        currencyConvert.innerHTML = "Dólar",
            CurrencyImageConvert.src = "./assets/us.png";
    }

    if (currencySelectConvert.value == "euro-select") {
        currencyConvert.innerHTML = "Euro",
            CurrencyImageConvert.src = "./assets/euro.png";
    }

    if (currencySelectConvert.value == "libra-select") {
        currencyConvert.innerHTML = "Libra",
            CurrencyImageConvert.src = "./assets/libra 1.png";
    }

    if (currencySelectConvert.value == "bitcoin-select") {
        currencyConvert.innerHTML = "Ƀ",
            CurrencyImageConvert.src = "./assets/bitcoin 1.png";
    }

    if (currencySelectConvert.value == "reais-select") {
        currencyConvert.innerHTML = "Real",
            CurrencyImageConvert.src = "./assets/real.png";
    }


}

function changeCurrencyConverted() {
    const currencyConverted = document.querySelector(".currency-converted")
    const CurrencyImageConverted = document.querySelector(".currency-img-converted")

    if (currencySelectConverted.value == "dolar-converted") {
        currencyConverted.innerHTML = "Dólar",
            CurrencyImageConverted.src = "./assets/us.png";
    }

    if (currencySelectConverted.value == "euro-converted") {
        currencyConverted.innerHTML = "Euro",
            CurrencyImageConverted.src = "./assets/euro.png";
    }

    if (currencySelectConverted.value == "libra-converted") {
        currencyConverted.innerHTML = "Libra",
            CurrencyImageConverted.src = "./assets/libra 1.png";
    }

    if (currencySelectConverted.value == "bitcoin-converted") {
        currencyConverted.innerHTML = "Ƀ",
            CurrencyImageConverted.src = "./assets/bitcoin 1.png";
    }

    if (currencySelectConverted.value == "reais-converted") {
        currencyConverted.innerHTML = "Real",
            CurrencyImageConverted.src = "./assets/real.png";
    }


}



currencySelectConvert.addEventListener("change", changeCurrencyConvert);
currencySelectConverted.addEventListener("change", changeCurrencyConverted);
convertButton.addEventListener("click", convertValues);