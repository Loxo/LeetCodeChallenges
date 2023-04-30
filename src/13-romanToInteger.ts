function romanToInt(s: string): number {
    const romans: Map<string, number> = new Map<string, number>([["I", 1],["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]);
    const romansAssociations: Map<string, number> = new Map<string, number>([["IV", 4], ["IX", 9], ["XL", 40], ["XC", 90], ["CD", 400], ["CM", 900]]);
    let result: number = 0;

    for (let i = 0; i < s.length; i++) {
        if (i + 1 < s.length) {
            const subset: string = s[i] + s[i + 1];

            if (romansAssociations.has(subset)) {
                result += romansAssociations.get(subset);

                i++;
            } else {
                result += romans.get(s[i]);
            }
        } else if (romans.has(s[i])) {
            result += romans.get(s[i]);
        }
    }
    return result;
};