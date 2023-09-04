/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0; // Inisialisasi jumlah bunga yang dapat ditanam

    for (let i = 0; i < flowerbed.length; i++) {
        // Jika potongan tanah saat ini kosong (0)
        if (flowerbed[i] === 0) {
            // Periksa apakah potongan tanah sebelumnya dan sesudahnya juga kosong
            // atau berada di tepi lahan bunga (indeks 0 atau panjang-1)
            if ((i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
                flowerbed[i] = 1; // Tanam bunga di potongan tanah saat ini
                count++; // Tambahkan jumlah bunga yang telah ditanam
            }
        }
    }

    return count >= n; // Kembalikan true jika jumlah bunga yang ditanam lebih dari atau sama dengan n
};