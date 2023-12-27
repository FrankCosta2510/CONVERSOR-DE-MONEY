const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//Valor em real
    const currencyValueToConverted = document.querySelector(".currency-value") //outras moedas

    console.log(currencySelect.value)
    const dolarToday = 4.82
    const euroToday = 5.37

    const convertedValue = inputCurrencyValue / dolarToday

    if (currencySelect.value == "Dólar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue)

    }
    if (currencySelect.value == "Euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)


    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency", currency: "BRL"
    }).format(inputCurrencyValue)
}


    function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage =document.querySelector(".currency-img")




    if(currencySelect.value == "Dólar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src="./assets/dolar.png"
    }

    if(currencySelect.value == "Euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src="./assets/euro.png"
    }
convertValues( )

 }
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)