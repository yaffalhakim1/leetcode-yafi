/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    const hLen =  haystack.length;
    const nLen = needle.length;


//panjang needle 0, maka kembalikan 0
    if (nLen == 0){
        return 0;
    }



//cari needle dengan me-loop haystack
    for (let i =0; i<= hLen- nLen; i++){
        let j =0;

//cocokkan karakter needle dengan karakter haystack
        while (j<nLen && haystack[i+j] ===  needle[j]){
            j++;
        }

//jika karakter cocok kembalikan indeks i
        if(j==nLen){
            return i;
        }
    }

    return -1;
    
};

//fungsi strStr yang digunakan untuk mencari indeks pertama di mana substring needle ditemukan dalam string haystack

//Ide utama dari solusi ini adalah dengan menggunakan dua loop bersarang untuk mencari substring needle dalam string haystack. Loop pertama me-loop melalui string haystack, dan loop kedua me-loop melalui karakter-karakter needle untuk mencocokkannya dengan karakter-karakter dalam haystack.

// //LANGKAH
// Dapatkan panjang string haystack (hLen) dan panjang string needle (nLen).
// Jika panjang needle (nLen) adalah 0, maka kembalikan 0, karena needle kosong dan ditemukan di indeks 0.
// Lakukan loop melalui string haystack hingga (hLen - nLen) untuk menghindari pencarian yang tidak perlu karena panjang needle. Variabel i akan digunakan sebagai indeks awal pencarian.
// Di dalam loop utama, inisialisasi variabel j dengan 0. Variabel ini akan digunakan untuk membandingkan karakter needle dengan karakter haystack.
// Dalam loop kedua (while), cocokkan karakter needle[j] dengan karakter haystack[i + j]. Selama karakter cocok dan j kurang dari panjang needle (nLen), tingkatkan nilai j.
// Jika loop kedua keluar karena semua karakter cocok, yaitu j sama dengan panjang needle (nLen), maka kita telah menemukan needle dalam haystack. Kembalikan indeks i.
// Jika loop utama selesai dan tidak ada pencocokan yang ditemukan, kembalikan -1 untuk menunjukkan bahwa needle tidak ditemukan dalam haystack.

// ILUSTRASI
//  haystack adalah "hello world" dan needle adalah "world"

// Panjang haystack (hLen) adalah 11 dan panjang needle (nLen) adalah 5.
// Loop pertama dimulai dari i = 0 hingga i = 6 (11 - 5).
// Pada setiap iterasi loop pertama, kita memulai loop kedua (while) untuk membandingkan karakter:
// Ketika i = 0, kita membandingkan "world" dengan "hello", tidak cocok.
// Ketika i = 1, kita membandingkan "world" dengan "ello ", tidak cocok.
// Ini berlanjut hingga i = 6, di mana kita membandingkan "world" dengan "world", semua karakter cocok.
// Oleh karena itu, kita menemukan needle pada haystack di indeks 6.
// Fungsi mengembalikan nilai 6 sebagai hasil.
