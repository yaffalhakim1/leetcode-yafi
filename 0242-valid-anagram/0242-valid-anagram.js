/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
return  s.split('').sort().join('') === t.split('').sort().join('') ? true : false

};

// Fungsi isAnagram yang Anda berikan adalah sebuah fungsi JavaScript yang memeriksa apakah dua string s dan t merupakan anagram atau tidak. Anagram adalah kata atau frasa yang memiliki huruf yang sama, tetapi urutan hurufnya berbeda. Dalam hal ini, fungsi memeriksa apakah s dan t merupakan anagram satu sama lain.

// Berikut adalah cara membaca fungsi ini baris per baris:

// var isAnagram = function(s, t) {: Ini adalah deklarasi sebuah fungsi bernama isAnagram yang menerima dua parameter, yaitu s dan t. Fungsi ini digunakan untuk membandingkan apakah kedua string ini adalah anagram.

// s.split('').sort().join(''): Ini adalah langkah pertama untuk memeriksa apakah s adalah anagram dari t. Langkah ini memecah string s menjadi sebuah array karakter dengan .split(''), mengurutkan karakter-karakter tersebut dengan .sort(), dan kemudian menggabungkannya kembali menjadi sebuah string dengan .join(''). Hasil dari langkah ini adalah string s yang urutannya telah diubah sesuai abjad.

// ===: Ini adalah operator perbandingan yang digunakan untuk memeriksa apakah kedua string yang telah diubah urutannya sama persis.

// t.split('').sort().join(''): Ini adalah langkah yang sama seperti langkah pertama, tetapi dilakukan pada string t.

// ? true : false: Ini adalah ekspresi ternary yang digunakan untuk mengembalikan true jika hasil perbandingan sebelumnya adalah true, dan false jika hasil perbandingannya adalah false.

// Jadi, fungsi ini bekerja dengan cara mengubah kedua string s dan t menjadi urutan yang sama sesuai abjad, dan kemudian membandingkan urutan tersebut. Jika urutan tersebut sama, maka fungsi ini mengembalikan true, yang menunjukkan bahwa s dan t adalah anagram satu sama lain. Jika tidak, maka fungsi ini mengembalikan false.