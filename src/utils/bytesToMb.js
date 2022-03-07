export const converBytes = (amount) => {
    if (amount <= 1023) {
        return {
            amount: amount,
            unit: "B"
        };
    } else if (amount >= 1024 && amount <= 734003) {
        return {
            amount: Math.round((amount / 1024) * 100) / 100,
            unit: "KB"
        };
    }
    else {
        return {
            amount: Math.round((amount / 1048576) * 100) / 100,
            unit: "MB"
        }
    }
}