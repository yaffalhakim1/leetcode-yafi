var splitListToParts = function(head, k) {
    // Hitung panjang linked list
    let length = 0;
    let current = head;
    while (current !== null) {
        length++;
        current = current.next;
    }

    // Bagikan elemen-elemen ke dalam k bagian
    const partSize = Math.floor(length / k); // Ukuran bagian yang merata
    const extra = length % k; // Sisa elemen yang harus didistribusikan

    const result = new Array(k); // Membuat array untuk menyimpan bagian-bagian hasil

    current = head; // Kursor saat ini diatur ulang ke awal linked list

    for (let i = 0; i < k; i++) {
        let partHead = current; // Kepala bagian saat ini adalah posisi kursor saat ini
        let partLength = partSize + (i < extra ? 1 : 0); // Ukuran bagian ini

        // Menggerakkan kursor ke akhir bagian
        for (let j = 1; j < partLength; j++) {
            current = current.next;
        }

        // Mengakhiri bagian saat ini dengan mengatur .next menjadi null
        if (current !== null) {
            let temp = current.next;
            current.next = null;
            current = temp;
        }

        // Menyimpan bagian saat ini dalam hasil
        result[i] = partHead;
    }

    return result;
};

// Pertama, kita menghitung panjang linked list dengan melakukan iterasi melalui linked list dengan menggunakan variabel current. Ini akan memberi kita panjang total linked list.

// Selanjutnya, kita menghitung partSize (ukuran bagian yang merata) dengan membagi panjang linked list dengan k. Kami juga menghitung extra (sisa elemen yang harus didistribusikan) dengan menghitung modulo dari panjang linked list dengan k.

// Kami membuat sebuah array result yang akan digunakan untuk menyimpan bagian-bagian hasil.

// Kami mengatur kursor current kembali ke awal linked list.

// Selanjutnya, dalam loop for, kami mengambil bagian dari linked list saat ini dengan menggerakkan kursor dari kepala bagian hingga ke akhir bagian. Ukuran bagian ini adalah partSize jika i kurang dari extra, jika tidak, maka ukurannya adalah partSize - 1.

// Setelah selesai dengan bagian saat ini, kami memutuskan sambungan dengan mengatur .next menjadi null.

// Akhirnya, kami menyimpan bagian saat ini dalam array result.

// Hasil akhirnya adalah array dari bagian-bagian hasil linked list yang sudah dibagi sesuai dengan aturan yang telah dijelaskan. Setiap elemen dalam array adalah kepala (head) dari bagian terkait.