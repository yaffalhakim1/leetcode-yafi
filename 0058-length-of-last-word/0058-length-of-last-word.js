/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    s =s.trim();

    // Membagi string menjadi array kata-kata dengan spasi sebagai pemisah
    var words = s.split(' ');

    // Menemukan kata terakhir dalam array kata-kata
    var lastWord = words[words.length - 1];

    // Mengembalikan panjang kata terakhir
    return lastWord.length;
    
};