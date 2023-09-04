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