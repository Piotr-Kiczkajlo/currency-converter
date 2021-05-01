{
    const calculate = (amoutPLN, valueOption) => {
        const usdElement = document.querySelector(".js-valueUSD");
        const gbpElement = document.querySelector(".js-valueGBP");
        const eurElement = document.querySelector(".js-valueEUR");
        const rateUSD = usdElement.value;
        const rateGBP = gbpElement.value;
        const rateEUR = eurElement.value;

        switch (valueOption) {
            case "$":
                return amoutPLN / rateUSD;
            case "£":
                return amoutPLN / rateGBP;
            case "€":
                return amoutPLN / rateEUR;
        }
    }
    const formSubmit = (event) => {
        event.preventDefault();

        const amoutElement = document.querySelector(".js-valuePL");
        const amoutPLN = +amoutElement.value;
        const currencyOption = document.querySelector(".js-valueOption");
        const valueOption = currencyOption.value;
        const result = calculate(amoutPLN, valueOption);

        changeTextResult(result, valueOption);
    }
    const formReset = () => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = 0;
    }
    const changeTextResult = (result, valueOption) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${valueOption}`;
    }
    const init = () => {
        const formAction = document.querySelector(".js-form");
        formAction.addEventListener("submit", formSubmit);
        formAction.addEventListener("reset", formReset);
    }
    init();
}