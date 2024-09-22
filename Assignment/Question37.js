function convertCurrency(amount, currencyType) {
    let conversionRate = 0;
    if (currencyType === "USD") {
        conversionRate = 75;
    } else if (currencyType === "EUR") {
        conversionRate = 90;
    } else if (currencyType === "GBP") {
        conversionRate = 100;
    } else {
        return "Invalid currency type";
    }
    return amount * conversionRate;
}
