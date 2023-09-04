/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    var candidate = null; // Inisialisasi calon elemen mayoritas
    var count = 0; // Inisialisasi hitungan kemunculan calon elemen mayoritas

    // Iterasi melalui array
    for (var num of nums) {
        if (count === 0) {
            // Jika hitungan adalah 0, atur calon elemen mayoritas baru
            candidate = num;
        }

        // Jika elemen saat ini sama dengan calon elemen mayoritas, tambahkan ke hitungan
        if (num === candidate) {
            count++;
        } else {
            // Jika tidak, kurangi hitungan
            count--;
        }
    }

    // Setelah iterasi, calon elemen mayoritas adalah elemen yang tersisa
    // karena elemen mayoritas pasti akan ada dan kemunculannya lebih dari setengah
    return candidate;
    
};