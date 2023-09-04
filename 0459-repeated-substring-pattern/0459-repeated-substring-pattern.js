/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const len = s.length;

    // Loop untuk mencari panjang potensial dari substring yang akan diulang
    for (let i = 1; i <= len / 2; i++) {
        // Jika panjang sisa string dibagi panjang potensial substring adalah 0
        if (len % i === 0) {
            // Potong string menjadi substring potensial
            const substring = s.slice(0, i);
            
            // Inisialisasi flag untuk menandakan apakah substring ini dapat diulang
            let isRepeated = true;

            // Loop untuk memeriksa apakah substring ini benar-benar dapat diulang
            for (let j = i; j < len; j += i) {
                if (s.slice(j, j + i) !== substring) {
                    isRepeated = false;
                    break;
                }
            }

            if (isRepeated) {
                return true; // Jika substring dapat diulang, kembalikan true
            }
        }
    }

    return false; // Jika tidak ada substring yang dapat diulang, kembalikan false
};
