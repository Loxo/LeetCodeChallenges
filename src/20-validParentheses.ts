function isValid(s: string): boolean {
    if (s != null && s !== "" && s.length > 1) {
        let openStack: string[] = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
                openStack.push(s[i]);
            } else if ((s[i] === "}" && openStack[openStack.length - 1] === "{") || (s[i] === ")" && openStack[openStack.length - 1] === "(") || (s[i] === "]" && openStack[openStack.length - 1] === "[")) {
                openStack.pop();
            } else {
                return false;
            }
        }
        return openStack.length === 0;
    }
    return false;
};