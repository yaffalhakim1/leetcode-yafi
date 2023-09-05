/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    // inisialisasi angka non nol
    let nonZero = 0;


    //loop untuk memindahkan semua angka 0 ke depan array

    for (let i=0; i< nums.length; i++){
        if(nums[i] !==0){
            nums[nonZero] = nums[i];
            nonZero++;
        }
    }

    //isi sisa array dengan angka nol

    for(let i=nonZero; i<nums.length; i++){
        nums[i] =0
    }
    
};

//menggeser semua angka 0 ke akhir array `nums` sambil menjaga urutan angka yang non-nol. semua angka harus beada di posisi terakhir array dan angka bukan nol harus tetap di tempat aslinya.


// inisialisasi angka non nol

// lakukan perulangan sepanjang jumlah nums, didalamnya jika kita menemukan angka bukan 0, kita pindahkan ke tempatnya nonZero yaitu posisi terdepan yang masih tersedia di array dan tambahkan

// jika perulangan 1 sudah selesai, semua angka bukan nol sudah didpindahkan ke depan array, dan posisi terakhir di array adalah seetelah indeks atau posisi dari nonZero

// buat perulangan kedua untuk mengisi sisa array dengan angka nol mulai dari indeks atau posisi nonZero hingga akhir array

// ilustrasi dengan nums = [0, 1, 0, 3, 12]:

// pada iterasi 1, kita menemukan angka non nol (1) dan pindahkan ke indeks 0 (nonZero). array nums menjadi [1, 1, 0, 3, 12] dan nonZero bernilai 1

// iterasi 2 melewati angka 0

// iterasi 3 kita menemukan angka non nol (3) dan pindahkan ke depan, sekarang menjadi [1, 3, 0, 3, 12], dan nonZero bernilai 2.

// Pada iterasi 4, kita menemukan angka non-nol (12), dan kami memindahkannya ke indeks 2. nums sekarang menjadi [1, 3, 12, 3, 12], dan nonZero bernilai 3.

// perulangan 2
// isi sisa array dengan angka 0, sehingga sehingga nums menjadi [1, 3, 12, 0, 0]. 