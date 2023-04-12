var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    nama_produk: {
        type: String,
        required: true
    },
    keterangan: {
        type: String,
        required: true
    },
    harga: {
        type: String,
        required: true
    },
    jumlah: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('produk', userSchema);