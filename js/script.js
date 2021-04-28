let currencyPLN = document.querySelector(".js-valuePL");
let currencyUSD = document.querySelector(".js-valueUSD");
let currencyGBP = document.querySelector(".js-valueGBP");
let currencyEUR = document.querySelector(".js-valueEUR");
let currencyOption = document.querySelector(".js-valueOption");
let exchangeButton = document.querySelector(".js-form");
let resultValue = document.querySelector(".js-result");


exchangeButton.addEventListener("submit", (event) => {
    event.preventDefault();

    let valuePLN = currencyPLN.value;
    let valueUSD = currencyUSD.value;
    let valueGBP = currencyGBP.value;
    let valueEUR = currencyEUR.value;
    let valueOption = currencyOption.value;
    let result;

    switch (valueOption) {
        case "usd":
            result = valuePLN / valueUSD;
            resultValue.innerText = result.toFixed(2) + " $";
            break;
        case "gbp":
            result = valuePLN / valueGBP;
            resultValue.innerText = result.toFixed(2) + " £";
            break;
        case "eur":
            result = valuePLN / valueEUR;
            resultValue.innerText = result.toFixed(2) + " €";
    }
    exchangeButton.addEventListener("reset", () => {
        resultValue.innerText = 0;
    });
});