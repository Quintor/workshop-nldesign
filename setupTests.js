const originalWarn = console.warn;
const originalError = console.error;

console.warn = (message) => {
    if (!message.includes("Style property ")) {
        originalWarn(message);
    }
};

console.error = (message) => {
    if (!message.includes("Style property ")) {
        originalError(message);
    }
};
