function determineGameLevel(score) {
    if (score < 50) {
        return "Beginner - Keep practicing!";
    } else if (score < 80) {
        return "Intermediate - You're improving!";
    } else {
        return "Advanced - Great job!";
    }
}
