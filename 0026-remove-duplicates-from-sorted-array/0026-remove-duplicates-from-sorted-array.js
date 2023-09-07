/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    
    // Periksa apakah array kosong atau hanya memiliki satu elemen
    if (nums.length <= 1) {
        return nums.length;
    }

    // Inisialisasi variabel untuk melacak elemen unik saat ini
    var uniqueElement = nums[0];

    // Inisialisasi sebuah penunjuk untuk melacak di mana menempatkan elemen unik berikutnya
    var uniquePointer = 1;

    // Loop melalui array dimulai dari elemen kedua
    for (var i = 1; i < nums.length; i++) {
        // Jika elemen saat ini tidak sama dengan elemen unik
        if (nums[i] !== uniqueElement) {
            // Perbarui elemen unik
            uniqueElement = nums[i];
            // Letakkan elemen unik di posisi uniquePointer
            nums[uniquePointer] = uniqueElement;
            // Pindahkan uniquePointer ke posisi berikutnya
            uniquePointer++;
        }
    }

    // uniquePointer sekarang mewakili panjang array baru tanpa duplikat
    return uniquePointer;

};

// fungsi removeDuplicates yang digunakan untuk menghapus 
// elemen duplikat dari array nums. 

// Ide dasar dari solusi ini adalah untuk menggeser elemen-elemen unik ke awal array dan mengembalikan panjang array baru tanpa elemen duplikat.

//LANGKAH
// Periksa apakah array nums kosong atau hanya memiliki satu elemen. Jika ya, maka tidak ada duplikat yang perlu dihapus, sehingga kita mengembalikan panjang array saat ini (nums.length) sebagai hasil.
// Inisialisasi variabel uniqueElement dengan elemen pertama dari array nums. Ini adalah elemen yang pertama kali kita anggap sebagai unik.
// Inisialisasi sebuah penunjuk uniquePointer dengan nilai 1. Penunjuk ini akan digunakan untuk melacak di mana kita akan menempatkan elemen unik berikutnya dalam array.
// Loop melalui array nums dimulai dari elemen kedua (indeks 1).
// Dalam setiap iterasi, periksa apakah elemen saat ini (nums[i]) tidak sama dengan uniqueElement. Jika ya, itu berarti kita telah menemukan elemen baru yang unik.
// Perbarui uniqueElement dengan elemen yang baru ditemukan (nums[i]) karena ini adalah elemen unik yang baru.
// Letakkan elemen unik yang baru di posisi yang ditunjukkan oleh uniquePointer dalam array.
// Pindahkan uniquePointer ke posisi berikutnya untuk menandakan bahwa kita telah menemukan elemen unik baru dan siap untuk menempatkan elemen unik berikutnya jika ada.
// Setelah selesai melalui seluruh array, uniquePointer akan mewakili panjang array baru tanpa elemen duplikat.
// Kembalikan nilai uniquePointer sebagai hasil, yang adalah panjang array baru tanpa duplikat.

//ILUSTRASI
//  nums = [1, 1, 2, 2, 2, 3, 4, 4, 5]
// uniqueElement awalnya adalah 1, dan uniquePointer adalah 1.
// Loop dimulai dari elemen kedua (indeks 1).
// Ketika kita mencapai elemen 2, kita memperbarui uniqueElement menjadi 2, meletakkan 2 di posisi yang ditunjukkan oleh uniquePointer (posisi 1), dan meningkatkan uniquePointer menjadi 2.
// Ini berlanjut hingga selesai melalui seluruh array. Hasil akhir adalah uniquePointer adalah 5, yang berarti panjang array baru tanpa elemen duplikat adalah 5. Array yang dihasilkan adalah [1, 2, 3, 4, 5].
// Jadi, hasil dari removeDuplicates(nums) adalah 5, dan array nums sekarang berisi elemen yang unik tanpa duplikat.
