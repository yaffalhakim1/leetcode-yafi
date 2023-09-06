/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();


    return s === s.split("").reverse().join("");
    
};

//Fungsi isPalindrome umumnya digunakan untuk memeriksa apakah sebuah string merupakan palindrome atau tidak. Palindrome adalah sebuah kata atau frasa yang sama jika dibaca dari kiri ke kanan maupun dari kanan ke kiri, tanpa memperhatikan karakter non-alfanumerik atau spasi. Sebagai contoh, "level," "deified," dan "A man, a plan, a canal, Panama!" adalah palindrome.


// hapus karakter yang bukan string menggunakan replace, lalu konversi ke huruf kecil menggunakan .toLowerCase

// lalu periksa apakah karakter pertama sama dengan karakter yang sudah di reverse, jika keduanya sama maka kalimat tsb merupakan palindrom

//s.split("") digunakan untuk memisahkan setiap karakter string `s` menjadi elemen2 array. lalu "" digunakan sebagai argumen sehingga terdapat `spasi` antar elemen2. misal s = "hello", s.split("") menghasilkan  ["h", "e", "l", "l", "o"].

//.reverse() digunakan untuk membalikkan urutan dari array. dari ["h", "e", "l", "l", "o"] menjadi ["o", "l", "l", "e", "h"]

//.join(""), digunakan untuk menggabungkan elemen2 yang sudah di reverse sebelumnya menjadi string biasa. hasilnya adalah olleh
