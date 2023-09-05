/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    if (n === 1) {
        return 1; // Jika hanya ada satu langkah, ada satu cara untuk mencapai puncak.
    }

    let dp = new Array(n + 1); // Membuat array untuk menyimpan hasil sementara
    dp[1] = 1; // Untuk satu langkah, hanya ada satu cara
    dp[2] = 2; // Untuk dua langkah, ada dua cara (1 langkah + 1 langkah atau 2 langkah)

    for (let i = 3; i <= n; i++) {
        // Setiap langkah selanjutnya adalah jumlah langkah sebelumnya
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n]; // Hasil akhir adalah cara untuk mencapai langkah ke-n
};