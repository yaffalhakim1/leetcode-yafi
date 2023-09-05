/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {

    const result = [];

    for(let i = 0; i<=n; i++){
        let count =0;
        let num =i;

        while (num>0){
            if (num%2==1){
                count++
            }
            num = Math.floor(num/2);
        }
        result.push(count);
    }

    return result;
    
};

//Fungsi countBits biasanya digunakan untuk menghasilkan sebuah array yang berisi jumlah bit setiap angka dari 0 hingga n. Dalam kata lain, ini adalah masalah menghitung jumlah bit 1 dalam representasi biner dari setiap angka dalam rentang 0 hingga n.


// Kami membuat sebuah array result untuk menyimpan hasil akhir.

// Kami melakukan loop dari 0 hingga n.

// Di dalam loop, kami menggunakan variabel count untuk menghitung jumlah bit 1 dalam representasi biner dari angka i. Kami juga menggunakan variabel num untuk menghitung sisa angka yang harus dihitung.

// Kami menggunakan loop while untuk menghitung bit 1. Dalam setiap iterasi, jika sisa angka (num % 2) adalah 1, kami menambahkan count karena ini adalah bit 1 dalam representasi biner.

// Setelah kami menghitung jumlah bit 1 untuk angka i, kami menambahkan hasilnya ke dalam array result.

// Setelah loop selesai, array result akan berisi jumlah bit 1 untuk setiap angka dari 0 hingga n.

// Mari kita ilustrasikan contoh ini dengan n = 5:

// Untuk n = 0, representasi binernya adalah 0, dan jumlah bit 1 adalah 0.

// Untuk n = 1, representasi binernya adalah 1, dan jumlah bit 1 adalah 1.

// Untuk n = 2, representasi binernya adalah 10, dan jumlah bit 1 adalah 1.

// Untuk n = 3, representasi binernya adalah 11, dan jumlah bit 1 adalah 2.

// Untuk n = 4, representasi binernya adalah 100, dan jumlah bit 1 adalah 1.

// Untuk n = 5, representasi binernya adalah 101, dan jumlah bit 1 adalah 2.

// Sehingga, hasilnya adalah [0, 1, 1, 2, 1, 2] yang adalah array yang berisi jumlah bit 1 untuk setiap angka dari 0 hingga 5.





