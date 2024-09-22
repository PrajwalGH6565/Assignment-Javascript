function suggestClothing(temperature) {
    if (temperature < 0) {
        return "Wear a heavy coat and thermal wear.";
    } else if (temperature <= 15) {
        return "Wear a jacket.";
    } else if (temperature <= 25) {
        return "Wear a light sweater.";
    } else {
        return "Wear shorts and a t-shirt.";
    }
}
