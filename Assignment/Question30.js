function weatherAdvice(condition) {
    switch (condition) {
        case 'sunny':
            return "Wear sunglasses.";
        case 'rainy':
            return "Take an umbrella.";
        case 'snowy':
            return "Wear a heavy coat.";
        case 'cloudy':
            return "Might rain; carry an umbrella.";
        default:
            return "Weather condition not recognized.";
    }
}
