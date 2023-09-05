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

// Kami menghitung panjang string haystack dan panjang string needle.

// Dalam kasus khusus, jika panjang needle adalah 0, maka kita tahu bahwa needle ditemukan di posisi 0 dalam haystack, dan kita mengembalikan 0.

// Kami melakukan loop melalui string haystack dengan menggunakan variabel i. Kami hanya perlu melanjutkan hingga hLen - nLen karena jika panjang needle lebih besar dari sisa panjang haystack, maka tidak mungkin ada hasil.

// Dalam loop, kami menggunakan variabel j untuk mencocokkan karakter needle dengan karakter haystack. Kami terus menambahkan j selama karakter cocok.

// Jika semua karakter cocok (yaitu, j mencapai panjang needle), kami mengembalikan indeks i sebagai hasil, yang menunjukkan di mana needle ditemukan dalam haystack.

// Jika loop selesai dan tidak ditemukan, kami mengembalikan -1.