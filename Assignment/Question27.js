function temperatureStatus(temperature) {
    if (temperature < 15) {
        return "Cold";
    } else if (temperature <= 30) {
        return "Warm";
    } else {
        return "Hot";
    }
}
