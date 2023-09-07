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

// fungsi climbStairs yang digunakan untuk menghitung jumlah cara yang dapat digunakan untuk mencapai puncak tangga jika Anda dapat naik 1 atau 2 langkah setiap kali. Ini adalah masalah klasik yang dapat dipecahkan menggunakan pendekatan dinamis.

//Ide utama dari solusi ini adalah untuk menggunakan pendekatan dinamis (dynamic programming) untuk menghitung jumlah cara untuk mencapai langkah ke-n dengan aturan naik 1 atau 2 langkah setiap kali.

//LANGKAH
// Periksa jika n sama dengan 1. Jika ya, maka hanya ada satu cara untuk mencapai puncak, yaitu dengan satu langkah. Kembalikan 1 sebagai hasil.
// Inisialisasi sebuah array dp dengan panjang n + 1. Array ini akan digunakan untuk menyimpan jumlah cara untuk setiap langkah.
// Inisialisasi nilai dp[1] dengan 1 karena hanya ada satu cara untuk mencapai langkah pertama, yaitu dengan satu langkah.
// Inisialisasi nilai dp[2] dengan 2 karena ada dua cara untuk mencapai langkah kedua, yaitu dengan dua langkah pertama (1 langkah + 1 langkah) atau satu langkah kedua.
// Gunakan loop for mulai dari langkah ke-3 hingga langkah ke-n:
// Pada setiap langkah i, jumlah cara untuk mencapai langkah i adalah jumlah cara untuk mencapai langkah i-1 dan jumlah cara untuk mencapai langkah i-2. Karena Anda dapat naik 1 atau 2 langkah, maka jumlah cara untuk mencapai langkah i adalah dp[i-1] + dp[i-2].
// Perbarui nilai dp[i] dengan jumlah cara yang dihitung.
// Setelah selesai loop, nilai dp[n] akan mewakili jumlah cara untuk mencapai langkah ke-n.
// Kembalikan nilai dp[n] sebagai hasil.

// //ILUSTRASI
// Misalnya, jika n adalah 4, kita ingin menghitung jumlah cara untuk mencapai langkah ke-4 dengan aturan naik 1 atau 2 langkah.
// Pada langkah pertama (1 langkah), ada 1 cara.
// Pada langkah kedua (2 langkah), ada 2 cara (1 langkah + 1 langkah atau 2 langkah).
// Pada langkah ketiga (3 langkah), jumlah cara adalah 3 (1 langkah + 1 langkah + 1 langkah, 1 langkah + 2 langkah, atau 2 langkah + 1 langkah).
// Pada langkah keempat (4 langkah), jumlah cara adalah 5 (1 langkah + 1 langkah + 1 langkah + 1 langkah, 1 langkah + 1 langkah + 2 langkah, 1 langkah + 2 langkah + 1 langkah, 2 langkah + 1 langkah + 1 langkah, atau 2 langkah + 2 langkah).
// Jadi, hasil dari climbStairs(4) adalah 5, yang merupakan jumlah cara untuk mencapai langkah ke-4 dengan aturan naik 1 atau 2 langkah setiap kali.

