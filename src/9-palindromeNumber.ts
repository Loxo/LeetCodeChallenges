function isPalindrome(x: number): boolean {
    // TODO bitwise operations for comparisons?
    let xStr: string = x.toString();

    for (let i = 0; i < xStr.length; i++) {
        if (xStr[i] !== xStr[xStr.length - (i + 1)]) {
            return false;
        }
    }
    return true;
};