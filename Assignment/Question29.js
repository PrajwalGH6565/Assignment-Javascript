function calculateDiscount(total) {
    let discount = 0;
    if (total < 50) {
        discount = 0;
    } else if (total < 100) {
        discount = 10;
    } else if (total < 200) {
        discount = 20;
    } else {
        discount = 30;
    }
    return total - (total * discount / 100);
}
