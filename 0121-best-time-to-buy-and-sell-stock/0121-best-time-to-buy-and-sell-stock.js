/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let maxProfit = 0; // Inisialisasi keuntungan maksimum
    let minPrice = prices[0]; // Inisialisasi harga saham terendah

    //lakukan perulangan sepanjang prices

    for(let i =0; i<prices.length; i++){
    //jika harga saham saat ini lebih rendah dari harga terendah yang ada, maka perbarui harga terendah
    if(prices[i] < minPrice){
        minPrice = prices[i]
    } else {
        //hitung keuntungan yang dapat diperoleh dengan menjual saham saat ini
        const currentProfit = prices[i] - minPrice;
        //perbarui keuntungan maks jika keuntungan saat ini lebih besar

        if(currentProfit > maxProfit){
            maxProfit = currentProfit;
        }
    }
    }
return maxProfit

    
};

// // Ide utama adalah untuk menemukan harga saham terendah (minPrice) dan menghitung keuntungan maksimum yang dapat diperoleh jika saham dibeli pada harga terendah tersebut dan dijual pada harga tertinggi berikutnya.

// fungsi maxProfit umumnya digunakan untuk mencari keuntungan maksimum yang dapat diperoleh dari membeli dan menjual saham dengan harga tertentu. dalam konteks ini, elemen2 array prices mewakili harga saham pada hari tertentu, dan dapat dibeli maupun dijual dalam urutan apapun

// inisialisasi maxProfit untuk melacak keuntungan maks yang dapat diperoleh

// inisialisasi minPrice untuk melacak harga saham terendah

// lakukan perulangan sepanjang prices, periksa jika harga saham saat ini lebih kecil dari harga saham terendah. jika iya, maka perbarui harga terendah

// jika tidak, maka hitung keuntungan yang dapat diperoleh dengan menjual saham saat ini dengan cara inisialisasikan currentProfit =  harga saham saat ini dikurangi harga saham terendah. jika saham saat ini lebih besar dari maxProfit, maka perbarui nilai dari maxProfit agar sama dengan nilai currentProfit

// ilustrasi dengan prices = [7, 1, 5, 3, 6, 4]

// keuntungan maks yang dapat diperoleh memberi pada hari ke-2 (1) dan menjual pada hari ke-5 (harga 6), yang menghasilkan keutnungan sebesar 6-1 =5 (prices[i] - minPrice), dengan 5 adalah nilai terbesar atau keuntungan maksimal


