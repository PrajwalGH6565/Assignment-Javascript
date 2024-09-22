function calculateInvestmentReturn(principal, rate, years) {
    let riskType = "High risk";
    if (rate <= 5) {
        riskType = "Low risk";
    } else if (rate <= 10) {
        riskType = "Medium risk";
    }
    let totalAmount = principal + (principal * rate * years / 100);
    return { totalAmount, riskType };
}
