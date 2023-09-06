/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    //indeks yang akan digunakan untuk menentukan posisi elemen 
    let i =0;


    for(let j =0; j<nums.length; j++){
        //jika elemen saat ini tidak sama dengan nilai yang ingin di hapus, maka copy element tsb ke posisi baru

        if(nums[j] !== val){
            nums[i] = nums[j];
            i++
        }
    }

    return i;
    
};

//removeElement digunakan untuk menghapus semua kemunculan nilai tertentu `val` dari array `nums` dan mengembalikan panjang dari array baru setelah penghapusan. selain menghapus nilai, urutan dalam array jg harus di perttahankan.


// gunakan 2 variabel i dan j untuk melacak posisi elemen dalam array
// loop sepanjang nums untuk memeriksa setiap elemen dari nums
// jika elemen dari array saat ini `nums[j]` tidak sama dengan `val` (nilai yang ingin dihapus) maka salin elemen `nums[j]` ke posisi valid atau baru `nums[i]` kemudian tingkatkan indeks `i` untuk menunjuk ke posisi berikutnya
// dengan ini, kita pastikan bahwa elemen yang sama dengan val dihapus dari array



