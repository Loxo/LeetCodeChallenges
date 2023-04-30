function maximumWealth(accounts: number[][]): number {
    let total: number = 0;

    for (let i = 0; i < accounts.length; i++) {
        let subtotal: number = 0;

        for (let j = 0; j < accounts[i].length; j++) {
            subtotal += accounts[i][j];
        }
        if (subtotal > total) {
            total = subtotal;
        }
    }
    return total;
};