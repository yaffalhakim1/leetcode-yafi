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

//Ide utama dari solusi ini adalah untuk menggeser elemen-elemen yang bukan val ke posisi awal array dan menghitung panjang array baru setelah elemen tersebut dihapus.

//LANGKAH
// Inisialisasi sebuah variabel i dengan nilai 0. Variabel ini akan digunakan sebagai penunjuk untuk menentukan posisi di mana elemen yang tidak sama dengan val akan disalin ke dalam array.
// Loop melalui array nums dengan menggunakan variabel j sebagai penunjuk.
// Dalam setiap iterasi, periksa apakah elemen saat ini (nums[j]) tidak sama dengan val.
// Jika elemen saat ini tidak sama dengan val, maka kita akan menyalin elemen tersebut ke dalam array pada posisi i (posisi baru).
// Tingkatkan nilai i dengan 1 setelah menyalin elemen.
// Lanjutkan proses ini hingga selesai melalui seluruh array nums.
// Setelah loop selesai, nilai i akan mewakili panjang array baru yang telah dihasilkan setelah menghapus semua kemunculan elemen dengan nilai val.
// Kembalikan nilai i sebagai hasil, yang juga merupakan panjang array baru.

//ILUSTRASI
// nums = [3, 2, 2, 3, 4, 5]

// Pada awalnya, i diatur ke 0.
// Ketika loop dimulai, elemen pertama adalah 3, yang sama dengan val. Oleh karena itu, tidak ada yang perlu dilakukan dalam langkah ini.
// Kemudian, elemen kedua adalah 2, yang tidak sama dengan val. Kita akan menyalin elemen ini ke dalam array pada posisi i, yaitu posisi 0, dan kemudian kita tingkatkan nilai i menjadi 1.
// Proses ini berlanjut untuk elemen-elemen selanjutnya, dan kita akan menyalin elemen-elemen yang tidak sama dengan val ke dalam posisi yang sesuai.
// Setelah selesai melalui seluruh array, nilai i adalah 3, yang berarti ada 3 elemen yang tidak sama dengan val.
// Hasilnya adalah array nums yang telah dimodifikasi menjadi [2, 2, 4, 5], dan panjang array baru adalah 3.

