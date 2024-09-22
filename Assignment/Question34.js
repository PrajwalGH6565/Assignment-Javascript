function calculateFinalPrice(price, membership) {
    let discount = 0;
    if (membership === "silver") {
        discount = 10;
    } else if (membership === "gold") {
        discount = 20;
    }
    return price - (price * discount / 100);
}
