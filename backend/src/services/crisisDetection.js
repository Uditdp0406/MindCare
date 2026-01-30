"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectCrisis = detectCrisis;
function detectCrisis(text) {
    const lower = text.toLowerCase();
    // Highly sensitive crisis keywords
    const highRisk = [
        "suicide",
        "kill myself",
        "end my life",
        "die",
        "i want to die",
        "i want to hurt myself",
        "self harm"
    ];
    // Medium risk emotional cues
    const mediumRisk = [
        "i feel empty",
        "i feel hopeless",
        "no point living",
        "i can't take this"
    ];
    if (highRisk.some((k) => lower.includes(k))) {
        return {
            isCrisis: true,
            level: "high",
            message: "It sounds like you're going through something incredibly heavy. You're not alone. " +
                "Please reach out to someone who can help immediately.\n\n" +
                "**India Suicide Helpline: 9152987821 (AASRA, available 24x7)**\n" +
                "If you can, please talk to a trusted person near you right now."
        };
    }
    if (mediumRisk.some((k) => lower.includes(k))) {
        return {
            isCrisis: true,
            level: "medium",
            message: "I'm really sorry you're feeling this way. You deserve support.\n" +
                "Talking to someone can help — a friend, family member, or professional."
        };
    }
    return { isCrisis: false, level: null };
}
//# sourceMappingURL=crisisDetection.js.map