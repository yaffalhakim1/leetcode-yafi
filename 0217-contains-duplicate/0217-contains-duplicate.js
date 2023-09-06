/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
      // Konversi array nums ke dalam Set
    const numSet = new Set(nums);

    // Jika ukuran Set berbeda dengan ukuran array nums, ada elemen yang duplikat
    return numSet.size !== nums.length;
};

//Dalam konteks kode di atas, Set adalah sebuah struktur data dalam JavaScript yang digunakan untuk menyimpan kumpulan nilai unik dari tipe data apa pun, termasuk bilangan bulat (integer) atau string. Set digunakan untuk mengidentifikasi dan mengelola elemen-elemen unik dari array atau kumpulan data lainnya tanpa adanya duplikat.

// Misalnya, ketika kita menggunakan new Set(nums), kita mengonversi array nums ke dalam Set. Hasilnya adalah Set yang hanya berisi nilai unik dari array nums. Dengan menggunakan Set, kita secara otomatis menghapus duplikat dari array.

// Dalam kode tersebut, kita memanfaatkan fitur Set untuk melakukan pemeriksaan apakah terdapat elemen yang duplikat dalam array nums. Jika ukuran Set setelah konversi berbeda dengan ukuran array nums, itu berarti ada elemen yang duplikat dalam array tersebut.